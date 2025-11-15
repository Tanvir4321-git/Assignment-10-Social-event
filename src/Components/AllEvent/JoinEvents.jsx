import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import JoinEventData from './JoinEventData';
import useAxiosHook from '../Axios/useAxiosHook';
import { Authcontext } from '../Context/Authcontext';

const JoinEvents = () => {

    const [show, sethow] = useState(false)
    const { user } = use(Authcontext)
    const [joinData, setjoindata] = useState([])
    const axiousHook = useAxiosHook()


    useEffect(() => {
        axiousHook.get(`/alljoinedData?email=${user?.email}`)
            .then(data => {

                setjoindata(data.data)
                if (data.data.length > 0) {
                    sethow(true)
                }
            })

    }, [user, useAxiosHook])

    return (
        <div className='w-11/12 mx-auto'>
            {
                show ? <h2 className='font-semibold text-2xl text-center my-8'>Joined Event  </h2> : ''
            }




            {
                show ? joinData.map(data => <JoinEventData key={data._id} data={data}></JoinEventData>) :

                    <h3 className='text-[20px] font-semibold my-10 text-center'>You do not join any event</h3>
            }

        </div>
    );
};

export default JoinEvents;
