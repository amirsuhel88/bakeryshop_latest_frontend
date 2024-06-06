import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../widget/Components/Navbar";
import AddToCartButton from "../../widget/Components/AddToCartButton/AddToCartButton";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v2/products?page=${currentPage}&limit=10`
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

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v2/categories"
      );
      const data = response.data;
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setCategories([]);
        setError("Unexpected data format from categories API");
      }
    } catch (error) {
      setError("Error fetching categories data");
      console.error("Error fetching categories data:", error);
    }
  };

  // const handleAddToCart = async (productId) => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8081/api/v3/addToCart/${productId}`,
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     console.log("Product added to cart:", response.data);
  //     // Update cart items state
  //     setCartItems((prevCartItems) => [...prevCartItems, productId]);
  //   } catch (error) {
  //     console.error("Error adding product to cart:", error);
  //     setError("Error adding product to cart");
  //   }
  // };

  const handleBuyNow = (productId) => {
    console.log('Product bought:', productId);
    // Implement buy now functionality here
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const isProductInCart = (productId) => {
    return cartItems.includes(productId);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>All Products</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          <div className="col-md-3">
            <div className="list-group mb-4">
              <h5 className="list-group-item list-group-item-action active">
                Categories
              </h5>
              {categories.map((category) => (
                <a
                  key={category.id}
                  href="#"
                  className="list-group-item list-group-item-action"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <div key={product.ProductId} className="card mb-3">
                  <Link
                    to={`/SingleProduct/${product.ProductId}`}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={product.ImageUrl}
                          className="img-fluid"
                          alt={product.ProductName}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{product.ProductName}</h5>
                          <p className="card-text">{product.Description}</p>
                          <p className="card-text">Price: {product.Price}</p>
                          <p className="card-text">
                            Category: {product.CategoryName}
                          </p>
                          <div className="d-flex justify-content-end">
                            {/* {!isProductInCart(product.ProductId) ? (
                              <button
                                className="btn btn-primary me-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAddToCart(product.ProductId);
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
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div>No products available</div>
            )}
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-primary"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <button className="btn btn-primary" onClick={handleNextPage}>
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
