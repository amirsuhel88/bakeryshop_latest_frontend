import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context.js/AuthContext.js";
import PrivateRoute from "./widget/Components/PrivateRoute.js";

import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import Home from "./pages/Home/Home.js";
import Admin from "./pages/Admin/Admin.js";
import Profile from "./pages/Profile/Profile.js";
import Category from "./pages/Category/Category.js";
import Cart from "./pages/Cart/Cart.js";
import AllProducts from "./pages/Products/AllProducts.js";
import Sidebar from "./pages/Dashboard/Sidebar.js";
import Placeorder from "./widget/Components/Placeorder.js";
import SingleProduct from "./pages/ProductPage/SingleProduct.js";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct.js";
import AddNewAddress from "./pages/Address/AddNewAddress.js";
import OrderPage from "./pages/PlaceOrder/OrderPage.js";
import ViewAllAddress from "./pages/Address/ViewAllAddress.js";
import OrderStatus from "./pages/PlaceOrder/OrderStatus.js";
import Modal from "./widget/Components/Modal/Modal.js";
import Products from "./pages/Admin/pages/Products.js";
import Customers from "./pages/Admin/pages/Customers.js";
import UpdateProduct from "./pages/Products/UpdateProduct.js";

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/category" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/placeorder" element={<Placeorder />} />
              <Route
                path="/singleproduct/:productId"
                element={<SingleProduct />}
              />
              <Route path="/addnewproduct" element={<AddNewProduct />} />
              <Route path="/updateproduct" element={<UpdateProduct />} />
              <Route path="/addnewaddress" element={<AddNewAddress />} />
              <Route path="/orderpage" element={<OrderPage />} />
              <Route path="/user/viewaddresses" element={<ViewAllAddress />} />
              <Route path="/orderstatus" element={<OrderStatus />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/customers" element={<Customers />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
