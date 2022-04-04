import React from "react";

const ReviewDetails = ({ review }) => {
  const { name } = review;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ReviewDetails;
