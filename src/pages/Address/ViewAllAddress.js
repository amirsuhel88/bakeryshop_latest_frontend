import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed and set up
import LogoutButton from "../../widget/Components/logout/LogoutButton";

function ViewAllAddress() {
  const [addresses, setAddresses] = useState([]);
  const { token } = useAuth(); // Access token from context

  const fetchUserAddresses = () => {
    axios
      .get("http://localhost:8081/api/v4/user/viewaddresses", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAddresses(res.data.addresses);
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
      });
  };

  useEffect(() => {
    fetchUserAddresses();
  }, [token]); // Fetch addresses when token changes

  // Frontend design
  return (
    <div className="page-container">
      <Navbar />
      <div className="main-content">
        <h3>Addresses</h3>

        {Array.isArray(addresses) && addresses.length > 0 ? (
          addresses.slice(0, 3).map((address, index) => (
            <div key={index} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body">
                    <div className="d-flex">
                      <h5
                        className="card-title me-3"
                        style={{ fontSize: "1.2rem", marginRight: "5rem" }}
                      >
                        {address.Name}
                      </h5>
                      <h5
                        className="card-title me-3"
                        style={{ fontSize: "1rem" }}
                      >
                        {address.Phone}
                      </h5>
                    </div>
                    <span className="card-text">
                      {address.Street}, {" "+address.Address}, {" "+address.City},
                      {" "+address.Area}, {" "+address.State}, {" "+address.Country},
                      {" "+address.Landmark}, {" "+address.PostalCode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No addresses available</div>
        )}

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                View All Addresses
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {Array.isArray(addresses) && addresses.length > 3 ? (
                  addresses.slice(3).map((address, index) => (
                    <div key={index} className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-12">
                          <div className="card-body">
                            <div className="d-flex">
                              <h5
                                className="card-title me-3"
                                style={{
                                  fontSize: "1.2rem",
                                  marginRight: "5rem",
                                }}
                              >
                                {address.Name}
                              </h5>
                              <h5
                                className="card-title me-3"
                                style={{ fontSize: "1rem" }}
                              >
                                {address.Phone}
                              </h5>
                            </div>
                            <span className="card-text">
                              {" "+address.Street},{" "+address.Address},{" "+address.City},
                              {" "+address.Area},{" "+address.State},{" "+address.Country},
                              {" "+address.Landmark},{" "+address.PostalCode}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
        
                  <div>No addresses available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default ViewAllAddress;
