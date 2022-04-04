import React from "react";
import "./ReviewDetails.css";

const ReviewDetails = ({ review }) => {
  const { name, img, about, ratings } = review;
  return (
    <div className="d-flex justify-content-between flex-column align-items-center col-md-4">
      <img
        src={img}
        alt="customer-review-images"
        className="img-fluid"
        id="customer-img"
      />
      <div>
        <h4>Name: {name}</h4>
        <p>Review: {about}</p>
        <p>Ratings: {ratings}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
