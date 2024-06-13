import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import { useNavigate } from "react-router-dom";

//import Placeorder from "../../widget/Components/Placeorder";
//import UpDown from "../../widget/Components/UpDown/UpDown.js";

function Cart() {
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orderpage"); // Path to redirect to
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h3>Cart Items</h3>
        <div className="row">
          <div className="col-md-8">
            {Array.isArray(cart) && cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.ProductId} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      {item && (
                        <img
                          src={`http://localhost:8081/public/images/${item.Image}`}
                          className="img-fluid rounded-start"
                          alt={item.ProductName}
                          height="140" // specify your desired height
                          width="140"
                        />
                      )}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.ProductName}</h5>
                        <p className="card-text">Price: {item.Price}</p>
                        <p className="card-text">
                          Quantity: {item.totalQuantity}
                        </p>
                      </div>
                      {/* <UpDown/> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
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
                      {/* <UpDown/> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <h4>Total Price: {totalPrice}</h4>
          </div>
        </div>
          {/* buy now button */}
          <button className="btn btn-primary" onClick={handleClick}>
            Place Order
          </button>
      </div>
      {/* <UpDown/> */}
      <Footer />
    </div>
  );
}

export default Cart;
