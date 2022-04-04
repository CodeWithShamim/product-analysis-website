import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/NotFound.webp";

const NotFound = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={img} alt="NotFound img" className="img-fluid" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
