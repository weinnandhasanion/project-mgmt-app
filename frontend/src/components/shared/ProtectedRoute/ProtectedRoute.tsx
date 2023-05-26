import { useAppSelector } from "hooks";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" />;

  return <Component />;
};
