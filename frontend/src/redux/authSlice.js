import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
