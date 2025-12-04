// admin-navigation.js - Dashboard Navigation

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update active menu item
    document.querySelectorAll('.admin-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active class on clicked link
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Update page title
    updatePageTitle(sectionId);
}

// Update browser title based on section
function updatePageTitle(sectionId) {
    const titles = {
        'dashboard': 'Dashboard - Keen Admin',
        'bookings': 'Bookings - Keen Admin',
        'team': 'Team Management - Keen Admin',
        'settings': 'Settings - Keen Admin'
    };
    
    document.title = titles[sectionId] || 'Admin Panel - Keen Media House';
}

// Tab switching functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Filter data based on tab (implement your filtering logic here)
            const filterType = this.textContent.toLowerCase();
            filterBookings(filterType);
        });
    });
}

// Filter bookings by status
function filterBookings(filterType) {
    const rows = document.querySelectorAll('.data-table tbody tr');
    
    if (filterType === 'all bookings') {
        rows.forEach(row => row.style.display = '');
        return;
    }
    
    rows.forEach(row => {
        const statusBadge = row.querySelector('.status-badge');
        if (statusBadge) {
            const status = statusBadge.textContent.toLowerCase();
            row.style.display = status.includes(filterType) ? '' : 'none';
        }
    });
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.section) {
            showSection(e.state.section);
        }
    });
});

// Mobile menu toggle (add if needed)
function toggleMobileMenu() {
    const menu = document.querySelector('.admin-menu');
    menu.classList.toggle('mobile-active');
}