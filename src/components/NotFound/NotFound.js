import React from "react";
import img from "../../images/NotFound.jpg";

const NotFound = () => {
  return (
    <div>
      <h1>404, Not Found!!</h1>
      <div>
        <img src={img} alt="NotFound img" className="w-50 h-50" />
      </div>
    </div>
  );
};

export default NotFound;
