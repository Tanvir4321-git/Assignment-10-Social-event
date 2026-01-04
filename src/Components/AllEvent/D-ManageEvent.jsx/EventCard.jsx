/* eslint-disable no-unused-vars */
import React, { use } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import { toast } from "react-toastify";
import { Authcontext } from "../../Context/Authcontext";
import useAxiosHook from "../../Axios/useAxiosHook";


const EventCard = ({ jd, index,setjoindata }) => {
  const { title, date, location, eventType, photo, _id } = jd;

  const axiosHook = useAxiosHook();
  const { setloading } = use(Authcontext);

  const handleDelete = () => {
    setloading(true);
    axiosHook.delete(`/joindata/${_id}`).then(() => {
        setjoindata(prev => prev.filter(item => item._id !== _id));
      setloading(false);
      toast.success("Successfully deleted event");
    });
  };

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition text-center">
      {/* Serial */}
      <td className="px-4 py-3 text-center">{index + 1}</td>

      {/* Image */}
      <td className="px-4 py-3">
        <img
          src={photo}
          alt={title}
          className="w-20 h-14 object-cover rounded"
        />
      </td>

      {/* Title */}
      <td className="px-4 py-3 font-semibold">{title}</td>

      {/* Location */}
      <td className="px-4 py-3">{location}</td>

      {/* Date */}
    <td className="px-4 py-3">
  {new Date(date).toLocaleDateString("en-GB")}
</td>

      {/* Type */}
      <td className="px-4 py-3">{eventType}</td>

      {/* Actions */}
      <td className="px-4 py-3 flex justify-center gap-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          <Link to={`/updateEvent/${_id}`}>Update</Link>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          Delete
        </motion.button>
      </td>
    </tr>
  );
};

export default EventCard;
