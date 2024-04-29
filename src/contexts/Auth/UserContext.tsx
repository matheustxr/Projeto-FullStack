import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  isLoggedIn: boolean;
}

interface UserContextType {
    user: User | null;
    updateUser: (userData: User) => void;
    logOut: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Recupera os dados do usuário do localStorage quando o componente é montado
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const updateUser = (userData: User) => {
        setUser(userData);
        console.log('este é o usuario que acabou de logar ' + userData)
        // Salva os dados do usuário no localStorage quando eles forem atualizados
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const logOut = () => {
        setUser(null); // Limpa os dados do usuário do estado
        localStorage.removeItem('user'); // Remove os dados do usuário do localStorage
    };
    
    return (
        <UserContext.Provider value={{ user, updateUser, logOut }}>
          {children}
        </UserContext.Provider>
    );
};
