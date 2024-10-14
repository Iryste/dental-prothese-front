import React from 'react';
import Hometext from '../components/accueil/Hometext';
import Slideone from '../components/accueil/Slideone';
import Slidetwo from '../components/accueil/Slidetwo';
import Slidethree from '../components/accueil/Slidethree';

const Accueil = () => {
    return (
        <div>
            <Hometext />
            <Slideone />
            <Slidetwo />
            <Slidethree />
        </div>
    );
};

export default Accueil;