<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search Test</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>
    <div class="search-group">
        <i class="fas fa-search"></i>
        <input type="text" id="appointmentSearch" placeholder="Search by customer name..." autocomplete="off">
        <div class="search-dropdown" id="searchDropdown"></div>
    </div>

    <div id="appointmentsTableBody">
        <table class="appointments-table">
            <tbody id="appointmentsTableBody">
                <!-- Test data will be inserted here -->
            </tbody>
        </table>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
    <script>
        // Simple test to check if search functionality works
        console.log('Test page loaded');
        
        const searchInput = document.getElementById('appointmentSearch');
        const dropdown = document.getElementById('searchDropdown');
        
        if (searchInput) {
            console.log('Search input found');
            searchInput.addEventListener('input', (e) => {
                console.log('Search input event triggered:', e.target.value);
                
                if (e.target.value.length >= 2) {
                    dropdown.innerHTML = `
                        <div class="search-dropdown-item" onclick="console.log('Test item clicked')">
                            <div class="customer-name">Test Customer</div>
                            <div class="customer-details">123-456-7890 • Test Location</div>
                        </div>
                    `;
                    dropdown.classList.add('show');
                } else {
                    dropdown.classList.remove('show');
                }
            });
        } else {
            console.log('Search input NOT found');
        }
    </script>
</body>
</html>