import { Container } from "@mui/material";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
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
