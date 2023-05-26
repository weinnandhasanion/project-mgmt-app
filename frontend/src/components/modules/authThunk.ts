import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import { get, post } from "services/api";
import { StringMap, User } from "types";

export const getUser = createAsyncThunk<User>("auth/me", async () => {
  try {
    const response = await get("/auth/me");

    return response.data;
  } catch (error: any) {
    enqueueSnackbar(error.message, { variant: "error" });
  }
});

export const logUser = createAsyncThunk<User, StringMap>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await post("/auth/login", data);

      const { user, token } = response.data;

      localStorage.setItem("token", token);

      enqueueSnackbar("Login successful", { variant: "success" });

      return user;
    } catch (error: any) {
      if (error.response.data.errors) {
        for (const err of Object.values(error.response.data.errors)) {
          enqueueSnackbar(err as string, { variant: "error" });
        }
      }
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

      enqueueSnackbar("Signup successful", { variant: "success" });

      return user;
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
