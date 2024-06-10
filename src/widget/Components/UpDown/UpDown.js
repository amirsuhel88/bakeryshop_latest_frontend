// src/components/UpDown/UpDown.js
import React from "react";
//import "./UpDown.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/reducers/QuantityReducers/upDownSlice";

function UpDown() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div>
    <div className="container">
      <h1>Increment/Decrement</h1>
      <h4>Using React and Redux Toolkit</h4>
      <div className="quantity">
        <button className="quantity__minus" title="Decrement" onClick={() => dispatch(decrement())}>
          <span>-</span>
        </button>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={myState}
          readOnly
        />
        <button className="quantity__plus" title="Increment" onClick={() => dispatch(increment())}>
          <span>+</span>
        </button>
      </div>
    </div>
  </div>
  );
}

export default UpDown;
