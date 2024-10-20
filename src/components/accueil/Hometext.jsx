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
                Delphine Leclercq
            </h1>
            <p className='homedesc'>Prothésiste dentaire depuis 2001.</p>
            
            <h2 className='hometitle'>
                <i className="fa fa-building icon"></i> Le laboratoire
            </h2>
            <p className='homedesc'>Dental Prothèse a ouvert ses portes en avril 2024 dans le Pas-de-Calais, à Noyelles-Godault.</p>
            <h3 className='hometitle'>
                <i className="fa fa-cogs icon"></i> Les technologies
            </h3>
            <p className='homedesc'>
                J'utilise la CFAO pour une meilleure précision, une meilleure qualité et un gain de temps important.
            </p>
            <p className='homedesc'>
                Je réceptionne également les empreintes numériques MEDIT LINK et 3SHAPE.
            </p>
        </div>
    );
};

export default Hometext;