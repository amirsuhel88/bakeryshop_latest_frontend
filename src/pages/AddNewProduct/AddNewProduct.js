import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import "../../assets/data/styles/style.css";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";

function AddNewProduct() {
  const [values, setValues] = useState({
    productName: "",
    description: "",
    price: "",
    stockQuantity: "",
    categoryName: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate();
  const { token } = useAuth();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const validateInputs = () => {
    const newErrors = {};

    if (!values.productName) newErrors.productName = "Product Name is required";
    if (!values.description) newErrors.description = "Description is required";
    if (!values.price || isNaN(values.price)) newErrors.price = "Valid price is required";
    if (!values.stockQuantity || isNaN(values.stockQuantity)) newErrors.stockQuantity = "Valid stock quantity is required";
    if (!values.categoryName) newErrors.categoryName = "Category Name is required";
    if (!selectedFile) newErrors.image = "Image is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInputs()) {
      try {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('ProductName', values.productName);
        formData.append('Description', values.description);
        formData.append('Price', values.price);
        formData.append('StockQuantity', values.stockQuantity);
        formData.append('CategoryName', values.categoryName);

        await axios.post('http://localhost:8081/api/v2/addProduct', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/admin");
      } catch (error) {
        setUploadStatus('Error uploading image or adding product');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="container-fluid">
    <Navbar />
      <div className="row">
        <div
          className="col-5 d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <form onSubmit={handleSubmit}>
            <h2>Add a new Product</h2>
            <p className="opacity-75">Add a New Product</p>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                name="productName"
                value={values.productName}
                onChange={handleInput}
              />
              {errors.productName && (
                <span className="text-danger">{errors.productName}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleInput}
              />
              {errors.description && (
                <span className="text-danger">{errors.description}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                name="price"
                value={values.price}
                onChange={handleInput}
              />
              {errors.price && (
                <span className="text-danger">{errors.price}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Stock Quantity"
                name="stockQuantity"
                value={values.stockQuantity}
                onChange={handleInput}
              />
              {errors.stockQuantity && (
                <span className="text-danger">{errors.stockQuantity}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                name="categoryName"
                value={values.categoryName}
                onChange={handleInput}
              />
              {errors.categoryName && (
                <span className="text-danger">{errors.categoryName}</span>
              )}
            </div>

            <div className="mb-3">
              <input type="file" onChange={handleFileChange} />
              {errors.image && (
                <span className="text-danger">{errors.image}</span>
              )}
            </div>

            <p className="opacity-75">You agree to our terms and policies</p>

            <div className="d-grid gap-2">
              <button className="login-button" type="submit">
                Add Product
              </button>
            </div>
            {uploadStatus && <p>{uploadStatus}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddNewProduct;
