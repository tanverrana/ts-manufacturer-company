import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div className="mx-20">
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <About></About>
        </div>
    );
};

export default Home;