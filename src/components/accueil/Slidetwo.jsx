// import React from 'react'
// import image from '../../assets/images/meditlink.png'

// const Slidetwo = () => {
//     return (
//         <div className='image-text-container2'>
//             <div className="image-container2">
//                 <img src={image} alt="Image Meditlink" className='image2' />
//             </div>
//             <div className='text-container2'><u>MEDIT LINK</u><br /><br />Medit Link permet aux professionnels de la santé dentaire de numériser, d'organiser, et de partager des données de scans intra-oraux. La plateforme centralise les informations des patients et facilite la communication entre dentistes et laboratoires en permettant l'envoi et la réception de fichiers numériques pour la création de prothèses, appareils orthodontiques et autres traitements dentaires. </div>
//         </div>
//     )
// }

// export default Slidetwo


import React from 'react';
import image from '../../assets/images/meditlink.png';
import useOnScreen from '../../hooks/useOnScreen.js';

const Slidetwo = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`image-text-container2 ${isVisible ? 'animate' : ''}`}
        >
            <div className="image-container2">
                <img src={image} alt="Image Meditlink" className="image2" />
            </div>
            <div className="text-container2">
            <u className='slideTitle'>MEDIT LINK</u><br /><br />Medit Link permet aux professionnels de la santé dentaire de numériser, d'organiser, et de partager des données de scans intra-oraux. La plateforme centralise les informations des patients et facilite la communication entre dentistes et laboratoires en permettant l'envoi et la réception de fichiers numériques pour la création de prothèses, appareils orthodontiques et autres traitements dentaires.
            </div>
        </div>
    );
};

export default Slidetwo;

