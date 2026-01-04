import React, { use, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosHook from '../Axios/useAxiosHook';
import { Authcontext } from '../Context/Authcontext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const CreateEvent = () => {
    const [eventDate, setEventDate] = useState(null);
    const axiosHook = useAxiosHook()
    const { user } = use(Authcontext)
    const navigate = useNavigate()
    const handleCreateEvent = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const eventType = form.eventType.value;
        const location = form.location.value;

        const eventData = {
            title,
            description,
            photo,
            eventType,
            location,

            date: eventDate,
            email: user.email
        };

        axiosHook.post('/createEvent', eventData)
            .then(data => {
                navigate('/upcoming-events')
                toast('Successfully Create Event')
            })



    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <title>Social-Events- Create Event</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                 <h1 className='font-semibold text-2xl text-center'>Create Event Here !</h1>
                    <form onSubmit={handleCreateEvent}  >
                        <fieldset className="fieldset">
                            {/* // tittle */}
                            <label className="label">Title</label>
                            <input type="text" name='title' className="input" placeholder="Event title" required />
                            {/* //Description */}
                            <label className="label">Description</label>
                            <input type="text" name='description' className="input" placeholder="Event Description" required />
                            {/* // photo */}
                            <label className="label">Photo Url</label>
                            <input type="text" name='photo' className="input" placeholder="Photo url" required />
                            {/* Drop down */}

                            <select name="eventType" required>
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
                            <input type="text" name='location' className="input" placeholder="Set location " />
                            {/* evet date */}
                            <label className="label">Event Date</label>
                            <DatePicker
                                selected={eventDate}
                                onChange={(date) => setEventDate(date)}
                                className="input w-full"
                                placeholderText="Select Event Date"
                                required
                                minDate={new Date()}
                            />


                            <button className="btn btn-neutral mt-4">Create Event</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default CreateEvent;