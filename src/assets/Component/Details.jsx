import React from 'react';
import { Link, useLoaderData } from 'react-router'; // Use react-router-dom not 'react-router'

const Details = () => {
    const plant = useLoaderData();
    const {
        plantName,
        image,
        careLevel,
        category,
        healthStatus,
        lastWatered,
        nextWatering,
        wateringFrequency
    } = plant;

    return (
        <div className="p-6 flex justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <img
                    src={image}
                    alt={plantName}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">plantName: {plantName}</h2>
                    
                    <ul className="space-y-1 text-sm text-gray-600">
                        <li><span className="font-medium">Category:</span> {category}</li>
                        <li><span className="font-medium">Care Level:</span> {careLevel}</li>
                        <li><span className="font-medium">Health Status:</span> {healthStatus}</li>
                        <li><span className="font-medium">Last Watered:</span> {lastWatered}</li>
                        <li><span className="font-medium">Next Watering:</span> {nextWatering}</li>
                        <li><span className="font-medium">Watering Frequency:</span> {wateringFrequency}</li>
                    </ul>

                  <Link to='/allplant'>
                    <button 

                        type="button"
                        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        Back
                    </button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
