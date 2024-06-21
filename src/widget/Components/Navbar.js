import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import LogoutButton from "../../widget/Components/logout/LogoutButton";

import {
  faBreadSlice,
  faCartShopping,
  faUser,
  //,
} from "@fortawesome/free-solid-svg-icons"; // Impor
import SearchProducts from "./SearchButton/SearchButton";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark">
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
        </ul>
      </div>
      {/* <form class="form-inline">
        <Form.Control
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </form> */}
      &nbsp; &nbsp; &nbsp;
      {/* <button className="btn btn-light" type="submit">
        Search
      </button> */}
      <SearchProducts/>
      &nbsp; &nbsp; &nbsp;
      <a className="navbar-brand" href="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </a>

      <Dropdown>
        <Dropdown.Toggle>
        <FontAwesomeIcon icon={faUser} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item><LogoutButton/></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default Navbar;
