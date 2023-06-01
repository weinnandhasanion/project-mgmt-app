import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import { post } from "services/api";
import { StringMap, User } from "types";
import { setLocalStorage } from "util/util";

type R = { user: User; token: string };

export const logUser = createAsyncThunk<
  { user: User; token: string },
  StringMap
>("auth/login", async (data, thunkAPI) => {
  try {
    const response = await post("/auth/login", data);

    const { user, token } = response.data as R;

    setLocalStorage({ user, token });
    enqueueSnackbar("Login successful", { variant: "success" });

    return { user, token };
  } catch (error: any) {
    if (error.response.data.errors) {
      for (const err of Object.values(error.response.data.errors)) {
        enqueueSnackbar(err as string, { variant: "error" });
      }
    }
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const signUpUser = createAsyncThunk<R, StringMap>(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await post("/auth/signup", data);

      const { user, token } = response.data as R;

      setLocalStorage({ user, token });
      enqueueSnackbar("Signup successful", { variant: "success" });

      return { user, token } as R;
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);
