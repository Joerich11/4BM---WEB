param(
  [int]$Port = 8002,
  [string]$Root = (Get-Location).Path
)

Add-Type -AssemblyName System.Web
$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving $Root at $prefix"

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $rel = [System.Web.HttpUtility]::UrlDecode($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'index.php' }
  $full = Join-Path $Root $rel

  if (-not (Test-Path $full -PathType Leaf)) {
    if ($rel -match '\.html$') {
      $rel = ($rel -replace '\.html$', '.php')
      $full = Join-Path $Root $rel
    }
  }

  if (Test-Path $full -PathType Leaf) {
    $bytes = [System.IO.File]::ReadAllBytes($full)
    switch -Regex ($full) {
      '.*\.php$'  { $ctx.Response.ContentType = 'text/html' }
      '.*\.html$' { $ctx.Response.ContentType = 'text/html' }
      '.*\.css$'  { $ctx.Response.ContentType = 'text/css' }
      '.*\.js$'   { $ctx.Response.ContentType = 'application/javascript' }
      '.*\.png$'  { $ctx.Response.ContentType = 'image/png' }
      '.*\.jpg$'  { $ctx.Response.ContentType = 'image/jpeg' }
      default     { $ctx.Response.ContentType = 'application/octet-stream' }
    }
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
    $msg = [Text.Encoding]::UTF8.GetBytes('Not Found')
    $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
  }

  $ctx.Response.OutputStream.Close()
}