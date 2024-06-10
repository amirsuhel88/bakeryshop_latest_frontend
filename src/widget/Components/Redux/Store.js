// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import upDownReducer from './reducers/QuantityReducers/upDownSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    changeTheNumber: upDownReducer,
  },
 
});
