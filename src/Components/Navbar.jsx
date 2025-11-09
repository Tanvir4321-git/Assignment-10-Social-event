import React from 'react';
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router';
import defaultProfile from '../assets/defaultProfile.png'
import { motion } from "framer-motion";
const Navbar = () => {

  const links = <>

    <li><NavLink to='/'>Home</NavLink></li>

    <li><NavLink to='/upcoming-events'>Upcoming Events</NavLink></li>

  </>



  return (
 
     <div className=" bg-base-100 shadow-sm ">
      <div className='navbar w-11/12 mx-auto'>
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links
              }
            </ul>
          </div>
          <div className='flex items-center flex-col  md:flex-row  justify-center'>
            <img className='w-[100px] md:w-[120px] 2xl:w-[200px]' src={logo} alt="" />
            <h2 className='md:font-bold md:text-[16px]  text-[12px]   font-semibold  2xl:font-extrabold 2xl:text-[24px] bg-linear-to-r from-[#ed1b24] to-[#25aae2] bg-clip-text text-transparent'>Social Development</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex items-center gap-2'>
            <details className="dropdown">
              <summary className="btn  m-1"><img className='w-8 cursor-pointer rounded-[50%] h-8 ' src={defaultProfile} alt="" /></summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><Link to='/createevent'>Create Event </Link></li>
                <li><Link to='/joinevent'>Manage Events </Link></li>
                <li><Link to='/manageevent'>Joined Events </Link></li>
                
              </ul>
            </details>
            

            <motion.button
            whileTap={{ scale: 0.9, y: 2 }}
  transition={{ type: "spring", stiffness: 400, damping: 15 }}
 
            className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '>Log out</motion.button>

            <motion.button
            whileTap={{ scale: 0.9, y: 2 }}
  transition={{ type: "spring", stiffness: 400, damping: 15 }}
 
            className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '><Link to='/signin'>Log in</Link></motion.button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;