import { prisma } from "../../db";

export const validateLogin = async (req: any, res: any, next: any) => {
  const { username, password } = req.body;

  let errors: { [key: string]: string } = {};

  if (!username) {
    errors.username = "Please enter a username.";
  }

  if (!password) {
    errors.password = "Please enter a password.";
  }

  if (Object.keys(errors).length > 0) {
    res.status(500).json({ errors });
    return;
  }

  errors = {};

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (!user) {
    errors.username = "Username doesn't exist.";
    res.status(500).json({ errors });
    return;
  }

  if (password !== user.password) {
    errors.password = "Incorrect password!";
    res.status(500).json({ errors });
    return;
  }

  req.user = user;
  next();
};
