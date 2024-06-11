import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import LogoutButton from "../../widget/Components/logout/LogoutButton";

function Profile() {
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
            <h3>PROFILE</h3>
            <h4>Name: {profile?.name}</h4>
            <h4>Email: {profile?.email}</h4>
            <h4>Phone: {profile?.phone}</h4>
          <LogoutButton/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
