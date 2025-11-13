import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import useAxiosHook from '../Axios/useAxiosHook';
import JoinEventData from './ManageEventData';

const ManageEvents = () => {
    const { user } = use(Authcontext)
    const [joinData, setjoindata] = useState([])
    const axiousHook = useAxiosHook()


    useEffect(() => {
        axiousHook.get(`/myjoinedData?email=${user?.email}`)
            .then(data => {

                setjoindata(data.data)
            })

    }, [user, useAxiosHook])



    return (
        <div className='w-11/12 mx-auto my-14'>
            <h2 className='font-semibold text-2xl text-center'>Manage Events </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  my-10 gap-5'>
                {
                    joinData.map(jd => <JoinEventData key={jd._id} jd={jd}></JoinEventData>)
                }

            </div>

        </div>
    );
};

export default ManageEvents;