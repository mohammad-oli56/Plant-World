import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from './SinglePlant';

const Allplant = () => {
    const plant =useLoaderData()
    console.log(plant)
    return (
        <div>
            <div>
                {
                    plant.map(pl => <SinglePlant key={pl._id} pl={pl}></SinglePlant>)
                }
            </div>
        </div>
    );
};

export default Allplant;