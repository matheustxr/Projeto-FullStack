import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface User {
  email: string | null;
  isLoggedIn: boolean;
  token?: string;
}

interface UserContextType {
    user: User | null;
    updateUser: (userData: User) => void;
    logOut: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

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
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const updateUser = (userData: User) => {
        const { email = '', isLoggedIn, token = '' } = userData; 
        setUser({ email, isLoggedIn, token });
        console.log('este é o usuario que acabou de logar ' + userData)
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('user'); 
    };
    
    return (
        <UserContext.Provider value={{ user, updateUser, logOut }}>
          {children}
        </UserContext.Provider>
    );
};
