import { Home } from "components/Home";
import { Login } from "components/Login";
import { Signup } from "components/Signup";
import { NonIndexRouteObject } from "react-router-dom";
import { HOME, LOGIN, SIGNUP } from "util/constants";

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
  {
    path: "/signup",
    element: <Signup />,
    linkName: SIGNUP,
  },
];

interface RouteObj extends NonIndexRouteObject {
  linkName?: string;
}
