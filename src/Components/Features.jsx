import React from 'react';
import feature1 from '../assets/features1.jpg'
import feature2 from '../assets/features2.jpg'
import feature3 from '../assets/features3.jpeg'
import feature4 from '../assets/features4.jpeg'
import { motion } from "framer-motion";

const Features = () => {
    return (


        < div 
   
        className='w-11/12 mx-auto my-14'>
           <h1 className='font-bold text-3xl text-center'>Our Social Impact Features</h1>
           <motion.div      className="rounded-xl "
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}>
           <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  mt-8 gap-5   '>
            <div className=" w-full p-4 shadow-2xl rounded-[5px] bg-gray-300 flex  flex-col gap-3">
            <img className='w-full  h-[200px] rounded-[5px]' src={feature1} alt="" />
            <h3 className='font-semibold text-[18px]' >Clean Our Society</h3>
            <p>Join our cleanliness movement to make our neighborhoods pollution-free. Together we can clean streets, parks, and public areas to create a healthy, livable environment for everyone.</p>

          
            </div>
            <div className="w-full p-4 shadow-2xl rounded-[5px] bg-gray-300 flex  flex-col gap-3">
            <img className='w-full  h-[200px] rounded-[5px]' src={feature2} alt="" />
            <h3 className='font-semibold text-[18px]' >Protect Our Environment</h3>
            <p>Take part in our environmental protection drives — from tree plantations to awareness campaigns. Let’s work hand in hand to preserve nature and fight climate change.</p>

          
            </div>
            <div className="w-full p-4 shadow-2xl rounded-[5px] bg-gray-300 flex  flex-col gap-3">
            <img className='w-full  h-[200px] rounded-[5px]' src={feature3} alt="" />
            <h3 className='font-semibold text-[18px]' >Work for Humanity</h3>
            <p>Join our social service programs to help the underprivileged. From food distribution to charity drives, every small act of kindness brings a big change in someone’s life.</p>

          
            </div>
            <div className=" w-full p-4 shadow-2xl rounded-[5px] bg-gray-300 flex  flex-col gap-3">
            <img className='w-full  h-[200px] rounded-[5px]' src={feature4} alt="" />
            <h3 className='font-semibold text-[18px]' >Work for Health Awareness</h3>
            <p>Join our health awareness programs to promote healthy living and disease prevention. Participate in medical camps, blood donation drives, and community wellness events to build a healthier society.</p>

          
            </div>
           
           </div>
           </motion.div>
        </div>

        
    );
};

export default Features;
