import React from 'react';
import email from '../assets/email.png'
import { toast } from 'react-toastify';

import { motion } from "framer-motion";

const Newsletter = () => {

const handleSubmit=(e)=>{
      e.preventDefault()
   
    toast('Successfully subscribed')
  e.target.reset()
}


    return (
<motion.div  

 className="rounded-xl "
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}

>
  <div className='w-11/12 mx-auto my-10 p-4 flex md:flex-row flex-col items-center gap-4   bg-[#febf56] rounded-[5px]'>
             <div className='md:w-1/2 w-full'>
                <img className='mx-auto '  src={email } alt="" />
             </div>
             <div className='md:w-1/2 w-full space-y-3'>
<h2 className='text-2xl font-semibold'>Subscribe to our Newsletter!</h2>
<p className='text-black'>Subscribe to our newsletter to stay conected </p>
<form onSubmit={handleSubmit}>
    <input className=' border-2 border-gray-600 mb-4 rounded-[5px]' type="email" required placeholder='   Input your email' /><br />
    <motion.button
            whileTap={{ scale: 0.9, y: 2 }}
  transition={{ type: "spring", stiffness: 400, damping: 15 }}
 
            className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '>Subscribe</motion.button>
</form>
             </div>
        </div>
</motion.div>   

    );
};

export default Newsletter;