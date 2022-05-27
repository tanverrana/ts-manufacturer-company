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
            <div>

            </div>
        </div>
    );
};

export default ManageOrders;