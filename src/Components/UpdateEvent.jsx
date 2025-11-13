import React, { use, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAxiosHook from './Axios/useAxiosHook';
import { Authcontext } from './Context/Authcontext';

const UpdateEvent = () => {
    const updateData = useLoaderData()
    const [eventDate, setEventDate] = useState(updateData?.date);
    const navigate = useNavigate()
    const axiosHook = useAxiosHook()

    console.log(updateData)
    const { user } = use(Authcontext)
    const handleUpdate = (e) => {

        e.preventDefault()
        const form = e.target;
        const title = form.title.value;

        const photo = form.photo.value;
        const eventType = form.eventType.value;
        const location = form.location.value;

        const UpdateData = {
            title,

            photo,
            eventType,
            location,

            date: eventDate,
            email: user.email
        };

        axiosHook.patch(`/joindata/${updateData._id}`, UpdateData)
            .then(data => {
                navigate('/manageevent')
                toast('Successfully update Event')
            })




    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <title>Social-Events- Create Event</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">

                    <form onSubmit={handleUpdate}  >
                        <fieldset className="fieldset">
                            {/* // tittle */}
                            <label className="label">Title</label>
                            <input type="text" name='title' defaultValue={updateData.title} className="input" placeholder="Event title" />


                            {/* // photo */}
                            <label className="label">Photo Url</label>
                            <input type="text" name='photo' defaultValue={updateData.photo} className="input" placeholder="Photo url" />
                            {/* Drop down */}

                            <select defaultValue={updateData.eventType} name="eventType" >
                                <option value="">Select Event Type</option>
                                <option value="Cleanup">Cleanup</option>
                                <option value="Plantation">Plantation</option>
                                <option value="Donation">Donation</option>
                                <option value="Awareness Campaign">Awareness Campaign</option>
                                <option value="Blood Donation">Blood Donation</option>
                                <option value="Others">Others</option>
                            </select>

                            {/* // location*/}
                            <label className="label">Location</label>
                            <input type="text" defaultValue={updateData.location} name='location' className="input" placeholder="Set location " />
                            {/* evet date */}
                            <label className="label">Event Date</label>
                            <DatePicker
                                selected={eventDate}
                                onChange={(date) => setEventDate(date)}
                                className="input w-full"
                                placeholderText="Select Event Date"


                                minDate={new Date()}
                            />


                            <button className="btn btn-neutral mt-4">Update Event</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEvent;