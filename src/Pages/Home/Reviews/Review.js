import React from 'react';

const Review = ({ review }) => {
    const { name, comment, ratings } = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className="text-2xl font-bold text-center">{name}</h1>
                    <h2 class="text-xl">{comment}</h2>
                    <p>Customer Ratings: <span className="text-xl font-bold">{ratings}⭐</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;