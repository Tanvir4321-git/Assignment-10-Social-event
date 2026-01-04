/* eslint-disable no-unused-vars */
import React, { use, useEffect, useState, useRef } from "react";
import logo from "../assets/wlogo.png";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import { Authcontext } from "./Context/Authcontext";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { user, logOut } = use(Authcontext);
  
  const {theme,setTheme}=useTheme()



  // // theme
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") || "light"
  // );

  // dropdown control
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const links = (

    <>

    
    
       <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/upcoming-events">Upcoming Events</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    {
      user && <>
      
      <li><NavLink to="/createevent">Create Event</NavLink></li>
      <li><NavLink to="dashboard">Dashboard</NavLink></li>
      </>
    }
      </>


     
      
    
     
     
    
  );

  // logout
  const handlelogout = () => {
    logOut()
      .then(() => toast("Log out successfully"))
      .catch((error) => toast(error.message));
  };

  // theme change
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // const handleTheme = (checked) => {
  //   setTheme(checked ? "dark" : "light");
  // };

  // outside click close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-base-100 shadow-sm   sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to="/">
            <div className="flex items-center flex-col md:flex-row">
              <img
                className="w-[100px] md:w-[120px] 2xl:w-[200px]"
                src={logo}
                alt="logo"
              />
              <h2 className="md:font-bold md:text-[16px] text-[12px] font-semibold 2xl:font-extrabold 2xl:text-[24px] bg-linear-to-r from-[#ed1b24] to-[#25aae2] bg-clip-text text-transparent">
                Social Development
              </h2>
            </div>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">

              {/* Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="btn m-1"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.photoURL}
                    alt="user"
                  />
                </button>

                {open && (
                  <ul className="absolute right-0 mt-2 menu bg-base-100 rounded-box w-52 p-2 shadow z-20">
                    <li>
                      <Link to="/createevent" onClick={() => setOpen(false)}>
                        Create Event
                      </Link>
                    </li>
                    <li>
                      <Link to="/manageevent" onClick={() => setOpen(false)}>
                        Manage Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/joinevent" onClick={() => setOpen(false)}>
                        Joined Events
                      </Link>
                    </li>

                    <div className="flex items-center gap-2 ml-3 mt-2">
                      Dark Mode
                      <input
                        type="checkbox"
                        className="toggle"
                        defaultChecked={theme === "dark"}
                        onChange={() =>
                          setTheme(theme==='light'?"dark":'light')
                        }
                      />
                    </div>
                   
               
                    {/* <button onClick={()=>setTheme(theme==='light'?"dark":'light')} className="btn">{theme==='light'?"dark":'light'}</button> */}
                  </ul>
                )}
              </div>

              {/* Logout */}
              <motion.button
                whileTap={{ scale: 0.9, y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-[#00d46f] text-white py-2 px-5 rounded-[5px] font-semibold"
                onClick={handlelogout}
              >
                Log out
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9, y: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="bg-[#00d46f] text-white py-2 px-5 rounded-[5px] font-semibold"
            >
              <Link to="/signin">Log in</Link>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
