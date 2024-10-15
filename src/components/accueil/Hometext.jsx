import React from 'react';
import useOnScreen from '../../hooks/useOnScreen.js';


const Hometext = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <div
        ref={ref}
        className={`hometext-container ${isVisible ? 'animate' : ''}`}
        >
            <h1 className='hometitle'>
                Delphine Leclerc
            </h1>
            <p>Prothésiste dentaire depuis xxxx.</p>
            
            <h2 className='hometitle'>
                <i className="fa fa-building icon"></i> Le laboratoire
            </h2>
            <p>Dental Prothèse a ouvert ses portes en avril 2024 dans le Pas-de-Calais, à Noyelles-Godault.</p>
            <h3 className='hometitle'>
                <i className="fa fa-cogs icon"></i> Les technologies
            </h3>
            <p>
                J'utilise la CFAO pour une meilleure précision, une meilleure qualité et un gain de temps important.
            </p>
            <p>
                Je réceptionne également les empreintes numériques MEDIT LINK et 3SHAPE.
            </p>
        </div>
    );
};

export default Hometext;