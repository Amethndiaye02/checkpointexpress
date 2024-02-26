// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/services">Nos services</Link></li>
        <li><Link to="/contact">Nous contacter</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
