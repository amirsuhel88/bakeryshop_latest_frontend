import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import "../../assets/data/styles/style.css";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";

function UpdateProduct() {
  const { ProductId } = useParams(); // This will fetch ProductId from URL params
//   const history = useHistory();
  const { token } = useAuth();

  const [values, setValues] = useState({
    ProductName: "",
    Description: "",
    Price: "",
    StockQuantity: "",
    CategoryName: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch product details using ProductId
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v2/products/${ProductId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = response.data;
        setValues({
          ProductName: data.ProductName,
          Description: data.Description,
          Price: data.Price,
          StockQuantity: data.StockQuantity,
          CategoryName: data.CategoryName,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
        // Handle error (e.g., redirect to error page)
      }
    };

    fetchProduct();
  }, [ProductId, token]);

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

    // Add validation rules similar to AddNewProduct component

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInputs()) {
      try {
        const formData = new FormData();
        formData.append("ProductId", ProductId);
        formData.append("ProductName", values.ProductName);
        formData.append("Description", values.Description);
        formData.append("Price", values.Price);
        formData.append("StockQuantity", values.StockQuantity);
        formData.append("CategoryName", values.CategoryName);

        if (selectedFile) {
          formData.append("image", selectedFile);
        }

        await axios.put(
          `http://localhost:8081/api/v2/updateProduct/${ProductId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // history.push("/admin"); // Redirect to admin page after successful update
      } catch (error) {
        setUploadStatus("Error updating product");
        console.error("Error:", error);
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
            <h2>Update Product</h2>
            <p className="opacity-75">Update Product Details</p>

            {/* Input fields similar to AddNewProduct component */}
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
            <div className="d-grid gap-2">
              <button className="login-button" type="submit">
                Update Product
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

export default UpdateProduct;
