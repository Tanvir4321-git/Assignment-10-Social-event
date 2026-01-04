import React from "react";

const JoinEventData = ({ data, index }) => {
  const { title, date, location, eventType, photo } = data;

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 text-center transition-colors">
      {/* Serial Number */}
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
      <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </td>

      {/* Date */}
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
        {new Date(date).toLocaleDateString("en-GB")}
      </td>

      {/* Location */}
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{location}</td>

      {/* Event Type */}
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{eventType}</td>
    </tr>
  );
};

export default JoinEventData;
