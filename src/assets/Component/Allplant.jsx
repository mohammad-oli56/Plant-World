import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from './SinglePlant';

const Allplant = () => {
  const plants = useLoaderData();

   const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 400); 
    
            return () => clearTimeout(timeout);
        }, []);
    
        if (loading) {
            return (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            );
        }

  return (
    <div className="p-6">
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="px-6 py-3 text-left rounded-tl-lg">#</th>
              <th className="px-6 py-3 text-left">Plant Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Watering Frequency</th>
              <th className="px-6 py-3 text-left rounded-tr-lg">Actions</th>
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
