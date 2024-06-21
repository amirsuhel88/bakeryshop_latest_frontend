import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";
import Footer from "../Footer";

const SearchedProducts = () => {
  const { state } = useLocation();
  const products = state?.products;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Searched Products</h3>
        {products?.length > 0 ? (
          products.map((product) => (
            <div key={product.ProductId} className="card mb-3">
              <Link
                to={`/SingleProduct/${product.ProductId}`}
                className="text-decoration-none text-dark"
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    {product && (
                      <img
                        src={`http://localhost:8081/public/images/${product.Image}`}
                        className="img-fluid rounded-start"
                        alt={product.ProductName}
                        height="2000"
                        width="3000"
                      />
                    )}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.ProductName}</h5>
                      <p className="card-text">Price: {product.Price}</p>
                      <p className="card-text">Category: {product.CategoryName}</p>
                      <div className="d-flex justify-content-end">
                        <AddToCartButton />
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
      </div>
      <Footer />
    </>
  );
};

export default SearchedProducts;
