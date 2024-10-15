import React from 'react';
import image from '../../assets/images/3shape.jpg';
import useOnScreen from '../../hooks/useOnScreen.js';

const Slidethree = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <div 
        ref={ref}
        className={`image-text-container3 ${isVisible ? 'animate' : ''}`}
        >
            <div className='text-container3'><u className='slideTitle'>3SHAPE</u><br /><br />3Shape propose des scanners intra-oraux et des logiciels de conception, utilisés pour créer des prothèses, des implants et des restaurations orthodontiques. 3Shape permet aux laboratoires de concevoir des appareils dentaires numériques de manière précise et efficace.</div>
            <div className="image-container3">
                <img src={image} alt="Image Meditlink" className='image3' />
            </div>
        </div>
    )
}

export default Slidethree
