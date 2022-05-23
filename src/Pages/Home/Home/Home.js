import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';

const Home = () => {
    return (
        <div className="mx-20">
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;