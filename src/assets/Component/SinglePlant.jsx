import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const SinglePlant = ({ pl, index }) => {
  const { _id, plantName, category, wateringFrequency } = pl;
  const navigate = useNavigate();

  return (
    <>
      <tr className="hover:bg-green-50 transition duration-200">
        <td className="px-6 py-4 text-gray-600 font-medium">{index + 1}</td>
        <td className="px-6 py-4 text-gray-800">{plantName}</td>
        <td className="px-6 py-4 text-gray-700">{category || 'N/A'}</td>
        <td className="px-6 py-4 text-gray-700">{wateringFrequency || 'N/A'}</td>
        <td className="px-6 py-4">
          <button
            data-tooltip-id={`tooltip-${_id}`}
            data-tooltip-content="Click to view plant details"
            onClick={() => navigate(`/details/${_id}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm"
          >
           <TbListDetails />
          </button>
          <ReactTooltip id={`tooltip-${_id}`} place="bottom" />
        </td>
      </tr>
    </>
  );
};

export default SinglePlant;
