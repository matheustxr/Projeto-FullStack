// AuthGoogle.tsx
import { createContext, useState, ReactNode, useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth } from "../Services/FireBaseConfig";
import { User as ContextUser } from './UserContext';
import { useUser } from './UserContext';
import { message } from 'antd';

const provider = new GoogleAuthProvider();

interface AuthGoogleContextType {
    signed: boolean;
    user: ContextUser | null;
    signInGoogle: () => void;
}

export const AuthGoogleContext = createContext<AuthGoogleContextType | null>(null);

interface AuthGoogleProviderProps {
    children: ReactNode;
}

export const AuthGoogleProvider = ({ children }: AuthGoogleProviderProps) => {
    const [user, setUser] = useState<ContextUser | null>(null);
    const { updateUser } = useUser(); 
    const [messageApi, contextHolder] = message.useMessage();

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result: UserCredential) => {
                const user = result.user;
                const tokenPromise = user?.getIdToken();
                tokenPromise.then((token) => {
                    const contextUser: ContextUser = {
                        email: user.email || '',
                        isLoggedIn: true,
                        token: token || ''
                    };
                    setUser(contextUser);
                    updateUser(contextUser); 
                    sessionStorage.setItem("@AuthFirebase:token", contextUser.token || '');
                    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(contextUser));

                    messageApi.success('Login com Google realizado com sucesso!');
                }).catch((error) => {
                    console.log(error);
                    messageApi.error('Erro ao obter o token do usuário.');
                });
            })
            .catch((error) => {
                console.log(error);
                messageApi.error('Erro ao fazer login com o Google.');
            });
    };

    return (
        <AuthGoogleContext.Provider
            value={{
                signed: !!user,
                user,
                signInGoogle,
            }}
        >
            {contextHolder}
            {children}
        </AuthGoogleContext.Provider>
    );
};

export const useAuthGoogle = (): AuthGoogleContextType => {
    const context = useContext(AuthGoogleContext);
    if (!context) {
        throw new Error('useAuthGoogle must be used within a AuthGoogleProvider');
    }
    return context;
};
