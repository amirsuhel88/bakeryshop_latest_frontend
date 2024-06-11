import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
//import store from "./Redux/store";
//import { Provider } from "react-redux";
import { Provider } from "react-redux";
import  {store}  from "./widget/Components/Redux/Store";
//store.subscribe(() => console.log(store.getState()));
import 'bootstrap/dist/css/bootstrap.min.css';   //for admin design. added on 11th june
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
