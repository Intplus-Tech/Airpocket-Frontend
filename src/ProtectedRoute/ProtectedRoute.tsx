import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  return auth?.user ? children : <Navigate to="/" replace />;
};
