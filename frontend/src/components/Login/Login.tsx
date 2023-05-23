import { Container } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "types";

export const Login = () => {
  const { user } = useSelector((state: RootState) => state.auth);

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
