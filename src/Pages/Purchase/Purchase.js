import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolsId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    return (
        <div>
            <h2>Welcome To purchase page:{toolsId}</h2>
            <h1>Name:{tool.name}</h1>
        </div>
    );
};

export default Purchase;