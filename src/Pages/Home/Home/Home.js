import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Tools from '../Tools/Tools';


const Home = () => {
    return (
        <div className="mx-20">
            <Banner></Banner>
            <About></About>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>

        </div>
    );
};

export default Home;