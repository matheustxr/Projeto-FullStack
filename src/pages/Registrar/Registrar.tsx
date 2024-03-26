import CreateUser from "../../componentes/createUser/createUser";


export default function Register() {


    return (
        <div>
            <h2>Página de registro</h2>
            
            <CreateUser />
        </div>
    );
}


    /* return (
        <div>
            <h2>Página de registro</h2>
            <form onSubmit={}> {/*handleLogin* /}
                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    placeholder='Digite seu e-mail' 
                    className='bg-gray-600'
                />
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
/*

/*
     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    function register(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <p>carregando...</p>;
    } else <p>registro concluido!</p>

    return (
        <div>
            <h2>Página de registro</h2>
            <form onSubmit={register}> {/*handleLogin* /}
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
*/