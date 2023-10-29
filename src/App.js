import "./App.css";
import LandingPage from "./components/newUI";
import AboutPage from "./components/about";
import ContactPage from './components/contact'
import TestimonialPage from "./components/testimonials";
import BookingPage from "./components/booking";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="home" Component={LandingPage}/>
          <Route path="about" Component={AboutPage}/>
          <Route path="contact" Component = {ContactPage}/>
          <Route path="bookings" Component={BookingPage}/>
          <Route path="testimonials" Component={TestimonialPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
