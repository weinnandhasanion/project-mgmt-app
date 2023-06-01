import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "services/api";
import { Project } from "types";

export const addProject = createAsyncThunk(
  "projects/add",
  async (data: Project, thunkAPI) => {
    try {
      const res = await post("projects/add", data);

      return res.data as Project;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
