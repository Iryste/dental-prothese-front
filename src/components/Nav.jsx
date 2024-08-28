import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/nav.scss';
import logo from '../assets/images/logo-nobg.png'

const Nav = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <img src={logo} alt="" className='logo'/>
                </li>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                <Link to="/prestations">Prestations</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;