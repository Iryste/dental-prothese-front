import React from 'react';

const Footer = ({ className }) => {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <div className="footer-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.1487364465384!2d2.9898812769497045!3d50.41970038957688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2ccc593716da9%3A0xdd4b4aff0291a8bc!2s21%20Rue%20Emile%20Zola%2C%2062950%20Noyelles-Godault!5e0!3m2!1sfr!2sfr!4v1728950102539!5m2!1sfr!2sfr"
                    ></iframe>
                </div>

                <div className="footer-address">
                    <p>21 rue Émile Zola, 62950 Noyelles-Godault</p>
                </div>

                <div className="footer-hours">
                    <p>Du lundi au vendredi de 08h00 à 12h30 et de 13h30 à 18h30</p>
                </div>

                <div className="footer-delivery">
                    <p>Livraisons : un passage par jour ouvrable</p>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Dental Prothèse. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
