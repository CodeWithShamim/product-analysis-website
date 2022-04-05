import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-warning header-container">
      <div className="navbar-container d-flex justify-content-center">
        <CustomLink to="/">Home</CustomLink>

        <CustomLink to="/reviews">Reviews</CustomLink>

        <CustomLink to="/dashboard">Dashboard</CustomLink>

        <CustomLink to="/blogs">Blogs</CustomLink>

        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
