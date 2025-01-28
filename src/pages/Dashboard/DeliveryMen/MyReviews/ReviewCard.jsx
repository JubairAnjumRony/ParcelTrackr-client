import React from 'react';

const ReviewCard = ({review}) => {
    const { user_name, user_image, rating, feedback, feedbackDate }=review;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={user_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user_name}</h2>
          <p>{feedback}</p>
          <p>Rating: {rating}</p>
          <p>{feedbackDate}</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">{rating}</div>
          </div> */}
        </div>
      </div>
    );
};

export default ReviewCard;