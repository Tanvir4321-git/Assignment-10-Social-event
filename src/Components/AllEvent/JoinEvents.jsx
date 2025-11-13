import React from 'react';
import { useLoaderData } from 'react-router';
import JoinEventData from './JoinEventData';

const JoinEvents = () => {
    const alldata = useLoaderData()

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-semibold text-2xl text-center'>Joined Event  </h2>

            {
                alldata.map(data => <JoinEventData key={data._id} data={data}></JoinEventData>)
            }

        </div>
    );
};

export default JoinEvents;
