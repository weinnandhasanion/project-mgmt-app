import { Container } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "hooks";

export const Login = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <LoginForm />
    </Container>
  );
};
