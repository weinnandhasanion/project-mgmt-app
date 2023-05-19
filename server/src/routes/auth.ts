import express from "express";
import jwt from "jsonwebtoken";
import { verifyTokenMiddleware } from "../middleware/jwt";
import { prisma } from "../db";
import { AUTH_SECRET_KEY } from "../config";

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

authRouter.post("/login", verifyTokenMiddleware, (req, res) => {
  res.json({
    user: {
      id: 123,
      username: req.body.username,
      givenName: "Tsuki",
    },
    token: "123",
  });
});

authRouter.post("/signup", async (req, res) => {
  const { email, username, firstName, lastName, password } = req.body;
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const usernameExists = await prisma.user.findUnique({
    where: { username },
  });

  const errorObj: { [key: string]: string } = {};

  if (emailExists) {
    errorObj["email"] = "Email already exists. Please choose another email.";
  }

  if (usernameExists) {
    errorObj["username"] = "Username is taken.";
  }

  if (Object.keys(errorObj).length > 0) {
    res.status(500).json({ errors: errorObj });
    return;
  }

  const user = await prisma.user.create({
    data: { username, email, firstName, lastName, password },
  });

  if (user) {
    const userObj = {
      id: user.id,
      username: user.username,
      givenName: `${user.firstName} ${user.lastName}`,
    };

    const token = jwt.sign(
      { id: user.id, username: user.username },
      AUTH_SECRET_KEY
    );

    res.status(200).json({ user: userObj, token });
  }
});
