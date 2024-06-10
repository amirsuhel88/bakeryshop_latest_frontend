//import logo from './logo.svg';
//import "./App.css";
//import Login from './Login';
import Login from "./pages/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup.js";
import Home from "./pages/Home/Home.js";
import Admin from "./pages/Admin/Admin.js";
import Profile from "./pages/Profile/Profile.js";
import { AuthProvider } from "./context.js/AuthContext.js";
import Category from "./pages/Category/Category.js";
import Cart from "./pages/Cart/Cart.js";
import AllProducts from "./pages/Products/AllProducts.js";
import Sidebar from "./pages/Dashboard/Sidebar.js";
import Placeorder from "./widget/Components/Placeorder.js";
import SingleProduct from "./pages/ProductPage/SingleProduct.js";
//import ImageUpload from "./pages/AddNewProduct/ImageUpload.js";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct.js";
//import UpDown from "./widget/Components/UpDown/UpDown.js";

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <div className="conent-wrap">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/allproducts" element={<AllProducts />}></Route>
              <Route path="/sidebar" element={<Sidebar />}></Route>
              <Route path="/placeorder" element={<Placeorder />}></Route>
              <Route
                path="/SingleProduct/:productId"
                element={<SingleProduct />}
              ></Route>
              {/* <Route path="/ImageUpload" element={<ImageUpload />}></Route> */}
              <Route path="/addnewproduct" element={<AddNewProduct/>}></Route>

              {/* <Route path="/DashboardOverview" element={<DashboardOverview/>}></Route> */}
            </Routes>
          </BrowserRouter>
          {/* <>
            <UpDown/>
          </> */}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
