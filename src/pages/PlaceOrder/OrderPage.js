import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context.js/AuthContext";
import ViewAllAddress from "../Address/ViewAllAddress";

function OrderPage() {
  const [cart, setCart] = useState([]); // Initialize cart state as an empty array
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice state
  const { token } = useAuth();

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v3/cartItems",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Check if the response data is in the expected format
      if (response.data && Array.isArray(response.data.data)) {
        setCart(response.data.data); // Set cart state with the received cart items
        setTotalPrice(response.data.totalPrice); // Set totalPrice state with the received total price
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    fetchCartItems(); // Fetch cart items when component mounts or token changes
  }, [token]); // Dependency on token ensures fetching when token changes

  //add new address button click
  const navigate = useNavigate();

  const handleAddNewAddress = () => {
    navigate("/addnewaddress"); // Path to redirect to
  };
  const handleContitue = () => {
    navigate("/payment"); // Path to redirect to
  };
  

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h3>Delivery Address</h3>
        <div className="row">
          <div className="col-md-8 card">
            {/* view all address */}
            <ViewAllAddress/>

            {/* address form here */}
            <button className="btn btn-primary" onClick={handleAddNewAddress}>
              Add New Address
            </button>
          </div>
          <div className="col-md-4 card mb-3">
            {Array.isArray(cart) && cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.ProductId} className="">
                  <div className="row g-0">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          Price: {item.Price} * {item.totalQuantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <h4>Total Price: {totalPrice}</h4>
            <button className="btn btn-primary" onClick={handleContitue}>
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPage;
