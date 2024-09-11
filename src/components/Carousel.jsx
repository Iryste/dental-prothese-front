// import React, { useState, useEffect } from 'react';
// import '../styles/components/carousel.scss';
// import image1 from '../assets/images/car1.avif';
// import image2 from '../assets/images/car2.avif';
// import image3 from '../assets/images/car3.avif';

// const Carousel = () => {
//     const images = [image1, image2, image3];
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };


//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//         }, 6000);

//         return () => clearInterval(interval);
//     });

//     return (
//         <div className='carousel'>
//             <img src={images[currentIndex]} alt='carousel' className='carousel-image' />
//             <div className="carousel-text">
//                 <h1>DENTAL PROTHESE</h1>
//                 <p>Delphine Leclerq, prothesiste dentaire</p>
//             </div>
//         </div>
//     )
// };

// export default Carousel;


import React, { useState, useEffect } from 'react';
import '../styles/components/carousel.scss'; // Fichier de styles spécifique au carousel
import image1 from '../assets/images/car1.avif';
import image2 from '../assets/images/car2.avif';
import image3 from '../assets/images/car3.avif';

const Carousel = () => {
    const images = [image1, image2, image3]; // Liste des images
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Utilisation de useEffect pour faire défiler automatiquement les images
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(); // Change d'image toutes les 6 secondes
        }, 6000);

        return () => clearInterval(interval); // Nettoyage de l'intervalle à la fin
    }); // Dépend de currentIndex pour relancer après chaque changement d'image

    return (
        <div className='carousel'>
            <img src={images[currentIndex]} alt='carousel' className='carousel-image' />
            <div className="carousel-text">
                <h1>DENTAL PROTHÈSE</h1>
                <p>Delphine Leclerq, prothésiste dentaire</p>
            </div>
        </div>
    );
};

export default Carousel;
