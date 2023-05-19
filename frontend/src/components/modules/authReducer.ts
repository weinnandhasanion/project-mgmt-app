import { createSlice } from "@reduxjs/toolkit";
import { AuthObject } from "types";

const initialState: AuthObject = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logUser: (_, action) => {
      const { user, token } = action.payload;

      return {
        user,
        token,
      };
    },
    logoutUser: () => initialState,
  },
});

export const { logUser, logoutUser } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
