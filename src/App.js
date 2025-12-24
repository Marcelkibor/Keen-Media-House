import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LandingText from './components/LandingText';
import { Navigation } from './components/Navigation';
import about from'./components/about';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <div>
<Navigation/>
<LandingText/>
<about/>
<Services/>
<Portfolio/>
<Team/>
<Testimonials/>
<Booking/>
<Footer/>

    </div>
  );
}

export default App;
<<<<<<< HEAD
=======

// ...existing code...
<script>
    // ...existing code...

    // Example: Fetch bookings and populate table
    function loadBookings() {
        fetch('/api/bookings')
            .then(response => response.json())
            .then(bookings => {
                const tbody = document.querySelector('#bookings tbody');
                tbody.innerHTML = '';
                bookings.forEach(booking => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${booking.id}</td>
                        <td>${booking.clientName}</td>
                        <td>${booking.email}</td>
                        <td>${booking.phone}</td>
                        <td>${booking.package}</td>
                        <td>${booking.date}</td>
                        <td>${booking.teamMember}</td>
                        <td><span class="status-badge status-${booking.status.toLowerCase()}">${booking.status}</span></td>
                        <td>
                            <button class="action-btn">View</button>
                            <button class="action-btn delete">Delete</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            })
    }
</script>
// ...existing code...
>>>>>>> 61ee13c (Add admin panel)
