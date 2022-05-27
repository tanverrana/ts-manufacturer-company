import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(["order", id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-15">
                    <div class="card-body">
                        <h2 className="text-xl text-accent font-bold">Hello, {order.customerName}</h2>
                        <h2 class="card-title">Pay for {order.toolsName}</h2>
                        <p>Please Pay : ${order.price}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;