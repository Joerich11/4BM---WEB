<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search Test</title>
    <style>
        body { padding: 20px; font-family: Arial, sans-serif; }
        .search-group { position: relative; margin: 20px 0; }
        #appointmentSearch { 
            width: 300px; 
            padding: 10px; 
            border: 1px solid #ddd; 
            border-radius: 5px; 
        }
        .test-table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 20px; 
        }
        .test-table th, .test-table td { 
            border: 1px solid #ddd; 
            padding: 8px; 
            text-align: left; 
        }
        .test-table th { background-color: #f2f2f2; }
        .debug { 
            background: #f0f0f0; 
            padding: 10px; 
            margin: 10px 0; 
            border-radius: 5px; 
        }
    </style>
</head>
<body>
    <h1>Appointment Search Test</h1>
    
    <div class="debug" id="debugInfo">
        Search functionality test - Type in the search box below
    </div>

    <!-- Search Bar -->
    <div class="search-group">
        <input type="text" id="appointmentSearch" placeholder="Search by customer name..." autocomplete="off">
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

    <script>
        // Test data
        const testAppointments = [
            { customerName: 'Diego Morales', service: 'Wash', status: 'PAID', location: '321 Capitol Site, Cebu City' },
            { customerName: 'Carmen Valdez', service: 'Dry Clean', status: 'PENDING', location: '654 Urgello Extension, Urgello, Cebu' },
            { customerName: 'Fernando Silva', service: 'Wash, Dry & Fold', status: 'PAID', location: '789 Lahug Road, Lahug, Cebu City' },
            { customerName: 'Gabriela Santos', service: 'Dry & Fold', status: 'PENDING', location: '456 Urgello Road, Urgello, Cebu City' },
            { customerName: 'Ricardo Silva', service: 'Express Wash', status: 'PAID', location: '123 Colon Street, Cebu City' }
        ];

        let filteredAppointments = [...testAppointments];

        function debugLog(message) {
            console.log('[DEBUG]', message);
            const debugDiv = document.getElementById('debugInfo');
            debugDiv.innerHTML += '<br>' + message;
        }

        function renderAppointments() {
            const tbody = document.getElementById('appointmentsTableBody');
            tbody.innerHTML = '';
            
            filteredAppointments.forEach(appointment => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${appointment.customerName}</td>
                    <td>${appointment.service}</td>
                    <td>${appointment.status}</td>
                    <td>${appointment.location}</td>
                `;
                tbody.appendChild(row);
            });
            
            debugLog(`Rendered ${filteredAppointments.length} appointments`);
        }

        function handleSearch(searchTerm) {
            debugLog(`Search triggered with term: "${searchTerm}"`);
            
            if (!searchTerm || searchTerm.trim() === '') {
                filteredAppointments = [...testAppointments];
                debugLog('Empty search - showing all appointments');
            } else {
                const term = searchTerm.toLowerCase().trim();
                filteredAppointments = testAppointments.filter(appointment => 
                    appointment.customerName.toLowerCase().includes(term) ||
                    appointment.location.toLowerCase().includes(term)
                );
                debugLog(`Filtered to ${filteredAppointments.length} appointments matching "${term}"`);
            }
            
            renderAppointments();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            debugLog('Page loaded - initializing search test');
            
            const searchInput = document.getElementById('appointmentSearch');
            if (searchInput) {
                debugLog('Search input found - binding event listener');
                searchInput.addEventListener('input', (e) => {
                    handleSearch(e.target.value);
                });
                debugLog('Event listener bound successfully');
            } else {
                debugLog('ERROR: Search input not found!');
            }
            
            // Initial render
            renderAppointments();
        });
    </script>
</body>
</html>