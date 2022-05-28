import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch("https://glacial-lowlands-56001.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="my-10">
            <h2 className="text-center text-primary text-4xl font-bold">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid:cols-3 gap-7">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;