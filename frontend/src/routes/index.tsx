import { Home } from "components/Home";
import { Login } from "components/Login";
import { Projects } from "components/Projects";
import { ProtectedRoute } from "components/shared/ProtectedRoute";
import { Signup } from "components/Signup";
import { NonIndexRouteObject } from "react-router-dom";
import { HOME, PROJECTS, LOGIN, SIGNUP } from "util/constants";

export const routes: RouteObj[] = [
  {
    path: "/",
    element: <Home />,
    linkName: HOME,
    routeType: "public",
  },
  {
    path: "/projects",
    element: <ProtectedRoute component={Projects} />,
    linkName: PROJECTS,
    routeType: "protected",
  },
  {
    path: "/login",
    element: <Login />,
    linkName: LOGIN,
    routeType: "private",
  },
  {
    path: "/signup",
    element: <Signup />,
    linkName: SIGNUP,
    routeType: "private",
  },
];

export interface RouteObj extends NonIndexRouteObject {
  linkName?: string;
  routeType?: "public" | "private" | "protected";
}
