import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../widget/Components/Navbar";
import AddToCartButton from "../../widget/Components/AddToCartButton/AddToCartButton";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
function SearchButton() {
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
  /*
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
  */
  //this part is now using redux
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
    <div>
      
    </div>
  )
}

export default SearchButton
