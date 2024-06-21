import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context.js/AuthContext";

function AddToCartButton() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v2/products/${productId}`
      );
      setProduct(response.data);
      setError(null);
    } catch (error) {
      setError(
        error.response?.status === 404
          ? "Product not found"
          : "Error fetching product data"
      );
      console.error("Error fetching product data:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    setIsAddedToCart(
      savedCartItems.some((item) => item.ProductId === productId)
    );
  }, [productId]);

  const handleAddToCart = async (product) => {
    try {
      await axios.post(
        `http://localhost:8081/api/v3/addToCart/${product.ProductId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const updatedCartItems = [...cartItems, product];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setIsAddedToCart(true);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setError("Error adding product to cart");
    }
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* <div className="col-md-6"> */}
        <div className="col">
          {product && (
            <div className="card-body">
              {/* <div className="d-flex justify-content-end"> */}
              <div className="d-flex">
                {!isAddedToCart ? (
                  <button
                    className="btn btn-primary me-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-success me-2"
                    onClick={handleGoToCart}
                  >
                    Go to Cart
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddToCartButton;

