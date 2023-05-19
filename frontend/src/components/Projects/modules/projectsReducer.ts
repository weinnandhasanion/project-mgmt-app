import { createSlice } from "@reduxjs/toolkit";
import { Project } from "types";

const initialState: Project[] = [];

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state) => {
      return state;
    },
  },
});

export const { addProject } = projectSlice.actions;

export const { reducer: projectReducer } = projectSlice;
