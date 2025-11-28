<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search Debug Test</title>
    <link rel="stylesheet" href="home.css">
    <style>
        body { padding: 20px; font-family: Arial, sans-serif; }
        .debug-info { background: #f0f0f0; padding: 10px; margin: 10px 0; border-radius: 5px; }
        .test-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .test-table th, .test-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        .test-table th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Search Functionality Debug Test</h1>
    
    <div class="debug-info">
        <h3>Debug Information:</h3>
        <div id="debugInfo">Loading...</div>
    </div>

    <!-- Search Bar -->
    <div class="search-group">
        <i class="fas fa-search"></i>
        <input type="text" id="appointmentSearch" placeholder="Search by customer name..." autocomplete="off">
        <div class="search-dropdown" id="searchDropdown"></div>
    </div>

    <!-- Test Table -->
    <table class="test-table">
        <thead>
            <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody id="appointmentsTableBody">
            <!-- Will be populated by JavaScript -->
        </tbody>
    </table>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
    <script>
        // Debug logging function
        function debugLog(message) {
            console.log('[DEBUG]', message);
            const debugDiv = document.getElementById('debugInfo');
            debugDiv.innerHTML += '<br>' + new Date().toLocaleTimeString() + ': ' + message;
        }

        // Test data
        const testAppointments = [
            { customerName: 'Diego Morales', serviceType: 'Wash', paymentStatus: 'paid', location: '321 Capitol Site, Cebu City', customerContact: '09123456789' },
            { customerName: 'Carmen Valdez', serviceType: 'Dry Clean', paymentStatus: 'pending', location: '654 Urgello Extension, Urgello, Cebu City', customerContact: '09234567890' },
            { customerName: 'Fernando Silva', serviceType: 'Wash, Dry & Fold', paymentStatus: 'paid', location: '789 Lahug Road, Lahug, Cebu City', customerContact: '09345678901' }
        ];

        // Simple appointments system for testing
        const testAppointmentsSystem = {
            appointments: testAppointments,
            filteredAppointments: [],

            init() {
                debugLog('Initializing test appointments system...');
                this.filteredAppointments = [...this.appointments];
                this.renderAppointments();
                this.bindEvents();
                debugLog('Test appointments system initialized successfully');
            },

            bindEvents() {
                debugLog('Binding events...');
                const searchInput = document.getElementById('appointmentSearch');
                if (searchInput) {
                    debugLog('Search input found, adding event listener');
                    searchInput.addEventListener('input', (e) => {
                        debugLog('Search input event triggered with value: "' + e.target.value + '"');
                        this.handleSearch(e.target.value);
                    });
                } else {
                    debugLog('ERROR: Search input not found!');
                }
            },

            handleSearch(searchTerm) {
                debugLog('handleSearch called with term: "' + searchTerm + '"');
                
                if (searchTerm.length === 0) {
                    debugLog('Empty search term, hiding dropdown and applying filters');
                    this.hideSearchDropdown();
                    this.applyFilters();
                    return;
                }

                if (searchTerm.length >= 2) {
                    debugLog('Search term >= 2 characters, showing suggestions');
                    this.showSearchSuggestions(searchTerm);
                }
                
                debugLog('Applying filters...');
                this.applyFilters();
            },

            applyFilters() {
                debugLog('applyFilters called');
                const searchTerm = document.getElementById('appointmentSearch').value.toLowerCase();
                debugLog('Current search term: "' + searchTerm + '"');

                this.filteredAppointments = this.appointments.filter(appointment => {
                    const matchesSearch = appointment.customerName.toLowerCase().includes(searchTerm) ||
                                        appointment.customerContact.includes(searchTerm) ||
                                        appointment.location.toLowerCase().includes(searchTerm);
                    return matchesSearch;
                });

                debugLog('Filtered appointments count: ' + this.filteredAppointments.length);
                this.renderAppointments();
            },

            renderAppointments() {
                debugLog('renderAppointments called');
                const tbody = document.getElementById('appointmentsTableBody');
                if (!tbody) {
                    debugLog('ERROR: Table body not found!');
                    return;
                }

                tbody.innerHTML = this.filteredAppointments.map(appointment => `
                    <tr>
                        <td>${appointment.customerName}</td>
                        <td>${appointment.serviceType}</td>
                        <td>${appointment.paymentStatus}</td>
                        <td>${appointment.location}</td>
                    </tr>
                `).join('');

                debugLog('Rendered ' + this.filteredAppointments.length + ' appointments');
            },

            showSearchSuggestions(searchTerm) {
                debugLog('showSearchSuggestions called with: "' + searchTerm + '"');
                const dropdown = document.getElementById('searchDropdown');
                if (!dropdown) {
                    debugLog('ERROR: Search dropdown not found!');
                    return;
                }

                const matches = this.appointments.filter(appointment => 
                    appointment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    appointment.customerContact.includes(searchTerm) ||
                    appointment.location.toLowerCase().includes(searchTerm.toLowerCase())
                );

                debugLog('Found ' + matches.length + ' matches for suggestions');

                if (matches.length > 0) {
                    dropdown.innerHTML = matches.slice(0, 5).map(appointment => `
                        <div class="search-dropdown-item" onclick="testAppointmentsSystem.selectCustomer('${appointment.customerName}')">
                            <div class="customer-name">${appointment.customerName}</div>
                            <div class="customer-details">${appointment.customerContact} • ${appointment.location}</div>
                        </div>
                    `).join('');
                    dropdown.classList.add('show');
                    debugLog('Dropdown shown with suggestions');
                } else {
                    dropdown.classList.remove('show');
                    debugLog('No matches found, hiding dropdown');
                }
            },

            hideSearchDropdown() {
                debugLog('hideSearchDropdown called');
                const dropdown = document.getElementById('searchDropdown');
                if (dropdown) {
                    dropdown.classList.remove('show');
                }
            },

            selectCustomer(customerName) {
                debugLog('selectCustomer called with: "' + customerName + '"');
                const searchInput = document.getElementById('appointmentSearch');
                if (searchInput) {
                    searchInput.value = customerName;
                    this.hideSearchDropdown();
                    this.applyFilters();
                }
            }
        };

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            debugLog('DOM loaded, initializing test system...');
            testAppointmentsSystem.init();
        });

        // Make globally accessible
        window.testAppointmentsSystem = testAppointmentsSystem;
    </script>
</body>
</html>