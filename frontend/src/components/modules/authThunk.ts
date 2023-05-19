import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "services/api";
import { StringMap } from "types";

export const logUser = createAsyncThunk<AnyAction, StringMap>(
  "auth/login",
  async (data) => {
    const response = await post("/auth", data);

    return response.data;
  }
);
