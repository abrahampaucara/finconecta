import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;