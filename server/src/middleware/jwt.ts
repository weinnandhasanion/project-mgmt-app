import jwt, { Secret } from "jsonwebtoken";
import { AUTH_SECRET_KEY } from "../config";

const verifyToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const [, token] = authHeader && authHeader.split(" ");

  if (!token) {
    res.status(403).send({
      message: "Invalid or missing token.",
    });
    return;
  }

  jwt.verify(token, AUTH_SECRET_KEY as Secret, (err: any, user: any) => {
    if (err) {
      res.status(403).send({
        message: "Invalid or missing token.",
      });
      return;
    }

    req.id = user.id;
    next();
  });
};

export { verifyToken };
