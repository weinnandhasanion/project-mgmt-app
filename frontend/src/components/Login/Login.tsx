import { Container } from "@mui/material";
import { LoginForm } from "./LoginForm";

export const Login = () => {
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
