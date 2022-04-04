import React from "react";
import useReviews from "../hooks/useReviews";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="container customer-review">
      <div className="review-details row">
        {reviews.map((review) => (
          <ReviewDetails key={review.id} review={review}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
