import React, { useContext, useEffect, useState } from 'react';
import { valueContext } from '../../Mainlayout/Mainlayout';
import Myplantcard from './Myplantcard';

const Myplant = () => {
    const { userprofile } = useContext(valueContext);
    const [myPlants, setMyPlants] = useState([]);

    useEffect(() => {
        if (userprofile?.email) {
            fetch(`https://assingment-server-sable.vercel.app/plants-by-email?email=${userprofile.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyPlants(data);
                })
                .catch(error => {
                    console.error("Error fetching user's plants:", error);
                });
        }
    }, [userprofile?.email]);

    // Remove plant from UI
    const handleDeleteSuccess = (deletedId) => {
        setMyPlants(prev => prev.filter(plant => plant._id !== deletedId));
    };

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
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold text-green-700">My Plants ({myPlants.length})</h2>
            {myPlants.length === 0 ? (
                <p className="text-gray-500">No plants added yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {myPlants.map((mypln) => (
                        <Myplantcard
                            key={mypln._id}
                            mypln={mypln}
                            onDelete={handleDeleteSuccess}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Myplant;
