import express from "express";

export const projectRouter = express.Router();

projectRouter.get("/", (_, res) => {
  res.json([
    {
      id: 1,
      name: "test-project",
      tasks: [
        {
          name: "simple-task",
          description: "A simple task",
          estimate: 2,
        },
      ],
    },
  ]);
});
