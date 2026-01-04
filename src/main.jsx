import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import { router } from './Ruter/Ruter.jsx';
import { ToastContainer } from 'react-toastify';
import Authprovider from './Components/Context/Authprovider.jsx';

import { ThemeProvider } from 'next-themes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider attribute='class' defaultTheme='light'>
   <Authprovider>
    <RouterProvider router={router} />
   </Authprovider>
    </ThemeProvider>
        <ToastContainer />
  </StrictMode>,
)
