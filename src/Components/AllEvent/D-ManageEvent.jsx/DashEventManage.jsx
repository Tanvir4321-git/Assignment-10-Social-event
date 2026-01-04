import React, { use, useEffect, useState } from 'react';

// import { Authcontext } from '../Context/Authcontext';
// import useAxiosHook from '../Axios/useAxiosHook';
// import JoinEventData from './ManageEventData';
import EventCard from './EventCard';
import { Authcontext } from '../../Context/Authcontext';
import useAxiosHook from '../../Axios/useAxiosHook';

const DashEventManage = () => {
    const { user } = use(Authcontext)
    const [joinData, setjoindata] = useState([])
    const axiousHook = useAxiosHook()


    useEffect(() => {
        axiousHook.get(`/myjoinedData?email=${user?.email}`)
            .then(data => {

                setjoindata(data.data)
            })

    }, [user, axiousHook])



    return (
        <div className='w-11/12 mx-auto min-h-screen my-14'>
            <h2 className='font-semibold text-2xl text-center'>Manage Events </h2>
{/* 
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  my-10 gap-5'>
                {
                    joinData.map(jd => <EventCard key={jd._id} jd={jd}></EventCard>)
                }

            </div> */}

<table className="w-full border-collapse mt-4 ">
  <thead className="bg-gray-200">
    <tr className='dark:bg-gray-800 py-3'>
      <th>#</th>
      <th>Image</th>
      <th>Title</th>
      <th>Location</th>
      <th>Date</th>
      <th>Type</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {joinData.map((item, index) => (
      <EventCard key={item._id} jd={item} setjoindata={setjoindata} index={index} />
    ))}
  </tbody>
</table>




        </div>
    );
};

export default DashEventManage;