import React, { useState } from "react";
import loginImage from "../../assets/data/images/login.png";
import "../../assets/data/styles/style.css"
import { Link, useNavigate } from "react-router-dom";
import validation from "./validation/signupValidation.js";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));

    //checking for error to call api.
    if (
      errors.name === "" &&
      errors.email === "" &&
      errors.phone === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/api/v1/signup", values)
        .then(res => {
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-7"
          style={{ backgroundImage: `url(${loginImage})`, height: "100vh" }}
        >
          {/* Left side content */}
        </div>
        <div
          className="col-5 d-flex align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          {/* Right side content (Signup form) */}
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <p className="opacity-75">Create Your account</p>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="name"
                value={values.fullName}
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={values.email}
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                name="phone"
                value={values.phone}
                onChange={handleInput}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleInput}
              />
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword}</span>
              )}
            </div>

            <p className="opacity-75">You agree to our terms and policies</p>

            <div className="d-grid gap-2">
              <button className="login-button" type="submit">
                Sign Up
              </button>
              <p>
                Already have an account?
                <Link className="Link" to="/">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
