import React from 'react';
import './Navbar.css';
import '../../App.css';

const Navbar = () => {
  return (
    <div>
      <div className="nav-wrapper">
        <div className="nav-left">
            <div className="logo">
                JFSS
            </div>
            <span>toggle</span>
        </div>
        <div className="nav-right">
        <div className="n-list">
            <ul className="menu-list">
                <li className="menu-item">
                    <a href="#j" className="menu-link">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#j" className="menu-link">Services</a>
                </li>
                <li className="menu-item">
                    <a href="#j" className="menu-link">Portfolio</a>
                </li>
                <li className="menu-item">
                    <a href="#j" className="menu-link">Testimonal</a>
                </li>
                <li className="menu-item">
                    <a href="#j" className="menu-link">Blog</a>
                </li>
            </ul>
        </div>
        <button className="btn n-btn">Contact Us</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar;
