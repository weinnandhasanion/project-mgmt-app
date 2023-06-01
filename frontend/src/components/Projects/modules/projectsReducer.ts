import { createSlice } from "@reduxjs/toolkit";
import { Project } from "types";
import { addProject } from "./projectsThunk";

interface ProjectsState {
  projects: Project[];
  loading: boolean;
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = [...state.projects, action.payload];
      });
  },
});

// export const { } = projectSlice.actions;

export const { reducer: projectReducer } = projectSlice;
