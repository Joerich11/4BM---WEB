// Dashboard Analytics JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Chart instances for updates
    let appUserChart;
    let revenueTrendChart;
    let customerTrendChart;
    
    // Sample data for the dashboard
    const dashboardData = {
        kpi: {
            revenue: {
                wash: { current: 45250, previous: 42100, change: 7.5 },
                handwash: { current: 28900, previous: 31200, change: -7.4 },
                washDryFold: { current: 67800, previous: 59300, change: 14.3 },
                washDryIron: { current: 52400, previous: 48900, change: 7.2 }
            },
            customers: {
                wash: { current: 342, previous: 318, change: 7.5 },
                handwash: { current: 189, previous: 205, change: -7.8 },
                washDryFold: { current: 456, previous: 398, change: 14.6 },
                washDryIron: { current: 298, previous: 276, change: 8.0 }
            },
            appUsers: { current: 1847, previous: 1692, change: 9.2 },
            laundryStatus: {
                pending: { current: 127, previous: 145, change: -12.4 },
                processing: { current: 89, previous: 76, change: 17.1 },
                completed: { current: 2456, previous: 2298, change: 6.9 }
            }
        },
        gauges: {
            revenuePerformance: 87.5,
            customerGrowth: 1847, // User count instead of percentage
            pendingCompletedRatio: 78.9
        }
    };

    // Initialize all dashboard components
    initializeGaugeCharts();
    initializeTrendCharts();
    
    // Gauge Charts Implementation
    function initializeGaugeCharts() {
        // Compute user count based on Customers section
        let userCount = 0;
        try {
            if (typeof window.getCustomerCount === 'function') {
                userCount = window.getCustomerCount();
            } else {
                const tbody = document.getElementById('customers-table-body');
                userCount = tbody ? tbody.querySelectorAll('tr').length : 0;
            }
        } catch { userCount = 0; }

        // Revenue Performance Gauge
        createGaugeChart('revenueGauge', dashboardData.gauges.revenuePerformance, 'Revenue Performance', '#3498db');
        
        // Customer Growth Gauge
        window.userGaugeChart = createGaugeChart('customerGrowthGauge', userCount, 'User', '#2ecc71');
        
        // Pending vs Completed Ratio Gauge
        createGaugeChart('ratioGauge', dashboardData.gauges.pendingCompletedRatio, 'Completion Rate', '#f39c12');

        // Keep the user gauge in sync when the Customers table changes
        const tbody = document.getElementById('customers-table-body');
        if (tbody) {
            const observer = new MutationObserver(() => {
                const count = tbody.querySelectorAll('tr').length;
                if (window.userGaugeChart && typeof window.userGaugeChart.destroy === 'function') {
                    window.userGaugeChart.destroy();
                }
                window.userGaugeChart = createGaugeChart('customerGrowthGauge', count, 'User', '#2ecc71');
            });
            observer.observe(tbody, { childList: true });
        }
    }
    
    function createGaugeChart(canvasId, value, label, color) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        // Special handling for user count (customerGrowthGauge)
        const isUserCount = canvasId === 'customerGrowthGauge';
        const chartValue = isUserCount ? 92.3 : value; // Use fixed percentage for chart display
        const displayValue = isUserCount ? value : value; // Use actual value for display
        
        const chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [chartValue, 100 - chartValue],
                    backgroundColor: [color, '#e9ecef'],
                    borderWidth: 0,
                    cutout: '75%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                elements: {
                    arc: {
                        borderRadius: 8
                    }
                }
            },
            plugins: [{
                beforeDraw: function(chart) {
                    const width = chart.width;
                    const height = chart.height;
                    const ctx = chart.ctx;
                    
                    ctx.restore();
                    const fontSize = (height / 114).toFixed(2);
                    ctx.font = `bold ${fontSize}em Montserrat, sans-serif`;
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '#1e3c72';
                    
                    const text = isUserCount ? `${displayValue}` : `${displayValue}%`;
                    const textX = Math.round((width - ctx.measureText(text).width) / 2);
                    const textY = height / 2;
                    
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        });
        return chartInstance;
    }
    
    // Trend Charts Implementation
    function initializeTrendCharts() {
        // Revenue Trend Chart
        createRevenueTrendChart();
        
        // Customer Trend Chart
        createCustomerTrendChart();
        
        // App User Trend Chart
        createAppUserTrendChart();
        
        // Status Comparison Chart
        createStatusComparisonChart();
    }
    
    function createRevenueTrendChart() {
        const ctx = document.getElementById('revenueTrendChart');
        if (!ctx) return;
        
        // Build datasets from Appointments section (weekly totals)
        const weeklyAgg = (function deriveWeeklyRevenue() {
            const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            const series = {
                'Wash': [0, 0, 0, 0],
                'Handwash': [0, 0, 0, 0],
                'Wash, Dry & Fold': [0, 0, 0, 0],
                'Wash, Dry & Iron': [0, 0, 0, 0],
                'Dry Clean': [0, 0, 0, 0]
            };

            const mapService = (raw) => {
                const s = String(raw || '').toLowerCase();
                if (s.includes('hand')) return 'Handwash';
                if (s.includes('iron')) return 'Wash, Dry & Iron';
                if (s.includes('fold')) return 'Wash, Dry & Fold';
                if (s.includes('dry') && s.includes('clean')) return 'Dry Clean';
                if (s.includes('premium')) return 'Dry Clean';
                return 'Wash';
            };

            try {
                const appts = (window.appointmentsSystem && Array.isArray(window.appointmentsSystem.appointments))
                    ? window.appointmentsSystem.appointments
                    : [];
                appts.forEach(a => {
                    const amount = Number(a.totalAmount || ((a.serviceCost || 0) + (a.deliveryFee || 0)) || 0);
                    const date = new Date(a.appointmentDate || Date.now());
                    const day = Number.isFinite(date.getDate()) ? date.getDate() : 1;
                    const weekIdx = Math.max(0, Math.min(3, Math.floor((day - 1) / 7)));
                    const key = mapService(a.serviceType);
                    series[key][weekIdx] += amount;
                });
            } catch {}

            return { labels, series };
        })();

        revenueTrendChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weeklyAgg.labels,
                datasets: [
                    {
                        label: 'Wash',
                        data: weeklyAgg.series['Wash'],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Handwash',
                        data: weeklyAgg.series['Handwash'],
                        borderColor: '#2ecc71',
                        backgroundColor: 'rgba(46, 204, 113, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Wash, Dry & Fold',
                        data: weeklyAgg.series['Wash, Dry & Fold'],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Wash, Dry & Iron',
                        data: weeklyAgg.series['Wash, Dry & Iron'],
                        borderColor: '#f39c12',
                        backgroundColor: 'rgba(243, 156, 18, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Dry Clean',
                        data: weeklyAgg.series['Dry Clean'],
                        borderColor: '#9b59b6',
                        backgroundColor: 'rgba(155, 89, 182, 0.1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 6,
                            font: {
                                size: 11
                            },
                            boxWidth: 10,
                            boxHeight: 10
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        // Auto-scale to nearest 5k above max value
                        suggestedMax: (function() {
                            const all = Object.values(weeklyAgg.series).flat();
                            const max = Math.max(5000, ...all);
                            const bucket = Math.ceil(max / 5000) * 5000;
                            return bucket;
                        })(),
                        ticks: {
                            callback: function(value) {
                                return '₱' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        // Expose refresh hook
        window.refreshRevenueChart = function() {
            try { revenueTrendChart.destroy(); } catch {}
            createRevenueTrendChart();
        };
        const timeframe = document.getElementById('revenueTimeframe');
        if (timeframe) timeframe.addEventListener('change', () => window.refreshRevenueChart && window.refreshRevenueChart());
    }
    
    function createCustomerTrendChart() {
        const ctx = document.getElementById('customerTrendChart');
        if (!ctx) return;
        
        // Derive weekly counts from Appointments section
        const weeklyAgg = (function deriveWeeklyCounts() {
            const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            const series = {
                'Wash': [0, 0, 0, 0],
                'Handwash': [0, 0, 0, 0],
                'Wash, Dry & Fold': [0, 0, 0, 0],
                'Wash, Dry & Iron': [0, 0, 0, 0],
                'Dry Clean': [0, 0, 0, 0]
            };

            const mapService = (raw) => {
                const s = String(raw || '').toLowerCase();
                if (s.includes('hand')) return 'Handwash';
                if (s.includes('iron')) return 'Wash, Dry & Iron';
                if (s.includes('fold')) return 'Wash, Dry & Fold';
                if (s.includes('dry') && s.includes('clean')) return 'Dry Clean';
                if (s.includes('premium')) return 'Dry Clean';
                return 'Wash';
            };

            try {
                const appts = (window.appointmentsSystem && Array.isArray(window.appointmentsSystem.appointments))
                    ? window.appointmentsSystem.appointments
                    : [];
                appts.forEach(a => {
                    const date = new Date(a.appointmentDate || Date.now());
                    const day = Number.isFinite(date.getDate()) ? date.getDate() : 1;
                    const weekIdx = Math.max(0, Math.min(3, Math.floor((day - 1) / 7)));
                    const key = mapService(a.serviceType);
                    series[key][weekIdx] += 1;
                });
            } catch {}

            return { labels, series };
        })();

        customerTrendChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: weeklyAgg.labels,
                datasets: [
                    {
                        label: 'Wash',
                        data: weeklyAgg.series['Wash'],
                        backgroundColor: '#3498db'
                    },
                    {
                        label: 'Handwash',
                        data: weeklyAgg.series['Handwash'],
                        backgroundColor: '#2ecc71'
                    },
                    {
                        label: 'Wash, Dry & Fold',
                        data: weeklyAgg.series['Wash, Dry & Fold'],
                        backgroundColor: '#e74c3c'
                    },
                    {
                        label: 'Wash, Dry & Iron',
                        data: weeklyAgg.series['Wash, Dry & Iron'],
                        backgroundColor: '#f39c12'
                    },
                    {
                        label: 'Dry Clean',
                        data: weeklyAgg.series['Dry Clean'],
                        backgroundColor: '#9b59b6'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 6,
                            font: {
                                size: 11
                            },
                            boxWidth: 10,
                            boxHeight: 10
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: false
                    },
                    y: {
                        beginAtZero: true,
                        // Auto-scale to nearest 10 above max count
                        suggestedMax: (function() {
                            const all = Object.values(weeklyAgg.series).flat();
                            const max = Math.max(10, ...all);
                            const bucket = Math.ceil(max / 10) * 10;
                            return bucket;
                        })()
                    }
                }
            }
        });

        // Expose refresh hook
        window.refreshCustomerChart = function() {
            try { customerTrendChart.destroy(); } catch {}
            createCustomerTrendChart();
        };
        const timeframe = document.getElementById('customerTimeframe');
        if (timeframe) timeframe.addEventListener('change', () => window.refreshCustomerChart && window.refreshCustomerChart());
    }
    
    function createAppUserTrendChart() {
        const ctx = document.getElementById('appUserTrendChart');
        if (!ctx) return;
        
        appUserChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Active Users',
                    data: [45, 78, 123, 156],
                    borderColor: '#9b59b6',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#9b59b6',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 8,
                            font: {
                                size: 11
                            },
                            boxWidth: 8,
                            boxHeight: 8
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 200
                    }
                }
            }
        });
    }
    
    function createStatusComparisonChart() {
        const ctx = document.getElementById('statusComparisonChart');
        if (!ctx) return;
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Pending',
                        data: [145, 132, 128, 127],
                        backgroundColor: '#e74c3c'
                    },
                    {
                        label: 'Processing',
                        data: [76, 82, 85, 89],
                        backgroundColor: '#f39c12'
                    },
                    {
                        label: 'Completed',
                        data: [2298, 2356, 2398, 2456],
                        backgroundColor: '#2ecc71'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true
                    }
                }
            }
        });
    }
    

    

    
    // Timeframe selection for charts
    const timeframeSelects = document.querySelectorAll('.timeframe-select');
    timeframeSelects.forEach(select => {
        select.addEventListener('change', function() {
            const chartType = this.dataset.chart;
            const timeframe = this.value;
            updateChartTimeframe(chartType, timeframe);
        });
    });
    
    function updateChartTimeframe(chartType, timeframe) {
        if (chartType === 'user' && appUserChart) {
            let labels, data, maxValue;
            
            switch (timeframe) {
                case 'daily':
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    data = [23, 34, 45, 56, 67, 78];
                    maxValue = 100;
                    break;
                case 'weekly':
                    labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
                    data = [45, 78, 123, 156];
                    maxValue = 200;
                    break;
                case 'monthly':
                    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    data = [120, 135, 148, 162, 175, 189, 203, 218, 232, 245, 267, 289];
                    maxValue = 300;
                    break;
                default:
                    return;
            }
            
            // Update chart data
            appUserChart.data.labels = labels;
            appUserChart.data.datasets[0].data = data;
            appUserChart.options.scales.y.max = maxValue;
            appUserChart.update();
        } else if (chartType === 'revenue' && revenueTrendChart) {
            let labels, maxValue;
            let datasets = [];
            
            switch (timeframe) {
                case 'daily':
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    maxValue = 15000;
                    datasets = [
                        {
                            label: 'Wash',
                            data: [2800, 3200, 3600, 4100, 4500, 4800],
                            borderColor: '#3498db',
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Handwash',
                            data: [1800, 2100, 2400, 2700, 3000, 3200],
                            borderColor: '#2ecc71',
                            backgroundColor: 'rgba(46, 204, 113, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Wash, Dry & Fold',
                            data: [3500, 4200, 4800, 5400, 6000, 6500],
                            borderColor: '#e74c3c',
                            backgroundColor: 'rgba(231, 76, 60, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Wash, Dry & Iron',
                            data: [2900, 3400, 3900, 4400, 4900, 5300],
                            borderColor: '#f39c12',
                            backgroundColor: 'rgba(243, 156, 18, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Dry Clean',
                            data: [1900, 2200, 2500, 2800, 3100, 3400],
                            borderColor: '#9b59b6',
                            backgroundColor: 'rgba(155, 89, 182, 0.1)',
                            tension: 0.4,
                            fill: true
                        }
                    ];
                    break;
                case 'weekly':
                    labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
                    maxValue = 50000;
                    datasets = [
                        {
                            label: 'Wash',
                            data: [12500, 15200, 18900, 22300],
                            borderColor: '#3498db',
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Handwash',
                            data: [8900, 11200, 13800, 16100],
                            borderColor: '#2ecc71',
                            backgroundColor: 'rgba(46, 204, 113, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Wash, Dry & Fold',
                            data: [18500, 22800, 28200, 32500],
                            borderColor: '#e74c3c',
                            backgroundColor: 'rgba(231, 76, 60, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Wash, Dry & Iron',
                            data: [15200, 18900, 23400, 27100],
                            borderColor: '#f39c12',
                            backgroundColor: 'rgba(243, 156, 18, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Dry Clean',
                            data: [9800, 12500, 15800, 18200],
                            borderColor: '#9b59b6',
                            backgroundColor: 'rgba(155, 89, 182, 0.1)',
                            tension: 0.4,
                            fill: true
                        }
                    ];
                    break;
                case 'monthly':
                    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    maxValue = 100000;
                    datasets = [
                        {
                            label: 'Wash',
                            data: [38000, 42000, 39000, 45000, 43000, 47000, 45250, 48500, 51200, 54800, 58300, 62100],
                            borderColor: '#3498db',
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Handwash',
                            data: [32000, 29000, 31000, 28000, 30000, 32000, 28900, 31500, 34200, 37800, 41200, 44900],
                            borderColor: '#2ecc71',
                            backgroundColor: 'rgba(46, 204, 113, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Wash, Dry & Fold',
                            data: [55000, 58000, 62000, 59000, 65000, 68000, 67800, 71200, 75800, 79500, 83200, 87600],
                            borderColor: '#e74c3c',
                            backgroundColor: 'rgba(231, 76, 60, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Wash, Dry & Iron',
                            data: [45000, 47000, 49000, 46000, 51000, 53000, 52400, 55800, 59200, 62700, 66100, 69800],
                            borderColor: '#f39c12',
                            backgroundColor: 'rgba(243, 156, 18, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Dry Clean',
                            data: [28000, 31000, 29500, 33000, 35000, 37000, 38750, 41200, 44800, 48300, 52100, 55900],
                            borderColor: '#9b59b6',
                            backgroundColor: 'rgba(155, 89, 182, 0.1)',
                            tension: 0.4,
                            fill: true
                        }
                    ];
                    break;
                default:
                    return;
            }
            
            // Update chart data
            revenueTrendChart.data.labels = labels;
            revenueTrendChart.data.datasets = datasets;
            revenueTrendChart.options.scales.y.max = maxValue;
            revenueTrendChart.update();
        } else if (chartType === 'customer' && customerTrendChart) {
            let labels, maxValue;
            let datasets = [];
            
            switch (timeframe) {
                case 'daily':
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    maxValue = 50;
                    datasets = [
                        {
                            label: 'Wash',
                            data: [12, 15, 18, 22, 25, 28],
                            backgroundColor: '#3498db'
                        },
                        {
                            label: 'Handwash',
                            data: [8, 10, 12, 15, 18, 20],
                            backgroundColor: '#2ecc71'
                        },
                        {
                            label: 'Wash, Dry & Fold',
                            data: [18, 22, 26, 30, 34, 38],
                            backgroundColor: '#e74c3c'
                        },
                        {
                            label: 'Wash, Dry & Iron',
                            data: [14, 17, 20, 24, 28, 32],
                            backgroundColor: '#f39c12'
                        },
                        {
                            label: 'Dry Clean',
                            data: [6, 8, 10, 12, 15, 18],
                            backgroundColor: '#9b59b6'
                        }
                    ];
                    break;
                case 'weekly':
                    labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
                    maxValue = 300;
                    datasets = [
                        {
                            label: 'Wash',
                            data: [125, 142, 156, 178],
                            backgroundColor: '#3498db'
                        },
                        {
                            label: 'Handwash',
                            data: [89, 98, 112, 125],
                            backgroundColor: '#2ecc71'
                        },
                        {
                            label: 'Wash, Dry & Fold',
                            data: [189, 212, 234, 267],
                            backgroundColor: '#e74c3c'
                        },
                        {
                            label: 'Wash, Dry & Iron',
                            data: [145, 167, 189, 198],
                            backgroundColor: '#f39c12'
                        },
                        {
                            label: 'Dry Clean',
                            data: [78, 89, 98, 112],
                            backgroundColor: '#9b59b6'
                        }
                    ];
                    break;
                case 'monthly':
                    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    maxValue = 1000;
                    datasets = [
                        {
                            label: 'Wash',
                            data: [450, 520, 480, 580, 550, 620, 590, 650, 720, 780, 850, 920],
                            backgroundColor: '#3498db'
                        },
                        {
                            label: 'Handwash',
                            data: [320, 290, 310, 280, 300, 320, 290, 315, 342, 378, 412, 449],
                            backgroundColor: '#2ecc71'
                        },
                        {
                            label: 'Wash, Dry & Fold',
                            data: [550, 580, 620, 590, 650, 680, 678, 712, 758, 795, 832, 876],
                            backgroundColor: '#e74c3c'
                        },
                        {
                            label: 'Wash, Dry & Iron',
                            data: [450, 470, 490, 460, 510, 530, 524, 558, 592, 627, 661, 698],
                            backgroundColor: '#f39c12'
                        },
                        {
                            label: 'Dry Clean',
                            data: [280, 310, 295, 330, 350, 370, 387, 412, 448, 483, 521, 559],
                            backgroundColor: '#9b59b6'
                        }
                    ];
                    break;
                default:
                    return;
            }
            
            // Update chart data
            customerTrendChart.data.labels = labels;
            customerTrendChart.data.datasets = datasets;
            customerTrendChart.options.scales.y.max = maxValue;
            customerTrendChart.update();
        } else {
            // For other chart types, just log for now
            console.log(`Updating ${chartType} chart to ${timeframe} view`);
        }
    }
});