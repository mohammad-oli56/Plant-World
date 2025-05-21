import React from 'react';
import Navbar from '../assets/Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../assets/Component/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className='min-h-[calc(100vh-116px)]'>
                <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'> 
            <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;