import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import { Link } from "react-router-dom";
import LogoutButton from "../../widget/Components/logout/LogoutButton";

function ViewAllAddress() {
  const { token } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [showAllAddresses, setShowAllAddresses] = useState(false); // State for showing all addresses
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1); // State to track the selected address index

  useEffect(() => {
    fetchUserAddresses();
  }, [token]);

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

  const toggleShowAll = () => {
    setShowAllAddresses(!showAllAddresses);
  };

  const handleRadioChange = (index) => {
    setSelectedAddressIndex(index);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="container mt-4">
        <h2>Delivery Address</h2>
        <hr />
        <div>
          {Array.isArray(addresses) && addresses.length > 0 ? (
            <>
              {addresses
                .slice(0, showAllAddresses ? addresses.length : 3)
                .map((address, index) => (
                  <div key={index} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-12">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="row">
                                <div className="col-1">
                                  {/* radio */}
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="addressRadio"
                                      id={`addressRadio${index}`}
                                      checked={selectedAddressIndex === index}
                                      onChange={() => handleRadioChange(index)}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`addressRadio${index}`}
                                    />
                                  </div>
                                </div>
                                <div className="col-11">
                                  {/* address */}
                                  <h5
                                    className="card-title"
                                    style={{ fontSize: "1.2rem" }}
                                  >
                                    {address.Name}
                                  </h5>
                                  <span className="card-text">
                                    {address.Street}, {address.Address},{" "}
                                    {address.City}, {address.Area},{" "}
                                    {address.State}, {address.Country},{" "}
                                    {address.Landmark}, {address.PostalCode}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {addresses.length > 3 && (
                <button className="btn btn-link" onClick={toggleShowAll}>
                  {showAllAddresses
                    ? "Show less addresses"
                    : "Show more addresses"}
                </button>
              )}
            </>
          ) : (
            <div>No addresses available</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewAllAddress;
