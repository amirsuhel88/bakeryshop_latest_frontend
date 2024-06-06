import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use

function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <div>
          <a href="/" className="navbar-brand">
            <FontAwesomeIcon icon={faBreadSlice} />
          </a>
        </div>
        <div>
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
        </div>

        <form className="d-flex">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
