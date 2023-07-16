import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    

    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            const isLogged = await auth.signIn(email, password)
            if (isLogged) {
                navigate('/')
            } else {
                alert ("Usuario e Senha incorretos tente novamente")
            }
        }
    }

    return (
        <div>
            <h2>Página de LOGIN</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Digite seu e-mail' 
                />

                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Digite sua senha' 
                />
                <button>Logar</button>
            </form>
            
        </div>
    );
}

export default Login;