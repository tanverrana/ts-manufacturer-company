import React from 'react';
import useTools from '../../../hooks/useTools';


const ManageTools = () => {
    const [tools, setTools] = useTools();
    const handleDelete = id => {
        const proceed = window.confirm("Are Your Sure");
        if (proceed) {
            const url = `http://localhost:5000/tool/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);

                    console.log(data);
                })
        }
    }
    return (
        <div>
            <h2 className="text-orange-500 text-3xl font-bold">Manage Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid:cols-3 gap-10">
                {
                    tools.map(tool => <div
                        key={tool._id}
                        tool={tool}
                    >
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={tool.img} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{tool.name}</h2>
                                <h2>Price:${tool.price}/pcs</h2>
                                <p>{tool.details}</p>
                                <p>Minimum Order:{tool.min_quantity}</p>
                                <p>Available Tools:{tool.available_quantity}</p>
                                <div class="card-actions">
                                    <button onClick={() => handleDelete(tool._id)} class="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageTools;