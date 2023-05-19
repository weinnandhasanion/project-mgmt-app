import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "services/api";
import { StringMap, User } from "types";

export const logUser = createAsyncThunk<AnyAction, StringMap>(
  "auth/login",
  async (data) => {
    const response = await post("/auth/login", data);

    return response.data;
  }
);

export const signUpUser = createAsyncThunk<User, StringMap>(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await post("/auth/signup", data);

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.errors);
      }

      const { user, token } = response.data;

      localStorage.setItem("token", token);

      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
