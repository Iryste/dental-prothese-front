import React from 'react';
import image from '../../assets/images/CFAO.jpg';
import useOnScreen from '../../hooks/useOnScreen.js';

const Slideone = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    
    return (
        <div 
            ref={ref}
            className={`image-text-container1 ${isVisible ? 'animate' : ''}`}
            >
            <div className='text-container1'><u>CFAO</u><br /><br />Les méthodologies CFAO en prothèse conjointe permettent de concevoir et de réaliser des restaurations dento-prothétiques. Les tissus dentaires à restaurer sont modélisés par numérisation et la prothèse est modélisée directement assemblée virtuellement sur le modèle numérisé.</div>
            <div className="image-container1">
                <img src={image} alt="Image CFAO" className='image1' />
            </div>
        </div>
    );
};

export default Slideone;