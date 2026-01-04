/* eslint-disable no-unused-vars */
import React, {  useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaUserCheck } from 'react-icons/fa';
import { MdEventAvailable } from "react-icons/md";
import { useLoaderData } from 'react-router';
import { Authcontext } from './Context/Authcontext';
import useAxiosHook from './Axios/useAxiosHook';
import EventPieChart from './EventPieChart';
// import { Cell, Pie, PieChart, PieLabelRenderProps } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";



const DashboardCard = () => {
 const eventsData = useLoaderData()

  const [joinData, setjoindata] = useState([])
  const [allevent,setallevent] = useState([])
    const axiousHook = useAxiosHook()


 useEffect(() => {
        axiousHook.get(`/userjoiedData`)
            .then(data => {

                setjoindata(data.data)
                
            })

    }, [axiousHook])
 useEffect(() => {
        axiousHook.get(`/alleventdData`)
            .then(data => {

                setallevent(data.data)
                
            })

    }, [axiousHook])

    // Static data
    const cardData = [
        {
            id: 1,
            title: 'Ongoing Event',
            count: eventsData.length,
            icon: <MdEventAvailable className="w-8 h-8" />,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            iconColor: 'text-blue-600 dark:text-blue-400',
           
        },
        {
            id: 2,
            title: 'Total Events Created',
            count: allevent.length,
            icon: <FaCalendarAlt className="w-8 h-8" />,
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            iconColor: 'text-green-600 dark:text-green-400',
           
        },
        {
            id: 3,
            title: 'Users Joined Events',
            count:joinData.length,
            icon: <FaUserCheck className="w-8 h-8" />,
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            iconColor: 'text-purple-600 dark:text-purple-400',
           
        }
    ];

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
                Dashboard Overview
            </h2>
            <div className='flex justify-center'>

                 <EventPieChart cardData={cardData}></EventPieChart>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        {/* Gradient Header */}
                        <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                        
                        <div className="p-6">
                            {/* Icon Container */}
                            <div className={`${card.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                                <div className={card.iconColor}>
                                    {card.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                                {card.title}
                            </h3>

                            {/* Count */}
                            <div className="flex items-baseline gap-2">
                                <motion.p
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                                    className="text-4xl font-bold text-gray-800 dark:text-white"
                                >
                                    {card.count.toLocaleString()}
                                </motion.p>
                                <span className="text-green-500 text-sm font-semibold">
                                    {card.percentage}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '70%' }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                                    className={`h-full bg-gradient-to-r ${card.color}`}
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
       
        </div>
    );
};

export default DashboardCard;