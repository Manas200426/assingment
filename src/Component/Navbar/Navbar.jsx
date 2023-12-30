// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-content">
    <div className="free-trial">Free Trial</div>
    <div className="extended-trial">
      <img className="trial-image" src="imgs/friend6.jpg" alt="Trial" />
      <div className="trial-days-left">2 days left</div>
      <div className="dropdown-arrow">&#9662;</div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
