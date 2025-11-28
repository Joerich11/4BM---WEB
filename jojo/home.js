// Mock application user statistics
const appUserStats = {
    daily: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [12, 14, 15, 13, 16, 18, 15],
        deletions: [0, 1, 0, 2, 0, 0, 1]
    },
    weekly: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [45, 52, 58, 60],
        deletions: [2, 3, 1, 4]
    },
    monthly: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data: [120, 145, 165, 180, 195, 210],
        deletions: [5, 8, 10, 7, 12, 9]
    }
};

// Mock customer data for demonstration
const mockCustomers = [
    {
        id: 1,
        name: 'Alice Johnson',
        username: 'alice_j',
        email: 'alice.johnson@email.com',
        phone: '+63 917 123 4567',
        joinDate: '2024-01-15',
        status: 'Active',

    },
    {
        id: 2,
        name: 'Bob Wilson',
        username: 'bob_w',
        email: 'bob.wilson@email.com',
        phone: '+63 918 234 5678',
        joinDate: '2024-02-01',
        status: 'Active',

    },
    {
        id: 3,
        name: 'Carol Brown',
        username: 'carol_b',
        email: 'carol.brown@email.com',
        phone: '+63 919 345 6789',
        joinDate: '2024-02-15',
        status: 'Inactive',

    },
    {
        id: 4,
        name: 'John Doe',
        username: 'john_doe',
        email: 'john.doe@email.com',
        phone: '+63 920 456 7890',
        joinDate: '2024-01-10',
        status: 'Active',

    },
    {
        id: 5,
        name: 'Jane Smith',
        username: 'jane_s',
        email: 'jane.smith@email.com',
        phone: '+63 921 567 8901',
        joinDate: '2024-03-01',
        status: 'Active',

    },
    {
        id: 6,
        name: 'David Martinez',
        username: 'david_m',
        email: 'david.martinez@email.com',
        phone: '+63 922 678 9012',
        joinDate: '2024-01-20',
        status: 'Active',

    },
    {
        id: 7,
        name: 'Emma Davis',
        username: 'emma_d',
        email: 'emma.davis@email.com',
        phone: '+63 923 789 0123',
        joinDate: '2024-02-28',
        status: 'Inactive',

    },
    {
        id: 8,
        name: 'Michael Brown',
        username: 'mike_b',
        email: 'michael.brown@email.com',
        phone: '+63 924 890 1234',
        joinDate: '2024-03-10',
        status: 'Active',

    },
    {
        id: 9,
        name: 'Sarah Wilson',
        username: 'sarah_w',
        email: 'sarah.wilson@email.com',
        phone: '+63 925 901 2345',
        joinDate: '2024-01-25',
        status: 'Active',

    },
    {
        id: 10,
        name: 'Kevin Lee',
        username: 'kevin_l',
        email: 'kevin.lee@email.com',
        phone: '+63 926 012 3456',
        joinDate: '2024-02-10',
        status: 'Inactive',

    },
    {
        id: 11,
        name: 'Lisa Garcia',
        username: 'lisa_g',
        email: 'lisa.garcia@email.com',
        phone: '+63 927 123 4567',
        joinDate: '2024-03-05',
        status: 'Active',

    },
    {
        id: 12,
        name: 'Mark Thompson',
        username: 'mark_t',
        email: 'mark.thompson@email.com',
        phone: '+63 928 234 5678',
        joinDate: '2024-01-30',
        status: 'Active',

    },
    {
        id: 13,
        name: 'Nancy Rodriguez',
        username: 'nancy_r',
        email: 'nancy.rodriguez@email.com',
        phone: '+63 929 345 6789',
        joinDate: '2024-02-20',
        status: 'Inactive',

    },
    {
        id: 14,
        name: 'Paul Anderson',
        username: 'paul_a',
        email: 'paul.anderson@email.com',
        phone: '+63 930 456 7890',
        joinDate: '2024-03-15',
        status: 'Active',

    },
    {
        id: 15,
        name: 'Rachel White',
        username: 'rachel_w',
        email: 'rachel.white@email.com',
        phone: '+63 931 567 8901',
        joinDate: '2024-01-05',
        status: 'Active',

    },
    {
        id: 16,
        name: 'Steven Clark',
        username: 'steven_c',
        email: 'steven.clark@email.com',
        phone: '+63 932 678 9012',
        joinDate: '2024-02-25',
        status: 'Inactive',

    },
    {
        id: 17,
        name: 'Teresa Miller',
        username: 'teresa_m',
        email: 'teresa.miller@email.com',
        phone: '+63 933 789 0123',
        joinDate: '2024-03-20',
        status: 'Active',

    },
    {
        id: 18,
        name: 'Victor Taylor',
        username: 'victor_t',
        email: 'victor.taylor@email.com',
        phone: '+63 934 890 1234',
        joinDate: '2024-01-12',
        status: 'Active',

    },
    {
        id: 19,
        name: 'Wendy Harris',
        username: 'wendy_h',
        email: 'wendy.harris@email.com',
        phone: '+63 935 901 2345',
        joinDate: '2024-02-05',
        status: 'Inactive',

    },
    {
        id: 20,
        name: 'Xavier Young',
        username: 'xavier_y',
        email: 'xavier.young@email.com',
        phone: '+63 936 012 3456',
        joinDate: '2024-03-25',
        status: 'Active',

    },
    {
        id: 21,
        name: 'Yvonne King',
        username: 'yvonne_k',
        email: 'yvonne.king@email.com',
        phone: '+63 937 123 4567',
        joinDate: '2024-01-18',
        status: 'Active',

    },
    {
        id: 22,
        name: 'Zachary Scott',
        username: 'zachary_s',
        email: 'zachary.scott@email.com',
        phone: '+63 938 234 5678',
        joinDate: '2024-02-12',
        status: 'Inactive',

    },
    {
        id: 23,
        name: 'Amanda Green',
        username: 'amanda_g',
        email: 'amanda.green@email.com',
        phone: '+63 939 345 6789',
        joinDate: '2024-03-08',
        status: 'Active',

    },
    {
        id: 24,
        name: 'Benjamin Adams',
        username: 'benjamin_a',
        email: 'benjamin.adams@email.com',
        phone: '+63 940 456 7890',
        joinDate: '2024-01-22',
        status: 'Active',

    },
    {
        id: 25,
        name: 'Catherine Baker',
        username: 'catherine_b',
        email: 'catherine.baker@email.com',
        phone: '+63 941 567 8901',
        joinDate: '2024-02-18',
        status: 'Inactive',

    }
];

// Demo balance: alternate between phone-only and email-only identifiers
mockCustomers.forEach((c, idx) => {
    if (idx % 2 === 0) {
        // Keep phone, hide email
        c.email = '';
    } else {
        // Keep email, hide phone
        c.phone = '';
    }
});

// Expose customer count for dashboard gauge
window.getCustomerCount = function() {
    try {
        // Prefer current table rows if already rendered
        const tbody = document.getElementById('customers-table-body');
        if (tbody && tbody.querySelectorAll('tr').length > 0) {
            return tbody.querySelectorAll('tr').length;
        }
    } catch {}
    // Fallback to total mock customers
    return Array.isArray(mockCustomers) ? mockCustomers.length : 0;
};



// Dashboard Analytics System
const dashboardSystem = {
    chart: null,
    currentAnalyticsType: 'revenue',
    currentTimePeriod: 'daily',
    selectedMonth: new Date().getMonth(), // Current month (0-11)
    
    // Mock data for analytics
    mockData: {
        revenue: {
            daily: {
                'Hand Wash': [120, 150, 180, 200, 170, 190],
                'Dry Clean': [300, 280, 320, 350, 310, 340],
                'Wash, Dry & Iron': [250, 270, 290, 310, 280, 300],
                'Wash, Dry & Fold': [180, 200, 220, 240, 210, 230],
                'Wash': [100, 120, 140, 160, 130, 150]
            },
            weekly: {
                'Hand Wash': [850, 920, 1100, 980],
                'Dry Clean': [2100, 2300, 2500, 2200],
                'Wash, Dry & Iron': [1800, 1950, 2100, 1900],
                'Wash, Dry & Fold': [1400, 1550, 1700, 1500],
                'Wash': [900, 1000, 1150, 1050]
            },
            monthly: {
                'Hand Wash': [3500, 3800, 4200, 3900, 4100, 4300, 4500, 4200, 3800, 4000, 4400, 4600],
                'Dry Clean': [9200, 9800, 10500, 9900, 10200, 10800, 11000, 10600, 9400, 9900, 10700, 11200],
                'Wash, Dry & Iron': [7800, 8200, 8800, 8400, 8600, 9000, 9200, 8900, 7900, 8300, 8900, 9300],
                'Wash, Dry & Fold': [6200, 6600, 7100, 6800, 7000, 7300, 7500, 7200, 6400, 6700, 7200, 7600],
                'Wash': [4100, 4400, 4800, 4500, 4700, 4900, 5100, 4800, 4200, 4500, 4900, 5200]
            }
        },
        customers: {
            daily: {
                'Hand Wash': [8, 12, 15, 18, 14, 16],
                'Dry Clean': [15, 14, 16, 18, 16, 17],
                'Wash, Dry & Iron': [12, 14, 16, 18, 15, 17],
                'Wash, Dry & Fold': [10, 12, 14, 16, 13, 15],
                'Wash': [6, 8, 10, 12, 9, 11]
            },
            weekly: {
                'Hand Wash': [85, 92, 110, 98],
                'Dry Clean': [105, 115, 125, 110],
                'Wash, Dry & Iron': [90, 98, 105, 95],
                'Wash, Dry & Fold': [75, 82, 90, 80],
                'Wash': [55, 60, 68, 62]
            },
            monthly: {
                'Hand Wash': [350, 380, 420, 390, 410, 430, 450, 420, 380, 400, 440, 460],
                'Dry Clean': [460, 490, 525, 495, 510, 540, 550, 530, 470, 495, 535, 560],
                'Wash, Dry & Iron': [390, 410, 440, 420, 430, 450, 460, 445, 395, 415, 445, 465],
                'Wash, Dry & Fold': [310, 330, 355, 340, 350, 365, 375, 360, 320, 335, 360, 380],
                'Wash': [240, 260, 280, 270, 275, 290, 295, 285, 250, 265, 285, 300]
            }
        }
    },
    
    // Labels for different time periods
    labels: {
        daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekly: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    
    // Service colors
    serviceColors: {
        'Hand Wash': '#87CEEB',
        'Dry Clean': '#4682B4',
        'Wash, Dry & Iron': '#5F9EA0',
        'Wash, Dry & Fold': '#6495ED',
        'Wash': '#B0C4DE'
    },

    init() {
        this.bindEvents();
        this.renderChart();
        this.updateBreakdownTable();
    },

    bindEvents() {
        // Analytics type change
        const analyticsTypeSelect = document.getElementById('analytics-type');
        if (analyticsTypeSelect) {
            analyticsTypeSelect.addEventListener('change', (e) => {
                this.currentAnalyticsType = e.target.value;
                this.renderChart();
                this.updateBreakdownTable();
            });
        }

        // Time period change
        const timePeriodSelect = document.getElementById('time-period');
        if (timePeriodSelect) {
            timePeriodSelect.addEventListener('change', (e) => {
                this.currentTimePeriod = e.target.value;
                this.toggleMonthSelector();
                this.renderChart();
                this.updateBreakdownTable();
            });
        }

        // Month selection change
        const monthSelect = document.getElementById('month-select');
        if (monthSelect) {
            monthSelect.value = this.selectedMonth;
            monthSelect.addEventListener('change', (e) => {
                this.selectedMonth = parseInt(e.target.value);
                this.renderChart();
                this.updateBreakdownTable();
            });
        }
    },

    toggleMonthSelector() {
        const monthSelector = document.querySelector('.month-selector');
        if (monthSelector) {
            if (this.currentTimePeriod === 'monthly') {
                monthSelector.classList.remove('hidden');
            } else {
                monthSelector.classList.add('hidden');
            }
        }
    },

    renderChart() {
        const ctx = document.getElementById('analytics-chart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.chart) {
            this.chart.destroy();
        }

        // Handle Application Users view
        if (this.currentAnalyticsType === 'total-customers') {
            // Get the appropriate time period data
            const periodData = appUserStats[this.currentTimePeriod] || appUserStats.daily;
            const labels = periodData.labels;
            const userData = periodData.data;
            const deletionData = periodData.deletions;
            
            // Create bar chart showing application users and deletions
            const config = {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Active Users',
                            data: userData,
                            backgroundColor: '#4682B4',
                            borderRadius: 4,
                            borderSkipped: false,
                        },
                        {
                            label: 'Account Deletions',
                            data: deletionData,
                            backgroundColor: '#FF6347',
                            borderRadius: 4,
                            borderSkipped: false,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: `Application Users - ${this.currentTimePeriod.charAt(0).toUpperCase() + this.currentTimePeriod.slice(1)}`,
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Number of Users'
                            }
                        }
                    }
                }
            };
            
            // Create new chart
            this.chart = new Chart(ctx, config);
            
            // Hide the service legend for Application Users view
            document.querySelector('.chart-legend').style.display = 'none';
            return;
        }

        // Get current data
        const data = this.mockData[this.currentAnalyticsType][this.currentTimePeriod];
        const labels = this.labels[this.currentTimePeriod];

        // Prepare datasets
        const datasets = Object.keys(data).map(service => ({
            label: service,
            data: data[service],
            backgroundColor: this.serviceColors[service],
            borderColor: this.serviceColors[service],
            borderWidth: 2,
            borderRadius: 4,
            borderSkipped: false,
        }));

        // Chart configuration
        const config = {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `${this.currentAnalyticsType === 'revenue' ? 'Revenue' : 'Customer Count'} Analytics - ${this.currentTimePeriod.charAt(0).toUpperCase() + this.currentTimePeriod.slice(1)}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        color: '#4682B4'
                    },
                    legend: {
                        display: false // We have custom legend
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#4682B4',
                            callback: function(value) {
                                if (dashboardSystem.currentAnalyticsType === 'revenue') {
                                    return '₱' + value;
                                }
                                return value;
                            }
                        },
                        grid: {
                            color: 'rgba(135, 206, 235, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#4682B4'
                        },
                        grid: {
                            color: 'rgba(135, 206, 235, 0.2)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        };

        // Create new chart
        this.chart = new Chart(ctx, config);
    },

    updateBreakdownTable() {
        const tableBody = document.querySelector('#breakdown-table tbody');
        const metricHeader = document.getElementById('breakdown-metric');
        
        if (!tableBody || !metricHeader) return;

        // Update header
        metricHeader.textContent = this.currentAnalyticsType === 'revenue' ? 'Revenue' : 'Customers';

        // Get current data
        let data = this.mockData[this.currentAnalyticsType][this.currentTimePeriod];
        
        // If monthly view and specific month selected, show only that month's data
        if (this.currentTimePeriod === 'monthly') {
            const monthData = {};
            Object.keys(data).forEach(service => {
                monthData[service] = [data[service][this.selectedMonth]];
            });
            data = monthData;
        }

        // Clear existing rows
        tableBody.innerHTML = '';

        // Calculate totals and create rows
        Object.keys(data).forEach(service => {
            const values = data[service];
            const total = values.reduce((sum, val) => sum + val, 0);
            const growth = this.calculateGrowth(service);
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service}</td>
                <td>${this.currentAnalyticsType === 'revenue' ? '₱' + total.toLocaleString() : total.toLocaleString()}</td>
                <td class="growth-${growth >= 0 ? 'positive' : 'negative'}">${growth >= 0 ? '+' : ''}${growth}%</td>
            `;
            tableBody.appendChild(row);
        });
    },

    calculateGrowth(service) {
        // Simple mock growth calculation
        const growthRates = {
            'Hand Wash': 12,
            'Dry Clean': 8,
            'Wash, Dry & Iron': 15,
            'Wash, Dry & Fold': 10,
            'Wash': 5
        };
        return growthRates[service] || 0;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Disable demo notifications and clear mock data for DB integration
    window.DEMO_NOTIFICATIONS = false;
    if (typeof mockCustomers !== 'undefined' && Array.isArray(mockCustomers)) mockCustomers.length = 0;
    if (window.appointmentsSystem && Array.isArray(window.appointmentsSystem.appointments)) {
        window.appointmentsSystem.appointments.length = 0;
        if (typeof window.appointmentsSystem.applyFilters === 'function') window.appointmentsSystem.applyFilters();
        if (Array.isArray(window.appointmentsSystem.filteredAppointments)) window.appointmentsSystem.filteredAppointments.length = 0;
        if (typeof window.appointmentsSystem.renderAppointments === 'function') window.appointmentsSystem.renderAppointments();
        if (typeof window.appointmentsSystem.updateStats === 'function') window.appointmentsSystem.updateStats();
    }
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get the section name from data attribute
            const section = item.getAttribute('data-section');
            
            // Hide all sections
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.add('hidden');
            });

            // Show selected section if it exists
            const selectedSection = document.getElementById(section);
            if (selectedSection) {
                selectedSection.classList.remove('hidden');
                
                // Load specific section content
                if (section === 'customers') {
                    loadCustomers();
                    initializeCustomerSearch();
                } else if (section === 'dashboard') {
                    dashboardSystem.init();
                } else if (section === 'appointments') {
                    appointmentsSystem.init();
                } else if (section === 'staff') {
                    // Initialize staff login system when staff section is accessed
                    if (window.staffLoginSystem) {
                        window.staffLoginSystem.init();
                    }
                }
            }


        });
    });

    // Admin profile dropdown
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Dropdown menu items functionality
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const action = item.textContent.trim();
            
            switch(action) {
                case 'Edit Profile':
                    showEditProfileModal();
                    break;
                case 'Reset Password':
                    showResetPasswordModal();
                    break;
                case 'Logout':
                    window.location.href = 'index.php';
                    break;
            }
            
            dropdownMenu.classList.remove('show');
        });
    });

    // Apply session role on load and redirect staff to Appointments
    try {
        const savedSession = localStorage.getItem('staffSession');
        if (savedSession) {
            const session = JSON.parse(savedSession);
            const role = (session && session.staff && session.staff.role) ? session.staff.role : 'Staff';
            if (window.staffLoginSystem && typeof window.staffLoginSystem.updateSidebarAccess === 'function') {
                window.staffLoginSystem.updateSidebarAccess(role);
            }
        }
    } catch (e) { /* noop */ }



    // Profile Modal Functions
    function showEditProfileModal() {
        const modal = document.getElementById('editProfileModal');
        modal.classList.remove('hidden');

        // Pre-fill form with mock data
        document.getElementById('fullName').value = 'Admin User';
        document.getElementById('email').value = 'admin@4bmlaundry.com';
        document.getElementById('username').value = 'admin';

        // Handle form submission
        const form = document.getElementById('editProfileForm');
        form.onsubmit = (e) => {
            e.preventDefault();
            // Here you would typically send the data to a server
            modal.classList.add('hidden');
        };

        // Handle cancel button
        modal.querySelector('.cancel-btn').onclick = () => {
            modal.classList.add('hidden');
        };
    }

    function showResetPasswordModal() {
        const modal = document.getElementById('resetPasswordModal');
        modal.classList.remove('hidden');

        // Handle form submission
        const form = document.getElementById('resetPasswordForm');
        form.onsubmit = (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (newPassword !== confirmPassword) {
                alert('New passwords do not match!');
                return;
            }
            // Here you would typically send the data to a server
            modal.classList.add('hidden');
        };

        // Handle cancel button
        modal.querySelector('.cancel-btn').onclick = () => {
            modal.classList.add('hidden');
        };
    }

    // Customers Section Functions
    // Update total customers count in analytics
