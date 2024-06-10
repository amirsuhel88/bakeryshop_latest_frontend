// src/App.js
import React, { useEffect, useState } from "react";
//import CookieCard from "../Cards/CookieCard";
import "../Cards/CookieCard.css"; // You can add custom CSS here
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const CardsComponent = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate("/allproducts");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v2/products?page=1&limit=6`
      );
      const data = response.data;
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
        setError("Unexpected data format from products API");
      }
    } catch (error) {
      setError("Error fetching products data");
      console.error("Error fetching products data:", error);
    }
  };

  return (
    <div className="CardsComponent">
      <div className="container mt-5">
        <div className="row mt-4">
          <div className="col text-center">
            <a href="/allproducts" className="btn btn-brown">
              View all products
            </a>
          </div>
        </div>
        <div className="row mt-4">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div key={product.ProductId} className="col-md-4 mb-4">
                <div className="card h-100">
                  <Link
                    to={`/SingleProduct/${product.ProductId}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="row g-0">
                      <div className="col-md-12">
                        {product && (
                          <img
                            src={`http://localhost:8081/public/images/${product.Image}`} // Ensure the URL is correct
                            className="img-fluid rounded-start"
                            alt={product.ProductName}
                          />
                        )}
                      </div>
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title">{product.ProductName}</h5>
                          <p className="card-text">Price: {product.Price}</p>
                          <p className="card-text">
                            Category: {product.CategoryName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">No products available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
