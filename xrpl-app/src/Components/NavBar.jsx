import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './navbar.css'; // Import the CSS file


const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li>
          <Link to="/home" style={navLinkStyles} className="nav-link">
            <FontAwesomeIcon icon={faHome} style={iconStyles} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/account" style={navLinkStyles} className="nav-link">
            <FontAwesomeIcon icon={faUser} style={iconStyles} />
            Account
          </Link>
        </li>
        <li>
          <Link to="/market" style={navLinkStyles} className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} style={iconStyles} />
            Market
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#1a1a1a', // Dark background for the navbar
  color: '#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const navLinkStyles = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#fff',
  borderRadius: '5px',
  padding: '10px 20px',
  transition: 'background-color 0.3s, transform 0.2s',
};

const iconStyles = {
  marginRight: '8px',
  color: '#61dafb', // Vibrant blue for icons
};

export default Navbar;
