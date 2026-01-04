import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Root = () => {
    return (
        <div >
             
              <Navbar></Navbar>
           
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