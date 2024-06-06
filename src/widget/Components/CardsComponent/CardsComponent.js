// src/App.js
import React from "react";
import CookieCard from "../Cards/CookieCard";
import "../Cards/CookieCard.css"; // You can add custom CSS here
import { useNavigate } from "react-router-dom";

const images = [
  require("../../../assets/data/images/cokies.jpg"),
  require("../../../assets/data/images/biscuit.jpg"),
  require("../../../assets/data/images/biscuit1.jpg"),
  require("../../../assets/data/images/puff.jpg"),
  require("../../../assets/data/images/cake.jpg"),
  require("../../../assets/data/images/cupcake.jpg"),
];

const CardsComponent = () => {
  const navigate = useNavigate();
  const handleViewAllProducts = () =>{
    navigate('/allproducts');
  }

  return (
    <div className="CardsComponent">
      <div className="container mt-5">
        <div className="row mt-4">
          <div className="col text-center">
            <a href="/allproducts" className="btn btn-brown">View all products</a>
          </div>
        </div>
        <div className="row justify-content-center">
          {images.map((image, index) => (
            <div className="col-md-4 d-flex justify-content-center" key={index}>
              <CookieCard image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
