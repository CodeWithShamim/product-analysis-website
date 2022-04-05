import React from "react";
import "./ReviewDetails.css";

const ReviewDetails = ({ review }) => {
  const { name, img, about, ratings } = review;
  const aboutItem = about.slice(0, 200);
  return (
    <div className="d-flex justify-content-between flex-column align-items-center col-md-4">
      <img
        src={img}
        alt="customer-review-images"
        className="img-fluid"
        id="customer-img"
      />
      <div>
        <h4>
          Name: <span className="text-warning">{name}</span>
        </h4>
        <p>{aboutItem}</p>
        <p>
          Ratings: <span className="text-warning">{ratings}</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewDetails;
