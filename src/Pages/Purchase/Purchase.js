import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { toolsId } = useParams();
    const [tool, setTool] = useState({});

    const [user, loading, error] = useAuthState(auth);



    useEffect(() => {
        const url = `https://glacial-lowlands-56001.herokuapp.com/tool/${toolsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, []);

    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value
        console.log(quantity, address, phone);
        const order = {
            toolsId: tool._id,
            toolsName: tool.name,
            quantity,
            address,
            phone,
            price: tool.price * quantity,
            customerName: user.displayName,
            customer: user.email,
        }
        fetch("https://glacial-lowlands-56001.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Your Order is now pending");
            })


    }

    return (
        <div>
            <h2 className="text-center text-3xl text-primary font-bold">Purchase Your Products</h2>

            <div className="grid justify-items-center my-10">
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={tool.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{tool.name}</h2>
                        <h2>Price:${tool.price}/pcs</h2>
                        <p>{tool.details}</p>
                        <p>Minimum Order:{tool.min_quantity}</p>
                        <p>Available Tools:{tool.available_quantity}</p>

                    </div>
                </div>
            </div>
            <form onSubmit={handleOrder} className="grid gird-cols-1 gap-3 justify-items-center my-10">
                <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                <input type="text" name="toolsName" defaultValue={tool.name} disabled placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" name="quantity" defaultValue={tool.min_quantity} class="input input-bordered w-full max-w-xs" />
                <input type="number" name="phone" placeholder="Enter Your Phone" class="input input-bordered w-full max-w-xs" />
                <input type="text" name="address" placeholder="Enter Your Address" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Purchase Now" class="btn btn-primary w-full max-w-xs" />
            </form>


        </div>
    );
};

export default Purchase;