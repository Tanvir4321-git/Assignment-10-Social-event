import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { Authcontext } from './Context/Authcontext';
import useAxiosHook from './Axios/useAxiosHook';
import { toast } from 'react-toastify';
const ViewEvent = () => {
    const { photo, title, description,
        date, location, eventType } = useLoaderData()
    const { user } = use(Authcontext)
    const axiosHook = useAxiosHook()
    const navigate = useNavigate()
    const handlejoin = () => {
        console.log('clciked')
        if (!user) {
            return navigate('/signin')
        }
        const joinedData = {
            title,
            email: user.email,
            date, location, eventType, photo
        }

        axiosHook.post('/joinedEvent', joinedData)
            .then((data) => {
                console.log('joiend ', data.data)

                toast('Successfully join Event')
            })

    }

    return (
        <div className='w-11/12 mx-auto flex items-center justify-center my-14'>

            <div className=" w-[500px] p-4 shadow-2xl rounded-[5px] bg-gray-300 flex  flex-col gap-3">
                <img className='w-full  h-[200px] rounded-[5px]' src={photo} alt="" />
                <h3 className='font-semibold text-[18px]' >{title}</h3>
                <p>{description}</p>



                <motion.button
                    whileTap={{ scale: 0.9, y: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}

                    className='bg-[#00d46f] text-white py-2 px-5 cursor-pointer  hover:border-green-600 rounded-[5px]  font-semibold '><Link onClick={handlejoin} >Join event</Link></motion.button>
            </div>

        </div>


    );
};

export default ViewEvent;