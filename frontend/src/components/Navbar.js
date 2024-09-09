import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar nav-container">
      <a href="/staff" className="logo">
        FoodieApp
      </a>

      <div className="nav-links">
        <a href="/table-reservations">Table Reservations</a>
        <a href="/delivery-reservations">Delivery Reservations</a>
        <a href="#">Services</a>
        <a href="/menu">Menu</a>
        <a href="/login">Staff Login</a>
      </div>

      <div className="sidebar-btn active">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;
