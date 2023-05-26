import { Box } from "@mui/material";
import { Header } from "components/shared/Header";
import { useAppSelector } from "hooks";
import { useAuth } from "hooks/useAuth";
import { useRoutes } from "react-router-dom";
import { routes } from "routes";

export const App = () => {
  useAuth();
  const { loading } = useAppSelector((state) => state.auth);
  const routesGenerator = useRoutes(routes);

  return (
    <Box sx={{ minHeight: "100%" }}>
      <Header />

      {loading ? <>Loading...</> : routesGenerator}
    </Box>
  );
};
