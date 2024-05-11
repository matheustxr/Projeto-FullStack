import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Importe o contexto do usuário



const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children}) => {
    const { user } = useUser(); // Use o hook do contexto do usuário
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se o usuário está autenticado, se não, redireciona para a página de login
        if (!user || !user.isLoggedIn) {
            navigate('/login-register'); // Redireciona para a página de login
        }
    }, [user, navigate]);
    return <>{children}</>;
};

export default RequireAuth;
