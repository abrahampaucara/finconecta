import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for Navbar styles

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="navbar-link">Dashboard</Link>
                </li>
                <li>
                    <Link to="/settings" className="navbar-link">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;