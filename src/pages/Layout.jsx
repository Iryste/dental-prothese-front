// import React from 'react';
// import Nav from '../components/Nav';
// import { Outlet } from 'react-router-dom';
// import Carousel from '../components/Carousel';
// import Footer from '../components/Footer';

// const Layout = () => {
//     return (
//         <div className='app'>
//             <Nav />
//             <Carousel />
//             <div className='main-content'>
//                 <Outlet />
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Layout;

import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Layout = () => {
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app-wrapper">
            <Nav />
            <Carousel />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer className={showFooter ? 'show' : ''} />
        </div>
    );
};

export default Layout;
