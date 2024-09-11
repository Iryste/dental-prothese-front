import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Layout = () => {
    return (
        <>
            <Nav />
            <Carousel />
            <Outlet />
        </>
    );
};

export default Layout;