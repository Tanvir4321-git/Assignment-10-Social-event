import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';

const Root = () => {
    return (
        <div>
             <header>
               <Navbar></Navbar>
            </header>
           <main>
             <Outlet></Outlet>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;