import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
function AddNewAddress() {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    Phone: "",
    Street: "",
    Address: "",
    City: "",
    Area: "",
    State: "",
    Country: "",
    PostalCode: "",
    Landmark: "",
    AlternatePhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post(
        `http://localhost:8081/api/v4/addToAddress`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSuccess("Address added successfully!");
      setFormData({
        Name: "",
        Phone: "",
        Street: "",
        Address: "",
        City: "",
        Area: "",
        State: "",
        Country: "",
        PostalCode: "",
        Landmark: "",
        AlternatePhone: "",
        //console.log("Product added to cart:", response.data);
      });
    } catch (error) {
      console.error("Error adding address: ", error);
      setError("Error adding address: ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="card my-5">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
          <div className="col">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="Phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className="row mb-3">
          <div className="col">
            <label htmlFor="PostalCode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              id="PostalCode"
              name="PostalCode"
              value={formData.PostalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="Street" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              id="Street"
              name="Street"
              value={formData.Street}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="Address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              required
            />
          </div>
          
          
          <div className="row mb-3">
          <div className="col">
            <label htmlFor="City" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="City"
              name="City"
              value={formData.City}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="Area" className="form-label">
              Area
            </label>
            <input
              type="text"
              className="form-control"
              id="Area"
              name="Area"
              value={formData.Area}
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="row mb-3">
          <div className="col">
            <label htmlFor="State" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="State"
              name="State"
              value={formData.State}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="Country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="Country"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
              required
            />
          </div>
          </div>
         
          <div className="row mb-3">
          <div className="col">
            <label htmlFor="Landmark" className="form-label">
              Landmark
            </label>
            <input
              type="text"
              className="form-control"
              id="Landmark"
              name="Landmark"
              value={formData.Landmark}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="AlternatePhone" className="form-label">
              Alternate Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="AlternatePhone"
              name="AlternatePhone"
              value={formData.AlternatePhone}
              onChange={handleChange}
            />
          </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Adding..." : "Add Address"}
          </button>
          {error && <p className="text-danger mt-3">{error}</p>}
          {success && <p className="text-success mt-3">{success}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddNewAddress;
