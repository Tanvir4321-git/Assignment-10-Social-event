import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import UpcomingEventsData from '../Components/UpcomingEventsData';
import { motion } from "framer-motion";
import useAxiosHook from '../Components/Axios/useAxiosHook';

const UpcomingEvents = () => {
    const eventsData = useLoaderData()
    const axiosHook = useAxiosHook()
    const [search, setsearch] = useState(eventsData)

    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value

        axiosHook.get(`/search?search=${search}`)
            .then(data => {
                setsearch(data.data)
            })


    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl text-center my-10'>Upcoming ALl Events </h1>
                <form onSubmit={handleSearch} className='flex' >

                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name='search' placeholder="Search" />
                    </label>
                    <motion.button
                        whileTap={{ scale: 0.9, y: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}

                        className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold ' >Search</motion.button>
                </form>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  my-10 gap-5'>
                {
                    search.map(data => <UpcomingEventsData key={data._id} data={data}></UpcomingEventsData>)

                }
            </div>
        </div>
    );
};

export default UpcomingEvents;