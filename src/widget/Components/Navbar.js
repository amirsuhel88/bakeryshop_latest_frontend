import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faCartShopping,
  faUser,
  //,
} from "@fortawesome/free-solid-svg-icons"; // Impor

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg ">
      <a className="navbar-brand" href="/">
        <FontAwesomeIcon icon={faBreadSlice} />
        Bakery Shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <span className="navbar-text">Navbar text with an inline element</span>
      </div>
      <form class="form-inline">
        <Form.Control
          type="text"
          className="form-control mr-sm-2"
          placeholder="Search"
        />
      </form>
      <button className="btn btn-light" type="submit">
        Search
      </button>
      <a className="navbar-brand" href="/cart">
        <FontAwesomeIcon icon={faCartShopping} />

      </a>
      <a className="navbar-brand" href="/profile">
        <FontAwesomeIcon icon={faUser} />

      </a>
      {/* <Button class="btn btn-outline-success my-2 my-sm-0" type="submit" /> */}

      {/* <div>
          <a href="/" className="navbar-brand">
            <FontAwesomeIcon icon={faBreadSlice} />
          </a>
        </div> */}
      {/* <div>
        <a href="/" className="navbar-brand" style={{ color: 'white' }}>
           home
        </a>

          <a
            href="/category"
            className="navbar-brand"
            style={{ color: "white" }}
          >
            Category
          </a>
        </div> */}

      {/* <form className="d-flex">
          <input className="form-control me-2" type="search" />
          <button className="btn btn-light" type="submit">
            Search
          </button>
        </form>
        <div >
        <a href="/cart" className="navbar-brand">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <a href="/profile" className="navbar-brand">
          <FontAwesomeIcon icon={faUser} />
        </a>
        </div> */}
    </nav>
  );
}

export default Navbar;
