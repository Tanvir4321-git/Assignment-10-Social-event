import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const UpcomingEventsData = ({ data }) => {
    const { photo, title, description,
        eventType,
        location,
        date, _id } = data

    return (
        <div className=" w-full p-4 shadow-2xl rounded-[5px] bg-gray-300 flex  flex-col gap-3">
            <img className='w-full  h-[200px] rounded-[5px]' src={photo} alt="" />
            <h3 className='font-semibold text-[18px]' >{title}</h3>


            <p>Location: {location}</p>
            <p>Date: {date}</p>

            <p>Type: {eventType}</p>
            <motion.button
                whileTap={{ scale: 0.9, y: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}

                className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '><Link to={`/viewEvent/${_id}`}>View event</Link></motion.button>
        </div>
    );
};

export default UpcomingEventsData;