import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from './SinglePlant';

const Allplant = () => {
    const plants = useLoaderData();

    return (
        <div className="p-6">
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-green-700 text-white text-left">
                            <th className="px-6 py-3 rounded-tl-lg">#</th>
                            <th className="px-6 py-3">Plant Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Watering Frequency</th>
                            <th className="px-6 py-3 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                        {plants.map((pl, index) => (
                            <SinglePlant key={pl._id} pl={pl} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allplant;
