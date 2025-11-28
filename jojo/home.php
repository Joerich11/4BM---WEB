<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4BM SmartLaundry - Admin Dashboard</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* Analytics Minimal Styles */
        .total-customers-display {
            display: flex;
            align-items: center;
            background-color: #f0f8ff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.9em;
        }
        .total-customers-label {
            margin-right: 5px;
            font-weight: 500;
        }
        .total-customers-count {
            font-weight: bold;
            color: #4682B4;
        }
        /* Make analytics controls more minimal */
        .analytics-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 10px;
        }
        .chart-container {
            height: 250px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo">
                <h1>4BM SmartLaundry</h1>
            </div>
            <nav class="nav-menu">
                <a href="#" class="nav-item active" data-section="dashboard">
                    <i class="fas fa-chart-line"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#" class="nav-item" data-section="appointments">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Appointments</span>
                </a>
                <a href="#" class="nav-item" data-section="services">
                    <i class="fas fa-tshirt"></i>
                    <span>Services</span>
                </a>
                <a href="#" class="nav-item" data-section="customers">
                    <i class="fas fa-users"></i>
                    <span>Customers</span>
                </a>
                <a href="#" class="nav-item" data-section="inventory">
                    <i class="fas fa-box"></i>
                    <span>Inventory</span>
                </a>
                <a href="#" class="nav-item" data-section="staff">
                    <i class="fas fa-user-tie"></i>
                    <span>Staff</span>
                </a>

            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="top-bar">
                <div class="admin-profile">
                    <div class="notification-icon" aria-label="Notifications" title="Notifications">
                        <i class="fas fa-bell"></i>
                        <span class="notification-badge" style="display:none"></span>
                    </div>
                    <div id="notificationDropdown" class="notification-dropdown hidden">
                        <div class="notification-header">
                            <span>Notifications</span>
                            <button id="markAllReadBtn" class="mark-all-read">Mark all as read</button>
                            <button id="triggerDemoBtn" class="mark-all-read demo-btn hidden" title="Add a demo customer and highlight">Add Demo User</button>
                            <button id="triggerXavierBtn" class="mark-all-read demo-btn hidden" title="Add Xavier Young and highlight">Add Xavier Young</button>
                        </div>
                        <ul id="notificationsList" class="notifications-list"></ul>
                        <div id="notificationsEmpty" class="notifications-empty">No notifications</div>
                    </div>
                    
                    <div class="profile-dropdown">
                        <button class="dropdown-toggle">
                            <i class="fas fa-user-circle"></i>
                            <span>Admin</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-user-edit"></i>
                                Edit Profile
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-key"></i>
                                Reset Password
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-sign-out-alt"></i>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div class="content-area">
                <!-- Dashboard Section -->
                <div id="dashboard" class="section-content">


                    <!-- KPI Section with Gauge -->
                    <div class="kpi-section">
                        <div class="gauge-grid">
                            <!-- Customer Growth Rate Gauge -->
                            <div class="gauge-card">
                                <h4>User</h4>
                                <div class="gauge-container">
                                    <canvas id="customerGrowthGauge" width="80" height="80"></canvas>
                                </div>
                            </div>
                            
                            <!-- Pending Laundry KPI Card -->
                            <div class="kpi-card status-card">
                                <div class="kpi-header">
                                    <h4 class="kpi-title">Pending</h4>
                                </div>
                                <div class="kpi-value" id="kpi-pending">0</div>
                            </div>
                            
                            <!-- Processing KPI Card -->
                            <div class="kpi-card status-card">
                                <div class="kpi-header">
                                    <h4 class="kpi-title">Processing</h4>
                                </div>
                                <div class="kpi-value" id="kpi-processing">0</div>
                            </div>
                            
                            <!-- Completed KPI Card -->
                            <div class="kpi-card status-card">
                                <div class="kpi-header">
                                    <h4 class="kpi-title">Completed</h4>
                                </div>
                                <div class="kpi-value" id="kpi-completed">0</div>
                            </div>
                        </div>
                    </div>

                    <!-- Trend Charts Section -->
                    <div class="charts-section">
                        <div class="charts-grid">
                            <div class="chart-card">
                                <div class="chart-header">
                                    <h4>Revenue Trend</h4>
                                    <div class="chart-controls">
                                        <select id="revenueTimeframe" class="timeframe-select" data-chart="revenue">
                                            <option value="daily">Daily</option>
                                            <option value="weekly" selected>Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="chart-container">
                                    <canvas id="revenueTrendChart"></canvas>
                                </div>
                            </div>

                            <div class="chart-card">
                                <div class="chart-header">
                                    <h4>Customer Trend</h4>
                                    <div class="chart-controls">
                                        <select id="customerTimeframe" class="timeframe-select" data-chart="customer">
                                            <option value="daily">Daily</option>
                                            <option value="weekly" selected>Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="chart-container">
                                    <canvas id="customerTrendChart"></canvas>
                                </div>
                            </div>






                        </div>
                    </div>


                </div>
                

                <!-- Customers Section -->
                <div id="customers" class="section-content hidden">
                    <div class="customers-header">
                        <div class="customers-search-container">
                            <div class="search-input-wrapper">
                                <i class="fas fa-search search-icon"></i>
                                <input type="text" id="customers-search" placeholder="Search by name, email, or phone..." class="customers-search-input">
                                <button type="button" id="clear-search" class="clear-search-btn" title="Clear search">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="customers-table-container">
                        <table class="customers-table">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>USER NAME</th>
                                    <th>DATE JOINED</th>
                                    <th>APPOINTMENT</th>
                                    <th>STATUS</th>
                                    <th>EMAIL/PHONE NUMBER</th>
                                </tr>
                            </thead>
                            <tbody id="customers-table-body">
                                <!-- Customer rows will be populated here -->
                            </tbody>
                            </table>
                        </div>
                </div>

                <!-- Services Section -->
                <div id="services" class="section-content hidden">
                    <div class="services-container">
                        <!-- Main Services Table -->
                        <div class="services-card">
                            <div class="services-table-container">
                                <table class="services-table" id="main-services-table">
                                    <thead>
                                        <tr>
                                            <th>Service Name</th>
                                            <th>Price</th>
                                            <th>Unit</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr data-service="hand-wash">
                                            <td class="service-dropdown">
                                                <div class="service-header" onclick="toggleServiceDropdown('hand-wash')">
                                                    <span>Hand Wash</span>
                                                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                                                </div>
                                                <div class="service-items hidden" id="hand-wash-items">
                                                    <div class="service-item" onclick="selectServiceItem('hand-wash', 'T-shirts, Blouse, Shorts', 25, '/kg')">T-shirts, Blouse, Shorts</div>
                                                    <div class="service-item" onclick="selectServiceItem('hand-wash', 'Bed Sheets, Pants, Jeans, Towels, Jackets', 40, '/kg')">Bed Sheets, Pants, Jeans, Towels, Jackets</div>
                                                    <div class="service-item" onclick="selectServiceItem('hand-wash', 'Uniforms Wash w/ Dry Press', 60, '/kg')">Uniforms Hand Wash w/ Dry Press</div>
                                                    <div class="service-item" onclick="selectServiceItem('hand-wash', 'Comforter', 60, '/kg')">Comforter</div>
                                                    <div class="service-item" onclick="selectServiceItem('hand-wash', 'Backpacks', 200, '/pc')">Backpacks</div>
                                                    <div class="service-item" onclick="selectServiceItem('hand-wash', 'Shoes', 200, '/pair')">Shoes</div>
                                                </div>
                                            </td>
                                            <td class="price-cell"></td>
                                            <td></td>
                                            <td><button class="edit-btn" onclick="editPrice('hand-wash', 'Hand Wash', 0, '')">Edit</button></td>
                                        </tr>
                                        <tr data-service="wash-dry-fold">
                                            <td class="service-dropdown">
                                                <div class="service-header" onclick="toggleServiceDropdown('wash-dry-fold')">
                                                    <span>Wash, Dry & Fold</span>
                                                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                                                </div>
                                                <div class="service-items hidden" id="wash-dry-fold-items">
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-fold', 'T-shirts, Blouse, Shorts', 25, '/kg')">T-shirts, Blouse, Shorts</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-fold', 'Bed Sheets, Pants, Jeans, Towels, Jackets', 40, '/kg')">Bed Sheets, Pants, Jeans, Towels, Jackets</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-fold', 'Uniforms Wash w/ Dry Press', 60, '/kg')">Uniforms Wash w/ Dry Press</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-fold', 'Comforter', 60, '/kg')">Comforter</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-fold', 'Backpacks', 200, '/pc')">Backpacks</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-fold', 'Shoes', 200, '/pair')">Shoes</div>
                                                </div>
                                            </td>
                                            <td class="price-cell"></td>
                                            <td></td>
                                            <td><button class="edit-btn" onclick="editPrice('wash-dry-fold', 'Wash, Dry & Fold', 0, '')">Edit</button></td>
                                        </tr>
                                        <tr data-service="wash-dry-iron">
                                            <td class="service-dropdown">
                                                <div class="service-header" onclick="toggleServiceDropdown('wash-dry-iron')">
                                                    <span>Wash and Dry & Iron</span>
                                                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                                                </div>
                                                <div class="service-items hidden" id="wash-dry-iron-items">
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-iron', 'T-shirts, Blouse, Shorts', 25, '/kg')">T-shirts, Blouse, Shorts</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-iron', 'Bed Sheets, Pants, Jeans, Towels, Jackets', 40, '/kg')">Bed Sheets, Pants, Jeans, Towels, Jackets</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-iron', 'Uniforms Wash w/ Dry Press', 60, '/kg')">Uniforms Wash w/ Dry Press</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-iron', 'Comforter', 60, '/kg')">Comforter</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-iron', 'Backpacks', 200, '/pc')">Backpacks</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash-dry-iron', 'Shoes', 200, '/pair')">Shoes</div>
                                                </div>
                                            </td>
                                            <td class="price-cell"></td>
                                            <td></td>
                                            <td><button class="edit-btn" onclick="editPrice('wash-dry-iron', 'Wash and Dry & Iron', 0, '')">Edit</button></td>
                                        </tr>
                                        <tr data-service="dry-clean">
                                            <td class="service-dropdown">
                                                <div class="service-header" onclick="toggleServiceDropdown('dry-clean')">
                                                    <span>Dry Clean</span>
                                                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                                                </div>
                                                <div class="service-items hidden" id="dry-clean-items">
                                                    <div class="service-item" onclick="selectServiceItem('dry-clean', 'T-shirts, Blouse, Shorts', 25, '/kg')">T-shirts, Blouse, Shorts</div>
                                                    <div class="service-item" onclick="selectServiceItem('dry-clean', 'Bed Sheets, Pants, Jeans, Towels, Jackets', 40, '/kg')">Bed Sheets, Pants, Jeans, Towels, Jackets</div>
                                                    <div class="service-item" onclick="selectServiceItem('dry-clean', 'Uniforms', 60, '/kg')">Uniforms</div>
                                                    <div class="service-item" onclick="selectServiceItem('dry-clean', 'Comforter', 60, '/kg')">Comforter</div>
                                                    <div class="service-item" onclick="selectServiceItem('dry-clean', 'Backpacks', 200, '/pc')">Backpacks</div>
                                                    <div class="service-item" onclick="selectServiceItem('dry-clean', 'Shoes', 200, '/pair')">Shoes</div>
                                                </div>
                                            </td>
                                            <td class="price-cell"></td>
                                            <td></td>
                                            <td><button class="edit-btn" onclick="editPrice('dry-clean', 'Dry Clean', 0, '')">Edit</button></td>
                                        </tr>
                                        <tr data-service="wash">
                                            <td class="service-dropdown">
                                                <div class="service-header" onclick="toggleServiceDropdown('wash')">
                                                    <span>Wash</span>
                                                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                                                </div>
                                                <div class="service-items hidden" id="wash-items">
                                                    <div class="service-item" onclick="selectServiceItem('wash', 'T-shirts, Blouse, Shorts', 25, '/kg')">T-shirts, Blouse, Shorts</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash', 'Bed Sheets, Pants, Jeans, Towels, Jackets', 40, '/kg')">Bed Sheets, Pants, Jeans, Towels, Jackets</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash', 'Uniforms Wash w/ Dry Press', 60, '/kg')">Uniforms Wash w/ Dry Press</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash', 'Comforter', 60, '/kg')">Comforter</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash', 'Backpacks', 200, '/pc')">Backpacks</div>
                                                    <div class="service-item" onclick="selectServiceItem('wash', 'Shoes', 200, '/pair')">Shoes</div>
                                                </div>
                                            </td>
                                            <td class="price-cell"></td>
                                            <td></td>
                                            <td><button class="edit-btn" onclick="editPrice('wash', 'Wash', 0, '')">Edit</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>

                <!-- Staff Section -->
                <div id="staff" class="section-content hidden">
                    <!-- Staff Login Form -->
                    <div id="loginForm" class="staff-login-container">
                        <div class="staff-login-card">
                            <h2><i class="fas fa-user-shield"></i> Staff Login</h2>
                            <form id="staffLoginForm">
                                <div class="form-group">
                                    <label for="loginUsername">Username</label>
                                    <input type="text" id="loginUsername" name="loginUsername" required>
                                    <div class="error-message" id="loginUsernameError"></div>
                                </div>
                                <div class="form-group">
                                    <label for="loginPassword">Password</label>
                                    <div class="password-input-wrapper">
                                        <input type="password" id="loginPassword" name="loginPassword" required>
                                        <button type="button" class="password-toggle" onclick="togglePasswordVisibility('loginPassword')">
                                            <i class="fas fa-eye" id="loginPasswordToggleIcon"></i>
                                        </button>
                                    </div>
                                    <div class="error-message" id="loginPasswordError"></div>
                                    <div class="forgot-password-link">
                                        <a href="#" id="forgotPassword">Forgot Password?</a>
                                    </div>
                                </div>
                                <button type="submit" class="form-btn">Login</button>
                                <div class="signup-link">
                                    <p>Don't have an account? <a href="#" id="showRegister">Sign up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Staff Registration Form -->
                    <div id="registerForm" class="staff-login-container hidden">
                        <div class="staff-login-card">
                            <h2>Sign Up</h2>
                            <form id="staffRegisterForm">
                                <div class="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required>
                                    <div class="error-message" id="fullNameError"></div>
                                </div>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" name="username" required>
                                    <div class="error-message" id="usernameError"></div>
                                </div>
                                <div class="form-group">
                                    <label for="emailOrPhone">Email or Phone Number</label>
                                    <input type="text" id="emailOrPhone" name="emailOrPhone" required>
                                    <div class="error-message" id="emailOrPhoneError"></div>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <div class="password-input-wrapper">
                                        <input type="password" id="password" name="password" required>
                                        <button type="button" class="password-toggle" onclick="togglePasswordVisibility('password')">
                                            <i class="fas fa-eye" id="passwordToggleIcon"></i>
                                        </button>
                                    </div>
                                    <div class="error-message" id="passwordError"></div>
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword">Confirm Password</label>
                                    <div class="password-input-wrapper">
                                        <input type="password" id="confirmPassword" name="confirmPassword" required>
                                        <button type="button" class="password-toggle" onclick="togglePasswordVisibility('confirmPassword')">
                                            <i class="fas fa-eye" id="confirmPasswordToggleIcon"></i>
                                        </button>
                                    </div>
                                    <div class="error-message" id="confirmPasswordError"></div>
                                </div>
                                <button type="submit" class="form-btn">Sign Up</button>
                            </form>
                        </div>
                    </div>

                    <!-- Forgot Password Modal -->
                    <div id="forgotPasswordModal" class="modal hidden">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2><i class="fas fa-key"></i> Reset Password</h2>
                                <span class="close-modal">&times;</span>
                            </div>
                            <form id="forgotPasswordForm">
                                <div class="form-group">
                                    <label for="resetEmail">Enter your email address:</label>
                                    <input type="email" id="resetEmail" name="resetEmail" required>
                                </div>
                                <div class="form-buttons">
                                    <button type="button" class="form-btn secondary" onclick="closeForgotPasswordModal()">Cancel</button>
                                    <button type="submit" class="form-btn">Send Reset Link</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Price Edit Modal -->
                <div id="priceEditModal" class="modal hidden">
                    <div class="modal-content">
                        <h2>Edit Service Price</h2>
                        <form id="priceEditForm">
                            <div class="form-group">
                                <label for="serviceItem">Select Item to Edit</label>
                                <select id="serviceItem" name="serviceItem" onchange="loadItemPrice()" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="servicePrice">Price (₱)</label>
                                <input type="number" id="servicePrice" name="servicePrice" min="0" step="0.01" required>
                            </div>
                            <div class="form-group">
                                <label for="serviceUnit">Unit</label>
                                <select id="serviceUnit" name="serviceUnit">
                                    <option value="/kg">/kg</option>
                                    <option value="/pc">/pc</option>
                                    <option value="/pair">/pair</option>
                                    <option value="bulk">Bulk Pricing</option>
                                </select>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="cancel-btn" onclick="closePriceEditModal()">Cancel</button>
                                <button type="submit" class="save-btn">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Edit Profile Modal -->
                <div id="editProfileModal" class="modal hidden">
                    <div class="modal-content">
                        <h2>Edit Profile</h2>
                        <form id="editProfileForm">
                            <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" id="username" name="username" required>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="cancel-btn">Cancel</button>
                                <button type="submit" class="save-btn">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Reset Password Modal -->
                <div id="resetPasswordModal" class="modal hidden">
                    <div class="modal-content">
                        <h2>Reset Password</h2>
                        <form id="resetPasswordForm">
                            <div class="form-group">
                                <label for="currentPassword">Current Password</label>
                                <input type="password" id="currentPassword" name="currentPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="newPassword">New Password</label>
                                <input type="password" id="newPassword" name="newPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirm New Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" required>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="cancel-btn">Cancel</button>
                                <button type="submit" class="update-btn">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Inventory Section -->
                <div id="inventory" class="section-content hidden">

                    <!-- Stock Overview Cards -->
                    <div class="stock-overview">
                        <div class="stock-card" data-soap="detergent">
                            <div class="stock-icon">
                                <i class="fas fa-pump-soap"></i>
                            </div>
                            <div class="stock-info">
                                <h3>Detergent</h3>
                                <div class="stock-quantity">
                                    <span class="quantity" id="detergent-quantity">50</span>
                                    <span class="unit">bottles</span>
                                </div>
                                <div class="stock-status" id="detergent-status">
                                    <span class="status-indicator high-stock">High Stock</span>
                                </div>
                            </div>
                        </div>

                        <div class="stock-card powder-sachet" data-soap="powder">
                            <div class="stock-icon sachet-icon">
                                <i class="fas fa-square"></i>
                                <div class="sachet-design"></div>
                            </div>
                            <div class="stock-info">
                                <h3>Powder</h3>
                                <div class="stock-quantity">
                                    <span class="quantity" id="powder-quantity">25</span>
                                    <span class="unit">sachets</span>
                                </div>
                                <div class="stock-status" id="powder-status">
                                    <span class="status-indicator medium-stock">Medium Stock</span>
                                </div>
                            </div>
                        </div>

                        <div class="stock-card" data-soap="fabric-softener">
                            <div class="stock-icon">
                                <i class="fas fa-spray-can"></i>
                            </div>
                            <div class="stock-info">
                                <h3>Fabric Softener</h3>
                                <div class="stock-quantity">
                                    <span class="quantity" id="fabric-softener-quantity">8</span>
                                    <span class="unit">bottles</span>
                                </div>
                                <div class="stock-status" id="fabric-softener-status">
                                    <span class="status-indicator low-stock">Low Stock</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stock Management and History -->
                    <div class="inventory-content">
                        <!-- History Log -->
                        <div class="history-section">
                            <div class="history-filters">
                                <select id="historyFilter">
                                    <option value="all">All Transactions</option>
                                    <option value="received">Received</option>
                                    <option value="released">Released</option>
                                </select>
                                <select id="soapFilter">
                                    <option value="all">All Soap Types</option>
                                    <option value="detergent">Detergent</option>
                                    <option value="powder">Powder</option>
                                    <option value="fabric-softener">Fabric Softener</option>
                                </select>
                                <button class="add-stock-btn" id="addStockBtn">
                                    <i class="fas fa-plus"></i>
                                    Add Stock
                                </button>
                            </div>
                            <div class="history-table-container">
                                <table class="history-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Type</th>
                                            <th>Soap</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody id="historyTableBody">
                                        <!-- History entries will be populated here -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Add Stock Modal -->
                <div id="addStockModal" class="modal hidden">
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <h2>Add Stock</h2>
                        <form id="addStockForm">
                            <div class="form-group">
                                <label for="soapType">Soap Type</label>
                                <select id="soapType" name="soapType" required>
                                    <option value="">Select Soap Type</option>
                                    <option value="detergent">Detergent</option>
                                    <option value="powder">Powder</option>
                                    <option value="fabric-softener">Fabric Softener</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input type="number" id="quantity" name="quantity" min="1" required>
                            </div>
                            <div class="form-group">
                                <label for="customerName">Recipient Name</label>
                                <input type="text" id="customerName" name="customerName" placeholder="e.g., John Smith (customer), Admin Sarah (staff), Supplier ABC" required>
                            </div>
                            <div class="form-group">
                                <label for="notes">Notes (Optional)</label>
                                <textarea id="notes" name="notes" rows="3" placeholder="Additional notes about this stock addition..."></textarea>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="cancel-btn">Cancel</button>
                                <button type="submit" class="add-btn">Add Stock</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Appointments Section -->
                <div id="appointments" class="section-content hidden">
                    <div class="appointments-filters">
                        <div class="filter-group">
                            <label for="statusFilter">Status:</label>
                            <select id="statusFilter">
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="serviceFilter">Service Type:</label>
                            <select id="serviceFilter">
                                <option value="all">All Services</option>
                                <option value="Wash">Wash</option>
                                <option value="Handwash">Handwash</option>
                                <option value="Wash, Dry & Iron">Wash, Dry & Iron</option>
                                <option value="Wash, Dry & Fold">Wash, Dry & Fold</option>
                                <option value="Dry Clean">Dry Clean</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="paymentMethodFilter">Payment Method:</label>
                            <select id="paymentMethodFilter">
                                <option value="all">All Methods</option>
                                <option value="cash">Cash</option>
                                <option value="gcash">GCash</option>
                            </select>
                        </div>
                        <!-- Appointments Search -->
                        <div class="search-group appointments-search-right">
                            <div class="search-input-wrapper">
                                <i class="fas fa-search" aria-hidden="true"></i>
                                <input
                                    type="text"
                                    id="appointments-search"
                                    class="customers-search-input"
                                    placeholder="Search name"
                                    aria-label="Search appointments by name"
                                >
                                <button type="button" id="appointments-clear-search" class="clear-search-btn" title="Clear search">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="search-dropdown" id="searchDropdown" aria-live="polite"></div>
                        </div>
                    </div>

                    <div class="appointments-container">
                        <div class="appointments-table-container">
                            <table class="appointments-table">
                                <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Date & Time</th>
                                            <th>Service</th>
                                            <th>Location</th>
                                            <th>Total Price</th>
                                            <th>Payment Method</th>
                                            <th>Laundry Status</th>
                                            <th></th>
                                        </tr>
                                </thead>
                                <tbody id="appointmentsTableBody">
                                    <!-- Appointment rows will be populated here -->
                                </tbody>
                            </table>
                            <div id="no-appointments" class="no-data-message hidden">
                                <i class="fas fa-calendar-times"></i>
                                <p>No appointments available</p>
                                <span>Appointments from the mobile app will appear here automatically</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Appointment Details Modal -->
                <div id="appointmentDetailsModal" class="modal hidden">
                    <div class="modal-content appointment-modal">
                        <span class="close-modal">&times;</span>
                        <h2>Appointment Details</h2>
                        <div class="appointment-details">
                            <div class="detail-section">
                                <h3>Customer Information</h3>
                                <div class="detail-grid">
                                    <div class="detail-item">
                                        <label>Name:</label>
                                        <span id="modal-customer-name"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Contact:</label>
                                        <span id="modal-customer-contact"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Email:</label>
                                        <span id="modal-customer-email"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="detail-section">
                                <h3>Service Details</h3>
                                <div class="detail-grid">
                                    <div class="detail-item">
                                        <label>Service Type:</label>
                                        <span id="modal-service-type"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Weight:</label>
                                        <span id="modal-weight"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Estimated Duration:</label>
                                        <span id="modal-duration"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="detail-section">
                                <h3>Appointment Schedule</h3>
                                <div class="detail-grid">
                                    <div class="detail-item">
                                        <label>Date:</label>
                                        <span id="modal-date"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Time:</label>
                                        <span id="modal-time"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Pickup Address:</label>
                                        <span id="modal-address"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="detail-section">
                                <h3>Payment Information</h3>
                                <div class="detail-grid">
                                    <div class="detail-item">
                                        <label>Service Cost:</label>
                                        <span id="modal-service-cost"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Delivery Fee:</label>
                                        <span id="modal-delivery-fee"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Total Amount:</label>
                                        <span id="modal-total-amount" class="total-highlight"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Payment Method:</label>
                                        <span id="modal-payment-method"></span>
                                    </div>
                                    <div class="detail-item" id="modal-payment-ref-item">
                                        <label>GCash Reference:</label>
                                        <span id="modal-payment-ref"></span>
                                    </div>
                                    <div class="detail-item">
                                        <label>Payment Status:</label>
                                        <span id="modal-payment-status" class="status-badge"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="detail-section">
                                <h3>Additional Notes</h3>
                                <div class="notes-container">
                                    <p id="modal-notes"></p>
                                </div>
                            </div>

                            <div class="modal-actions">
                                <button class="action-btn update-status-btn" id="updateStatusBtn">
                                    <i class="fas fa-edit"></i>
                                    Update Status
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Update Status Modal -->
                <div id="updatePaymentModal" class="modal hidden">
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <h2>Update Status</h2>
                        <form id="updatePaymentForm">
                            <div class="form-group">
                                <label for="newPaymentStatus">Order Status</label>
                                <select id="newPaymentStatus" name="orderStatus" required>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="paymentNotes">Notes (Optional)</label>
                                <textarea id="paymentNotes" name="notes" rows="3" placeholder="Add any notes about the payment update..."></textarea>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="cancel-btn">Cancel</button>
                                <button type="submit" class="update-btn">Update Status</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Other sections content will be loaded here -->
            </div>
        </main>
    </div>

    <!-- Map Modal -->
    <div id="mapModal" class="map-modal">
        <div class="map-modal-content">
            <div class="map-modal-header">
                <h3 id="mapModalTitle">Location Map</h3>
                <button class="map-modal-close" onclick="closeMapModal()">&times;</button>
            </div>
            <div class="map-modal-body">
                <iframe id="mapFrame" 
                        width="100%" 
                        height="400" 
                        frameborder="0" 
                        style="border:0" 
                        allowfullscreen="" 
                        aria-hidden="false" 
                        tabindex="0">
                </iframe>
            </div>
        </div>
    </div>

    <script src="home.js"></script>
    <script src="dashboard.js"></script>
</body>
</html>