import React, { useContext, useEffect, useState } from 'react';
import { valueContext } from '../../Mainlayout/Mainlayout';
 // update the path to your context

const Myplant = () => {
    const { userprofile } = useContext(valueContext);
    const [myPlants, setMyPlants] = useState([]);

    useEffect(() => {
        if (userprofile?.email) {
            fetch(`http://localhost:3000/plants-by-email?email=${userprofile.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyPlants(data);
                })
                .catch(error => {
                    console.error("Error fetching user's plants:", error);
                });
        }
    }, [userprofile?.email]);

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">My Plants</h2>
            {myPlants.length === 0 ? (
                <p>No plants added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {myPlants.map(plant => (
                        <div key={plant._id} className="p-4 border rounded shadow">
                            <img src={plant.image} alt={plant.plantName} className="h-48 w-full object-cover mb-2" />
                            <h3 className="text-lg font-bold">{plant.plantName}</h3>
                            <p className="text-sm text-gray-600">{plant.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Myplant;
