import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTool = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://glacial-lowlands-56001.herokuapp.com/tool`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`Successfully add tool `);
                console.log(result);
            })
    };
    return (
        <div>
            <h2 className="text-3xl  text-orange-500 font-bold"> Add a New Tool!!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gird-cols-1 gap-3 justify-items-center my-10">
                <input type="text" placeholder="Enter Tool Name" class="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                <textarea type="text" placeholder="Enter Tool Details" class="input input-bordered w-full max-w-xs" {...register("details", { required: true })} />
                <input type="number" placeholder="Price" class="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />
                <input type="number" placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs" {...register("min_quantity", { required: true })} />
                <input type="number" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" {...register("available_quantity", { required: true })} />
                <input type="text" placeholder="Tool Image URL" class="input input-bordered w-full max-w-xs" {...register("img", { required: true })} />
                <input type="submit" value="Add Tool" class="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddTool;