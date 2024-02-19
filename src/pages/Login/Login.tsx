import { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/FireBaseConfig';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        // Verifica se o usuário está autenticado sempre que o estado do usuário ou o erro mudar
        if (user) {
            window.alert('Login bem-sucedido!');
            
            // Limpa o formulário após o login bem-sucedido
            setEmail('');
            setPassword('');
        } else if (error) {
            // Exibe alerta de erro com a mensagem do Firebase
            console.error('Erro ao fazer login:', error);

            if (error.message) {
                // Se a mensagem de erro contiver informações específicas, exibe essa mensagem
                window.alert(`Erro ao fazer login: ${error.message}`);
            } else {
                // Caso contrário, exibe uma mensagem de erro genérica
                window.alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
            }
        }
    }, [user, error]);

    async function signIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            // O erro será tratado no useEffect
        }
    }

    return (
        <div>
            <h2>Página de login</h2>
            <form onSubmit={signIn}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    className="bg-gray-600"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className="bg-gray-600"
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
