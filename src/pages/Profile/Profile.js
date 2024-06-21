import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
  }, [fetchUserProfile]); // Include token in dependencies array

  // Frontend design
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <Card style={{ width: "30rem" }}>
          <Card.Header>{profile?.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{profile?.email}</ListGroup.Item>
            <ListGroup.Item>{profile?.phone}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
