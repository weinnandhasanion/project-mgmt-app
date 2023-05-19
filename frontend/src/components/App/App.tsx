import { Box } from "@mui/material";
import { Header } from "components/shared/Header";
import { useRoutes } from "react-router-dom";
import { routes } from "routes";

export const App = () => {
  const routesGenerator = useRoutes(routes);

  return (
    <Box sx={{ minHeight: "100%" }}>
      <Header />

      {routesGenerator}
    </Box>
  );
};
