// src/Redux/reducers/upDownSlice.js
import { createSlice } from "@reduxjs/toolkit";

const upDownSlice = createSlice({
  name: "changeTheNumber",
  initialState: 1,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => {
      if (state > 1) {
        return state - 1;
      }
      return state;
    },
  },
});

export const { increment, decrement } = upDownSlice.actions;
export default upDownSlice.reducer;
