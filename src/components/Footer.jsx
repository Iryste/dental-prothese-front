import React from 'react';
import '../styles/components/footer.scss';


const Footer = ({ className }) => {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} VotreEntreprise. Tous droits réservés.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;