import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "services/api";
import { StringMap, User } from "types";

export const getUser = createAsyncThunk<User>("auth/me", async () => {
  const response = await get("/auth/me");

  return response.data;
});

export const logUser = createAsyncThunk<User, StringMap>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await post("/auth/login", data);

      const { user, token } = response.data;

      localStorage.setItem("token", token);

      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const signUpUser = createAsyncThunk<User, StringMap>(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await post("/auth/signup", data);

      const { user, token } = response.data;

      localStorage.setItem("token", token);

      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
