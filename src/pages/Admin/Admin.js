import React, { useState } from "react";
import "../../assets/data/styles/style.css";
import validation from "../Login/Validation/loginValidation.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";
import { useDispatch } from "react-redux";
import { setUser } from "../../widget/Components/Redux/reducers/userSlice.js";
import Navbar from "./Navbar.js";


function Admin() {
  
  return (
    <div>
        <Navbar/>
        This is admin
    </div>
  )
}

export default Admin;