function updateTotalCustomersCount() {
    const totalCustomersElement = document.getElementById('analytics-total-customers');
    if (totalCustomersElement) {
        totalCustomersElement.textContent = mockCustomers.length;
    }
}

// Function to calculate appointment count for a customer
    function getCustomerAppointmentCount(customerName) {
        // Check if appointmentsSystem exists and has appointments
        if (typeof appointmentsSystem !== 'undefined' && appointmentsSystem.appointments) {
            return appointmentsSystem.appointments.filter(appointment => 
                appointment.customerName === customerName
            ).length;
        }
        return 0;
    }

    function loadCustomers(searchTerm = '') {
        const customersTableBody = document.getElementById('customers-table-body');
        // Update the analytics total customers count
        updateTotalCustomersCount();

        // Clear existing table rows
        customersTableBody.innerHTML = '';

        // Filter customers based on search term
        let filteredCustomers = mockCustomers;
        if (searchTerm.trim() !== '') {
            const searchLower = searchTerm.toLowerCase();
            filteredCustomers = mockCustomers.filter(customer => 
                customer.name.toLowerCase().includes(searchLower) ||
                (customer.username && customer.username.toLowerCase().includes(searchLower)) ||
                (customer.email && customer.email.toLowerCase().includes(searchLower)) ||
                (customer.phone && customer.phone.toLowerCase().includes(searchLower))
            );
        }

        // Sort customers alphabetically by name
        const sortedCustomers = [...filteredCustomers].sort((a, b) => a.name.localeCompare(b.name));

        // Create table rows for each customer
        sortedCustomers.forEach((customer, idx) => {
            const row = document.createElement('tr');
            // Tag row with customer name for direct lookup/highlight
            row.setAttribute('data-customer-name', customer.name);
            
            // Determine status class for styling
            let statusClass = '';
            switch(customer.status.toLowerCase()) {
                case 'active':
                    statusClass = 'status-active';
                    break;
                case 'inactive':
                    statusClass = 'status-inactive';
                    break;
                case 'pending':
                    statusClass = 'status-pending';
                    break;
                default:
                    statusClass = 'status-active';
            }
            
            // Get appointment count for this customer
            const appointmentCount = getCustomerAppointmentCount(customer.name);
            
            const contactIdentifier = (customer.phone && customer.phone.trim() !== '') 
                ? customer.phone 
                : (customer.email || '');

            row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.username || ''}</td>
                <td>${customer.joinDate}</td>
                <td><span class="appointment-count">${appointmentCount}</span></td>
                <td><span class="${statusClass}">${customer.status}</span></td>
                <td>${contactIdentifier}</td>
            `;
            
            customersTableBody.appendChild(row);
        });

        // Show "No customers found" message if no results
        if (sortedCustomers.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="6" style="text-align: center; padding: 30px; color: #6c757d; font-style: italic;">
                    ${searchTerm.trim() !== '' ? 'No customers found matching your search.' : 'No customers available.'}
                </td>
            `;
            customersTableBody.appendChild(row);
        }
    }

    // Customer search functionality
    function initializeCustomerSearch() {
        const searchInput = document.getElementById('customers-search');
        const clearButton = document.getElementById('clear-search');

        if (!searchInput || !clearButton) return;

        // Search input event listener
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value;
            loadCustomers(searchTerm);
            
            // Show/hide clear button
            if (searchTerm.trim() !== '') {
                clearButton.classList.add('show');
            } else {
                clearButton.classList.remove('show');
            }
        });

        // Clear search button event listener
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            clearButton.classList.remove('show');
            loadCustomers('');
            searchInput.focus();
        });

        // Enter key to search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                loadCustomers(this.value);
            }
        });
    }

    // Safe escape for CSS attribute selectors (fallback if CSS.escape unavailable)
    function escapeSelectorText(text) {
        if (window.CSS && typeof CSS.escape === 'function') return CSS.escape(text);
        return String(text).replace(/["]|\\/g, match => `\\${match}`);
    }

    // Highlight a customer row by name and scroll it into view
    function highlightCustomerRowByName(customerName) {
        // Remove prior highlights
        document.querySelectorAll('.customers-table tbody tr').forEach(row => {
            row.classList.remove('highlighted');
        });
        const esc = escapeSelectorText(customerName);
        const target = document.querySelector(`.customers-table tbody tr[data-customer-name="${esc}"]`);
        if (target) {
            target.classList.add('highlighted');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Remove highlight on user interaction or after 4s
            const clear = () => target.classList.remove('highlighted');
            ['click','keydown','mousemove'].forEach(evt => target.addEventListener(evt, clear, { once: true }));
            setTimeout(clear, 4000);
        }
    }

    // Highlight an appointment row by customer name and scroll into view
    function highlightAppointmentRowByName(customerName) {
        document.querySelectorAll('.appointments-table tbody tr').forEach(row => row.classList.remove('highlighted'));
        const esc = escapeSelectorText(customerName);
        const target = document.querySelector(`.appointments-table tbody tr[data-customer-name="${esc}"]`);
        if (target) {
            target.classList.add('highlighted');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const clear = () => target.classList.remove('highlighted');
            ['click','keydown','mousemove'].forEach(evt => target.addEventListener(evt, clear, { once: true }));
            setTimeout(clear, 4000);
        }
    }

    // Style chat messages
    const style = document.createElement('style');
    style.textContent = `
        .conversation-item {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background 0.3s ease;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .conversation-item:hover {
            background: #f5f5f5;
        }

        .conversation-details {
            flex: 1;
            margin: 0 15px;
            min-width: 0;
            overflow: hidden;
        }

        .conversation-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
        }

        .conversation-header h4 {
            margin: 0;
            color: #333;
        }

        .timestamp {
            font-size: 0.8em;
            color: #999;
        }

        .last-message {
            margin: 0;
            color: #666;
            font-size: 0.9em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .unread-count {
            background: #ff4444;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 0.8em;
        }

        .message {
            display: flex;
            margin-bottom: 15px;
        }

        .message.customer {
            justify-content: flex-start;
        }

        .message.admin {
            justify-content: flex-end;
        }

        .message-content {
            max-width: 70%;
            padding: 10px 15px;
            border-radius: 15px;
            position: relative;
        }

        .message.customer .message-content {
            background: #f0f0f0;
        }

        .message.admin .message-content {
            background: #87CEEB;
            color: white;
        }

        .message-time {
            font-size: 0.8em;
            color: #999;
            margin-top: 5px;
            display: block;
        }

        .message.admin .message-time {
            color: rgba(255, 255, 255, 0.8);
        }
    `;
    document.head.appendChild(style);



    // Inventory Management System
    const inventorySystem = {
        // Initial stock data
        stocks: {
            detergent: { quantity: 50, threshold: { low: 10, high: 40 } },
            powder: { quantity: 25, threshold: { low: 8, high: 30 } },
            'fabric-softener': { quantity: 8, threshold: { low: 5, high: 25 } }
        },

        // Transaction history
        history: [
            {
                id: 1,
                date: '2024-01-15',
                time: '09:30 AM',
                type: 'received',
                soap: 'detergent',
                quantity: 20,
                customer: 'Supplier - ABC Chemicals',
                notes: 'Weekly stock replenishment'
            },
            {
                id: 2,
                date: '2024-01-15',
                time: '02:15 PM',
                type: 'released',
                soap: 'powder',
                quantity: 2,
                customer: 'John Smith',
                notes: 'Customer laundry service'
            },
            {
                id: 3,
                date: '2024-01-14',
                time: '11:45 AM',
                type: 'released',
                soap: 'fabric-softener',
                quantity: 1,
                customer: 'Maria Garcia',
                notes: 'Customer laundry service'
            },
            {
                id: 4,
                date: '2024-01-14',
                time: '10:20 AM',
                type: 'received',
                soap: 'fabric-softener',
                quantity: 15,
                customer: 'Staff - Sarah Johnson',
                notes: 'Emergency stock order'
            },
            {
                id: 5,
                date: '2024-01-13',
                time: '08:45 AM',
                type: 'released',
                soap: 'detergent',
                quantity: 3,
                customer: 'Alice Johnson',
                notes: 'Customer laundry service'
            },
            {
                id: 6,
                date: '2024-01-13',
                time: '01:30 PM',
                type: 'received',
                soap: 'powder',
                quantity: 25,
                customer: 'Supplier - CleanCorp',
                notes: 'Monthly delivery'
            },
            {
                id: 7,
                date: '2024-01-12',
                time: '03:20 PM',
                type: 'released',
                soap: 'fabric-softener',
                quantity: 2,
                customer: 'Bob Wilson',
                notes: 'Customer laundry service'
            },
            {
                id: 8,
                date: '2024-01-12',
                time: '11:15 AM',
                type: 'released',
                soap: 'detergent',
                quantity: 4,
                customer: 'Carol Brown',
                notes: 'Customer laundry service'
            },
            {
                id: 9,
                date: '2024-01-11',
                time: '09:00 AM',
                type: 'received',
                soap: 'detergent',
                quantity: 30,
                customer: 'Supplier - ABC Chemicals',
                notes: 'Bulk order delivery'
            },
            {
                id: 10,
                date: '2024-01-11',
                time: '04:45 PM',
                type: 'released',
                soap: 'powder',
                quantity: 1,
                customer: 'David Martinez',
                notes: 'Customer laundry service'
            },
            {
                id: 11,
                date: '2024-01-10',
                time: '10:30 AM',
                type: 'released',
                soap: 'fabric-softener',
                quantity: 3,
                customer: 'Emma Davis',
                notes: 'Customer laundry service'
            },
            {
                id: 12,
                date: '2024-01-10',
                time: '02:00 PM',
                type: 'received',
                soap: 'fabric-softener',
                quantity: 20,
                customer: 'Staff - Michael Brown',
                notes: 'Restocking low inventory'
            },
            {
                id: 13,
                date: '2024-01-09',
                time: '08:15 AM',
                type: 'released',
                soap: 'detergent',
                quantity: 5,
                customer: 'Jane Smith',
                notes: 'Customer laundry service'
            },
            {
                id: 14,
                date: '2024-01-09',
                time: '12:30 PM',
                type: 'released',
                soap: 'powder',
                quantity: 2,
                customer: 'Kevin Lee',
                notes: 'Customer laundry service'
            },
            {
                id: 15,
                date: '2024-01-08',
                time: '03:45 PM',
                type: 'received',
                soap: 'powder',
                quantity: 18,
                customer: 'Supplier - CleanCorp',
                notes: 'Weekly delivery'
            },
            {
                id: 16,
                date: '2024-01-08',
                time: '11:00 AM',
                type: 'released',
                soap: 'fabric-softener',
                quantity: 1,
                customer: 'Lisa Garcia',
                notes: 'Customer laundry service'
            },
            {
                id: 17,
                date: '2024-01-07',
                time: '09:45 AM',
                type: 'released',
                soap: 'detergent',
                quantity: 6,
                customer: 'Mark Thompson',
                notes: 'Customer laundry service'
            },
            {
                id: 18,
                date: '2024-01-07',
                time: '01:15 PM',
                type: 'received',
                soap: 'detergent',
                quantity: 40,
                customer: 'Supplier - ABC Chemicals',
                notes: 'Large order for busy week'
            },
            {
                id: 19,
                date: '2024-01-06',
                time: '10:00 AM',
                type: 'released',
                soap: 'powder',
                quantity: 3,
                customer: 'Nancy Rodriguez',
                notes: 'Customer laundry service'
            },
            {
                id: 20,
                date: '2024-01-06',
                time: '04:30 PM',
                type: 'released',
                soap: 'fabric-softener',
                quantity: 2,
                customer: 'Paul Anderson',
                notes: 'Customer laundry service'
            },
            {
                id: 21,
                date: '2024-01-05',
                time: '08:30 AM',
                type: 'received',
                soap: 'fabric-softener',
                quantity: 12,
                customer: 'Staff - Rachel White',
                notes: 'Emergency restock'
            },
            {
                id: 22,
                date: '2024-01-05',
                time: '02:45 PM',
                type: 'released',
                soap: 'detergent',
                quantity: 4,
                customer: 'Steven Clark',
                notes: 'Customer laundry service'
            },
            {
                id: 23,
                date: '2024-01-04',
                time: '11:30 AM',
                type: 'released',
                soap: 'powder',
                quantity: 1,
                customer: 'Teresa Miller',
                notes: 'Customer laundry service'
            },
            {
                id: 24,
                date: '2024-01-04',
                time: '03:00 PM',
                type: 'received',
                soap: 'powder',
                quantity: 22,
                customer: 'Supplier - CleanCorp',
                notes: 'Regular weekly supply'
            },
            {
                id: 25,
                date: '2024-01-03',
                time: '09:15 AM',
                type: 'released',
                soap: 'fabric-softener',
                quantity: 2,
                customer: 'Victor Taylor',
                notes: 'Customer laundry service'
            }
        ],

        // Initialize inventory system
        init() {
            this.updateStockDisplay();
            this.loadHistory();
            this.setupEventListeners();
        },

        // Update stock display cards
        updateStockDisplay() {
            Object.keys(this.stocks).forEach(soapType => {
                const stock = this.stocks[soapType];
                const quantityElement = document.getElementById(`${soapType}-quantity`);
                const statusElement = document.getElementById(`${soapType}-status`);
                
                if (quantityElement) {
                    quantityElement.textContent = stock.quantity;
                }
                
                if (statusElement) {
                    const statusIndicator = statusElement.querySelector('.status-indicator');
                    if (statusIndicator) {
                        // Remove existing status classes
                        statusIndicator.classList.remove('high-stock', 'medium-stock', 'low-stock');
                        
                        // Determine stock status
                        if (stock.quantity <= stock.threshold.low) {
                            statusIndicator.classList.add('low-stock');
                            statusIndicator.textContent = 'Low Stock';
                        } else if (stock.quantity >= stock.threshold.high) {
                            statusIndicator.classList.add('high-stock');
                            statusIndicator.textContent = 'High Stock';
                        } else {
                            statusIndicator.classList.add('medium-stock');
                            statusIndicator.textContent = 'Medium Stock';
                        }
                    }
                }
            });
        },

        // Add stock (received)
        addStock(soapType, quantity, notes = '', customerName = '') {
            if (this.stocks[soapType]) {
                this.stocks[soapType].quantity += parseInt(quantity);
                
                // Add to history
                const transaction = {
                    id: this.history.length + 1,
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                    }),
                    type: 'received',
                    soap: soapType,
                    quantity: parseInt(quantity),
                    customer: customerName || 'N/A',
                    notes: notes || 'Manual stock addition'
                };
                
                this.history.unshift(transaction);
                this.updateStockDisplay();
                this.loadHistory();
                
                // Show success message
                this.showNotification(`Successfully added ${quantity} ${soapType} to inventory`, 'success');
            }
        },

        // Release stock (automatic deduction)
        releaseStock(soapType, quantity, notes = 'Customer laundry service', customerName = '') {
            if (this.stocks[soapType] && this.stocks[soapType].quantity >= quantity) {
                this.stocks[soapType].quantity -= parseInt(quantity);
                
                // Add to history
                const transaction = {
                    id: this.history.length + 1,
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                    }),
                    type: 'released',
                    soap: soapType,
                    quantity: parseInt(quantity),
                    customer: customerName || 'N/A',
                    notes: notes
                };
                
                this.history.unshift(transaction);
                this.updateStockDisplay();
                this.loadHistory();
                
                return true;
            }
            return false;
        },

        // Load and display history
        loadHistory(filter = 'all', soapFilter = 'all') {
            const historyTableBody = document.getElementById('historyTableBody');
            if (!historyTableBody) return;

            let filteredHistory = this.history;

            // Apply filters
            if (filter !== 'all') {
                filteredHistory = filteredHistory.filter(item => item.type === filter);
            }
            
            if (soapFilter !== 'all') {
                filteredHistory = filteredHistory.filter(item => item.soap === soapFilter);
            }

            // Clear existing rows
            historyTableBody.innerHTML = '';

            // Add filtered history rows
            filteredHistory.forEach(transaction => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${transaction.customer || 'N/A'}</td>
                    <td>${this.formatDate(transaction.date)}</td>
                    <td>${transaction.time}</td>
                    <td><span class="transaction-type ${transaction.type}">${transaction.type}</span></td>
                    <td>${this.formatSoapName(transaction.soap)}</td>
                    <td>${transaction.quantity}</td>
                `;
                historyTableBody.appendChild(row);
            });

            // Show message if no transactions
            if (filteredHistory.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td colspan="6" style="text-align: center; color: #999; padding: 20px;">
                        No transactions found for the selected filters.
                    </td>
                `;
                historyTableBody.appendChild(row);
            }
        },

        // Format date for display
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        },

        // Format soap name for display
        formatSoapName(soapType) {
            const names = {
                'detergent': 'Detergent',
                'powder': 'Powder',
                'fabric-softener': 'Fabric Softener'
            };
            return names[soapType] || soapType;
        },

        // Setup event listeners
        setupEventListeners() {
            // Add Stock button
            const addStockBtn = document.getElementById('addStockBtn');
            if (addStockBtn) {
                addStockBtn.addEventListener('click', () => {
                    this.showAddStockModal();
                });
            }

            // Add Stock form
            const addStockForm = document.getElementById('addStockForm');
            if (addStockForm) {
                addStockForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleAddStock();
                });
            }

            // Modal close buttons
            const closeModalBtns = document.querySelectorAll('.close-modal, .cancel-btn');
            closeModalBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.hideAddStockModal();
                });
            });

            // History filters
            const historyFilter = document.getElementById('historyFilter');
            const soapFilter = document.getElementById('soapFilter');
            
            if (historyFilter) {
                historyFilter.addEventListener('change', () => {
                    this.loadHistory(historyFilter.value, soapFilter ? soapFilter.value : 'all');
                });
            }
            
            if (soapFilter) {
                soapFilter.addEventListener('change', () => {
                    this.loadHistory(historyFilter ? historyFilter.value : 'all', soapFilter.value);
                });
            }
        },

        // Show add stock modal
        showAddStockModal() {
            const modal = document.getElementById('addStockModal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.style.display = 'flex';
            }
        },

        // Hide add stock modal
        hideAddStockModal() {
            const modal = document.getElementById('addStockModal');
            if (modal) {
                modal.classList.add('hidden');
                modal.style.display = 'none';
                
                // Reset form
                const form = document.getElementById('addStockForm');
                if (form) {
                    form.reset();
                }
            }
        },

        // Handle add stock form submission
        handleAddStock() {
            const soapType = document.getElementById('soapType').value;
            const quantity = document.getElementById('quantity').value;
            const customerName = document.getElementById('customerName').value;
            const notes = document.getElementById('notes').value;

            if (soapType && quantity && quantity > 0 && customerName) {
                this.addStock(soapType, quantity, notes, customerName);
                this.hideAddStockModal();
            } else {
                this.showNotification('Please fill in all required fields', 'error');
            }
        },

        // Show notification
        showNotification(message, type = 'info') {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            `;

            // Add styles
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
                color: ${type === 'success' ? '#155724' : '#721c24'};
                padding: 15px 20px;
                border-radius: 8px;
                border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;

            // Add animation styles
            if (!document.getElementById('notification-styles')) {
                const style = document.createElement('style');
                style.id = 'notification-styles';
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOut {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(notification);

            // Auto remove after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        },

        // Helper function to clear all error messages
        clearErrorMessages() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.remove());
            
            const errorInputs = document.querySelectorAll('input.error');
            errorInputs.forEach(input => input.classList.remove('error'));
        },

        // Helper function to show field-specific error messages
        showFieldError(fieldId, message) {
            const field = document.getElementById(fieldId);
            if (!field) return;
            
            // Add error class to input
            field.classList.add('error');
            
            // Create error message element
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            
            // Insert error message after the input field
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        },

        // Helper function to validate email format
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    };

    // Initialize inventory system when inventory section is loaded
    const originalNavHandler = document.querySelector('.nav-item[data-section="inventory"]');
    if (originalNavHandler) {
        originalNavHandler.addEventListener('click', () => {
            setTimeout(() => {
                inventorySystem.init();
            }, 100);
        });
    }

    // ===== APPOINTMENTS MANAGEMENT SYSTEM =====
    const appointmentsSystem = {
        appointments: [],

        filteredAppointments: [],
        currentAppointment: null,
        initialized: false,

        init() {
            if (this.initialized) {
                console.log('Appointments system already initialized');
                return;
            }
            
            console.log('Initializing appointments system...');
            // Ensure each appointment has a Laundry Status; randomize across pending/processing/completed
            const randomStatus = () => ['pending','processing','completed'][Math.floor(Math.random()*3)];
            this.appointments = this.appointments.map(a => ({
                ...a,
                orderStatus: randomStatus(),
                // Auto-generate a GCash reference if missing for gcash payments
                gcashRef: a.paymentMethod === 'gcash' ? (a.gcashRef || String(Math.floor(1000000000000 + Math.random() * 9000000000000))) : (a.gcashRef || '')
            }));
            // Sort appointments alphabetically by customer name
            this.appointments.sort((a, b) => a.customerName.localeCompare(b.customerName));
            this.filteredAppointments = [...this.appointments];
            this.renderAppointments();
            this.updateStats();
            this.bindEvents();
            this.initialized = true;
            console.log('Appointments system initialized successfully');
        },

        bindEvents() {
            // Filter events
            const statusFilter = document.getElementById('statusFilter');
            const serviceFilter = document.getElementById('serviceFilter');
            const paymentMethodFilter = document.getElementById('paymentMethodFilter');
            
            if (statusFilter) {
                statusFilter.addEventListener('change', () => this.applyFilters());
            }
            if (serviceFilter) {
                serviceFilter.addEventListener('change', () => this.applyFilters());
            }
            if (paymentMethodFilter) {
                paymentMethodFilter.addEventListener('change', () => this.applyFilters());
            }
            
            // Appointments search input (same behavior as CUSTOMERS section)
            const searchInput = document.getElementById('appointments-search');
            const clearButton = document.getElementById('appointments-clear-search');
            if (searchInput && clearButton) {
                // Input => filter
                searchInput.addEventListener('input', () => {
                    const term = searchInput.value;
                    // Show/hide clear button
                    if (term.trim() !== '') {
                        clearButton.classList.add('show');
                    } else {
                        clearButton.classList.remove('show');
                    }
                    this.applyFilters();
                });

                // Clear button
                clearButton.addEventListener('click', () => {
                    searchInput.value = '';
                    clearButton.classList.remove('show');
                    this.applyFilters();
                    searchInput.focus();
                });

                // Enter key to apply
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.applyFilters();
                    }
                });
            }
            
            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-group')) {
                    this.hideSearchDropdown();
                }
            });

            // Modal events
            const appointmentModal = document.getElementById('appointmentDetailsModal');
            const updatePaymentModal = document.getElementById('updatePaymentModal');
            
            // Close modal events
            appointmentModal.querySelector('.close-modal').addEventListener('click', () => {
                appointmentModal.classList.add('hidden');
            });
            
            updatePaymentModal.querySelector('.close-modal').addEventListener('click', () => {
                updatePaymentModal.classList.add('hidden');
            });

            // Update status button
            document.getElementById('updateStatusBtn').addEventListener('click', () => {
                appointmentModal.classList.add('hidden');
                updatePaymentModal.classList.remove('hidden');
            });

            // Update status form (order status)
            document.getElementById('updatePaymentForm').addEventListener('submit', (e) => {
                e.preventDefault();
                this.updateOrderStatus();
            });

            // Cancel buttons
            updatePaymentModal.querySelector('.cancel-btn').addEventListener('click', () => {
                updatePaymentModal.classList.add('hidden');
            });

            // Click outside modal to close
            window.addEventListener('click', (e) => {
                if (e.target === appointmentModal) {
                    appointmentModal.classList.add('hidden');
                }
                if (e.target === updatePaymentModal) {
                    updatePaymentModal.classList.add('hidden');
                }
            });
        },

        renderAppointments() {
            const tbody = document.getElementById('appointmentsTableBody');
            const noDataMessage = document.getElementById('no-appointments');
            
            if (this.filteredAppointments.length === 0) {
                tbody.innerHTML = '';
                noDataMessage.classList.remove('hidden');
                return;
            }

            noDataMessage.classList.add('hidden');
            
            tbody.innerHTML = this.filteredAppointments.map(appointment => `
                <tr data-appointment-id="${appointment.id}" data-customer-name="${appointment.customerName}">
                    <td>
                        <div class="customer-info">
                            <p class="customer-name">${appointment.customerName}</p>
                        </div>
                    </td>
                    <td>
                        <div class="datetime-info">
                            <p class="appointment-date">${this.formatDateShort(appointment.appointmentDate)}</p>
                            <p class="appointment-time">${appointment.appointmentTime}</p>
                        </div>
                    </td>
                    <td>
                        <div class="service-info">
                            <p class="service-type">${this.formatServiceType(appointment.serviceType)}</p>
                            <p class="service-weight">${appointment.weight}</p>
                        </div>
                    </td>
                    <td>
                        <a href="javascript:void(0)" 
                           onclick="openMapModal('${appointment.location.replace(/'/g, "\\'")}')" 
                           class="location-link" 
                           title="Click to view ${appointment.location} on map"
                           style="display: block; padding-left: 5px; text-decoration: none; color: #4682B4; cursor: pointer;">
                            ${appointment.location}
                        </a>
                    </td>
                    <td>
                        <span class="price-display">₱${appointment.totalAmount}</span>
                    </td>
                    <td>
                        <span class="payment-method ${appointment.paymentMethod}">
                            <i class="fas ${appointment.paymentMethod === 'cash' ? 'fa-money-bill' : 'fa-mobile-alt'}"></i>
                            ${appointment.paymentMethod.toUpperCase()}
                        </span>
                        ${appointment.paymentMethod === 'gcash' ? `<div class="gcash-ref hidden">Ref No. ${appointment.gcashRef || 'N/A'}</div>` : ''}
                        <div class="payment-status-controls hidden" data-appointment-id="${appointment.id}">
                            <label><input type="checkbox" name="pm-paid-${appointment.id}" ${appointment.paymentStatus === 'paid' ? 'checked' : ''}> Paid</label>
                        </div>
                    </td>
                    <td></td>
                    <td class="actions-cell">
                        <button class="row-actions-button" title="Options" aria-label="Options" data-appointment-id="${appointment.id}">⋮</button>
                        <div class="row-actions-menu hidden" role="menu" aria-hidden="true">
                            <div class="menu-group">
                                <label class="menu-label" for="actions-status-${appointment.id}">Laundry Status</label>
                                <select id="actions-status-${appointment.id}" class="laundry-status-select" data-appointment-id="${appointment.id}">
                                    <option value="pending" ${appointment.orderStatus === 'pending' ? 'selected' : ''}>Pending</option>
                                    <option value="processing" ${appointment.orderStatus === 'processing' ? 'selected' : ''}>Processing</option>
                                    <option value="completed" ${appointment.orderStatus === 'completed' ? 'selected' : ''}>Completed</option>
                                </select>
                            </div>
                            <div class="menu-group">
                                <label class="menu-label" for="reminder-select-${appointment.id}">Reminder</label>
                                <select id="reminder-select-${appointment.id}" class="reminder-select" data-appointment-id="${appointment.id}">
                                    <option value="">Select reminder type</option>
                                    <option value="claim">Please claim your laundry</option>
                                    <option value="pickup">Your laundry is ready for pickup</option>
                                    <option value="delivery">Your laundry is ready for delivery</option>
                                </select>
                            </div>
                            <button class="menu-item pickup-btn" data-appointment-id="${appointment.id}" title="Mark ready for pick up">Ready for Pick Up</button>
                            <button class="menu-item delivery-btn" data-appointment-id="${appointment.id}" title="Mark ready for delivery">Ready for Delivery</button>
                        </div>
                    </td>
                </tr>
            `).join('');

            // Attach delegated handlers for newly rendered rows
            this.attachRowActionsHandlers();
        },

        // Delegated handlers for the actions trigger and menu
        attachRowActionsHandlers() {
            const tbody = document.getElementById('appointmentsTableBody');
            if (!tbody) return;

            // Ensure only one set of listeners
            if (this._actionsHandlersAttached) return;
            this._actionsHandlersAttached = true;

            // Toggle menu on trigger click
            tbody.addEventListener('click', (e) => {
                // Toggle payment controls (and GCash ref for gcash) on badge click
                const paymentBadge = e.target.closest('.payment-method');
                if (paymentBadge) {
                    const cell = paymentBadge.closest('td');
                    const controls = cell ? cell.querySelector('.payment-status-controls') : null;
                    if (controls) controls.classList.toggle('hidden');
                    if (paymentBadge.classList.contains('gcash')) {
                        const refPill = cell ? cell.querySelector('.gcash-ref') : null;
                        if (refPill) refPill.classList.toggle('hidden');
                    }
                    return;
                }

                // Handle payment status checkbox change
                if (e.target.matches('.payment-status-controls input[type="checkbox"]')) {
                    const input = e.target;
                    const container = input.closest('.payment-status-controls');
                    const aptId = container ? container.getAttribute('data-appointment-id') : null;
                    const newStatus = input.checked ? 'paid' : 'pending';
                    if (aptId) {
                        const idx = this.appointments.findIndex(a => String(a.id) === String(aptId));
                        if (idx !== -1) {
                            this.appointments[idx].paymentStatus = newStatus;
                            this.updateStats();
                            // Update modal if currently viewing this appointment
                            if (this.currentAppointment && String(this.currentAppointment.id) === String(aptId)) {
                                const statusElement = document.getElementById('modal-payment-status');
                                if (statusElement) {
                                    statusElement.textContent = newStatus === 'pending' ? 'UNPAID' : 'PAID';
                                    statusElement.className = `status-badge ${newStatus}`;
                                }
                                const methodEl = document.getElementById('modal-payment-method');
                                if (methodEl) methodEl.textContent = `${this.appointments[idx].paymentMethod.toUpperCase()} (${newStatus === 'pending' ? 'Unpaid' : 'Paid'})`;
                            }
                            this.showNotification(`Payment marked as ${newStatus.toUpperCase()} for ${this.appointments[idx].customerName}.`, 'success');
                        }
                    }
                    return;
                }

                const trigger = e.target.closest('.row-actions-button');
                if (trigger) {
                    e.stopPropagation();
                    const row = trigger.closest('tr');
                    const menu = row ? row.querySelector('.row-actions-menu') : null;
                    if (!menu) return;
                    // Close other open menus
                    document.querySelectorAll('.row-actions-menu').forEach(m => {
                        if (m !== menu) m.classList.add('hidden');
                    });
                    menu.classList.toggle('hidden');
                    return;
                }

                // Menu item clicks

                const pickupBtn = e.target.closest('.pickup-btn');
                if (pickupBtn) {
                    const id = parseInt(pickupBtn.getAttribute('data-appointment-id'), 10);
                    this.markReadyForPickup(id);
                    this._closeMenus();
                    return;
                }

                const deliveryBtn = e.target.closest('.delivery-btn');
                if (deliveryBtn) {
                    const id = parseInt(deliveryBtn.getAttribute('data-appointment-id'), 10);
                    this.markReadyForDelivery(id);
                    this._closeMenus();
                    return;
                }
            });

            // Status change
            tbody.addEventListener('change', (e) => {
                const select = e.target.closest('.laundry-status-select');
                if (select) {
                    const id = parseInt(select.getAttribute('data-appointment-id'), 10);
                    const value = select.value;
                    this.updateLaundryStatus(id, value);
                    this._closeMenus();
                    return;
                }

                // Reminder dropdown change
                const reminderSelect = e.target.closest('.reminder-select');
                if (reminderSelect) {
                    const id = parseInt(reminderSelect.getAttribute('data-appointment-id'), 10);
                    const reminderType = reminderSelect.value;
                    if (reminderType) {
                        this.sendReminder(id, reminderType);
                        reminderSelect.value = ''; // Reset dropdown
                        this._closeMenus();
                    }
                }
            });

            // Click outside to close menus
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.row-actions-menu') && !e.target.closest('.row-actions-button')) {
                    this._closeMenus();
                }
            });

            // Escape key closes menus
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this._closeMenus();
            });
        },

        _closeMenus() {
            document.querySelectorAll('.row-actions-menu').forEach(m => m.classList.add('hidden'));
        },

        // Simple admin guard (extend to real auth later)
        isAdmin() {
            // If a real auth system exists, replace this.
            // For now, default to true so actions remain usable.
            return true;
        },

        updateLaundryStatus(appointmentId, newStatus) {
            if (!this.isAdmin()) {
                this.showNotification('Admin only: cannot update status.', 'error');
                return;
            }
            const apt = this.appointments.find(a => a.id === appointmentId);
            if (!apt) return;
            apt.orderStatus = newStatus;
            // Update UI badge text and icon
            const row = null;
            this.showNotification(`Laundry status set to ${newStatus}.`, 'success');
            this.syncStatusToMobileApp(apt, { type: 'status', value: newStatus });
        },

        sendReminder(appointmentId, reminderType) {
            if (!this.isAdmin()) {
                this.showNotification('Admin only: cannot send reminders.', 'error');
                return;
            }
            const apt = this.appointments.find(a => a.id === appointmentId);
            if (!apt) return;
            
            // Define reminder messages
            const reminderMessages = {
                'claim': 'Please claim your laundry',
                'pickup': 'Your laundry is ready for pickup',
                'delivery': 'Your laundry is ready for delivery'
            };
            
            const message = reminderMessages[reminderType];
            if (!message) {
                this.showNotification('Invalid reminder type selected.', 'error');
                return;
            }
            
            const aptDate = new Date(apt.appointmentDate);
            const now = new Date();
            const daysDiff = Math.floor((now - aptDate) / (1000 * 60 * 60 * 24));
            const eligible = daysDiff >= 3 || daysDiff >= 7;
            if (!eligible) {
                this.showNotification('Reminder not eligible yet. Minimum 3 days unclaimed.', 'info');
                return;
            }
            
            this.showNotification(`Reminder sent: "${message}" via mobile app.`, 'success');
            this.syncStatusToMobileApp(apt, { type: 'reminder', message: message, daysUnclaimed: daysDiff });
        },

        markReadyForPickup(appointmentId) {
            if (!this.isAdmin()) {
                this.showNotification('Admin only: cannot update pick up readiness.', 'error');
                return;
            }
            const apt = this.appointments.find(a => a.id === appointmentId);
            if (!apt) return;
            apt.pickupReady = true;
            this.showNotification('Marked as Ready for Pick Up.', 'success');
            this.syncStatusToMobileApp(apt, { type: 'pickup-ready', value: true });
        },

        markReadyForDelivery(appointmentId) {
            if (!this.isAdmin()) {
                this.showNotification('Admin only: cannot update delivery readiness.', 'error');
                return;
            }
            const apt = this.appointments.find(a => a.id === appointmentId);
            if (!apt) return;
            apt.deliveryReady = true;
            this.showNotification('Marked as Ready for Delivery.', 'success');
            this.syncStatusToMobileApp(apt, { type: 'delivery-ready', value: true });
        },

        // Placeholder sync to customer mobile app (integrate with backend/API later)
        syncStatusToMobileApp(appointment, payload) {
            try {
                // TODO: Replace with real API call
                console.log('Syncing to mobile app:', { appointmentId: appointment.id, payload });
            } catch (err) {
                console.error('Sync failed', err);
                this.showNotification('Sync failed. Please try again.', 'error');
            }
        },

        applyFilters() {
            const statusFilterEl = document.getElementById('statusFilter');
            const serviceFilterEl = document.getElementById('serviceFilter');
            const paymentMethodFilterEl = document.getElementById('paymentMethodFilter');
            const statusFilter = statusFilterEl ? statusFilterEl.value : 'all';
            const serviceFilter = serviceFilterEl ? serviceFilterEl.value : 'all';
            const paymentMethodFilter = paymentMethodFilterEl ? paymentMethodFilterEl.value : 'all';
            const searchEl = document.getElementById('appointments-search');
            const searchTerm = (searchEl ? searchEl.value : '').toLowerCase();

            // Normalize service types to uppercase categories
            const normalizeService = (raw) => {
                const s = String(raw || '').toLowerCase();
                if (s.includes('hand')) return 'Handwash';
                if (s.includes('iron')) return 'Wash, Dry & Iron';
                if (s.includes('fold')) return 'Wash, Dry & Fold';
                if ((s.includes('dry') && s.includes('clean')) || s.includes('premium')) return 'Dry Clean';
                return 'Wash';
            };

            // Filter appointments based on all criteria
            this.filteredAppointments = this.appointments.filter(appointment => {
                const matchesStatus = statusFilter === 'all' || appointment.orderStatus === statusFilter;
                const matchesService = serviceFilter === 'all' || normalizeService(appointment.serviceType) === serviceFilter;
                const matchesPaymentMethod = paymentMethodFilter === 'all' || appointment.paymentMethod === paymentMethodFilter;
                const name = (appointment.customerName || '').toLowerCase();
                const email = (appointment.customerEmail || '').toLowerCase();
                const phone = (appointment.customerContact || '').toLowerCase();
                const location = (appointment.location || '').toLowerCase();
                const idStr = String(appointment.id || '').toLowerCase();
                const matchesSearch = searchTerm === '' || (
                    name.includes(searchTerm) ||
                    email.includes(searchTerm) ||
                    phone.includes(searchTerm) ||
                    location.includes(searchTerm) ||
                    idStr.includes(searchTerm)
                );

                return matchesStatus && matchesService && matchesPaymentMethod && matchesSearch;
            });

            // Automatically sort customers alphabetically (A → Z)
            this.filteredAppointments.sort((a, b) => {
                return a.customerName.localeCompare(b.customerName, undefined, { 
                    sensitivity: 'base',
                    numeric: true 
                });
            });

            this.renderAppointments();
            this.updateStats();
        },

        updateStats() {
            const totalAppointments = this.appointments.length;
            const pendingPayments = this.appointments.filter(apt => apt.paymentStatus === 'pending').length;
            const paidAppointments = this.appointments.filter(apt => apt.paymentStatus === 'paid').length;
            // Order status counts for dashboard KPI
            const pendingOrders = this.appointments.filter(apt => apt.orderStatus === 'pending').length;
            const processingOrders = this.appointments.filter(apt => apt.orderStatus === 'processing').length;
            const completedOrders = this.appointments.filter(apt => apt.orderStatus === 'completed').length;
            const totalEl = document.getElementById('total-appointments');
            const pendingEl = document.getElementById('pending-payments');
            const paidEl = document.getElementById('paid-appointments');
            const kpiPendingEl = document.getElementById('kpi-pending');
            const kpiProcessingEl = document.getElementById('kpi-processing');
            const kpiCompletedEl = document.getElementById('kpi-completed');

            if (totalEl) totalEl.textContent = totalAppointments;
            if (pendingEl) pendingEl.textContent = pendingPayments;
            if (paidEl) paidEl.textContent = paidAppointments;
            // Update dashboard KPI cards to match appointments
            if (kpiPendingEl) kpiPendingEl.textContent = pendingOrders;
            if (kpiProcessingEl) kpiProcessingEl.textContent = processingOrders;
            if (kpiCompletedEl) kpiCompletedEl.textContent = completedOrders;

            // Refresh Revenue Trend Chart to reflect appointment-derived totals
            if (window.refreshRevenueChart) {
                try { window.refreshRevenueChart(); } catch {}
            }

            // Refresh Customer Trend Chart to reflect appointment-derived counts
            if (window.refreshCustomerChart) {
                try { window.refreshCustomerChart(); } catch {}
            }
        },

        handleSearch(searchTerm) {
            if (searchTerm.length === 0) {
                this.hideSearchDropdown();
                this.applyFilters();
                return;
            }

            if (searchTerm.length >= 2) {
                this.showSearchSuggestions(searchTerm);
            }
            
            this.applyFilters();
        },

        showSearchSuggestions(searchTerm) {
            const dropdown = document.getElementById('searchDropdown');
            const term = searchTerm.toLowerCase();
            const matches = this.appointments.filter(appointment => {
                const name = (appointment.customerName || '').toLowerCase();
                const email = (appointment.customerEmail || '').toLowerCase();
                const phone = (appointment.customerContact || '').toLowerCase();
                const location = (appointment.location || '').toLowerCase();
                return name.includes(term) || email.includes(term) || phone.includes(term) || location.includes(term);
            });

            if (matches.length === 0) {
                this.hideSearchDropdown();
                return;
            }

            const uniqueCustomers = [];
            const seenCustomers = new Set();

            matches.forEach(appointment => {
                if (!seenCustomers.has(appointment.customerName)) {
                    seenCustomers.add(appointment.customerName);
                    uniqueCustomers.push(appointment);
                }
            });

            dropdown.innerHTML = uniqueCustomers.slice(0, 5).map(appointment => `
                <div class="search-dropdown-item" onclick="appointmentsSystem.selectCustomer('${appointment.customerName}', ${appointment.id})">
                    <div class="customer-name">${appointment.customerName}</div>
                    <div class="customer-details">${appointment.customerContact} • ${appointment.location}</div>
                </div>
            `).join('');

            dropdown.classList.add('show');
        },

        hideSearchDropdown() {
            const dropdown = document.getElementById('searchDropdown');
            if (dropdown) dropdown.classList.remove('show');
        },

        selectCustomer(customerName, appointmentId) {
            // Set the new search input value
            const el = document.getElementById('appointments-search');
            if (el) el.value = customerName;
            
            // Hide the dropdown
            this.hideSearchDropdown();
            
            // Apply filters to show only this customer
            this.applyFilters();
            
            // Highlight the selected customer in the table
            setTimeout(() => {
                this.highlightCustomerRow(appointmentId);
            }, 100);
        },

        highlightCustomerRow(appointmentId) {
            // Remove any existing highlights
            document.querySelectorAll('.appointments-table tbody tr').forEach(row => {
                row.classList.remove('highlighted');
            });

            // Find and highlight the specific row
            const targetRow = document.querySelector(`[data-appointment-id="${appointmentId}"]`);
            if (targetRow) {
                targetRow.classList.add('highlighted');
                targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Remove highlight on user interaction or after 4 seconds
                const clear = () => { targetRow.classList.remove('highlighted'); };
                ['click','keydown','mousemove'].forEach(evt => targetRow.addEventListener(evt, clear, { once: true }));
                setTimeout(clear, 4000);
            }
        },

        viewAppointment(appointmentId) {
            const appointment = this.appointments.find(apt => apt.id === appointmentId);
            if (!appointment) return;

            this.currentAppointment = appointment;
            this.populateModal(appointment);
            document.getElementById('appointmentDetailsModal').classList.remove('hidden');
        },

        populateModal(appointment) {
            // Customer Information
            document.getElementById('modal-customer-name').textContent = appointment.customerName;
            document.getElementById('modal-customer-contact').textContent = appointment.customerContact;
            document.getElementById('modal-customer-email').textContent = appointment.customerEmail;

            // Service Details
            document.getElementById('modal-service-type').textContent = this.formatServiceType(appointment.serviceType);
            document.getElementById('modal-weight').textContent = appointment.weight;
            document.getElementById('modal-duration').textContent = appointment.duration;

            // Appointment Schedule
            document.getElementById('modal-date').textContent = this.formatDateShort(appointment.appointmentDate);
            document.getElementById('modal-time').textContent = appointment.appointmentTime;
            document.getElementById('modal-address').textContent = appointment.location;

            // Payment Information
            document.getElementById('modal-service-cost').textContent = `₱${appointment.serviceCost}`;
            
            // Show delivery fee only for Urgello locations
            const deliveryFeeElement = document.getElementById('modal-delivery-fee');
            const deliveryFeeLabel = deliveryFeeElement.parentElement.querySelector('strong');
            if (this.isUrgelloLocation(appointment.location)) {
                deliveryFeeElement.textContent = 'Free Delivery';
                deliveryFeeLabel.textContent = 'Delivery: ';
            } else {
                deliveryFeeElement.textContent = 'Customer Pickup';
                deliveryFeeLabel.textContent = 'Service Mode: ';
            }
            
            document.getElementById('modal-total-amount').textContent = `₱${appointment.totalAmount}`;
            document.getElementById('modal-payment-method').textContent = `${appointment.paymentMethod.toUpperCase()} (${appointment.paymentStatus === 'pending' ? 'Unpaid' : 'Paid'})`;
            // Show GCash reference only when payment method is gcash
            const refItem = document.getElementById('modal-payment-ref-item');
            const refValue = document.getElementById('modal-payment-ref');
            if (appointment.paymentMethod === 'gcash') {
                if (refItem) refItem.style.display = '';
                if (refValue) refValue.textContent = appointment.gcashRef || 'N/A';
            } else {
                if (refItem) refItem.style.display = 'none';
                if (refValue) refValue.textContent = '';
            }
            
            const statusElement = document.getElementById('modal-payment-status');
            statusElement.textContent = appointment.paymentStatus === 'pending' ? 'UNPAID' : 'PAID';
            statusElement.className = `status-badge ${appointment.paymentStatus}`;

            // Notes
            document.getElementById('modal-notes').textContent = appointment.notes || 'No additional notes provided.';

            // Set current status in update form
            document.getElementById('newPaymentStatus').value = appointment.orderStatus;
        },

        updateOrderStatus() {
            const newStatus = document.getElementById('newPaymentStatus').value;
            const notes = document.getElementById('paymentNotes').value;

            if (this.currentAppointment) {
                // Update the appointment
                const appointmentIndex = this.appointments.findIndex(apt => apt.id === this.currentAppointment.id);
                if (appointmentIndex !== -1) {
                    this.appointments[appointmentIndex].orderStatus = newStatus;
                    
                    // Show success notification
                    this.showNotification(
                        `Status updated to ${newStatus.toUpperCase()} for ${this.currentAppointment.customerName}`,
                        'success'
                    );

                    // Refresh the display
                    this.applyFilters();
                    this.updateStats();

                    // Close modals
                    document.getElementById('updatePaymentModal').classList.add('hidden');
                    document.getElementById('appointmentDetailsModal').classList.add('hidden');

                    // Clear form
                    document.getElementById('paymentNotes').value = '';
                }
            }
        },



        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        },

        formatDateShort(dateString) {
            const date = new Date(dateString);
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const year = String(date.getFullYear()).slice(-2);
            return `${month}/${day}/${year}`;
        },

        isUrgelloLocation(location) {
            return location && location.toLowerCase().includes('urgello');
        },

        formatServiceType(serviceType) {
            const serviceMap = {
                'wash': 'Wash',
                'dry-fold': 'Dry & Fold',
                'wash-dry-fold': 'Wash, Dry & Fold',
                'premium': 'Dry Clean'
            };
            return serviceMap[serviceType] || serviceType;
        },

        showNotification(message, type = 'info') {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="close-notification">&times;</button>
            `;

            // Add styles if not already added
            if (!document.querySelector('#notification-styles')) {
                const style = document.createElement('style');
                style.id = 'notification-styles';
                style.textContent = `
                    .notification {
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: white;
                        border-radius: 8px;
                        padding: 15px 20px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        z-index: 10000;
                        max-width: 400px;
                        animation: slideIn 0.3s ease;
                        border-left: 4px solid #87CEEB;
                    }
                    .notification.success { border-left-color: #28a745; }
                    .notification.error { border-left-color: #dc3545; }
                    .notification.info { border-left-color: #17a2b8; }
                    .notification i { color: #87CEEB; }
                    .notification.success i { color: #28a745; }
                    .notification.error i { color: #dc3545; }
                    .notification.info i { color: #17a2b8; }
                    .close-notification {
                        background: none;
                        border: none;
                        font-size: 1.2em;
                        cursor: pointer;
                        color: #999;
                        margin-left: auto;
                    }
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
            }

            // Add close functionality
            notification.querySelector('.close-notification').addEventListener('click', () => {
                notification.remove();
            });

            document.body.appendChild(notification);

            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 5000);
        }
    };

    // Initialize appointments system when appointments section is loaded
    const appointmentsNavHandler = document.querySelector('.nav-item[data-section="appointments"]');
    if (appointmentsNavHandler) {
        appointmentsNavHandler.addEventListener('click', () => {
            setTimeout(() => {
                appointmentsSystem.init();
            }, 100);
        });
    }

    // Make appointmentsSystem globally accessible for onclick handlers
    window.appointmentsSystem = appointmentsSystem;

    // Services Management System
    const servicesSystem = {
        // Service pricing data structure
        servicesPricing: {
            'hand-wash': { name: 'Hand Wash', price: 35, unit: '/kg' },
            'wash-dry-fold': { name: 'Wash, Dry & Fold', price: 25, unit: '/kg' },
            'wash-dry-iron': { name: 'Wash and Dry & Iron', price: 75, unit: '/kg' },
            'dry-clean': { name: 'Dry Clean', price: 0, unit: 'bulk' },
            'wash': { name: 'Wash', price: 75, unit: '/kg' },
            'tshirt-blouse-shorts': { name: 'T-shirts, Blouse, Shorts', price: 25, unit: '/kg' },
            'bedsheets-pants-jeans': { name: 'Bed Sheets, Pants, Jeans, Towels, Jackets', price: 40, unit: '/kg' },
            'uniform-hand-wash': { name: 'Uniforms Hand Wash w/ Dry Press', price: 75, unit: '/kg' },
            'uniform-wash': { name: 'Uniforms Wash w/ Dry Press', price: 60, unit: '/kg' },
            'comforter-blankets': { name: 'Comforter / Thick Blankets', price: 60, unit: '/kg' },
            'backpacks': { name: 'Backpacks', price: 200, unit: '/pc' },
            'shoes': { name: 'Shoes', price: 150, unit: '/pair' }
        },

        currentEditingService: null,

        init() {
            this.bindEvents();
            this.loadServicesPricing();
        },

        bindEvents() {
            // Price edit form submission
            const priceEditForm = document.getElementById('priceEditForm');
            if (priceEditForm) {
                priceEditForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.saveServicePrice();
                });
            }

            // Modal close events
            document.addEventListener('click', (e) => {
                if (e.target.id === 'priceEditModal') {
                    this.closePriceEditModal();
                }
            });

            // Escape key to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closePriceEditModal();
                }
            });
        },

        loadServicesPricing() {
            // Load pricing from localStorage if available
            const savedPricing = localStorage.getItem('servicesPricing');
            if (savedPricing) {
                this.servicesPricing = { ...this.servicesPricing, ...JSON.parse(savedPricing) };
                this.updatePricingDisplay();
            }
        },

        saveServicesPricing() {
            // Save pricing to localStorage (simulating API call)
            localStorage.setItem('servicesPricing', JSON.stringify(this.servicesPricing));
            
            // Simulate API call to mobile app backend
            console.log('Pricing updated and synced to mobile app:', this.servicesPricing);
            
            // Show success notification
            this.showNotification('Prices updated successfully! Changes will reflect in the mobile app.', 'success');
        },

        editPrice(serviceId, serviceName, currentPrice, currentUnit) {
            this.currentEditingService = serviceId;
            
            // Define service items for each service
            const serviceItems = {
                'hand-wash': [
                    { name: 'T-shirts, Blouse, Shorts', price: 35, unit: '/kg' },
                    { name: 'Bed Sheets, Pants, Jeans, Towels, Jackets', price: 40, unit: '/kg' },
                    { name: 'Uniforms Hand Wash w/ Dry Press', price: 75, unit: '/kg' },
                    { name: 'Uniforms Wash w/ Dry Press', price: 60, unit: '/kg' },
                    { name: 'Comforter', price: 60, unit: '/kg' },
                    { name: 'Backpacks', price: 200, unit: '/pc' },
                    { name: 'Shoes', price: 200, unit: '/pair' }
                ],
                'wash-dry-fold': [
                    { name: 'T-shirts, Blouse, Shorts', price: 25, unit: '/kg' },
                    { name: 'Bed Sheets, Pants, Jeans, Towels, Jackets', price: 40, unit: '/kg' },
                    { name: 'Uniforms Hand Wash w/ Dry Press', price: 75, unit: '/kg' },
                    { name: 'Uniforms Wash w/ Dry Press', price: 60, unit: '/kg' },
                    { name: 'Comforter', price: 60, unit: '/kg' },
                    { name: 'Backpacks', price: 200, unit: '/pc' },
                    { name: 'Shoes', price: 200, unit: '/pair' }
                ],
                'wash-dry-iron': [
                    { name: 'T-shirts, Blouse, Shorts', price: 25, unit: '/kg' },
                    { name: 'Bed Sheets, Pants, Jeans, Towels, Jackets', price: 40, unit: '/kg' },
                    { name: 'Uniforms Hand Wash w/ Dry Press', price: 75, unit: '/kg' },
                    { name: 'Uniforms Wash w/ Dry Press', price: 60, unit: '/kg' },
                    { name: 'Comforter', price: 60, unit: '/kg' },
                    { name: 'Backpacks', price: 200, unit: '/pc' },
                    { name: 'Shoes', price: 200, unit: '/pair' }
                ],
                'dry-clean': [
                    { name: 'T-shirts, Blouse, Shorts', price: 25, unit: '/kg' },
                    { name: 'Bed Sheets, Pants, Jeans, Towels, Jackets', price: 40, unit: '/kg' },
                    { name: 'Uniforms Hand Wash w/ Dry Press', price: 75, unit: '/kg' },
                    { name: 'Uniforms Wash w/ Dry Press', price: 60, unit: '/kg' },
                    { name: 'Comforter', price: 60, unit: '/kg' },
                    { name: 'Backpacks', price: 200, unit: '/pc' },
                    { name: 'Shoes', price: 200, unit: '/pair' }
                ],
                'wash': [
                    { name: 'T-shirts, Blouse, Shorts', price: 25, unit: '/kg' },
                    { name: 'Bed Sheets, Pants, Jeans, Towels, Jackets', price: 40, unit: '/kg' },
                    { name: 'Uniforms Hand Wash w/ Dry Press', price: 75, unit: '/kg' },
                    { name: 'Uniforms Wash w/ Dry Press', price: 60, unit: '/kg' },
                    { name: 'Comforter', price: 60, unit: '/kg' },
                    { name: 'Backpacks', price: 200, unit: '/pc' },
                    { name: 'Shoes', price: 200, unit: '/pair' }
                ]
            };
            
            // Populate item dropdown
            const itemSelect = document.getElementById('serviceItem');
            itemSelect.innerHTML = '';
            
            if (serviceItems[serviceId]) {
                serviceItems[serviceId].forEach(item => {
                    const option = document.createElement('option');
                    option.value = JSON.stringify(item);
                    option.textContent = item.name;
                    itemSelect.appendChild(option);
                });
            }
            
            // Clear price and unit fields initially
            document.getElementById('servicePrice').value = '';
            document.getElementById('serviceUnit').value = '/kg';
            
            // Show modal
            document.getElementById('priceEditModal').classList.remove('hidden');
            
            // Focus on item selection
            setTimeout(() => {
                document.getElementById('serviceItem').focus();
            }, 100);
        },

        loadItemPrice() {
            const itemSelect = document.getElementById('serviceItem');
            const selectedValue = itemSelect.value;
            
            if (selectedValue) {
                try {
                    const itemData = JSON.parse(selectedValue);
                    document.getElementById('servicePrice').value = itemData.price;
                    document.getElementById('serviceUnit').value = itemData.unit;
                } catch (error) {
                    console.error('Error parsing item data:', error);
                    document.getElementById('servicePrice').value = '';
                    document.getElementById('serviceUnit').value = '/kg';
                }
            } else {
                // Clear fields if no item selected
                document.getElementById('servicePrice').value = '';
                document.getElementById('serviceUnit').value = '/kg';
            }
        },

        saveServicePrice() {
            const serviceId = this.currentEditingService;
            const selectedItem = document.getElementById('serviceItem').value;
            const newPrice = parseFloat(document.getElementById('servicePrice').value);
            const newUnit = document.getElementById('serviceUnit').value;
            
            if (!serviceId || !selectedItem || isNaN(newPrice) || newPrice < 0) {
                this.showNotification('Please select an item and enter a valid price.', 'error');
                return;
            }

            try {
                const itemData = JSON.parse(selectedItem);
                const itemName = itemData.name;
                
                // Update the specific service item in the dropdown
                this.updateServiceItemPrice(serviceId, itemName, newPrice, newUnit);
                
                // Show success notification
                this.showNotification(`Price updated for ${itemName}`, 'success');
                
                // Close modal
                this.closePriceEditModal();
            } catch (error) {
                console.error('Error updating service price:', error);
                this.showNotification('Error updating price. Please try again.', 'error');
            }
        },

        updateServiceItemPrice(serviceId, itemName, newPrice, newUnit) {
            // Find the service item in the dropdown and update its onclick attribute
            const serviceItems = document.querySelectorAll(`#${serviceId}-items .service-item`);
            serviceItems.forEach(item => {
                if (item.textContent.trim() === itemName) {
                    item.setAttribute('onclick', `selectServiceItem('${serviceId}', '${itemName}', ${newPrice}, '${newUnit}')`);
                }
            });
        },

        updateServiceRow(serviceId, newPrice, newUnit) {
            const row = document.querySelector(`tr[data-service="${serviceId}"]`);
            if (row) {
                const priceCell = row.querySelector('.price-cell');
                const unitCell = row.children[2];
                const editBtn = row.querySelector('.edit-btn');
                
                if (newUnit === 'bulk') {
                    priceCell.textContent = 'Bulk Pricing';
                    unitCell.textContent = '-';
                } else {
                    priceCell.textContent = `₱${newPrice}`;
                    unitCell.textContent = newUnit;
                }
                
                // Update edit button onclick
                const serviceName = this.servicesPricing[serviceId].name;
                editBtn.setAttribute('onclick', `editPrice('${serviceId}', '${serviceName}', ${newPrice}, '${newUnit}')`);
            }
        },

        updatePricingDisplay() {
            // Update all service rows with saved pricing
            Object.keys(this.servicesPricing).forEach(serviceId => {
                const service = this.servicesPricing[serviceId];
                this.updateServiceRow(serviceId, service.price, service.unit);
            });
        },

        closePriceEditModal() {
            document.getElementById('priceEditModal').classList.add('hidden');
            this.currentEditingService = null;
            
            // Reset form
            document.getElementById('priceEditForm').reset();
        },

        showNotification(message, type = 'info') {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : type === 'warning' ? '⚠' : 'ℹ'}</span>
                    <span class="notification-message">${message}</span>
                </div>
            `;
            
            // Add styles
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#2196F3'};
                color: white;
                border: none;
                border-radius: 8px;
                padding: 15px 20px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 10000;
                max-width: 400px;
                animation: slideInRight 0.3s ease;
                font-family: Arial, sans-serif;
                font-size: 14px;
            `;
            
            // Add animation styles
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            `;
            document.head.appendChild(style);
            
            // Add to page
            document.body.appendChild(notification);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 5000);
        },

        // Export pricing data (for API integration)
        exportPricingData() {
            return {
                timestamp: new Date().toISOString(),
                pricing: this.servicesPricing
            };
        },

        // Import pricing data (from API)
        importPricingData(pricingData) {
            if (pricingData && pricingData.pricing) {
                this.servicesPricing = { ...this.servicesPricing, ...pricingData.pricing };
                this.updatePricingDisplay();
                this.saveServicesPricing();
            }
        }
    };

    // Initialize services system when services section is loaded
    const servicesNavHandler = document.querySelector('.nav-item[data-section="services"]');
    if (servicesNavHandler) {
        servicesNavHandler.addEventListener('click', () => {
            setTimeout(() => {
                servicesSystem.init();
            }, 100);
        });
    }

    // Make functions globally accessible for onclick handlers
    window.editPrice = (serviceId, serviceName, currentPrice, currentUnit) => {
        servicesSystem.editPrice(serviceId, serviceName, currentPrice, currentUnit);
    };

    window.closePriceEditModal = () => {
        servicesSystem.closePriceEditModal();
    };

    window.loadItemPrice = () => {
        servicesSystem.loadItemPrice();
    };

    // Service dropdown toggle functionality
    window.toggleServiceDropdown = (serviceId) => {
        const itemsContainer = document.getElementById(serviceId + '-items');
        const serviceHeader = itemsContainer.previousElementSibling;
        
        if (itemsContainer) {
            // Toggle the hidden class
            itemsContainer.classList.toggle('hidden');
            
            // Toggle the active class on the header for arrow rotation
            serviceHeader.classList.toggle('active');
            
            // Close other open dropdowns
            const allDropdowns = document.querySelectorAll('.service-items');
            const allHeaders = document.querySelectorAll('.service-header');
            
            allDropdowns.forEach((dropdown, index) => {
                if (dropdown !== itemsContainer && !dropdown.classList.contains('hidden')) {
                    dropdown.classList.add('hidden');
                    allHeaders[index].classList.remove('active');
                }
            });
        }
    };

    // Function to handle service item selection and update pricing
    window.selectServiceItem = (serviceType, itemName, price, unit) => {
        // Find the service row
        const serviceRow = document.querySelector(`tr[data-service="${serviceType}"]`);
        if (serviceRow) {
            // Update the price cell
            const priceCell = serviceRow.querySelector('.price-cell');
            if (priceCell) {
                priceCell.textContent = `₱${price}`;
            }
            
            // Update the unit cell
            const unitCell = serviceRow.querySelector('td:nth-child(3)');
            if (unitCell) {
                unitCell.textContent = unit;
            }
            
            // Update the edit button to reflect the selected item
            const editBtn = serviceRow.querySelector('.edit-btn');
            if (editBtn) {
                editBtn.setAttribute('onclick', `editPrice('${serviceType}', '${itemName}', ${price}, '${unit}')`);
            }
            
            // Close the dropdown after selection
            const itemsContainer = document.getElementById(serviceType + '-items');
            const serviceHeader = itemsContainer.previousElementSibling;
            if (itemsContainer) {
                itemsContainer.classList.add('hidden');
                serviceHeader.classList.remove('active');
            }
            
            // Optional: Add visual feedback for selection
            const allItems = serviceRow.querySelectorAll('.service-item');
            allItems.forEach(item => item.classList.remove('selected'));
            
            // Find and highlight the selected item
            const selectedItem = Array.from(allItems).find(item => 
                item.textContent.trim() === itemName
            );
            if (selectedItem) {
                selectedItem.classList.add('selected');
            }
        }
    };

    // Make servicesSystem globally accessible
    window.servicesSystem = servicesSystem;

    // Staff Login System (with Registration)
    const staffLoginSystem = {
        // Staff data structure
        staffAccounts: [],
        currentStaff: null,
        isLoggedIn: false,

        init() {
            console.log('Staff login system initializing...'); // Debug log
            this.loadStaffAccounts();
            this.bindEvents();
            // Show staff list view by default
            this.renderStaffListView();
            // Hide login/register containers initially and ensure table view is visible
            const loginContainer = document.getElementById('loginForm');
            const signupContainer = document.getElementById('registerForm');
            if (loginContainer) loginContainer.classList.add('hidden');
            // Keep registration hidden; only show when "Create Staff Account" is clicked
            if (signupContainer) signupContainer.classList.add('hidden');
            // Ensure list view and action bar are visible when entering Staff section
            const listView = document.getElementById('staffListView');
            const actionBar = document.getElementById('staffActionBar');
            if (listView) listView.classList.remove('hidden');
            if (actionBar) actionBar.classList.remove('hidden');
            // Apply session if present
            this.checkSession();
            console.log('Staff login system initialized'); // Debug log
        },

        bindEvents() {
            // Login form submission
            const loginForm = document.getElementById('staffLoginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleLogin();
                });
            }

            // Signup form submission
            const signupForm = document.getElementById('staffRegisterForm');
            if (signupForm) {
                console.log('Signup form found, adding event listener'); // Debug log
                signupForm.addEventListener('submit', (e) => {
                    console.log('Signup form submitted'); // Debug log
                    e.preventDefault();
                    this.handleSignup();
                });
            } else {
                console.log('Signup form not found'); // Debug log
            }

            // Toggle to signup form
            const showSignupLink = document.getElementById('showRegister');
            if (showSignupLink) {
                showSignupLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showSignupForm();
                });
            }

            // Toggle to login form
            const showLoginLink = document.getElementById('showLogin');
            if (showLoginLink) {
                showLoginLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showLoginForm();
                });
            }

            // Forgot password link
            const forgotPasswordLink = document.getElementById('forgotPassword');
            if (forgotPasswordLink) {
                forgotPasswordLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showForgotPasswordModal();
                });
            }

            // Forgot password form
            const forgotPasswordForm = document.getElementById('forgotPasswordForm');
            if (forgotPasswordForm) {
                forgotPasswordForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleForgotPassword();
                });
            }

            // Modal close events
            document.addEventListener('click', (e) => {
                if (e.target.id === 'forgotPasswordModal') {
                    this.closeModals();
                }
            });

            // Escape key to close modals
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeModals();
                }
            });
        },

        checkSession() {
            // Check if user is already logged in
            const savedSession = localStorage.getItem('staffSession');
            if (savedSession) {
                const session = JSON.parse(savedSession);
                const now = new Date().getTime();
                
                // Check if session is still valid (24 hours)
                if (now - session.timestamp < 24 * 60 * 60 * 1000) {
                    this.currentStaff = session.staff;
                    this.isLoggedIn = true;
                    // Update sidebar/menu access based on restored session role
                    const role = (session.staff && session.staff.role) ? session.staff.role : 'Staff';
                    this.updateSidebarAccess(role);
                    this.showSuccessMessage();
                    return;
                }
            }
            
            // Keep list view visible when no session; restrict dashboard by default
            this.updateSidebarAccess('Staff');
        },

        handleLogin() {
            // Clear previous error messages
            this.clearErrorMessages();
            
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;

            let hasErrors = false;

            // Validation for each field
            if (!username) {
                this.showFieldError('loginUsername', 'Username is required.');
                hasErrors = true;
            }

            if (!password) {
                this.showFieldError('loginPassword', 'Password is required.');
                hasErrors = true;
            }

            if (hasErrors) {
                return;
            }

            // Find staff account
            const staff = this.staffAccounts.find(s => s.username === username);
            if (!staff) {
                this.showFieldError('loginUsername', 'Invalid username or password.');
                return;
            }

            // Verify password
            if (!this.verifyPassword(password, staff.password)) {
                this.showFieldError('loginPassword', 'Invalid username or password.');
                return;
            }

            // Login successful
            this.currentStaff = staff;
            this.isLoggedIn = true;
            
            // Save session
            this.saveSession();
            // Update sidebar/menu access based on staff role
            this.updateSidebarAccess(staff.role || 'Staff');
            
            // Show success message
            this.showSuccessMessage();
            
            this.showNotification(`Welcome back, ${staff.fullName}!`, 'success');
        },



        saveSession() {
            const session = {
                staff: this.currentStaff,
                timestamp: new Date().getTime()
            };
            localStorage.setItem('staffSession', JSON.stringify(session));
        },

        logout() {
            this.currentStaff = null;
            this.isLoggedIn = false;
            localStorage.removeItem('staffSession');
            const profileView = document.getElementById('staffProfileView');
            if (profileView) profileView.remove();
            const listView = document.getElementById('staffListView');
            if (listView) listView.remove();
            this.clearForms();
            // Restore default admin access in UI
            this.updateSidebarAccess('Admin');
            // After logout, keep table visible; registration only via button
            const loginContainer = document.getElementById('loginForm');
            const signupContainer = document.getElementById('registerForm');
            if (loginContainer) loginContainer.classList.add('hidden');
            if (signupContainer) signupContainer.classList.add('hidden');
            this.renderStaffListView();
            this.showNotification('Logged out successfully.', 'success');
        },

        showSignupForm() {
            const loginContainer = document.getElementById('loginForm');
            const signupContainer = document.getElementById('registerForm');
            const listView = document.getElementById('staffListView');
            const actionBar = document.getElementById('staffActionBar');
            
            if (loginContainer) loginContainer.classList.add('hidden');
            if (signupContainer) signupContainer.classList.remove('hidden');
            if (listView) listView.classList.add('hidden');
            if (actionBar) actionBar.classList.add('hidden');
        },

        // Login view is deprecated; redirect to signup visibility instead
        showLoginForm() {
            const loginContainer = document.getElementById('loginForm');
            const signupContainer = document.getElementById('registerForm');
            const listView = document.getElementById('staffListView');
            const actionBar = document.getElementById('staffActionBar');

            if (loginContainer) loginContainer.classList.add('hidden');
            if (signupContainer) signupContainer.classList.remove('hidden');
            if (listView) listView.classList.add('hidden');
            if (actionBar) actionBar.classList.add('hidden');
        },

        handleSignup() {
            console.log('handleSignup called'); // Debug log
            
            // Clear previous error messages
            this.clearErrorMessages();
            
            const fullName = document.getElementById('fullName')?.value.trim() || '';
            const username = document.getElementById('username')?.value.trim() || '';
            const contact = document.getElementById('emailOrPhone')?.value.trim() || '';
            const password = document.getElementById('password')?.value || '';
            const confirmPassword = document.getElementById('confirmPassword').value;

            console.log('Form values:', { fullName, username, email, password: password ? '***' : '', confirmPassword: confirmPassword ? '***' : '' }); // Debug log

            let hasErrors = false;

            // Validation for each field
            if (!fullName) {
                this.showFieldError('fullName', 'Full name is required.');
                hasErrors = true;
            }

            if (!username) {
                this.showFieldError('username', 'Username is required.');
                hasErrors = true;
            }

            if (!contact) {
                this.showFieldError('emailOrPhone', 'Email or phone number is required.');
                hasErrors = true;
            } else if (!(this.isValidEmail(contact) || this.isValidPhone(contact))) {
                this.showFieldError('emailOrPhone', 'Enter a valid email or phone number.');
                hasErrors = true;
            }

            if (!password) {
                this.showFieldError('password', 'Password is required.');
                hasErrors = true;
            } else if (password.length < 6) {
                this.showFieldError('password', 'Password must be at least 6 characters long.');
                hasErrors = true;
            }

            if (!confirmPassword) {
                this.showFieldError('confirmPassword', 'Please confirm your password.');
                hasErrors = true;
            } else if (password !== confirmPassword) {
                this.showFieldError('confirmPassword', 'Passwords do not match.');
                hasErrors = true;
            }

            // Check if username already exists
            if (username && this.staffAccounts.find(s => s.username === username)) {
                this.showFieldError('username', 'Username already exists.');
                hasErrors = true;
            }

            // Check if contact already exists (email or phone)
            if (contact && this.staffAccounts.find(s => (s.email === contact || s.contact === contact))) {
                this.showFieldError('emailOrPhone', 'This contact is already registered.');
                hasErrors = true;
            }

            if (hasErrors) {
                return;
            }

            // Create new staff account (with default role)
            const newStaff = {
                id: this.staffAccounts.length + 1,
                fullName,
                username,
                email: this.isValidEmail(contact) ? contact : null,
                contact: this.isValidEmail(contact) ? null : contact,
                password: this.hashPassword(password),
                role: 'Staff',
                joinDate: new Date().toISOString().split('T')[0],
                status: 'Active'
            };

            // Add to staff accounts
            this.staffAccounts.push(newStaff);
            this.saveStaffAccounts();

            // Clear form and show success
            document.getElementById('staffRegisterForm').reset();
            this.showNotification('Account created successfully!', 'success');
            
            // Return to list view and show the newly added account
            setTimeout(() => {
                const signupContainer = document.getElementById('registerForm');
                const loginContainer = document.getElementById('loginForm');
                if (signupContainer) signupContainer.classList.add('hidden');
                if (loginContainer) loginContainer.classList.add('hidden');
                const listView = document.getElementById('staffListView');
                if (listView) listView.classList.remove('hidden');
                this.renderStaffListView();
                this.showNotification('Staff account created and added to the directory.', 'success');
            }, 800);
        },

        // Helpers for validation and errors (scoped to staff system)
        clearErrorMessages() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => { msg.textContent = ''; });
            const errorInputs = document.querySelectorAll('input.error');
            errorInputs.forEach(input => input.classList.remove('error'));
        },

        showFieldError(fieldId, message) {
            const field = document.getElementById(fieldId);
            if (!field) return;
            field.classList.add('error');
            // Prefer a sibling error placeholder if present
            const siblingError = field.parentElement.querySelector('.error-message');
            if (siblingError) {
                siblingError.textContent = message;
                return;
            }
            // Fallback: insert a temporary error div
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        },

        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        isValidPhone(phone) {
            const cleaned = phone.replace(/[^0-9]/g, '');
            return cleaned.length >= 10; // basic check for phone-like input
        },

        hashPassword(plain) {
            // Simple hash substitute for demo purposes
            return btoa(unescape(encodeURIComponent(`sl:${plain}:pepper`)));
        },

        verifyPassword(plain, hashed) {
            return this.hashPassword(plain) === hashed;
        },

        // Role-based sidebar visibility and role label update
        updateSidebarAccess(role) {
            const isAdmin = String(role || '').toLowerCase() === 'admin';
            const dashboardItem = document.querySelector('.nav-menu .nav-item[data-section="dashboard"]');
            if (dashboardItem) {
                if (isAdmin) {
                    dashboardItem.classList.remove('hidden');
                } else {
                    dashboardItem.classList.add('hidden');
                }
            }

            // Update profile dropdown label
            const roleLabel = document.querySelector('.profile-dropdown .dropdown-toggle span');
            if (roleLabel) {
                roleLabel.textContent = isAdmin ? 'Admin' : 'Staff';
            }

            // If not admin, ensure Dashboard content is not shown and redirect to Appointments
            if (!isAdmin) {
                const appointmentsNav = document.querySelector('.nav-item[data-section="appointments"]');
                if (appointmentsNav) {
                    // Use existing navigation handler for consistent behavior
                    appointmentsNav.click();
                } else {
                    // Fallback: manually switch sections if nav not found
                    const dashboardSection = document.getElementById('dashboard');
                    const appointmentsSection = document.getElementById('appointments');
                    if (dashboardSection) dashboardSection.classList.add('hidden');
                    if (appointmentsSection) appointmentsSection.classList.remove('hidden');
                    if (typeof window.appointmentsSystem !== 'undefined' && window.appointmentsSystem && typeof window.appointmentsSystem.init === 'function') {
                        try { window.appointmentsSystem.init(); } catch (e) { /* noop */ }
                    }
                }
            }
        },

        showSuccessMessage() {
            const loginContainer = document.getElementById('loginForm');
            const signupContainer = document.getElementById('registerForm');
            if (loginContainer) loginContainer.classList.add('hidden');
            if (signupContainer) signupContainer.classList.add('hidden');
            if (this.currentStaff) {
                this.renderStaffListView();
            }
        },

        renderStaffListView() {
            const staffSection = document.getElementById('staff');
            if (!staffSection) return;

            let listView = document.getElementById('staffListView');
            if (!listView) {
                listView = document.createElement('div');
                listView.id = 'staffListView';
                // Use a neutral list container, not the login card styles
                listView.className = 'staff-list-container';
                staffSection.appendChild(listView);
            } else {
                // Ensure we don't keep the login container styling
                listView.className = 'staff-list-container';
            }

            // Render action bar inside list container so it aligns with table width

            // Build rows for all registered staff (exclude Admin accounts)
            const rows = (this.staffAccounts || [])
                .filter(s => {
                    const role = String(s.role || 'Staff').toLowerCase();
                    const uname = String(s.username || '').toLowerCase();
                    return role !== 'admin' && uname !== 'admin';
                })
                .map(s => {
                    const contact = s.email || s.contact || '—';
                    const role = s.role || 'Staff';
                    const status = s.status || 'Active';
                    const date = s.joinDate || s.createdDate || '—';
                    const highlight = (this.currentStaff && s.username === this.currentStaff.username) ? ' style="font-weight:600;"' : '';
                    return `
                        <tr${highlight}>
                            <td>${s.fullName}</td>
                            <td>${contact}</td>
                            <td>${s.username}</td>
                            <td>${role}</td>
                            <td>${status}</td>
                            <td>${date}</td>
                        </tr>
                    `;
                }).join('');

            listView.innerHTML = `
                <div id="staffActionBar" class="staff-action-bar">
                    <button type="button" class="form-btn create-staff-btn" id="createStaffBtn">Create Staff Account</button>
                </div>
                <div class="staff-table-container">
                    <table class="staff-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            `;

            // Wire Create button (in action bar) to open registration form
            const createBtn = document.getElementById('createStaffBtn');
            if (createBtn) {
                createBtn.addEventListener('click', () => this.showSignupForm());
            }
        },

        clearForms() {
            const loginForm = document.getElementById('staffLoginForm');
            if (loginForm) loginForm.reset();
        },

        loadStaffAccounts() {
            const savedStaff = localStorage.getItem('staffAccounts');
            if (savedStaff) {
                this.staffAccounts = JSON.parse(savedStaff);
            } else {
                // Create a default admin account for testing
                this.staffAccounts = [{
                    id: 'STAFF001',
                    fullName: 'Admin User',
                    username: 'admin',
                    email: 'admin@barbershop.com',
                    password: this.hashPassword('admin123'),
                    role: 'Admin',
                    createdDate: new Date().toISOString().split('T')[0],
                    status: 'active'
                }];
                this.saveStaffAccounts();
            }
        },

        saveStaffAccounts() {
            localStorage.setItem('staffAccounts', JSON.stringify(this.staffAccounts));
        },

        showForgotPasswordModal() {
            document.getElementById('forgotPasswordModal').classList.remove('hidden');
        },

        handleForgotPassword() {
            const email = document.getElementById('resetEmail').value.trim();
            
            if (!email) {
                this.showNotification('Please enter your email address.', 'error');
                return;
            }
            
            const staff = this.staffAccounts.find(s => s.email === email);
            if (!staff) {
                this.showNotification('No account found with this email address.', 'error');
                return;
            }
            
            // Simulate sending reset email
            this.showNotification('Password reset link has been sent to your email.', 'success');
            this.closeModals();
        },

        closeModals() {
            document.getElementById('forgotPasswordModal').classList.add('hidden');
        },

        showNotification(message, type = 'info') {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            `;

            // Add styles
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
                color: ${type === 'success' ? '#155724' : '#721c24'};
                padding: 15px 20px;
                border-radius: 8px;
                border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;

            // Add animation styles
            if (!document.getElementById('notification-styles')) {
                const style = document.createElement('style');
                style.id = 'notification-styles';
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOut {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(notification);

            // Auto remove after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }
    };

    // Make staffLoginSystem globally accessible
    window.staffLoginSystem = staffLoginSystem;

    // Make staff login functions globally accessible
    window.staffLogout = () => staffLoginSystem.logout();

    // Password toggle functionality
    window.togglePasswordVisibility = (inputId) => {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(inputId + 'ToggleIcon');
        const toggleBtn = toggleIcon.parentElement;
        
        if (!passwordInput || !toggleIcon) {
            console.error('Password input or toggle icon not found');
            return;
        }
        
        // Toggle password visibility
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
            toggleBtn.classList.add('toggled');
            toggleBtn.title = 'Hide password';
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
            toggleBtn.classList.remove('toggled');
            toggleBtn.title = 'Show password';
        }
        
        // Add a subtle animation effect
        toggleIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
            toggleIcon.style.transform = 'scale(1)';
        }, 150);
        
        // Keep focus on the password input
        passwordInput.focus();
    };

    // Staff password toggle functionality (for staff login/signup forms)
    window.toggleStaffPassword = (inputId) => {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(inputId + 'Icon');
        const toggleBtn = toggleIcon ? toggleIcon.parentElement : null;
        
        if (!passwordInput) {
            console.error('Password input not found:', inputId);
            return;
        }
        
        // If no specific icon found, try to find the toggle button by class
        if (!toggleIcon) {
            const wrapper = passwordInput.closest('.password-input-wrapper');
            if (wrapper) {
                const toggleButton = wrapper.querySelector('.password-toggle');
                if (toggleButton) {
                    const icon = toggleButton.querySelector('i');
                    if (icon) {
                        // Toggle password visibility
                        if (passwordInput.type === 'password') {
                            passwordInput.type = 'text';
                            icon.classList.remove('fa-eye');
                            icon.classList.add('fa-eye-slash');
                            toggleButton.classList.add('toggled');
                            toggleButton.title = 'Hide password';
                        } else {
                            passwordInput.type = 'password';
                            icon.classList.remove('fa-eye-slash');
                            icon.classList.add('fa-eye');
                            toggleButton.classList.remove('toggled');
                            toggleButton.title = 'Show password';
                        }
                        
                        // Add animation effect
                        icon.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            icon.style.transform = 'scale(1)';
                        }, 150);
                        
                        // Keep focus on the password input
                        passwordInput.focus();
                        return;
                    }
                }
            }
        }
        
        // Fallback to original logic if icon is found
        if (toggleIcon) {
            // Toggle password visibility
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
                if (toggleBtn) {
                    toggleBtn.classList.add('toggled');
                    toggleBtn.title = 'Hide password';
                }
            } else {
                passwordInput.type = 'password';
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
                if (toggleBtn) {
                    toggleBtn.classList.remove('toggled');
                    toggleBtn.title = 'Show password';
                }
            }
            
            // Add animation effect
            toggleIcon.style.transform = 'scale(0.8)';
            setTimeout(() => {
                toggleIcon.style.transform = 'scale(1)';
            }, 150);
            
            // Keep focus on the password input
            passwordInput.focus();
        }
    };

    // Staff system functionality would be defined here if needed
    
    // Initialize dashboard on page load since it's the default active section
    dashboardSystem.init();
    
    // Initialize staff login system
    staffLoginSystem.init();

    // Initialize notifications center
    if (window.NotificationCenter && typeof window.NotificationCenter.init === 'function') {
        window.NotificationCenter.init();
    }

    // Inject a demo "NEW USER REGISTERED" notification for testing highlight
    // Adds once per browser (guarded by localStorage) and exposes a helper to re-trigger
    if (window.DEMO_NOTIFICATIONS && window.NotificationCenter && typeof window.NotificationCenter.push === 'function') {
        // Helper: manually trigger the Alice John test notification
        window.triggerTestUserRegisteredAliceJohn = function() {
            window.NotificationCenter.push({
                type: 'user_registered',
                name: 'Alice John',
                username: 'alice_john',
                email: 'alice.john@example.com',
                phone: '+63 930 111 2222',
                joinedAt: new Date().toISOString()
            });
        };
        // One-time auto trigger so you see it immediately after load
        const demoKey = 'demo_notif_alice_john_once';
        if (!localStorage.getItem(demoKey)) {
            try { window.triggerTestUserRegisteredAliceJohn(); } catch (e) { /* noop */ }
            localStorage.setItem(demoKey, '1');
        }
    }
});

/* Notifications removed per request
// Real-time Notification Center
const notificationCenter = {
    notifications: [],
    socket: null,
    icon: null,
    badge: null,
    dropdown: null,
    listEl: null,
    emptyEl: null,
    init() {
        this.icon = document.querySelector('.notification-icon');
        this.badge = document.querySelector('.notification-badge');
        this.dropdown = document.getElementById('notificationDropdown');
        this.listEl = document.getElementById('notificationsList');
        this.emptyEl = document.getElementById('notificationsEmpty');
        if (!this.icon || !this.dropdown) return;

        this.icon.addEventListener('click', (e) => {
            e.stopPropagation();
            this.dropdown.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.notification-dropdown') && !e.target.closest('.notification-icon')) {
                this.dropdown.classList.add('hidden');
            }
        });

        this.connect();
    },
    connect() {
        const wsUrl = window.NOTIFICATIONS_WS_URL || 'ws://localhost:8080/notifications';
        try {
            this.socket = new WebSocket(wsUrl);
            this.socket.onmessage = (evt) => this.handleMessage(evt.data);
            this.socket.onopen = () => console.log('Notifications connected:', wsUrl);
            this.socket.onerror = (e) => console.warn('Notifications error', e);
            this.socket.onclose = () => setTimeout(() => this.connect(), 5000);
        } catch (e) {
            console.warn('Notifications socket unavailable, using demo feed');
            this.startDemoFeed();
        }
    },
    startDemoFeed() {
        if (!window.DEMO_NOTIFICATIONS) return;
        setInterval(() => {
            const sample = Math.random() < 0.5 ?
                { type: 'appointment_created', appointmentId: Date.now(), customerName: 'Mobile User', appointmentDate: new Date().toISOString(), appointmentTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}), location: 'Cebu City', serviceType: 'Wash', totalAmount: 150, paymentMethod: 'Cash', paymentStatus: 'Pending' } :
                { type: 'user_registered', name: 'New User ' + Math.floor(Math.random() * 1000), username: 'newuser', email: 'new@example.com', phone: '+63 9XX XXX XXXX', joinedAt: new Date().toISOString() };
            this.pushNotification(sample);
        }, 15000);
    },
    handleMessage(data) {
        let payload;
        try { payload = JSON.parse(data); } catch { return; }
        this.pushNotification(payload);
    },
    pushNotification(payload) {
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const item = {
            id: Date.now(),
            type: payload.type,
            title: payload.type === 'appointment_created' ? 'New Laundry Booking' : 'New App User',
            message: payload.type === 'appointment_created' ? `${payload.customerName} booked laundry` : `${payload.name} registered`,
            time,
            data: payload,
            read: false
        };
        this.notifications.unshift(item);
        this.render();
        this.updateBadge();
        if (payload.type === 'appointment_created') this.ingestAppointment(payload);
        if (payload.type === 'user_registered') this.ingestCustomer(payload);
    },
    ingestAppointment(p) {
        if (!window.appointmentsSystem) return;
        const exists = appointmentsSystem.appointments && appointmentsSystem.appointments.some(a => a.id === p.appointmentId);
        if (!exists) {
            const apt = {
                id: p.appointmentId,
                customerName: p.customerName,
                customerContact: p.phone || '',
                customerEmail: p.email || '',
                appointmentDate: (p.appointmentDate || new Date().toISOString()).slice(0, 10),
                appointmentTime: p.appointmentTime || new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                serviceType: p.serviceType || 'Wash',
                weight: p.weight || '',
                serviceCost: p.serviceCost || p.totalAmount || 0,
                deliveryFee: p.deliveryFee || 0,
                totalAmount: p.totalAmount || 0,
                paymentMethod: p.paymentMethod || 'Cash',
                paymentStatus: p.paymentStatus || 'Pending',
                location: p.location || '',
                notes: p.notes || '',
                duration: p.duration || '',
                bookingDate: p.bookingDate || new Date().toISOString().slice(0, 10),
                serviceMode: p.serviceMode || 'delivery',
                orderStatus: p.orderStatus || 'pending'
            };
            if (!appointmentsSystem.appointments) appointmentsSystem.appointments = [];
            appointmentsSystem.appointments.push(apt);
            if (appointmentsSystem.applyFilters) appointmentsSystem.applyFilters();
        }
    },
    ingestCustomer(p) {
        if (typeof window.mockCustomers === 'undefined') return;
        const exists = mockCustomers.some(c => c.name === p.name);
        if (!exists) {
            mockCustomers.push({ name: p.name, username: p.username || '', email: p.email || '', phone: p.phone || '', joinDate: new Date(p.joinedAt || Date.now()).toLocaleDateString(), status: 'active' });
            if (typeof loadCustomers === 'function') loadCustomers('');
        }
    },
    render() {
        if (!this.listEl) return;
        this.listEl.innerHTML = '';
        if (this.notifications.length === 0) {
            if (this.emptyEl) this.emptyEl.classList.remove('hidden');
            return;
        }
        if (this.emptyEl) this.emptyEl.classList.add('hidden');
        this.notifications.slice(0, 50).forEach(n => {
            const li = document.createElement('li');
            li.className = `notification-item ${n.read ? '' : 'unread'}`;
            li.innerHTML = `
                <div class="icon ${n.type === 'appointment_created' ? 'appointment' : 'user'}">
                    <i class="fas ${n.type === 'appointment_created' ? 'fa-calendar-plus' : 'fa-user-plus'}"></i>
                </div>
                <div class="content">
                    <div class="title">${n.title}</div>
                    <div class="message">${n.message}</div>
                    <div class="time">${n.time}</div>
                </div>
            `;
            li.addEventListener('click', () => this.openDetails(n));
            this.listEl.appendChild(li);
        });
    },
    updateBadge() {
        const unread = this.notifications.filter(n => !n.read).length;
        if (this.badge) {
            if (unread > 0) {
                this.badge.textContent = String(unread);
                this.badge.style.display = 'flex';
            } else {
                this.badge.style.display = 'none';
            }
        }
    },
    openDetails(n) {
        n.read = true;
        this.updateBadge();
        if (n.type === 'appointment_created') {
            const id = n.data.appointmentId;
            if (id && window.appointmentsSystem && typeof appointmentsSystem.viewAppointment === 'function') {
                appointmentsSystem.viewAppointment(id);
            } else if (window.appointmentsSystem && appointmentsSystem.appointments && appointmentsSystem.appointments.length) {
                appointmentsSystem.populateModal(appointmentsSystem.appointments[appointmentsSystem.appointments.length - 1]);
                const modal = document.getElementById('appointmentDetailsModal');
                if (modal) modal.classList.remove('hidden');
            }
            if (this.dropdown) this.dropdown.classList.add('hidden');
        } else if (n.type === 'user_registered') {
            const customersNav = document.querySelector('.nav-item[data-section="customers"]');
            if (customersNav) customersNav.click();
            const name = n.data.name || '';
            // Clear any existing search filter to ensure the row is visible
            const input = document.getElementById('customers-search');
            if (input) {
                input.value = '';
                input.dispatchEvent(new Event('input'));
            } else if (typeof loadCustomers === 'function') {
                loadCustomers('');
            }

            // Retry highlight until the row is present (max ~1s)
            let attempts = 0;
            const tryHighlight = () => {
                const esc = escapeSelectorText(name);
                const selector = `.customers-table tbody tr[data-customer-name="${esc}"]`;
                const exists = document.querySelector(selector);
                if (exists) {
                    if (typeof highlightCustomerRowByName === 'function') {
                        highlightCustomerRowByName(name);
                    }
                } else if (attempts < 10) {
                    attempts += 1;
                    setTimeout(tryHighlight, 100);
                }
            };
            setTimeout(tryHighlight, 150);
            if (this.dropdown) this.dropdown.classList.add('hidden');
        }
    }
};
*/

// Rebuilt Notification Center
window.NotificationCenter = {
    notifications: [],
    icon: null,
    badge: null,
    dropdown: null,
    listEl: null,
    emptyEl: null,
    ws: null,
    init() {
        this.icon = document.querySelector('.notification-icon');
        this.badge = document.querySelector('.notification-badge');
        this.dropdown = document.getElementById('notificationDropdown');
        this.listEl = document.getElementById('notificationsList');
        this.emptyEl = document.getElementById('notificationsEmpty');
        const markAllBtn = document.getElementById('markAllReadBtn');
        if (!this.icon || !this.dropdown) return;

        this.icon.addEventListener('click', (e) => {
            e.stopPropagation();
            this.dropdown.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.notification-dropdown') && !e.target.closest('.notification-icon')) {
                this.dropdown.classList.add('hidden');
            }
        });
        if (markAllBtn) markAllBtn.addEventListener('click', () => this.markAllRead());

        // Show demo tester button when ?demo=1 and bind click
        const params = new URLSearchParams(window.location.search);
        const showDemo = params.get('demo') === '1';
        const demoBtn = document.getElementById('triggerDemoBtn');
        const xavierBtn = document.getElementById('triggerXavierBtn');
        if (demoBtn) {
            if (showDemo) demoBtn.classList.remove('hidden');
            demoBtn.addEventListener('click', () => {
                if (typeof window.triggerDemoNewCustomer === 'function') {
                    window.triggerDemoNewCustomer('Demo Customer');
                }
            });
        }
        if (xavierBtn) {
            if (showDemo) xavierBtn.classList.remove('hidden');
            xavierBtn.addEventListener('click', () => {
                const customer = {
                    name: 'Xavier Young',
                    username: 'xavier_y',
                    email: 'xavier.young@example.com',
                    phone: '+63 912 345 6789',
                    status: 'ACTIVE',
                    dateJoined: new Date().toISOString().slice(0, 10)
                };
                if (window.NotificationCenter && typeof window.NotificationCenter.notifyUserRegistered === 'function') {
                    window.NotificationCenter.notifyUserRegistered(customer);
                }
            });
        }

        this.connect();

        // Immediate examples disabled unless demo is enabled
        if (window.DEMO_NOTIFICATIONS) {
            this.push({
                type: 'appointment_created',
                appointmentId: 2,
                customerName: 'Juan Dela Cruz',
                appointmentDate: new Date().toISOString(),
                appointmentTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                location: 'Cebu City',
                serviceType: 'Laundry',
                totalAmount: 250,
                paymentMethod: 'Cash',
                paymentStatus: 'Pending'
            });
            this.push({
                type: 'user_registered',
                name: 'New Customer 442',
                username: 'user442',
                email: 'user442@example.com',
                phone: '+63 900 000 0442',
                joinedAt: new Date().toISOString()
            });
        }
    },
    connect() {
        const url = window.NOTIFICATIONS_WS_URL;
        if (url) {
            try {
                this.ws = new WebSocket(url);
                this.ws.onmessage = (evt) => this.handleInbound(evt.data);
                this.ws.onopen = () => console.log('Notifications connected');
                this.ws.onerror = () => this.startDemoFeed();
                this.ws.onclose = () => this.startDemoFeed();
            } catch { this.startDemoFeed(); }
        } else {
            this.startDemoFeed();
        }
    },
    startDemoFeed() {
        if (!window.DEMO_NOTIFICATIONS) return;
        if (this._demoTimer) return;
        this._demoTimer = setInterval(() => {
            const isBooking = Math.random() < 0.5;
            if (isBooking) {
                this.push({
                    type: 'appointment_created',
                    appointmentId: Date.now(),
                    customerName: 'Mobile User',
                    appointmentDate: new Date().toISOString(),
                    appointmentTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                    location: 'Cebu City',
                    serviceType: 'Wash',
                    totalAmount: 150,
                    paymentMethod: 'Cash',
                    paymentStatus: 'Pending'
                });
            } else {
                this.push({
                    type: 'user_registered',
                    name: 'New User ' + Math.floor(Math.random() * 1000),
                    username: 'newuser',
                    email: 'new@example.com',
                    phone: '+63 9XX XXX XXXX',
                    joinedAt: new Date().toISOString()
                });
            }
        }, 20000);
    },
    handleInbound(raw) {
        let payload; try { payload = JSON.parse(raw); } catch { return; }
        this.push(payload);
    },
    push(payload) {
        const ts = new Date();
        const time = ts.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        let title = '';
        let message = '';
        if (payload.type === 'appointment_created') {
            title = `New Laundry Booking: ${payload.customerName || ''}`;
            message = 'Tap to view this booking';
        } else if (payload.type === 'user_registered') {
            title = `New User Registered: ${payload.name || ''}`;
            message = 'Tap to view this customer';
        } else if (payload.type === 'customer_located') {
            title = `CUSTOMER LOCATED`;
            message = `${payload.name || 'Customer'} is already in the Customers section`;
        } else {
            title = payload.title || 'Notification';
            message = payload.message || '';
        }
        const item = {
            id: ts.getTime(),
            type: payload.type,
            title,
            message,
            time,
            data: payload,
            read: false
        };
        this.notifications.unshift(item);
        this.render();
        this.updateBadge();

        if (payload.type === 'appointment_created') this._ingestAppointment(payload);
        if (payload.type === 'user_registered') this._ingestCustomer(payload);
    },
    render() {
        if (!this.listEl) return;
        this.listEl.innerHTML = '';
        if (this.notifications.length === 0) {
            if (this.emptyEl) this.emptyEl.classList.remove('hidden');
            return;
        }
        if (this.emptyEl) this.emptyEl.classList.add('hidden');
        this.notifications.slice(0, 50).forEach((n) => {
            const li = document.createElement('li');
            li.className = `notification-item ${n.read ? '' : 'unread'}`;
            li.innerHTML = `
                <div class="icon ${n.type === 'appointment_created' ? 'appointment' : 'user'}">
                    <i class="fas ${n.type === 'appointment_created' ? 'fa-calendar-plus' : 'fa-user-plus'}"></i>
                </div>
                <div class="content">
                    <div class="title">${n.title}</div>
                    <div class="message">${n.message}</div>
                    <div class="time">${n.time}</div>
                    <div class="notification-actions">
                        <button class="notification-action" data-action="open">Open</button>
                        <button class="notification-action" data-action="read">Mark as Read</button>
                    </div>
                </div>
            `;
            li.querySelector('[data-action="open"]').addEventListener('click', (e) => { e.stopPropagation(); this.open(n); });
            li.querySelector('[data-action="read"]').addEventListener('click', (e) => { e.stopPropagation(); this.markRead(n.id); });
            li.addEventListener('click', () => this.open(n));
            this.listEl.appendChild(li);
        });
    },
    updateBadge() {
        const unread = this.notifications.filter(n => !n.read).length;
        if (!this.badge) return;
        if (unread > 0) {
            this.badge.textContent = String(unread);
            this.badge.style.display = 'flex';
        } else {
            this.badge.style.display = 'none';
        }
    },
    markRead(id) {
        const n = this.notifications.find(x => x.id === id);
        if (n) n.read = true;
        this.render();
        this.updateBadge();
    },
    markAllRead() {
        this.notifications.forEach(n => n.read = true);
        this.render();
        this.updateBadge();
    },
    open(n) {
        n.read = true;
        this.updateBadge();
        if (this.dropdown) this.dropdown.classList.add('hidden');
        if (n.type === 'appointment_created') {
            // Navigate to Appointments (do not touch the search bar)
            const nav = document.querySelector('.nav-item[data-section="appointments"]');
            if (nav) nav.click();
            const id = n.data.appointmentId;
            const name = n.data.customerName || '';

            // Ensure filters show all bookings, then find and highlight the specific customer row
            const showAndHighlight = () => {
                if (window.appointmentsSystem) {
                    const statusEl = document.getElementById('statusFilter');
                    const serviceEl = document.getElementById('serviceFilter');
                    const paymentEl = document.getElementById('paymentMethodFilter');
                    if (statusEl) statusEl.value = 'all';
                    if (serviceEl) serviceEl.value = 'all';
                    if (paymentEl) paymentEl.value = 'all';
                    if (typeof appointmentsSystem.applyFilters === 'function') {
                        appointmentsSystem.applyFilters();
                    }
                    if (name && typeof highlightAppointmentRowByName === 'function') {
                        highlightAppointmentRowByName(name);
                    } else if (id && typeof appointmentsSystem.highlightCustomerRow === 'function') {
                        appointmentsSystem.highlightCustomerRow(id);
                    }
                }
            };
            setTimeout(showAndHighlight, 250);
        } else if (n.type === 'user_registered') {
            // Navigate to Customers, ensure list is loaded and not filtered, then highlight the new user's row
            const nav = document.querySelector('.nav-item[data-section="customers"]');
            if (nav) nav.click();
            const name = n.data.name || '';
            // Clear any existing search filter to ensure the row is visible
            const input = document.getElementById('customers-search');
            if (input) {
                input.value = '';
                input.dispatchEvent(new Event('input'));
            } else if (typeof loadCustomers === 'function') {
                loadCustomers('');
            }

            // Retry highlight until the row is present (max ~1s)
            let attempts = 0;
            const tryHighlight = () => {
                const esc = escapeSelectorText(name);
                const selector = `.customers-table tbody tr[data-customer-name="${esc}"]`;
                const exists = document.querySelector(selector);
                if (exists) {
                    if (typeof highlightCustomerRowByName === 'function') {
                        highlightCustomerRowByName(name);
                    }
                    // Push a subtle confirmation notification
                    this.push({ type: 'customer_located', name });
                } else if (attempts < 10) {
                    attempts += 1;
                    setTimeout(tryHighlight, 100);
                }
            };
            setTimeout(tryHighlight, 150);
        }
    },
    _ingestAppointment(p) {
        if (!window.appointmentsSystem) return;
        const exists = appointmentsSystem.appointments && appointmentsSystem.appointments.some(a => a.id === p.appointmentId);
        if (!exists) {
            const apt = {
                id: p.appointmentId,
                customerName: p.customerName,
                customerContact: p.phone || '',
                customerEmail: p.email || '',
                appointmentDate: (p.appointmentDate || new Date().toISOString()).slice(0, 10),
                appointmentTime: p.appointmentTime || new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                serviceType: p.serviceType || 'Wash',
                weight: p.weight || '',
                serviceCost: p.serviceCost || p.totalAmount || 0,
                deliveryFee: p.deliveryFee || 0,
                totalAmount: p.totalAmount || 0,
                paymentMethod: (p.paymentMethod || 'Cash').toLowerCase(),
                paymentStatus: p.paymentStatus || 'Pending',
                location: p.location || '',
                notes: p.notes || '',
                duration: p.duration || '',
                bookingDate: p.bookingDate || new Date().toISOString().slice(0, 10),
                serviceMode: p.serviceMode || 'delivery',
                orderStatus: p.orderStatus || 'pending',
                gcashRef: p.gcashRef || p.paymentReference || ''
            };
            if (!appointmentsSystem.appointments) appointmentsSystem.appointments = [];
            appointmentsSystem.appointments.push(apt);
            if (appointmentsSystem.applyFilters) appointmentsSystem.applyFilters();
        }
    },
    _ingestCustomer(p) {
        if (typeof window.mockCustomers === 'undefined') return;
        const exists = mockCustomers.some(c => c.name === p.name);
        if (!exists) {
            mockCustomers.push({ name: p.name, username: p.username || '', email: p.email || '', phone: p.phone || '', joinDate: new Date(p.joinedAt || Date.now()).toLocaleDateString(), status: 'active' });
            if (typeof loadCustomers === 'function') loadCustomers('');
        }
    },
    notifyAppointmentCreated(appointment) { this.push({ type: 'appointment_created', ...appointment }); },
    notifyUserRegistered(user) { this.push({ type: 'user_registered', ...user }); }
};

// Demo helper: trigger a new user registration and insert into the table
// Usage: run `triggerDemoNewCustomer('Demo Customer')` in the browser console
window.triggerDemoNewCustomer = function(name = 'Demo Customer') {
    try {
        const username = name.toLowerCase().replace(/\s+/g, '_');
        const email = `${username}@example.com`;
        const payload = {
            type: 'user_registered',
            name,
            username,
            email,
            phone: '+63 999 000 0000',
            joinedAt: new Date().toISOString()
        };
        if (window.NotificationCenter && typeof window.NotificationCenter.push === 'function') {
            window.NotificationCenter.push(payload);
        }
    } catch (e) {
        console.error('Failed to trigger demo new customer:', e);
    }
};



// Map Modal Functions
function openMapModal(location) {
    const modal = document.getElementById('mapModal');
    const mapFrame = document.getElementById('mapFrame');
    const modalTitle = document.getElementById('mapModalTitle');
    
    // Set the modal title
    modalTitle.textContent = `Map: ${location}`;
    
    // Create the embedded Google Maps URL without API key
    const encodedLocation = encodeURIComponent(location);
    const mapUrl = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    
    // Set the iframe source
    mapFrame.src = mapUrl;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Add event listener to close modal when clicking outside
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeMapModal();
        }
    };
}

function closeMapModal() {
    const modal = document.getElementById('mapModal');
    const mapFrame = document.getElementById('mapFrame');
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Clear the iframe source to stop loading
    mapFrame.src = '';
    
    // Remove the click outside event listener
    modal.onclick = null;
}

// Initialize appointments system on page load for home.html
document.addEventListener('DOMContentLoaded', () => {
    // Initialize staff login system as fallback - ensure it's always initialized
    setTimeout(() => {
        if (document.getElementById('staffRegisterForm') && window.staffLoginSystem) {
            window.staffLoginSystem.init();
        }
    }, 50);
    
    // Initialize appointments if the section/table exists (search bar removed)
    if (document.getElementById('appointmentsTableBody') || document.getElementById('appointments')) {
        setTimeout(() => {
            appointmentsSystem.init();
        }, 100);
    }
});