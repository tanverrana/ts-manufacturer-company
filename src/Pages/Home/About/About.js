import React from 'react';

const About = () => {
    return (
        <div class="hero min-screen bg-base-200 my-5">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://cdn.mos.cms.futurecdn.net/htk7Ps7Xo8snfen4YXMPXL-320-80.jpg" alt="" class="max-w-sm rounded-lg shadow-2xl mt-5" />
                <div className="ml-10">
                    <h1 class="text-5xl text-center mt-2 font-bold">About Us!</h1>
                    <p class="py-2">Our equipment includes laser cutting machine, AMADA and TAILIFT numerical control press, NC bender, and we own two different assemblye line with all automatism. Our customers, are from the whole world already cooperated with us for years. We accommodate customers' requirement of OEM&ODM design.</p>
                    <p class="py-2">YSY,  is one of the professional manufacturer&seller for different kinds of metal boxes, electrical equipments and custom components. Our factory locates in ShenZhen, the producing center is occupied more than 5000 sqm, we have the production team with 200 people, including 10 engineers and QC team.</p>
                    <button class="btn btn-primary">More Information</button>
                </div>
            </div>
        </div>
    );
};

export default About;