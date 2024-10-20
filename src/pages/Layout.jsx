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

import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="app-wrapper">
            <Nav />
            <Carousel />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
