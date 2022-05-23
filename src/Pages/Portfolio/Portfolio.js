import React from 'react';
import picture from "../../images/pic-removebg-preview.png";

const Portfolio = () => {
    return (
        <div className="container  w-75 d-flex justify-content-center align-items-center">
            <div>
                <img src={picture} height="400px" alt="" />
                <h3>Md. Tanver Rana Sobur</h3>
                <h3>Email:tanversobur1@gmail.com</h3>
            </div>
            <div className="mx-5">
                <h1 className="">About Me</h1>
                <p>Hello!! I am Tanver Sobur. At present I am a student of Programming Hero.And I am Studying at Bangladesh University department of CSE.I want to build myself as a frontend developer. That is why i am working hard. But now my main target jis to get a chance in SCIC. So That I can get an idea about web Development job market and build myself in a better way.And If I get an offer from a good company I want to work with them. <br /> Thanks:) <br />Tanver Sobur</p>
                <h3>MY SKILL</h3>
                <p>⚫ HTML</p>
                <p>⚫ CSS</p>
                <p>⚫ Bootstrap</p>
                <p>⚫ Tailwind</p>
                <p>⚫ JavaScript</p>
                <p>⚫ React</p>
                <p>⚫ Node</p>
                <p>⚫ Express</p>
                <p>⚫ MongoDb</p>
            </div>
        </div>
    );
};

export default Portfolio;