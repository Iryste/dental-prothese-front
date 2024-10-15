import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../assets/images/dental-logo-nobg.png'

const Nav = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <img src={logo1} alt="" className='logo1'/>
                </li>
                <li>
                    <NavLink to="/" exact activeClassName="active">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/prestations" activeClassName="active">Prestations</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;