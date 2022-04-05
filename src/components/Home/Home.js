import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/cover.jpg";
import useReviews from "../hooks/useReviews";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();
  const reviewsItem = reviews.slice(0, 3);
  // console.log(reviews);
  return (
    <div className="container my-5">
      <div className="home-container container row g-4">
        <div className="left-side col-md-6 text-center">
          <h1 className="title-bar">
            Your watch
            <br />
            <small className="text-warning">Your way!!</small>
          </h1>
          <p>
            Powerful features to help keep you connected, active, healthy, and
            safe. Advanced sensors to track all the ways you move and to measure
            your favorite workouts. And available cellular so you can go without
            your phone
          </p>
          <button className="btn btn-warning px-5 py-2 mt-4 fw-bold text-light">
            Buy Now
          </button>
        </div>
        <div className="right-side col-md-6 text-center">
          <img src={img} alt="cover-photoo" className="img-fluid" />
        </div>
      </div>

      <div className="customer-review">
        <h1 className="mb-5">Customer Review (3)</h1>
        <div className="review-details row">
          {reviewsItem.map((review) => (
            <ReviewDetails key={review.id} review={review}></ReviewDetails>
          ))}
        </div>
        <Link to="reviews">
          <button className="btn btn-warning px-5 py-2 mt-4 fw-bold text-light">
            See All Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
