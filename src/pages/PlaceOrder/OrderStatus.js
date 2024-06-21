import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context.js/AuthContext";
import ViewAllAddress from "../Address/ViewAllAddress";
import Modal from "../../widget/Components/Modal/Modal";

function OrderStatus() {
  const [orderStatusMessage, setOrderStatusMessage] = useState(""); // Initialize order status message
  const { token } = useAuth();
  const navigate = useNavigate();

  const checkOrderStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v5/isOrderSuccessful",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Set order status message based on the response
      setOrderStatusMessage(response.data.message);
    } catch (error) {
      console.error("Error checking order status:", error);
      // Handle error (e.g., show error message to the user)
      setOrderStatusMessage("Failed to check order status");
    }
  };

  useEffect(() => {
    checkOrderStatus(); // Check order status when component mounts or token changes
  }, [token]); // Dependency on token ensures fetching when token changes


  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h3>Order Status</h3>
        <div className="row">
          
          <div className="col-md-4 card mb-3">
            {/* Order status message */}
            {orderStatusMessage && (
              <div className="alert alert-info mt-3">{orderStatusMessage}</div>
            )}
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderStatus;
