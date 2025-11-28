<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Staff System Test - Ching Laundry</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="home.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .test-container {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            max-width: 500px;
            width: 100%;
        }
        .test-header {
            text-align: center;
            margin-bottom: 30px;
        }
        .test-header h1 {
            color: #333;
            margin-bottom: 10px;
        }
        .test-header p {
            color: #666;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="test-container">
        <div class="test-header">
            <h1><i class="fas fa-user-shield"></i> Staff System Test</h1>
            <p>Testing staff registration and login functionality</p>
        </div>

        <!-- Staff Login Form -->
        <div id="staffLoginContainer" class="staff-login-container">
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
                            <a href="#" id="forgotPasswordLink">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" class="form-btn">Login</button>
                    <div class="signup-link">
                        <p>Don't have an account? <a href="#" id="showSignupForm">Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>

        <!-- Staff Registration Form -->
        <div id="staffSignupContainer" class="staff-login-container hidden">
            <div class="staff-login-card">
                <h2><i class="fas fa-user-plus"></i> Staff Registration</h2>
                <form id="staffSignupForm">
                    <div class="form-group">
                        <label for="signupFullName">Full Name</label>
                        <input type="text" id="signupFullName" name="signupFullName" required>
                        <div class="error-message" id="signupFullNameError"></div>
                    </div>
                    <div class="form-group">
                        <label for="signupUsername">Username</label>
                        <input type="text" id="signupUsername" name="signupUsername" required>
                        <div class="error-message" id="signupUsernameError"></div>
                    </div>
                    <div class="form-group">
                        <label for="signupEmail">Email</label>
                        <input type="email" id="signupEmail" name="signupEmail" required>
                        <div class="error-message" id="signupEmailError"></div>
                    </div>
                    <div class="form-group">
                        <label for="signupPassword">Password</label>
                        <div class="password-input-wrapper">
                            <input type="password" id="signupPassword" name="signupPassword" required>
                            <button type="button" class="password-toggle" onclick="togglePasswordVisibility('signupPassword')">
                                <i class="fas fa-eye" id="signupPasswordToggleIcon"></i>
                            </button>
                        </div>
                        <div class="error-message" id="signupPasswordError"></div>
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
                    <div class="signup-link">
                        <p>Already have an account? <a href="#" id="showLoginForm">Login</a></p>
                    </div>
                </form>
            </div>
        </div>

        <!-- Forgot Password Modal -->
        <div id="forgotPasswordModal" class="modal hidden">
            <div class="modal-content">
                <div class="modal-header">
                    <h2><i class="fas fa-key"></i> Reset Password</h2>
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

    <script src="staff-system.js"></script>
</body>
</html>