import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "components/Projects/modules/projectsReducer";
import { authReducer } from "components/modules/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
  },
});

export default store;
