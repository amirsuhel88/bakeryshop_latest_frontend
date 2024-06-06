// reducers/cartReducer.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log('data ========>  ', action)
      state.items.push(action.payload);
    },
    // Define other reducers like removeFromCart, clearCart, etc.
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
