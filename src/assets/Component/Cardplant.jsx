import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Cardplant = ({ plant }) => {
  const { _id, image, plantName, description, addedAt } = plant;
  const navigate = useNavigate();
  console.log(addedAt)
  return (
    <div className="w-full max-w-[500px] mx-auto">


      <div className="card  bg-green-200 shadow-sm">


        <figure className="px-5 pt-5">
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`Image of ${plantName}`}
            />
          </div>
        </figure>

        <div className="card-body  p-4">
          <h2 className="card-title text-lg font-semibold">PlantName :{plantName}</h2>
          <p className="text-sm text-gray-600">Description: {description}</p>

          <div className="card-actions">
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
