import { createSlice } from "@reduxjs/toolkit";
import { AuthObject, StringMap } from "types";
import { logUser, signUpUser } from "./authThunk";

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
    logoutUser: () => initialState,
    resetErrors: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logUser.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.loading = false;
      })
      .addCase(logUser.rejected, (state) => {
        state.loading = false;
      })
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
      }),
});

export const { logoutUser, resetErrors } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
