import React from 'react';
import image from '../../assets/images/dents-home.jpeg';

const Hometext = () => {
    return (
        <div>
            <h1>Dental Prothèse</h1>
            <h2>Delphine Leclerq, Prothèsiste dentaire</h2>
            <p>Fabrication de prothèses dentaire
            dans les Hauts de France</p>
            <p className='text1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores blanditiis exercitationem sequi aspernatur labore sunt dolores accusantium! Quas, ut ipsam officia nihil aut incidunt. Aperiam, quod obcaecati. Recusandae architecto, inventore, qui corrupti corporis eum atque ipsa voluptatem, debitis dolore dignissimos libero nemo doloremque. Aut itaque minus enim quis, praesentium quae modi! Ad beatae a sapiente, corporis corrupti cum consequatur, saepe sit voluptatibus nobis magnam, qui placeat eaque atque totam.</p>

            <div className='image-text-container'>
                <p className='text-right'>Également appelée prothèse implantaire, une prothèse sur implant est une vis qui est insérée dans l’os qui supporte les dents ou l’os alvéolaire. Elle servira de racine dentaire artificielle pour soutenir correctement une prothèse fixe ou amovible.

Les prothèses sur implant sont souvent utilisées par les personnes qui ont subi une perte partielle ou totale de la dentition à cause de diverses raisons comme un accident, l’âge, une condition congénitale, ou encore une mauvaise hygiène dentaire.

Pour vous proposer des implants qui correspondent à vos attentes, HARDENT travaille avec les plus grosses compagnies d’implants dentaires, comme Straumann, Dentsply, Nobel, Zimmer Biomet.</p>
                <img src={image} alt="Description de l'image" className='image-left' />
            </div>
            <p>point google maps sur noyelles godault et pas directement sur l'adresse</p>
        </div>
    );
};

export default Hometext;