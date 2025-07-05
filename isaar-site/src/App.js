import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Payment from './Components/Payment';
import Register from './Components/Register';
import UserDashboard from './Components/UserDashboard';
import ForgotPassword from './Components/ForgotPassword';
import Collaboration from './Components/Collaboration';


import './index.css';
import Signup from "./Components/Signup";
import Careers from "./Components/Careers";

function App() {
  useEffect(() => {
    document.title = "INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS";
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/collaboration" element={<Collaboration />} />
        

      </Routes>

      <Footer />
    </>
  );
}

export default App;