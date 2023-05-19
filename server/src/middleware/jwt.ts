import jwt, { Secret } from "jsonwebtoken";
import { AUTH_SECRET_KEY } from "../config";

const verifyTokenMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "Invalid or missing token.",
    });
  }

  jwt.verify(token, AUTH_SECRET_KEY as Secret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: "You are not authorized to access this resource.",
      });
    }

    req.id = decoded.id;
    next();
  });
};

export { verifyTokenMiddleware };
