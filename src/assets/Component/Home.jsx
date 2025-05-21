import React, { useState } from 'react';
import Slider from './Slider';
import Happychient from './Happychient';
import Contact from './Contact';
import { useLoaderData } from 'react-router';
import Cardplant from './Cardplant';

const Home = () => {
    const plants = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    const visiblePlants = showAll ? plants : plants.slice(0, 6);

    return (
        <div className='space-y-10'>
            <Slider />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    visiblePlants.map(plant => (
                        <Cardplant key={plant._id} plant={plant} />
                    ))
                }
            </div>

            {
                plants.length > 6 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(prev => !prev)}
                            className="btn btn-outline btn-primary mt-4"
                        >
                            {showAll ? 'Show Less' : 'Show All'}
                        </button>
                    </div>
                )
            }

            <Happychient />
            <Contact />
        </div>
    );
};

export default Home;
