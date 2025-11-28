// Standalone Staff Registration and Login System
const staffLoginSystem = {
    init() {
        this.bindEvents();
        this.loadStoredStaff();
    },

    bindEvents() {
        // Login form
        const loginForm = document.getElementById('staffLoginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Registration form
        const registerForm = document.getElementById('staffRegisterForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistration();
            });
        }

        // Form toggle links
        const showRegisterLink = document.getElementById('showRegister');
        const showLoginLink = document.getElementById('showLogin');
        
        if (showRegisterLink) {
            showRegisterLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showRegistrationForm();
            });
        }

        if (showLoginLink) {
            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showLoginForm();
            });
        }

        // Forgot password
        const forgotPasswordLink = document.getElementById('forgotPassword');
        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showForgotPasswordModal();
            });
        }

        // Close modal
        const closeModal = document.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                this.closeForgotPasswordModal();
            });
        }

        // Password confirmation validation
        const confirmPasswordInput = document.getElementById('confirmPassword');
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                this.validatePasswordMatch();
            });
        }
    },

    handleLogin() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;

        // Clear previous errors
        this.clearErrors();

        // Validate inputs
        if (!this.validateLoginInputs(username, password)) {
            return;
        }

        // Get stored staff data
        const storedStaff = JSON.parse(localStorage.getItem('staffMembers') || '[]');
        
        // Find matching staff member
        const staff = storedStaff.find(s => 
            (s.username === username || s.email === username) && s.password === password
        );

        if (staff) {
            this.showSuccessMessage(staff.fullName);
        } else {
            this.showError('loginUsernameError', 'Invalid username/email or password');
        }
    },

    handleRegistration() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Clear previous errors
        this.clearErrors();

        // Validate inputs
        if (!this.validateRegistrationInputs(fullName, email, password, confirmPassword)) {
            return;
        }

        // Generate username from full name
        const username = this.generateUsername(fullName);

        // Check if email already exists
        const storedStaff = JSON.parse(localStorage.getItem('staffMembers') || '[]');
        if (storedStaff.some(s => s.email === email)) {
            this.showError('emailError', 'Email already registered');
            return;
        }

        // Create new staff member
        const newStaff = {
            id: Date.now(),
            fullName,
            username,
            email,
            password,
            registrationDate: new Date().toISOString()
        };

        // Save to localStorage
        storedStaff.push(newStaff);
        localStorage.setItem('staffMembers', JSON.stringify(storedStaff));

        // Show success and redirect
        this.showSuccessMessage(fullName);
    },

    validateLoginInputs(username, password) {
        let isValid = true;

        if (!username) {
            this.showError('loginUsernameError', 'Username or email is required');
            isValid = false;
        }

        if (!password) {
            this.showError('loginPasswordError', 'Password is required');
            isValid = false;
        }

        return isValid;
    },

    validateRegistrationInputs(fullName, email, password, confirmPassword) {
        let isValid = true;

        // Full name validation
        if (!fullName) {
            this.showError('fullNameError', 'Full name is required');
            isValid = false;
        } else if (fullName.length < 2) {
            this.showError('fullNameError', 'Full name must be at least 2 characters');
            isValid = false;
        }

        // Email validation
        if (!email) {
            this.showError('emailError', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Password validation
        if (!password) {
            this.showError('passwordError', 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            this.showError('passwordError', 'Password must be at least 6 characters');
            isValid = false;
        }

        // Confirm password validation
        if (!confirmPassword) {
            this.showError('confirmPasswordError', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            this.showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        return isValid;
    },

    validatePasswordMatch() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (confirmPassword && password !== confirmPassword) {
            this.showError('confirmPasswordError', 'Passwords do not match');
        } else {
            this.clearError('confirmPasswordError');
        }
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    generateUsername(fullName) {
        return fullName.toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
    },

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    },

    clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    },

    clearErrors() {
        const errorIds = [
            'loginUsernameError', 'loginPasswordError', 'fullNameError', 
            'emailError', 'passwordError', 'confirmPasswordError'
        ];
        
        errorIds.forEach(id => this.clearError(id));
    },

    showSuccessMessage(fullName) {
        const loginCard = document.querySelector('.staff-login-card');
        if (loginCard) {
            loginCard.innerHTML = `
                <div class="success-message">
                    <div class="success-icon">✓</div>
                    <h3>Welcome, ${fullName}!</h3>
                    <p>Login successful. Redirecting to dashboard...</p>
                    <div class="loading-spinner"></div>
                </div>
            `;

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = `dashboard.php?staff=${encodeURIComponent(fullName)}`;
            }, 2000);
        }
    },

    showRegistrationForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.querySelector('.staff-login-card h2').textContent = 'Sign Up';
    },

    showLoginForm() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.querySelector('.staff-login-card h2').textContent = 'Staff Login';
    },

    showForgotPasswordModal() {
        const modal = document.getElementById('forgotPasswordModal');
        if (modal) {
            modal.style.display = 'block';
        }
    },

    closeForgotPasswordModal() {
        const modal = document.getElementById('forgotPasswordModal');
        if (modal) {
            modal.style.display = 'none';
        }
    },

    loadStoredStaff() {
        // Create default admin account if no staff exists
        const storedStaff = JSON.parse(localStorage.getItem('staffMembers') || '[]');
        
        if (storedStaff.length === 0) {
            const defaultAdmin = {
                id: 1,
                fullName: 'Admin User',
                username: 'admin',
                email: 'admin@chinglaundry.com',
                password: 'admin123',
                registrationDate: new Date().toISOString()
            };
            
            localStorage.setItem('staffMembers', JSON.stringify([defaultAdmin]));
            console.log('Default admin account created: admin@chinglaundry.com / admin123');
        }
    }
};

// Password toggle functionality
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(inputId + 'ToggleIcon');
    const toggleButton = passwordInput ? passwordInput.nextElementSibling : null;

    if (!passwordInput || !toggleIcon) {
        return;
    }

    // Toggle visibility without moving the icon
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
        if (toggleButton) toggleButton.title = 'Hide password';
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
        if (toggleButton) toggleButton.title = 'Show password';
    }

    // Keep focus on the password input
    passwordInput.focus();
}

// Staff logout functionality
function staffLogout() {
    localStorage.removeItem('currentStaff');
    window.location.href = 'home.php';
}

// Make functions globally accessible
window.staffLoginSystem = staffLoginSystem;
window.togglePasswordVisibility = togglePasswordVisibility;
window.staffLogout = staffLogout;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    staffLoginSystem.init();
});