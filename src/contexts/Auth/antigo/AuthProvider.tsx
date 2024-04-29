import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { User } from "../../../compatilhado/interfaces/User";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const signIn = async (email: string, password: string) => {
    try {
      const data = await api.signIn(email, password);
      if (data.user && data.token) {
        setUser(data.user);
        localStorage.setItem("authToken", data.token); // Armazena o token no localStorage
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error signing in:", error);
      return false;
    }
  };

  const signOut = async () => {
    console.log("signOut being executed");
    setUser(null);
    localStorage.removeItem("authToken"); // Remove o token do localStorage
    await api.logOut();
  };

  // Função de validação do token
  const validateToken = async () => {
    const storageData = localStorage.getItem("authToken");
    if (storageData) {
      try {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error validating token:", error);
      }
    }
  };

  // Chama a função de validação do token ao carregar o componente
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
