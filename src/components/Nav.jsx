// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo1 from '../assets/images/dental-logo-nobg.png'
// 
// const Nav = () => {
//     return (
//         <div className='navbar'>
//             <ul>
//                 <li>
//                     <img src={logo1} alt="Logo" className='logo1'/>
//                 </li>
//                 <li>
//                     <NavLink 
//                         to="/" 
//                         className={({ isActive }) => (isActive ? "active" : undefined)}>
//                         Accueil
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink 
//                         to="/prestations" 
//                         className={({ isActive }) => (isActive ? "active" : undefined)}>
//                         Prestations
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink 
//                         to="/contact" 
//                         className={({ isActive }) => (isActive ? "active" : undefined)}>
//                         Contact
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>
//     );
// };
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../assets/images/dental-logo-nobg.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => {
            console.log("Menu ouvert:", !prev); // Ajoutez cette ligne pour déboguer
            return !prev;
        });
    };

    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <img src={logo1} alt="Logo" className='logo1' />
                <button className='hamburger' onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>
                <ul className={`nav-links ${isOpen ? 'active' : 'collapsed'}`}>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? "active" : undefined)}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/prestations" 
                            className={({ isActive }) => (isActive ? "active" : undefined)}>
                            Prestations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => (isActive ? "active" : undefined)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// const Nav = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(prev => !prev);
//     };

//     return (
//         <div className='navbar'>
//             <div className='navbar-content'>
//                 <img src={logo1} alt="Logo" className='logo1' />
//                 <button className='hamburger' onClick={toggleMenu}>
//                     <span className='bar'></span>
//                     <span className='bar'></span>
//                     <span className='bar'></span>
//                 </button>
//                 <ul className={`nav-links ${isOpen ? 'active' : 'collapsed'}`}>
//                     <li>
//                         <NavLink 
//                             to="/" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Accueil
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/prestations" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Prestations
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/contact" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Contact
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };


// const Nav = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(prev => !prev);
//     };

//     return (
//         <div className='navbar'>
//             <div className='navbar-content'>
//                 <img src={logo1} alt="Logo" className='logo1' />
//                 <button className='hamburger' onClick={toggleMenu}>
//                     <span className='bar'></span>
//                     <span className='bar'></span>
//                     <span className='bar'></span>
//                 </button>
//                 <ul className={`nav-links ${isOpen ? '' : 'collapsed'}`}>
//                     <li>
//                         <NavLink 
//                             to="/" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Accueil
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/prestations" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Prestations
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/contact" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Contact
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const Nav = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className='navbar'>
//             <div className='navbar-content'>
//                 <img src={logo1} alt="Logo" className='logo1' />
//                 <button className='hamburger' onClick={toggleMenu}>
//                     <span className='bar'></span>
//                     <span className='bar'></span>
//                     <span className='bar'></span>
//                 </button>
//                 <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
//                     <li>
//                         <NavLink 
//                             to="/" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Accueil
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/prestations" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Prestations
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/contact" 
//                             className={({ isActive }) => (isActive ? "active" : undefined)}>
//                             Contact
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

export default Nav;