import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import AddToCartButton from "../../widget/Components/AddToCartButton/AddToCartButton";
import "./SingleProduct.css"; // Make sure to import the CSS file
import { useAuth } from "../../context.js/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../widget/Components/Redux/reducers/cartReducer";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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

  const handleAddToCart = async (product) => {
    console.log("Product added to cart:");
    try {
      const response = await axios.post(
        `http://localhost:8081/api/v3/addToCart/${product.ProductId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
     //console.log("Product added to cart:", response.data);
      dispatch(addToCart(product));
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setError("Error adding product to cart");
    }
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.ProductId === productId);
  };

  const handleBuyNow = (productId) => {
    console.log("Product bought:", productId);
    // Implement buy now functionality here
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            {loading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            {product && (
              <img
                src={product.ImageUrl}
                className="img-fluid rounded-start"
                alt={product.ProductName}
              />
            )}
          </div>
          <div className="col-md-6">
            {product && (
              <div className="card-body">
                <h3 className="card-title">{product.ProductName}</h3>
                <p className="card-text">
                  <small className="text-muted">{product.CategoryName}</small>
                </p>
                <p className="card-text">{product.Description}</p>
                <h5 className="my-4 price">₹{product.Price}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-end">
                    {/* {!isProductInCart(product.ProductId) ? (
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
                      <button className="btn btn-success me-2" disabled>
                        Added to Cart
                      </button>
                    )} */}
                    <AddToCartButton/>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBuyNow(product.ProductId);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                  <span className="badge bg-secondary">
                    Rating: {product.Rating}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
