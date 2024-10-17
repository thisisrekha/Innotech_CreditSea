// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/user">User Dashboard</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/verifier">Verifier Page</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
