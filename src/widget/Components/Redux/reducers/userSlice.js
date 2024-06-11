// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { dispatch }) => {
    try {
      await axios.get('http://localhost:8081/api/v1/logout');
      localStorage.removeItem('userToken');
      dispatch(clearUser());
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isAdmin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
    },
    clearUser: (state) => {
      state.token = null;
      state.isAdmin = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
