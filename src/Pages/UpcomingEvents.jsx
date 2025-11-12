import React from 'react';
import { useLoaderData } from 'react-router';
import UpcomingEventsData from '../Components/UpcomingEventsData';

const UpcomingEvents = () => {
    const eventsData = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-center my-10'>Upcoming ALl Events </h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  my-10 gap-5'>
                {
                    eventsData.map(data => <UpcomingEventsData key={data._id} data={data}></UpcomingEventsData>)

                }
            </div>
        </div>
    );
};

export default UpcomingEvents;