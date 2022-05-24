import React from 'react';

const Review = ({ review }) => {
    const { comment, ratings } = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{comment}</h2>
                    <p>Customer Ratings: <span className="text-xl font-bold">{ratings}⭐</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;