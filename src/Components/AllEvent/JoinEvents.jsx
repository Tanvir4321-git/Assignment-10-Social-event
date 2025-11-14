import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import JoinEventData from './JoinEventData';
import useAxiosHook from '../Axios/useAxiosHook';
import { Authcontext } from '../Context/Authcontext';

const JoinEvents = () => {

    const { user } = use(Authcontext)
    const [joinData, setjoindata] = useState([])
    const axiousHook = useAxiosHook()


    useEffect(() => {
        axiousHook.get(`/alljoinedData?email=${user?.email}`)
            .then(data => {

                setjoindata(data.data)
            })

    }, [user, useAxiosHook])

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-semibold text-2xl text-center'>Joined Event  </h2>

            {
                joinData.map(data => <JoinEventData key={data._id} data={data}></JoinEventData>)
            }

        </div>
    );
};

export default JoinEvents;
