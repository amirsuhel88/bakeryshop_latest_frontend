import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context.js/AuthContext";
import Navbar from "../Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  //const { token } = useAuth();

  useEffect(() => {
    fetchProducts();
    // fetchCategories();
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

  const handleBuyNow = (productId) => {
    console.log("Product bought:", productId);
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
      <div className="container mt-4">
        <div className="row">
          <Navbar/>
          <div className="col-md-9">
            <h3>All Products</h3>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <div key={product.ProductId} className="card mb-3">
                  <Link
                    to={`/SingleProduct/${product.ProductId}`}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    <div className="row g-0">
  <div className="col-md-4 d-flex align-items-center justify-content-center">
    <div>
      {product && (
        <img
          src={`http://localhost:8081/public/images/${product.Image}`}
          className="img-fluid rounded-start"
          alt={product.ProductName}
          height="80" // specify your desired height
          width="80"
        />
      )}
    </div>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">{product.ProductName}</h5>
      <p className="card-text">Price: {product.Price}</p>
      <p className="card-text">Category: {product.CategoryName}</p>
      <div className="d-flex justify-content-end"></div>
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
    </>
  );
}

export default Products;
