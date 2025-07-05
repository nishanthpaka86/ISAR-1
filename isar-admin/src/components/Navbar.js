// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo1.png'; // adjust the path as needed


const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  const handleLogout = () => {
    localStorage.removeItem('admin');
    setIsLoggedIn(false);
    setMenuOpen(false); // Close menu on logout
    navigate('/');
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="admin-navbar">
      
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" onClick={() => navigate('/dashboard')} />
        <span className="navbar-brand" onClick={() => handleNavigate('/dashboard')}>
          Admin Panel
        </span>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li onClick={() => handleNavigate('/dashboard')}>Dashboard</li>
        <li onClick={() => handleNavigate('/users')}>Users</li>
        <li onClick={() => handleNavigate('/enrollments')}>Enrollments</li>
        <li onClick={() => handleNavigate('/payments')}>Payments</li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
