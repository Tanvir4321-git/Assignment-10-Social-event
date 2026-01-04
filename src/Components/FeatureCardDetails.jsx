import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FeatureCardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const details = data.find(dt => dt.id === Number(id));

    if (!details) {
        return <div className="text-center mt-10">No details found</div>;
    }

    const {
        image,
        title,
        description,
        detailedDescription,
        programType,
        audience,
        focus
    } = details;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />

            {/* Content */}
            <div className="mt-6">
                <h1 className="text-3xl font-bold mb-3">{title}</h1>

                <p className="text-gray-600 mb-4">
                    {description}
                </p>

                {/* Info badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {programType}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {audience}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {focus}
                    </span>
                </div>

                {/* Detailed Description */}
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-3">
                        Program Details
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {detailedDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCardDetails;
