import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user && !loading) return <Navigate to="/login" />;

  return <Component />;
};
