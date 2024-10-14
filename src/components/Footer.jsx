import React from 'react';
import '../styles/components/footer.scss';


const Footer = ({ className }) => {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Dental Prothèse. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;