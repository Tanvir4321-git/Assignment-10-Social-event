/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const UpcomingEventsData = ({ data }) => {
    const { photo, title, 
        eventType,
        location,
        date, _id } = data

    return (
        <motion.div
            
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full shadow-xl border border-base-300 rounded-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img className='w-full  h-[200px] rounded-[5px]' src={photo} alt="" />

            <div className='p-4 space-x-3'>

            <h3 className='font-semibold text-[18px]' >{title}</h3>


            <p>Location: {location}</p>
           <p>
  Date: {new Date(date).toLocaleDateString("en-GB")}
</p>


            <p>Type: {eventType}</p>
            </div>
            <Link to={`/viewEvent/${_id}`}>
            <motion.button
                whileTap={{ scale: 0.9, y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}

                className='bg-[#00d46f] w-full text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '>View event</motion.button></Link>
        </motion.div>
    );
};

export default UpcomingEventsData;