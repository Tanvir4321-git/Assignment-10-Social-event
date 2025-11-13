import React from 'react';

const JoinEventData = ({ data }) => {
    const { title, date } = data
    return (
        <div>
            <div className='border-2 my-5 flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p>{date}</p>

            </div>
        </div>
    );
};

export default JoinEventData;