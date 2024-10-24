// import React, { useState, useEffect } from 'react';
// import image1 from '../assets/images/Lille.jpg';
// import image2 from '../assets/images/arras.webp';
// import image3 from '../assets/images/cambrai.jpg';

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
//                 <h1>DENTAL PROTHÈSE</h1>
//                 <p>Fabrication de prothèses dentaire
//             dans les Hauts-de-France</p>
//             </div>
//         </div>
//     );
// };

// export default Carousel;



import React from 'react';
import Slider from 'react-slick';
import image1 from '../assets/images/Lille.jpg';
import image2 from '../assets/images/lille2.jpg';
import image3 from '../assets/images/cambrai.jpg';

const Carousel = () => {
    const images = [image1, image2, image3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return (
        <div className='carousel'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`carousel ${index}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
            <div className="carousel-text">
                <h1>DENTAL PROTHÈSE</h1>
                <p>Fabrication de prothèses dentaire dans les Hauts-de-France</p>
            </div>
        </div>
    );
};

export default Carousel;



