import React from 'react';
import Slider from './Slider';
import Happychient from './Happychient';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Slider></Slider>


            <Happychient></Happychient>
            <Contact></Contact>
        </div>
    );
};

export default Home;