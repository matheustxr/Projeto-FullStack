import { useState } from 'react'
// import { AuthContext } from '../../contexts/Auth/AuthContext';
// import { useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/FireBaseConfig';

function Register() {
    // const authContext = useContext(AuthContext)
    // const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function register(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <p>carregando...</p>;
    }

    return (
        <div>
            <h2>Página de registro</h2>
            <form onSubmit={register}> {/*handleLogin*/}
                <input 
                    type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Digite seu e-mail' 
                    className='bg-gray-600'
                />

                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Digite sua senha' 
                    className='bg-gray-600'
                />
                <button>Criar conta</button>
            </form>
            
        </div>
    );
}

export default Register;