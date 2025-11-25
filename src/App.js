import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LandingText from './components/LandingText';
import { Navigation } from './components/Navigation';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <div>
<Navigation/>
<LandingText/>
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
