import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; 



const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children}) => {
    const { user } = useUser(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.isLoggedIn) {
            navigate('/login-register'); 
        }
    }, [user, navigate]);
    return <>{children}</>;
};

export default RequireAuth;
