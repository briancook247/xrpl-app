// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 0,
        }}
      >
        <li>
          <Link to="/home" style={navLinkStyles}>
            <FontAwesomeIcon icon={faHome} style={iconStyles} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/account" style={navLinkStyles}>
            <FontAwesomeIcon icon={faUser} style={iconStyles} />
            Account
          </Link>
        </li>
        <li>
          <Link to="/market" style={navLinkStyles}>
            <FontAwesomeIcon icon={faShoppingCart} style={iconStyles} />
            Market
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navLinkStyles = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: '10px 20px',
  color: '#fff',
  borderRadius: '10px',
  transition: 'background-color 0.3s, transform 0.2s',
};

const iconStyles = {
  marginRight: '8px',
};

export default Navbar;
