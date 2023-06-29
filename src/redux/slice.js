import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { email: '' },
  isLoggedIn: false,
  isRefreshing: false,
};

const handlerRegisterLoginFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
};

const handlerLogoutFulfilled = (state) => {
  state.user = { email: '' };
  state.isLoggedIn = false;
};

const refreshUserPendingRejected = (state) => {
  state.isRefreshing = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    refreshingOff: (state) => {
      state.isRefreshing = false;
    }
  },
  extraReducers: builder => builder
    .addCase(register.fulfilled, handlerRegisterLoginFulfilled)
    .addCase(logIn.fulfilled, handlerRegisterLoginFulfilled)
    .addCase(logOut.fulfilled, handlerLogoutFulfilled)
    .addCase(refreshUser.pending, refreshUserPendingRejected)
    .addCase(refreshUser.rejected, refreshUserPendingRejected)
});

export const authReducer = authSlice.reducer;
export const { setUser, refreshingOff } = authSlice.actions;