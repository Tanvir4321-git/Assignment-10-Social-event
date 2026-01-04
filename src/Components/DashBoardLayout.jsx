import React, { use, useEffect, useRef, useState } from 'react';
import { SiGoogletagmanager } from "react-icons/si";
import { Link, Outlet, useNavigate } from 'react-router';
import { TbArrowsJoin2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Authcontext } from './Context/Authcontext';
import { useTheme } from 'next-themes';
import { toast } from 'react-toastify';
 import { FcRules } from "react-icons/fc";
const DashBoardLayout = () => {
  const { user, logOut } = use(Authcontext);
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  // theme change
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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


  const handlelogout = async () => {
    try {
      await logOut()
      navigate('/signin')
      toast('successfuly log out')
    } catch (err) {
      toast(err?.message)
    }


  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex justify-between">
          <div className='flex items-center gap-2'>

            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <h2 className="md:font-bold md:text-[16px] text-[12px] font-semibold 2xl:font-extrabold 2xl:text-[24px] bg-linear-to-r from-[#ed1b24] to-[#25aae2] bg-clip-text text-transparent">
              Social Development
            </h2>
          </div >
          {/* Dropdown */}
          <div ref={dropdownRef} className="mr-10 relative">
            <button
              onClick={() => setOpen(!open)}
              className="btn m-1"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt="user"
              />
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 menu bg-base-100 rounded-box w-52 p-2 shadow z-20">
                <li>
                  <Link onClick={handlelogout}>
                    Logout
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    Home page
                  </Link>
                </li>
                <div className="flex items-center gap-2 ml-3 mt-2">
                  Dark Mode
                  <input
                    type="checkbox"
                    className="toggle"
                    defaultChecked={theme === "dark"}
                    onChange={() =>
                      setTheme(theme === 'light' ? "dark" : 'light')
                    }
                  />
                </div>


                {/* <button onClick={()=>setTheme(theme==='light'?"dark":'light')} className="btn">{theme==='light'?"dark":'light'}</button> */}
              </ul>
            )}
          </div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link to='/'>

                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                  {/* Home icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </Link>
            </li>

            {/* List item */}
            <li className='mt-5'>
              <Link to='manage-event'>

                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 " data-tip="Manage Event">
                  {/* Settings icon */}
                  <SiGoogletagmanager />
                  <span className="is-drawer-close:hidden">Manage Event</span>
                </button>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link to='joined-event'>

                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3" data-tip="Joined Event">
                  {/* Settings icon */}

                  <TbArrowsJoin2 />

                  <span className="is-drawer-close:hidden">Joined Event</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to='terms'>

                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3" data-tip="Terms & Conditions">
                  {/* Settings icon */}

               
<FcRules />

                  <span className="is-drawer-close:hidden">Terms & Conditions</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to='profile'>

                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3" data-tip="Profile">
                  {/* Settings icon */}


                  <CgProfile />

                  <span className="is-drawer-close:hidden">Profile</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;