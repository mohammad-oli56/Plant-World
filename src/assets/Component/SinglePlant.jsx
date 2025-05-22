import React from 'react';
import { useNavigate } from 'react-router';

const SinglePlant = ({ pl, index }) => {
    const { _id, plantName, category, wateringFrequency } = pl;
    const navigate = useNavigate();

    return (
        <tr className="hover:bg-green-50 transition duration-200">
            <td className="px-6 py-4 text-gray-600 font-medium">{index + 1}</td>
            <td className="px-6 py-4 text-gray-800">{plantName}</td>
            <td className="px-6 py-4 text-gray-700">{category || 'N/A'}</td>
            <td className="px-6 py-4 text-gray-700">{wateringFrequency || 'N/A'}</td>
            <td className="px-6 py-4">
                <button 
                    onClick={() => navigate(`/details/${_id}`)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm"
                >
                    Details
                </button>
            </td>
        </tr>
    );
};

export default SinglePlant;
