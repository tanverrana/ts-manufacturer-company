import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <h2>Manage All Orders:{orders.length}</h2>
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
                            <td>{order.price}</td>
                            <td><button className="btn btn-info btn-sm">Delete Order</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;