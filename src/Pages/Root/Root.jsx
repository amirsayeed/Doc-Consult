import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar/>
            <div className='max-w-7xl mx-auto min-h-[calc(100vh-296px)] my-10'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;