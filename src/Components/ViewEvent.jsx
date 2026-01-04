/* eslint-disable no-unused-vars */
import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { Authcontext } from './Context/Authcontext';
import useAxiosHook from './Axios/useAxiosHook';
import { toast } from 'react-toastify';

const ViewEvent = () => {
    const {
        photo,
        title,
        description,
        date,
        location,
        eventType
    } = useLoaderData();

    const { user } = use(Authcontext);
    const axiosHook = useAxiosHook();
    const navigate = useNavigate();

    const handlejoin = () => {
        if (!user) {
            return navigate('/signin');
        }

        const joinedData = {
            title,
            email: user.email,
            date,
            location,
            eventType,
            photo
        };

        axiosHook.post('/joinedEvent', joinedData)
            .then(() => {
                toast.success('Successfully joined the event');
            })
            .catch(err => {
                if (err.response?.status === 409) {
                    toast.error('You already joined this event');
                }
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                
                {/* Image */}
                <div className="relative">
                    <img
                        src={photo}
                        alt={title}
                        className="w-full h-[350px] object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {eventType}
                    </span>
                </div>

                {/* Content */}
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">
                        {title}
                    </h1>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Info grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">📅 Date</p>
                            <p className="font-semibold">
                                {new Date(date).toLocaleDateString("en-GB")}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">📍 Location</p>
                            <p className="font-semibold">{location}</p>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Link onClick={handlejoin} className='flex justify-center'>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className=" bg-green-500 hover:bg-green-600 text-white px-14 py-3 rounded-xl font-semibold text-lg"
                        >
                            Join Event
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;
