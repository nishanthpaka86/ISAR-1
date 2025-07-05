import { useState, useContext } from "react";
import './Navbar.css';
import logo from '../logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="ISAR Logo" className="logo-image" />
        <h1 className="logo">INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS</h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        {isLoggedIn ? (
          <>
            <li>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
            <li className="profile-icon">
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                <FaUserCircle size={26} title="Go to Dashboard" />
              </Link>
            </li>
          </>
        ) : (
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
