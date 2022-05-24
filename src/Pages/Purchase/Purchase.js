import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolsId } = useParams();
    return (
        <div>
            <h2>Welcome To purchase page:{toolsId}</h2>
        </div>
    );
};

export default Purchase;