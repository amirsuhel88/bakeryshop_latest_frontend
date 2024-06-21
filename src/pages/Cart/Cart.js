// import React, { useEffect, useState } from "react";
// import Navbar from "../../widget/Components/Navbar";
// import Footer from "../../widget/Components/Footer";
// import axios from "axios";
// import { useAuth } from "../../context.js/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [cart, setCart] = useState([]); // Initialize cart state as an empty array
//   const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice state
//   const { token } = useAuth();
//   const navigate = useNavigate();

//   // Fetch cart items function
//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8081/api/v3/cartItems",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // Check if the response data is in the expected format
//       if (response.data && Array.isArray(response.data.data)) {
//         setCart(response.data.data); // Set cart state with the received cart items
//         setTotalPrice(response.data.totalPrice); // Set totalPrice state with the received total price
//       } else {
//         console.error("Unexpected response format:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//       // Handle error (e.g., show error message to the user)
//     }
//   };

//   // useEffect to fetch cart items on component mount or token change
//   useEffect(() => {
//     fetchCartItems();
//   }, [token]);

//   // Function to handle removal of item from cart
//   const handleRemoveFromCart = async (productId) => {
//     try {
//       // Make DELETE request to remove item from cart
//       await axios.delete(`http://localhost:8081/api/v3/cart/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // Update cart state by filtering out the removed item
//       const updatedCart = cart.filter((item) => item.ProductId !== productId);
//       setCart(updatedCart);

//       // Optionally update total price based on the updated cart
//       const updatedTotalPrice = updatedCart.reduce(
//         (total, item) => total + item.Price * item.totalQuantity,
//         0
//       );
//       setTotalPrice(updatedTotalPrice);

//       // Update local storage with updated cart items
//       localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     } catch (error) {
//       console.error("Error removing product from cart:", error);
//       // Handle error (e.g., show error message to the user)
//     }
//   };

//   // Function to handle place order button click
//   const handleClick = () => {
//     navigate("/orderpage"); // Redirect to order page
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-4">
//         <h3>Cart Items</h3>
//         <div className="row">
//           <div className="col-md-8">
//             {Array.isArray(cart) && cart.length > 0 ? (
//               cart.map((item) => (
//                 <div key={item.ProductId} className="card mb-3">
//                   <div className="row g-0">
//                     <div className="col-md-4">
//                       {item && (
//                         <img
//                           src={`http://localhost:8081/public/images/${item.Image}`}
//                           className="img-fluid rounded-start"
//                           alt={item.ProductName}
//                           height="140"
//                           width="140"
//                         />
//                       )}
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <h5 className="card-title">{item.ProductName}</h5>
//                         <p className="card-text">Price: {item.Price}</p>
//                         <p className="card-text">
//                           Quantity: {item.totalQuantity}
//                         </p>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => handleRemoveFromCart(item.ProductId)}
//                         >
//                           Remove from Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Your cart is empty.</p>
//             )}
//           </div>
//           <div className="col-md-4 card mb-3">
//             {Array.isArray(cart) && cart.length > 0 ? (
//               cart.map((item) => (
//                 <div key={item.ProductId} className="">
//                   <div className="row g-0">
//                     <div className="col-md-4"></div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <p className="card-text">
//                           Price: {item.Price} * {item.totalQuantity}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Your cart is empty.</p>
//             )}
//             <h4>Total Price: {totalPrice}</h4>
//           </div>
//         </div>
//         {/* buy now button */}
//         <button className="btn btn-primary" onClick={handleClick}>
//           Place Order
//         </button>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Cart;


import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]); // Initialize cart state as an empty array
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice state
  const { token } = useAuth();
  const navigate = useNavigate();

  // Fetch cart items function
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

  // useEffect to fetch cart items on component mount or token change
  useEffect(() => {
    fetchCartItems();
  }, [token]);

  // Function to handle removal of item from cart
  const handleRemoveFromCart = async (productId) => {
    try {
      // Make DELETE request to remove item from cart
      await axios.delete(`http://localhost:8081/api/v3/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update cart state by filtering out the removed item
      const updatedCart = cart.filter((item) => item.ProductId !== productId);
      setCart(updatedCart);

      // Optionally update total price based on the updated cart
      const updatedTotalPrice = updatedCart.reduce(
        (total, item) => total + item.Price * item.totalQuantity,
        0
      );
      setTotalPrice(updatedTotalPrice);

      // Update local storage with updated cart items
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error removing product from cart:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  // Function to handle increasing quantity
  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.ProductId === productId
        ? { ...item, totalQuantity: item.totalQuantity + 1 }
        : item
    );
    updateCartQuantity(updatedCart);
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.ProductId === productId && item.totalQuantity > 1
        ? { ...item, totalQuantity: item.totalQuantity - 1 }
        : item
    );
    updateCartQuantity(updatedCart);
  };

  // Function to update cart quantity locally and potentially in the backend
  const updateCartQuantity = async (updatedCart) => {
    try {
      setCart(updatedCart);

      // Update total price based on the updated cart
      const updatedTotalPrice = updatedCart.reduce(
        (total, item) => total + item.Price * item.totalQuantity,
        0
      );
      setTotalPrice(updatedTotalPrice);

      // Update local storage with updated cart items
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      // Optional: Update backend with the updated cart quantities
      // This depends on your backend implementation
      // Example:
      // await axios.put("http://localhost:8081/api/v3/updateCart", updatedCart, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  // Function to handle place order button click
  const handleClick = () => {
    navigate("/orderpage"); // Redirect to order page
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
                          height="140"
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
                          <button
                            className="btn btn-sm btn-outline-primary mx-1"
                            onClick={() => handleIncreaseQuantity(item.ProductId)}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-sm btn-outline-primary mx-1"
                            onClick={() => handleDecreaseQuantity(item.ProductId)}
                          >
                            -
                          </button>
                        </p>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveFromCart(item.ProductId)}
                        >
                          Remove from Cart
                        </button>
                      </div>
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
      <Footer />
    </div>
  );
}

export default Cart;
