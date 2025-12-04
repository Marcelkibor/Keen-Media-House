// admin-auth.js - Login and Logout Functionality

// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const adminDashboard = document.getElementById('adminDashboard');
    const errorMessage = document.getElementById('errorMessage');

    // Check if user is already logged in
    checkLoginStatus();

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Authenticate user
            if (authenticateUser(username, password)) {
                // Store login status
                sessionStorage.setItem('adminLoggedIn', 'true');
                sessionStorage.setItem('adminUsername', username);
                
                // Show dashboard
                showDashboard();
                errorMessage.classList.remove('active');
            } else {
                errorMessage.classList.add('active');
                // Clear password field
                document.getElementById('password').value = '';
            }
        });
    }
});

// Authenticate User (Simple authentication - replace with backend)
function authenticateUser(username, password) {
    // Default credentials - CHANGE THESE!
    const validCredentials = {
        'admin': 'admin123',
        'manager': 'keen2024'
    };

    return validCredentials[username] === password;
}

// Show Dashboard
function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').classList.add('active');
}

// Logout Function
function logout() {
    // Clear session
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminUsername');
    
    // Show login page
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminDashboard').classList.remove('active');
    
    // Reset form
    document.getElementById('loginForm').reset();
    
    // Clear error message
    document.getElementById('errorMessage').classList.remove('active');
}

// Check Login Status
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    
    if (isLoggedIn === 'true') {
        showDashboard();
    }
}

// Auto-logout after 1 hour of inactivity
let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        logout();
        alert('You have been logged out due to inactivity.');
    }, 3600000); // 1 hour
}

// Track user activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);

// Start timer
resetInactivityTimer();