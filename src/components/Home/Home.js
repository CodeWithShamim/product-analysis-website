import React from "react";
import img from "../../images/cover.png";
import useReviews from "../hooks/useReviews";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  return (
    <div className="container pt-md-5">
      <div className="home-container row g-5">
        <div className="left-side col-md-6">
          <h1 className="title-bar">
            Buy some product for <span className="text-primary">fun!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            delectus cupiditate fuga similique deserunt cum repellat quod
            tempora quae accusamus, cumque animi ad provident voluptates unde,
            amet, aliquid vel aspernatur?
          </p>
          <button className="btn btn-primary px-5 py-2">Buy Now</button>
        </div>
        <div className="right-side col-md-6 text-center">
          <img src={img} alt="cover-photoo" className="img-fluid w-75 h-75" />
        </div>
      </div>

      <div className="customer-review">
        <h1>Customer Review (3)</h1>
        <div className="review-details row">
          {reviews.map((review) => (
            <ReviewDetails key={review.id} review={review}></ReviewDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
