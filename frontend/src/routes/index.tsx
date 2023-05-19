import { Home } from "components/Home";
import { Login } from "components/Login";
import { NonIndexRouteObject } from "react-router-dom";
import { HOME, LOGIN } from "util/constants";

export const routes: RouteObj[] = [
  {
    path: "/",
    element: <Home />,
    linkName: HOME,
  },
  {
    path: "/login",
    element: <Login />,
    linkName: LOGIN,
  },
];

interface RouteObj extends NonIndexRouteObject {
  linkName?: string;
}
