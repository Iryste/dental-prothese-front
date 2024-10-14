import React from 'react';
import image from '../../assets/images/dents-home.jpeg';

const Hometext = () => {
    return (
        <div>
            <h1>Dental Prothèse</h1>
            <h2>Delphine Leclerq</h2>
            <p>Fabrication de prothèses dentaire
            dans les Hauts de France</p>
            <p className='text1'>Le laboratoire à ouvert en avril 2024, dans le pas de calais à Noyelles Godault. Je fabrique des
prothèses dentaires en collaboration avec les praticiens de la région.
J’utilise pour la conjointe et pour les plaques métal la CFAO (Conception et Fabrication Assistée
par Ordinateur)
Pourquoi? Meilleure précision, bonne qualité , gain de temps et c’est de la fusion laser.
Je réceptionne les empreintes numérique MEDIT LINK et 3 SHAPES
</p>

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