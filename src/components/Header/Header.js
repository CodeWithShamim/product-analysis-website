import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-warning header-container">
      <div className="navbar-container">
        <Link to="/">Home</Link>

        <Link to="reviews">Reviews</Link>

        <Link to="dashboard">Dashboard</Link>

        <Link to="blogs">Blogs</Link>

        <Link to="about">About</Link>
      </div>
    </div>
  );
};

export default Header;
