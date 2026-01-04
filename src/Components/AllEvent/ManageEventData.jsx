/* eslint-disable no-unused-vars */
import React, { use } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import useAxiosHook from '../Axios/useAxiosHook';
import { toast } from 'react-toastify';
import { Authcontext } from '../Context/Authcontext';

const ManageEventData = ({ jd }) => {
    const { title, date, location, eventType, photo, _id } = jd

    const AxiosHook = useAxiosHook()
    const { setloading } = use(Authcontext)


    const handledelete = () => {
        setloading(true)
        AxiosHook.delete(`/joindata/${_id}`)
            .then(() => {
                setloading(false)
                toast('successfully delete event')
            })

    }




    return (
        <div className=" w-full p-4 shadow-2xl rounded-[5px]  bg-gray-300 flex  flex-col gap-3">
            <img className='w-full  h-[200px] rounded-[5px]' src={photo} alt="" />
            <h3 className='font-semibold text-[18px]' >{title}</h3>


            <p>Location: {location}</p>
            <p>Date: {date}</p>

            <p>Type: {eventType}</p>
            <div className='flex items-center justify-between'>
                <motion.button
                    whileTap={{ scale: 0.9, y: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}

                    className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '><Link to={`/updateEvent/${_id}`}>Update</Link></motion.button>

                <motion.button
                    whileTap={{ scale: 0.9, y: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}

                    className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold ' onClick={handledelete}><Link >Delete</Link></motion.button>

            </div>
        </div>
    );
};

export default ManageEventData;