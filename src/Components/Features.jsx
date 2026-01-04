/* eslint-disable no-unused-vars */
import React from 'react';
import feature1 from '../assets/features1.jpg'
import feature2 from '../assets/features2.jpg'
import feature3 from '../assets/features3.jpeg'
import feature4 from '../assets/features4.jpeg'
import { motion } from "framer-motion";
import { Link, useLoaderData } from 'react-router';

const Features = () => {
    const data = useLoaderData()


    return (


        < div className='w-11/12 mx-auto my-14'>
            <h1 className='font-bold text-3xl text-center'>Our Social Impact Features</h1>
            <div className="rounded-xl ">
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  mt-8 gap-5   '>

                    {
                        data.map(dt => <motion.div
                            key={dt.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full shadow-xl border border-base-300 rounded-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ">

                            <img className='w-full h-[200px] object-cover' src={dt.image} alt={dt.title} />

                            <div className='p-5 flex flex-col gap-3 '>
                                <h3 className='font-bold text-[18px] dark:text-white  text-gray-800'>{dt.title}</h3>
                                <p className='text-gray-600 dark:text-white  text-[13px] leading-relaxed '>{dt.description}</p>

                                <div className='flex flex-col gap-2 pt-4 border-t border-gray-200 mt-auto'>
                                    <div className='flex items-center gap-2 text-sm '>
                                        <span className='font-semibold dark:text-white text-gray-700 '>Type:</span>
                                        <span className='text-gray-600 dark:text-white'>{dt.programType}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <span className='font-semibold dark:text-white text-gray-700 '>Audience:</span>
                                        <span className='text-gray-600 dark:text-white'>{dt.audience}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <span className='font-semibold dark:text-white text-gray-700 '>Focus:</span>
                                        <span className='text-gray-600 dark:text-white'>{dt.focus}</span>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/featureDetails/${dt.id}`}>
                                <motion.button
                                    whileTap={{ scale: 0.9, y: 2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}

                                    className='bg-[#00d46f] w-full text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '>View Details</motion.button>
                            </Link>




                        </motion.div>)
                    }




                </div>
            </div>
        </div>


    );
};

export default Features;