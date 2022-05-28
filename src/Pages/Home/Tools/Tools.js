import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://glacial-lowlands-56001.herokuapp.com/tool")
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center text-primary font-bold">Tools</h2>
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