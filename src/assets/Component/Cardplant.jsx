import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Cardplant = ({ plant }) => {
  const { _id, image, plantName, description } = plant;
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="card card-side bg-amber-400 shadow-md h-[200px]">
        <figure className="w-1/3 h-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={`Image of ${plantName}`}
          />
        </figure>

        <div className="card-body w-2/3 p-4">
          <h2 className="card-title text-lg font-semibold">PlantName :{plantName}</h2>
          <p className="text-sm text-gray-600">Description: {description}</p>

          <div className="card-actions justify-end mt-auto">
            <button
              className="flex items-center gap-1 btn"
              onClick={() => navigate(`/details/${_id}`)}
              data-tooltip-id={`plant-tooltip-${_id}`}
              data-tooltip-content="Click to view plant details"
            >
              Details <TbListDetails />
            </button>
            <ReactTooltip id={`plant-tooltip-${_id}`} place="top" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardplant;
