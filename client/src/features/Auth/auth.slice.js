import { createSlice } from '@reduxjs/toolkit';

const itemKey = 'userInfo';
const userInfo = window.localStorage.getItem(itemKey);
const initialState = {
  userInfo: userInfo ? JSON.parse(userInfo) : null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userInfo, token } = action.payload;
      state.userInfo = userInfo;
      state.accessToken = token;
      localStorage.setItem(itemKey, JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      state.accessToken = null;
      localStorage.removeItem(itemKey);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.userInfo;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectIsAuthenticated = (state) => !!state.auth.userInfo;
