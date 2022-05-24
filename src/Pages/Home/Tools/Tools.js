import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/tool")
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-center text-primary font-bold">Total Tools:{tools.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid:cols-3 gap-7">
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;