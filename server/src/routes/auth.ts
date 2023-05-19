import express from "express";

export const authRouter = express.Router();

authRouter.get("/", (_, res) => {
  res.json({
    user: {
      id: 123,
      username: "johndoe123",
      givenName: "John Doe",
    },
    token: "sample token 123",
  });
});

authRouter.post("/", (req, res) => {
  res.json({
    user: {
      id: 123,
      username: req.body.username,
      givenName: "Tsuki",
    },
    token: "123",
  });
});
