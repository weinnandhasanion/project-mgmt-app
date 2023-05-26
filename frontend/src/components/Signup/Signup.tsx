import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import { SignupForm } from "./SignupForm";
import { useAppSelector } from "hooks";

export const Signup = () => {
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
      <SignupForm />
    </Container>
  );
};
