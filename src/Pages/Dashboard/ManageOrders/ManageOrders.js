import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://glacial-lowlands-56001.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("Are Your Sure for delete order");
        if (proceed) {
            const url = `https://glacial-lowlands-56001.herokuapp.com/order/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(tool => tool._id !== id);
                    setOrders(remaining);

                    console.log(data);
                })
        }
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-500">Manage All Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{order.customerName}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price}</td>
                            <td>
                                {(order.price && !order.paid) && <button onClick={() => handleDelete(order._id)} className="btn btn-info btn-sm">Delete Order</button>}
                                {(order.price && order.paid) && <p className="text-xl text-green-500">Already Paid</p>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;