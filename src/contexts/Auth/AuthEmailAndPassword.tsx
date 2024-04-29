import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../Services/FireBaseConfig';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
    const [loginSuccess, setLoginSuccess] = useState(false); // Estado para controlar o sucesso do login
    const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true); // Ativar estado de carregamento
        signInWithEmailAndPassword(email, password)
            .then(() => {
                setLoginSuccess(true); // Definir estado de sucesso do login
            })
            .catch((error) => {
                setError(`Erro ao fazer login: ${error.message}`); // Definir mensagem de erro
            })
            .finally(() => {
                setLoading(false); // Desativar estado de carregamento após o login
            });
    }

    if (loading) {
        return <p>Carregando...</p>; // Exibir mensagem de carregamento
    }

    if (loginSuccess) {
        return <p>Login realizado com sucesso!</p>; // Exibir mensagem de sucesso
    }

    return (
        <>
            <div className="w-full p-5">
                <div className='flex flex-col gap-10'>
                    <form className='flex flex-col gap-5' onSubmit={handleSignIn}>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="w-[60px]" htmlFor="email">E-mail:</label>
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
                            <label className="w-[60px]" htmlFor="password">Senha:</label>
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
            {error && <p>{error}</p>} {/* Exibir mensagem de erro, se houver */}
        </>
    );
}
