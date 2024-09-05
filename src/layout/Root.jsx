import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Root = () => {
    const location =useLocation()
    console.log(location.pathname)
    return (    
        <div className='max-w-7xl mx-auto font-barlow'>
            {
                location.pathname ==='/login' || location.pathname ==='/Register' ? <></> : <Navbar/>
            }
            <Outlet/>
            {
                location.pathname ==='/login' || location.pathname ==='/Register' ? <></> : <Footer/>
            }
        </div>
    );
};

export default Root;