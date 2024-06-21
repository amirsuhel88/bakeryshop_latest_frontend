import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import AddToCartButton from "../../widget/Components/AddToCartButton/AddToCartButton";
import "./SingleProduct.css"; // Make sure to import the CSS file
//import { useAuth } from "../../context.js/AuthContext";
//import { useDispatch, useSelector } from "react-redux";
//import { addToCart } from "../../widget/Components/Redux/reducers/cartReducer";
import UpDown from "../../widget/Components/UpDown/UpDown";
function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //  const { token } = useAuth();
  //const cartItems = useSelector((state) => state.cart.items);
  //const dispatch = useDispatch();

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
  console.log(product);
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

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
            <div className="col-md-6 mb-3">
              {loading && (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {error && <div className="alert alert-danger">{error}</div>}
              {product && (
                <img
                  src={`http://localhost:8081/public/images/${product.Image}`} // Ensure the URL is correct
                  className="img-fluid rounded-start"
                  alt={product.ProductName}
                  height="2000" // specify your desired height
                  width="3000"
                />
              )}
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
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
                <div class="container">
                  <div class="row d-flex justify-content-center">
                    {/* <div class="d-flex justify-content-end col"><AddToCartButton /></div>
                    <div class="col-3"><AddToCartButton /></div> */}
                    <div className="col-6">
                      <AddToCartButton />
                    </div>
                    <div className="col-6">
                      <AddToCartButton />
                    </div>
                  </div>
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
