// admin-data.js - Data Management and CRUD Operations

// Sample data structure (replace with API calls)
let bookingsData = [
    {
        id: 1,
        clientName: 'John Doe',
        email: 'john@email.com',
        phone: '+254 712 345 678',
        package: 'Royal Package',
        date: '2024-12-25',
        teamMember: 'Felix Agwenye',
        status: 'pending'
    },
    {
        id: 2,
        clientName: 'Jane Smith',
        email: 'jane@email.com',
        phone: '+254 723 456 789',
        package: 'Premium Package',
        date: '2024-12-20',
        teamMember: 'Edwin Koech',
        status: 'confirmed'
    },
    {
        id: 3,
        clientName: 'Mike Johnson',
        email: 'mike@email.com',
        phone: '+254 734 567 890',
        package: 'Classic Package',
        date: '2024-12-15',
        teamMember: 'Meshack Mutai',
        status: 'completed'
    }
];

// Load bookings data
function loadBookings() {
    const tbody = document.querySelector('#bookings .data-table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    bookingsData.forEach(booking => {
        const row = createBookingRow(booking);
        tbody.appendChild(row);
    });
    
    updateStats();
}

// Create booking table row
function createBookingRow(booking) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>#${String(booking.id).padStart(3, '0')}</td>
        <td>${booking.clientName}</td>
        <td>${booking.email}</td>
        <td>${booking.phone}</td>
        <td>${booking.package}</td>
        <td>${formatDate(booking.date)}</td>
        <td>${booking.teamMember}</td>
        <td><span class="status-badge status-${booking.status}">${capitalizeFirst(booking.status)}</span></td>
        <td>
            <button class="action-btn" onclick="viewBooking(${booking.id})">View</button>
            <button class="action-btn delete" onclick="deleteBooking(${booking.id})">Delete</button>
        </td>
    `;
    return tr;
}

// View booking details
function viewBooking(id) {
    const booking = bookingsData.find(b => b.id === id);
    if (!booking) return;
    
    alert(`
        Booking Details:
        Client: ${booking.clientName}
        Email: ${booking.email}
        Phone: ${booking.phone}
        Package: ${booking.package}
        Date: ${booking.date}
        Team Member: ${booking.teamMember}
        Status: ${booking.status}
    `);
}

// Delete booking
function deleteBooking(id) {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    
    bookingsData = bookingsData.filter(b => b.id !== id);
    loadBookings();
    
    // Show success message
    showNotification('Booking deleted successfully', 'success');
}

// Update booking status
function updateBookingStatus(id, newStatus) {
    const booking = bookingsData.find(b => b.id === id);
    if (booking) {
        booking.status = newStatus;
        loadBookings();
        showNotification(`Booking ${newStatus}`, 'success');
    }
}

// Update statistics
function updateStats() {
    const total = bookingsData.length;
    const pending = bookingsData.filter(b => b.status === 'pending').length;
    const confirmed = bookingsData.filter(b => b.status === 'confirmed').length;
    
    // Update stat cards
    const statValues = document.querySelectorAll('.stat-value');
    if (statValues.length >= 3) {
        statValues[0].textContent = total;
        statValues[1].textContent = pending;
        statValues[2].textContent = confirmed;
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'rgba(102, 234, 102, 0.2)' : 'rgba(102, 126, 234, 0.2)'};
        color: ${type === 'success' ? '#66ea66' : '#667eea'};
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize data when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadBookings();
});

// Export data as CSV
function exportBookingsCSV() {
    let csv = 'ID,Client Name,Email,Phone,Package,Date,Team Member,Status\n';
    
    bookingsData.forEach(booking => {
        csv += `${booking.id},${booking.clientName},${booking.email},${booking.phone},${booking.package},${booking.date},${booking.teamMember},${booking.status}\n`;
    });
    
    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `keen-bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
}

// Search functionality
function searchBookings(query) {
    const filtered = bookingsData.filter(booking => 
        booking.clientName.toLowerCase().includes(query.toLowerCase()) ||
        booking.email.toLowerCase().includes(query.toLowerCase()) ||
        booking.phone.includes(query) ||
        booking.package.toLowerCase().includes(query.toLowerCase())
    );
    
    // Display filtered results
    displayFilteredBookings(filtered);
}

function displayFilteredBookings(bookings) {
    const tbody = document.querySelector('#bookings .data-table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    bookings.forEach(booking => {
        const row = createBookingRow(booking);
        tbody.appendChild(row);
    });
}