import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    console.log("res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }

                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                });
        }
    }, [user])
    return (
        <div>
            <h2 className="text-3xl text-orange-500 font-bold">My Order</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tool Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Order Info/Trx Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.toolsName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-accent">Pay</button></Link>}
                                    {(order.price && order.paid) && <button className="btn btn-xs btn-info">Paid</button>}
                                </td>
                                <td>
                                    {(order.price && !order.paid) && <p className="text-red-500">Pending order</p>}
                                    {(order.price && order.paid) && <p className="text-green-500">{order.transactionId}</p>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;