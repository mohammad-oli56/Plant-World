import React from 'react';

const Cardplant = ({ plant }) => {
    const { image, plantName, description } = plant;
    return (
        <div className="w-full max-w-[500px] mx-auto">
            <div className="card card-side  bg-amber-400 shadow-md h-[200px]">
                <figure className="w-1/3 h-full overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src={image}
                        alt="Promotional poster for the featured movie"
                    />
                </figure>
                <div className="card-body w-2/3 p-4">
                    <h2 className="card-title text-lg font-semibold">{plantName}</h2>
                    <p className="text-sm text-gray-600">
                        {description}
                    </p>
                    <div className="card-actions justify-end mt-auto">
                        <button className="btn btn-primary">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cardplant;