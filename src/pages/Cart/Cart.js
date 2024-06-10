

import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
//import Placeorder from "../../widget/Components/Placeorder";
//import UpDown from "../../widget/Components/UpDown/UpDown.js";

function Cart() {
  const [cart, setCart] = useState([]); // Initialize cart state as an empty array
  const { token } = useAuth();

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v3/cartItems",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCart(response.data); // Set cart state with the received cart items
    } catch (error) {
      console.error("Error fetching cart items:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    fetchCartItems(); // Fetch cart items when component mounts or token changes
  }, [token]); // Dependency on token ensures fetching when token changes
  console.log(cart)
  return (
    <div>
      <Navbar/>
      <div className="container mt-4">
        <h3>Cart Items</h3>
        <div className="row">
          <div className="col-md-9">
            {cart.map((item) => (
              <div key={item.CartId} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.ImageUrl} // Assuming there's an ImageUrl in the cart item data
                      className="img-fluid"
                      alt={item.ProductName}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.ProductName}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">Price: {item.Price}</p>
                      <p className="card-text">Quantity: {item.totalQuantity}</p>
                    </div>
                    

                    {/* <UpDown/> */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <UpDown/> */}
      <Footer/>
    </div>
  );
}

export default Cart;
