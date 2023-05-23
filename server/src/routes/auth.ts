import express from "express";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/jwt";
import { prisma } from "../db";
import { AUTH_SECRET_KEY } from "../config";
import { validateSignup } from "../middleware/validation/signup";
import { validateLogin } from "../middleware/validation/login";

export const authRouter = express.Router();

const transformUserObj = (user: any) => ({
  id: user.id,
  username: user.username,
  givenName: `${user.firstName} ${user.lastName}`,
});

authRouter.get("/me", verifyToken, async (req: any, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.id,
    },
  });

  res.status(200).json({ user: transformUserObj(user) });
});

authRouter.post("/login", validateLogin, (req: any, res) => {
  const user = req.user;

  if (user) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      AUTH_SECRET_KEY
    );

    res.status(200).json({ user: transformUserObj(user), token });
  }
});

authRouter.post("/signup", validateSignup, async (req, res) => {
  const { email, username, firstName, lastName, password } = req.body;

  const user = await prisma.user.create({
    data: { username, email, firstName, lastName, password },
  });

  if (user) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      AUTH_SECRET_KEY
    );

    res.status(200).json({ user: transformUserObj(user), token });
  }
});
