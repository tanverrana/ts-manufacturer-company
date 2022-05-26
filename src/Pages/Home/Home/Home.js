import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Tools from '../Tools/Tools';


const Home = () => {
    return (
        <div className="mx-20">
            <Banner></Banner>
            <About></About>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Services></Services>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;