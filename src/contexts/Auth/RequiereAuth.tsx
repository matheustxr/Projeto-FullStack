import { useContext } from 'react'
import { AuthContext } from './AuthContext';
import Login from '../../pages/login/Index';

interface PropsRequireAuth{
    children: JSX.Element;
}

export default function RequireAuth( {children}:PropsRequireAuth ) {

    const auth = useContext(AuthContext)

    if (!auth.user){
        return <Login />;
    }

    return children
    
}