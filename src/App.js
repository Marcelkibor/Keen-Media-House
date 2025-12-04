import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LandingText from './components/LandingText';
import { Navigation } from './components/Navigation';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
  );
}

<Router>
    <Routes>
      <Route path="/" 
       element={
            <>
              <Navigation />
              <LandingText />
              <Services />
              <Portfolio />
              <Team />
              <Testimonials />
              <Booking />
              <Footer />
            </>
          } 
      />
       <Route path="/admin" element={<Admin/>} />
    </Routes>
  </Router>