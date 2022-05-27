import React from 'react';
import useTools from '../../../hooks/useTools';
import ManageTool from './ManageTool';

const ManageTools = () => {
    const [tools] = useTools();
    return (
        <div>
            <h2>Manage Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid:cols-3 gap-10">
                {
                    tools.map(tool => <ManageTool
                        key={tool._id}
                        tool={tool}
                    ></ManageTool>)
                }
            </div>
        </div>
    );
};

export default ManageTools;