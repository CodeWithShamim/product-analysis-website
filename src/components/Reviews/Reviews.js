import React from "react";
import useReviews from "../hooks/useReviews";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="container customer-review my-5">
      <div className="review-details row g-5">
        {reviews.map((review) => (
          <ReviewDetails key={review.id} review={review}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
