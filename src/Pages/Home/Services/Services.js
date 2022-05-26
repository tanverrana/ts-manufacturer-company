import React from 'react';
import delivery from "../../../images/freeservice.png";
import phone from "../../../images/phones.png";
import gift from "../../../images/gifts.png";
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Free Delivery",
            description: "WorldWide From $50",
            img: delivery,
        },
        {
            _id: 2,
            name: "Support 24/7",
            description: "Call (123) 345 436",
            img: phone,
        },
        {
            _id: 3,
            name: "Free Gifts",
            description: "Get gifts and discounts",
            img: gift,
        }
    ];
    return (
        <div>
            <div className="my-28">
                <div className="text-center">
                    <h3 className="text-primary text-3xl font-bold uppercase my-5">Our Services</h3>

                </div>
                <div className="grid lg:grid-cols-3 gap-8 ">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;