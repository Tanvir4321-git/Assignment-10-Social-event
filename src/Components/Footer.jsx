import React, { use } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import logo from '../assets/wlogo.png'
import { Authcontext } from './Context/Authcontext';

const Footer = () => {
  const { user} = use(Authcontext)
  const links = <>

    <li><Link to='/'>Home</Link></li>

    <li><Link to='/upcoming-events'>Upcoming Events</Link></li>
    <li><Link to='/about'>About</Link></li>
    {
      user &&   <li><Link to='/createevent'>Create Event</Link></li>
    }
  

  </>

  return (
    <footer className="footer footer-horizontal footer-center bg-[#123938]  text-base-content rounded p-10">
      <img className='w-[100px] md:w-[120px] 2xl:w-[200px]' src={logo} alt="" />
      <nav className="grid grid-flow-col gap-4">

        <ul className='flex items-center gap-4 text-white'>
          {
            links
          }
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a  href='https://x.com/' target="_blank">
            <FaXTwitter color='white' size={24} />
          </a>
          <a href='https://www.youtube.com/ ' target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-red-600">

              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href='https://www.facebook.com/' target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-600">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;