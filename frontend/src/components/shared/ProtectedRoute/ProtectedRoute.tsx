import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "types";

export const ProtectedRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};
