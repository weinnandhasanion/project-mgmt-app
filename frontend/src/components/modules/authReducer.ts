import { createSlice } from "@reduxjs/toolkit";
import { AuthObject } from "types";
import { logUser } from "./authThunk";

const initialState: AuthObject = {
  user: null,
  token: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => initialState,
  },
  extraReducers: (builder) =>
    builder
      .addCase(logUser.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(logUser.fulfilled, (_, action) => {
        const { user, token } = action.payload;
        return {
          user,
          token,
          loading: false,
        };
      })
      .addCase(logUser.rejected, (state) => {
        return { ...state, loading: false };
      }),
});

export const { logoutUser } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
