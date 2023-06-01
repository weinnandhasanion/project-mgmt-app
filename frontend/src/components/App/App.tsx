import { Box } from "@mui/material";
import { persistUser } from "components/modules/authReducer";
import { Header } from "components/shared/Header";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "routes";
import { checkIfTokenExists } from "util/util";

export const App = () => {
  const { user, loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const routesGenerator = useRoutes(routes);

  useEffect(() => {
    if (!user) {
      if (checkIfTokenExists()) {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        dispatch(persistUser({ token, user: JSON.parse(user as string) }));
      }
    }
  }, [user, dispatch]);

  return (
    <Box sx={{ minHeight: "100%" }}>
      <Header />

      {loading ? <>Loading...</> : routesGenerator}
    </Box>
  );
};
