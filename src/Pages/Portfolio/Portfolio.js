import React from 'react';
import picture from "../../images/pic-removebg-preview.png";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="mx-20 ">
            <div className="flex justify-center items-center">
                <img className="center" src={picture} alt="" />
            </div>
            <div className="text-center">
                <h3 className="text-xl font-bold">Md. Tanver Rana Sobur</h3>
                <h3>Email:tanversobur1@gmail.com</h3>
                <h3>Phone:(+880)1628397460</h3>
                <p>Mohammadpur,Dhaka-1207</p>
            </div>
            <div className="mx-5">
                <h1 className="text-3xl font-bold text-orange-500">About Me</h1>
                <p>Hello!! I am Tanver Sobur. At present I am a student of Programming Hero.And I am Studying at Bangladesh University department of CSE.I want to build myself as a frontend developer. That is why i am working hard. But now my main target jis to get a chance in SCIC. So That I can get an idea about web Development job market and build myself in a better way.And If I get an offer from a good company I want to work with them. <br /> Thanks:) <br />Tanver Sobur</p>
                <div>
                    <h2 className="text-3xl font-bold text-orange-500">Educational Background</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">

                            <thead>
                                <tr className="font-bold text-4xl">
                                    <th>Exam Name</th>
                                    <th>Group/ Dept</th>
                                    <th>Passing Year</th>
                                    <th>Board/University</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>BSC</th>
                                    <td>Computer Science & Engineering</td>
                                    <td>8th Semester(Running)</td>
                                    <td>Bangladesh University</td>
                                </tr>
                                <tr>
                                    <th>HSC</th>
                                    <td>Science</td>
                                    <td>2019</td>
                                    <td>Dhaka</td>
                                </tr>

                                <tr>
                                    <th>SSC</th>
                                    <td>Science</td>
                                    <td>2017</td>
                                    <td>Jashore</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <h3 className="text-3xl font-bold text-orange-500">MY SKILL</h3>
                    <p>⚫ HTML</p>
                    <p>⚫ CSS</p>
                    <p>⚫ Bootstrap</p>
                    <p>⚫ Tailwind</p>
                    <p>⚫ Daisy UI</p>
                    <p>⚫ JavaScript</p>
                    <p>⚫ React</p>
                    <p>⚫ React Hook</p>
                    <p>⚫ Node</p>
                    <p>⚫ Express</p>
                    <p>⚫ MongoDb</p>
                    <p>⚫ Firebase</p>
                </div>
                <div className="basis-1/4">
                    <h2 className=" text-3xl font-bold text-orange-500">My Project</h2>

                    <p>▶ <a className="text-blue-500 text-xl font-bold underline" href="https://ts-bike-inventory-management.web.app/"> Bike Inventory</a></p>
                    <p>▶ <a className="text-blue-500 text-xl font-bold underline" href="https://ts-tutor-center.web.app/"> Tutor Center</a></p>
                    <p>▶ <a className="text-blue-500 text-xl font-bold underline" href="https://react-camera-mania.netlify.app/home">Camera Menia</a></p>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;