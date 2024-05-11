import React, { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Services/FireBaseConfig';
import { useUser } from './UserContext';

const Login: React.FC = () => {
    const { user, updateUser } = useUser();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false); 
    const [error, setError] = useState('');

    useEffect(() => {
        if (user && user.isLoggedIn) {
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
    }, [user, navigate]);

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(email, password);
            if (userCredential) {
                const user = userCredential.user;
                const token = await user.getIdToken(); // Obtenha o token do usuário
                updateUser({ email, isLoggedIn: true, token }); // Atualize o usuário com o token
                setLoading(false);
                setLoginSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                setError(`Erro ao fazer login: credencial de usuário indefinida`);
                setLoading(false);
            }
        } catch (error) {
            setError(`Erro ao fazer login: ${error}`);
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (loginSuccess) {
        return <p>Login feito com sucesso!</p>;
    }

    return (
        <>
            <div className="w-full p-5">
                <div className="flex flex-col gap-10">
                    <form className="flex flex-col gap-5" onSubmit={handleSignIn}>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="w-[60px]" htmlFor="email">
                                E-mail:
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="emailLogin"
                                placeholder="johndoe@gmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 px-4 rounded-xl bg-gray-200"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="w-[60px]" htmlFor="password">
                                Senha:
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="passwordLogin"
                                placeholder="*********"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 px-4 rounded-xl bg-gray-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 w-full max-w-[300px] mx-auto py-3 rounded-[30px] font-semibold"
                        >
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>
            {error && <p>{error}</p>}
        </>
    );
};

export default Login;
