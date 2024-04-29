import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/FireBaseConfig';
import { useUser } from './UserContext'; // Importe o contexto do usuário

const Login: React.FC = () => {
    const { updateUser } = useUser(); // Use o hook do contexto do usuário
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [loginSuccess, setLoginSucess] = useState(false); 
    const [error, setError] = useState('');

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(email, password)
                .then(() => {
                    updateUser({ email, isLoggedIn: true }); // Atualize o usuário no contexto após o login
                    setLoading(false);
                    setLoginSucess(true)
                })
                .catch((error) => {
                    setError(`Erro ao fazer login: ${error}`);
                    setLoading(false);
                });
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
