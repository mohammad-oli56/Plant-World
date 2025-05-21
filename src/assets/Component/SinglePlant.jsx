import React from 'react';
import { useNavigate } from 'react-router';

const SinglePlant = ({ pl }) => {
    const {_id, plantName, description, image } = pl;
    const navigate = useNavigate();

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 my-5">
                <div className="flex w-full space-x-2 bg-amber-800 rounded-lg sm:space-x-4">
                    <img 
                        src={image} 
                        alt={plantName} 
                        className="w-32 h-32 object-cover rounded-l-lg" 
                    />
                    <div className="flex items-center justify-between w-full px-5 text-white">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                    Plant Name: {plantName}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    Description: {description}
                                </p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                           <button onClick={() => navigate(`/details/${_id}`)} className='btn'>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlant;
