import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className="w-6/12  mx-auto">
            <h2 className="text-center  text-xl font-bold">Please Add Review!!</h2>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

                    <input className="my-5 border-black" placeholder="Enter Your Name" type="text" {...register("name", { required: true })} />

                    <textarea placeholder="Comments Here" {...register("comment", { required: true, maxLength: 200 })} />

                    <select className="my-5" {...register("ratings", { required: true })}>
                        <option value="">Select Ratings</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;