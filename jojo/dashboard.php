<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff Dashboard - Ching Laundry</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .dashboard-container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            text-align: center;
            max-width: 600px;
            width: 100%;
        }

        .dashboard-header {
            margin-bottom: 30px;
        }

        .dashboard-icon {
            font-size: 4rem;
            color: #667eea;
            margin-bottom: 20px;
        }

        .dashboard-title {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .dashboard-subtitle {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 30px;
        }

        .welcome-message {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 30px;
            font-size: 1.1rem;
        }

        .dashboard-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .action-card {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 15px;
            padding: 20px;
            text-decoration: none;
            color: #333;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .action-card:hover {
            background: #667eea;
            color: white;
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .action-card i {
            font-size: 2rem;
            margin-bottom: 10px;
            display: block;
        }

        .action-card h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        .action-card p {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .logout-btn {
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .logout-btn:hover {
            background: linear-gradient(135deg, #ee5a52, #ff6b6b);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
        }

        .staff-info {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
            font-size: 0.9rem;
            color: #666;
        }

        @media (max-width: 768px) {
            .dashboard-container {
                padding: 30px 20px;
            }

            .dashboard-title {
                font-size: 2rem;
            }

            .dashboard-actions {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <div class="dashboard-icon">
                <i class="fas fa-tachometer-alt"></i>
            </div>
            <h1 class="dashboard-title">Staff Dashboard</h1>
            <p class="dashboard-subtitle">Ching Laundry Management System</p>
        </div>

        <div class="welcome-message" id="welcomeMessage">
            <i class="fas fa-user-circle"></i>
            Welcome to the Staff Dashboard!
        </div>

        <div class="staff-info" id="staffInfo">
            <i class="fas fa-info-circle"></i>
            Staff information will be displayed here
        </div>

        <div class="dashboard-actions">
            <div class="action-card" onclick="alert('Orders management coming soon!')">
                <i class="fas fa-shopping-cart"></i>
                <h3>Manage Orders</h3>
                <p>View and process customer orders</p>
            </div>

            <div class="action-card" onclick="alert('Customer management coming soon!')">
                <i class="fas fa-users"></i>
                <h3>Customers</h3>
                <p>Manage customer accounts</p>
            </div>

            <div class="action-card" onclick="alert('Inventory management coming soon!')">
                <i class="fas fa-boxes"></i>
                <h3>Inventory</h3>
                <p>Track supplies and equipment</p>
            </div>

            <div class="action-card" onclick="alert('Reports coming soon!')">
                <i class="fas fa-chart-bar"></i>
                <h3>Reports</h3>
                <p>View business analytics</p>
            </div>
        </div>

        <button class="logout-btn" onclick="logout()">
            <i class="fas fa-sign-out-alt"></i>
            Logout
        </button>
    </div>

    <script>
        // Get staff information from URL parameters or localStorage
        function loadStaffInfo() {
            const urlParams = new URLSearchParams(window.location.search);
            const staffName = urlParams.get('name');
            
            if (staffName) {
                document.getElementById('welcomeMessage').innerHTML = `
                    <i class="fas fa-user-circle"></i>
                    Welcome, ${decodeURIComponent(staffName)}!
                `;
                
                document.getElementById('staffInfo').innerHTML = `
                    <i class="fas fa-info-circle"></i>
                    Logged in as: <strong>${decodeURIComponent(staffName)}</strong> | 
                    Login time: ${new Date().toLocaleString()}
                `;
            } else {
                // Try to get from localStorage
                const savedSession = localStorage.getItem('staffSession');
                if (savedSession) {
                    const session = JSON.parse(savedSession);
                    const staffName = session.staff.fullName;
                    
                    document.getElementById('welcomeMessage').innerHTML = `
                        <i class="fas fa-user-circle"></i>
                        Welcome, ${staffName}!
                    `;
                    
                    document.getElementById('staffInfo').innerHTML = `
                        <i class="fas fa-info-circle"></i>
                        Logged in as: <strong>${staffName}</strong> | 
                        Role: ${session.staff.role} | 
                        Login time: ${new Date(session.timestamp).toLocaleString()}
                    `;
                }
            }
        }

        function logout() {
            // Clear session
            localStorage.removeItem('staffSession');
            
            // Redirect back to main page
            window.location.href = 'home.php';
        }

        // Load staff info when page loads
        document.addEventListener('DOMContentLoaded', loadStaffInfo);
    </script>
</body>
</html>