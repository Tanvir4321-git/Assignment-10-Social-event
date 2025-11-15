import React, { use, useEffect, useState } from 'react';
import logo from '../assets/wlogo.png'
import { Link, NavLink } from 'react-router';
import defaultProfile from '../assets/defaultProfile.png'
import { motion } from "framer-motion";
import { Authcontext } from './Context/Authcontext';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, logOut } = use(Authcontext)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const links = <>

    <li><NavLink to='/'>Home</NavLink></li>

    <li><NavLink to='/upcoming-events'>Upcoming Events</NavLink></li>

  </>

  const handlelogout = () => {
    logOut()
      .then(() => {
        toast('log out successfully')
      })
      .catch(error => {
        toast(error.message)
      })
  }





  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);





  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };




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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
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

            {
              user ? <> <details className="dropdown ">
                <summary title={user.displayName} className="btn  m-1"><img className='w-8 cursor-pointer rounded-[50%] h-8 ' src={user.photoURL} alt="" /></summary>
                <ul className="menu z-[10] dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><Link to='/createevent'>Create Event </Link></li>
                  <li><Link to='/manageevent'>Manage Events </Link></li>
                  <li><Link to='/joinevent'>Joined Events </Link></li>

                </ul>
              </details>


                <motion.button
                  whileTap={{ scale: 0.9, y: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}

                  className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold ' onClick={handlelogout}>Log out</motion.button> </> : <motion.button
                    whileTap={{ scale: 0.9, y: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}

                    className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '><Link to='/signin'>Log in</Link></motion.button>
            }

            <div>
              Dark Mode
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem('theme') === "dark"}
                className="toggle" />

            </div>



          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;