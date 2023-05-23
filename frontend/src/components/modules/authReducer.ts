import { createSlice } from "@reduxjs/toolkit";
import { AuthObject, StringMap } from "types";
import { getUser, logUser, signUpUser } from "./authThunk";

const initialState: AuthObject = {
  user: null,
  token: null,
  loading: false,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("token");
      return initialState;
    },
    resetErrors: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) =>
    builder
      // login actions
      .addCase(logUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(logUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as StringMap;
      })
      // signup actions
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as StringMap;
      })
      // refresh user actions
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as StringMap;
      }),
});

export const { logoutUser, resetErrors } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
