import { createContext } from "react";
import { User } from "../../../compatilhado/interfaces/User";

export type AuthContextType = {
    user: User | null;
    signIn: ( email: string, password:string ) => Promise <boolean> ;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);