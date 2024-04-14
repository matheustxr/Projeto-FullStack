import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../Services/FireBaseConfig'

import logo from '../../assets/imagens/logo.png';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false); // Estado para controlar o sucesso do login
  
    const [signInWithEmailAndPassword, loading] =
      useSignInWithEmailAndPassword(auth);
  
    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoginSuccess(true); // Define o estado de login como true se o login for bem-sucedido
        })
        .catch((error) => {
          // Erro no login
          window.alert(`Erro ao fazer login: ${error.message}`);
        });
    }
  
    if (loading) {
      return <p>carregando...</p>;
    }

    // Se o login foi bem-sucedido, renderiza uma mensagem de sucesso
    if (loginSuccess) {
      return <p>Login realizado com sucesso!</p>;
    }

    return (
        <>
            <div className="bg-sky-300">
                <div className='container py-20 mx-auto flex flex-col gap-10'>
                    <header className="header">
                        <img src={logo} alt="Workflow" className="logoImg" />
                        <span>Por favor, digite suas informações de cadastro</span>
                    </header>

                    <form className='flex flex-col gap-5' onSubmit={handleSignIn}>
                        <div className="flex gap-2">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2">
                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*********"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="bg-red-600 max-w-[300px] "
                        >
                            login 
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
