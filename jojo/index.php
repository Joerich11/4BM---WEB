<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4BM SmartLaundry - Admin/Staff Login</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="main-container">
        <!-- Left Column - Welcome Section -->
        <div class="welcome-section">
            <div class="welcome-content">
                <img src="Logo (2).png" alt="4BM SmartLaundry logo" class="welcome-logo">
            </div>
        </div>
        
        <!-- Right Column - Login Form -->
        <div class="login-section">
            <div class="login-box">
                <h2>Admin/Staff Login</h2>
                <form id="loginForm">
                    <div class="input-group">
                        <input type="text" id="username" required>
                        <label for="username">Username</label>
                        <i class="fas fa-user input-icon"></i>
                    </div>
                    <div class="input-group password-group">
                        <input type="password" id="password" required>
                        <label for="password">Password</label>
                        <i class="fas fa-lock input-icon"></i>
                        <i class="fas fa-eye-slash toggle-password" id="togglePassword"></i>
                    </div>
                    <button type="submit" class="login-btn">Login</button>
                </form>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
