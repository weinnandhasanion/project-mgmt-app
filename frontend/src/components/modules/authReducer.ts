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
    persistUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser: () => {
      localStorage.removeItem("user");
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
        state.user = action.payload.user;
        state.token = action.payload.token;
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
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as StringMap;
      }),
});

export const { persistUser, logoutUser, resetErrors } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
