import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    // Se o usuário não estiver autenticado, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
export default RequireAuth;