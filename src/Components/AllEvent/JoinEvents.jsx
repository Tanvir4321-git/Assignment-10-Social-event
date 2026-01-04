import React, { use, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
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

    }, [user, axiousHook])

    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            {
                show ? <h2 className='font-semibold text-2xl text-center my-8'>Joined Event  </h2> : ''
            }




            {
                show ? <table className="table-auto w-full border-collapse">
  <thead className="bg-gray-200 dark:bg-gray-800">
    <tr>
      <th className="px-4 py-3">#</th>
      <th className="px-4 py-3">Photo</th>
      <th className="px-4 py-3">Title</th>
      <th className="px-4 py-3">Date</th>
      <th className="px-4 py-3">Location</th>
      <th className="px-4 py-3">Type</th>
    </tr>
  </thead>
  <tbody>
    {joinData.map((item, idx) => (
      <JoinEventData key={item._id} data={item} index={idx} />
    ))}
  </tbody>
</table>
 :

                    <h3 className='text-[20px] font-semibold my-10 text-center'>You do not join any event</h3>
            }

        </div>
    );
};

export default JoinEvents;
