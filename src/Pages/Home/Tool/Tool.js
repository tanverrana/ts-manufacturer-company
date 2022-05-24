import React from 'react';

const Tool = ({ tool }) => {
    const { name, details, img, price, min_quantity, available_quantity } = tool;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <h2>Price:${price}/pcs</h2>
                    <p>{details}</p>
                    <p>Minimum Order:{min_quantity}</p>
                    <p>Available Tools:{available_quantity}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;