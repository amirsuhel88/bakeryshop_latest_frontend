// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../../context.js/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Placeorder() {
//   const [profile, setProfile] = useState(null);
//   const { token } = useAuth(); // Access token from context

//   const fetchUserProfile = () => {
//     axios
//       .get("http://localhost:8081/api/v1/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         console.log(res.data.status);
//         setProfile(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching profile:", error);
//       });
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, [token]); // Include token in dependencies array

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/orderpage"); // Path to redirect to
//   };
//   // Frontend design
//   return (
//     <div>
//       {/* <a href="/orderpage" className="btn btn-brown">
//         Place Order
//       </a> */}
//       <button className="btn btn-primary" onClick={handleClick}>Place Order</button>
//     </div>
//   );
// }

// export default Placeorder;
