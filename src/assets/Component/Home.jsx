import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { format } from 'date-fns';

import Slider from './Slider';
import Happychient from './Happychient';
import Contact from './Contact';
import Cardplant from './Cardplant';
import BlogSection from './BlogSection';
import PromoSection from './PromoSection';
import OfferSection from './OfferSection';
import NewsletterSection from './NewsletterSection';

const Home = () => {
  const plants = useLoaderData();
  const [showAll] = useState(false);
  // console.log(setShowAll)

     const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 700); 
    
            return () => clearTimeout(timeout);
        }, []);
    
        if (loading) {
            return (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            );
        }
    

  const visiblePlants = showAll ? plants : plants.slice(0, 8);
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="space-y-10">
      <h1 className="text-2xl mt-2.5 font-bold text-center">
        Today’s Date: {today}
      </h1>
      <hr />

      <Slider />

      <h2 className="text-center font-bold text-2xl">New Plants</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
        {visiblePlants.map((plant) => (
          <Cardplant key={plant._id} plant={plant} />
        ))}
      </div>

      {plants.length > 8 && !showAll && (
        <div className="text-center mt-4">
          <Link to="/allplant">
            <button className="btn btn-outline btn-primary">
              Show All Plants
            </button>
          </Link>
        </div>
      )}

      <BlogSection></BlogSection>
      <PromoSection></PromoSection>
      <OfferSection></OfferSection>
      <NewsletterSection></NewsletterSection>

      <Happychient />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
