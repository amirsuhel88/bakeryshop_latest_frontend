import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";

function Placeorder() {
  const [profile, setProfile] = useState(null);
  const { token } = useAuth(); // Access token from context

  const fetchUserProfile = () => {
    axios
      .get("http://localhost:8081/api/v1/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.status);
        setProfile(res.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  };

  useEffect(() => {
    fetchUserProfile();
  }, [token]); // Include token in dependencies array

  // Frontend design
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          <Navbar />
          <div className="main-content">
          <button type="button" class="btn btn-primary">Place Order</button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
