import { prisma } from "../../db";

const validateSignup = async (req: any, res: any, next: any) => {
  const { username, email, password, firstName, lastName, confirmPassword } =
    req.body;

  const errors: { [key: string]: string } = {};

  for (const field of Object.keys({
    username,
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
  })) {
    if (!req.body[field]) {
      errors[field] = "This field is required.";
    }
  }

  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    errors["password"] =
      "Password must have at least 8 characters, have at least one letter, and have at least one number.";
  }

  if (password !== confirmPassword) {
    errors["confirmPassword"] = "Passwords do not match.";
  }

  const emailExists = await prisma.user.findUnique({
    where: { email },
  });

  if (emailExists) {
    errors["email"] = "Email already exists.";
  }

  const usernameExists = await prisma.user.findUnique({
    where: { username },
  });

  if (usernameExists) {
    errors["username"] = "Username is already taken.";
  }

  if (Object.keys(errors).length) {
    res.status(500).json({ errors });
    return;
  }

  next();
};

export { validateSignup };
