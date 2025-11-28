document.addEventListener('DOMContentLoaded', () => {
    // Add placeholder attributes for floating label functionality
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.setAttribute('placeholder', ' ');
    });

    // Elements
    const loginForm = document.getElementById('loginForm');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Eye icon removed: guard in case element exists elsewhere
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePasswordBtn.classList.toggle('fa-eye');
            togglePasswordBtn.classList.toggle('fa-eye-slash');
        });
    }

    // Login form submission with Admin/Staff authentication
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = passwordInput.value;

        const hashPassword = (plain) => btoa(unescape(encodeURIComponent(`sl:${plain}:pepper`)));

        // Load accounts
        let staffAccounts = [];
        try {
            staffAccounts = JSON.parse(localStorage.getItem('staffAccounts') || '[]');
        } catch (_) {
            staffAccounts = [];
        }

        // Seed default admin if not present
        const hasAdmin = staffAccounts.some(s => String(s.username).toLowerCase() === 'admin');
        if (!hasAdmin) {
            staffAccounts.push({
                id: 'STAFF001',
                fullName: 'Admin User',
                username: 'admin',
                email: 'admin@barbershop.com',
                password: hashPassword('admin123'),
                role: 'Admin',
                createdDate: new Date().toISOString().split('T')[0],
                status: 'active'
            });
            localStorage.setItem('staffAccounts', JSON.stringify(staffAccounts));
        }

        // Try staff/admin auth
        const account = staffAccounts.find(s => String(s.username).toLowerCase() === String(username).toLowerCase());

        if (account && account.password === hashPassword(password)) {
            const session = { staff: account, timestamp: Date.now() };
            localStorage.setItem('staffSession', JSON.stringify(session));
            window.location.href = 'home.php';
            return;
        }

        // Fallback: allow admin default creds even if storage mismatch
        if (username.toLowerCase() === 'admin' && password === 'admin123') {
            const admin = staffAccounts.find(s => String(s.username).toLowerCase() === 'admin') || {
                id: 'STAFF001',
                fullName: 'Admin User',
                username: 'admin',
                email: 'admin@barbershop.com',
                password: hashPassword('admin123'),
                role: 'Admin',
                createdDate: new Date().toISOString().split('T')[0],
                status: 'active'
            };
            const session = { staff: admin, timestamp: Date.now() };
            localStorage.setItem('staffSession', JSON.stringify(session));
            window.location.href = 'home.php';
            return;
        }

        alert('Invalid username or password');
    });


});