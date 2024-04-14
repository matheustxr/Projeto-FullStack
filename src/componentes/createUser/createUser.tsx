import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Auth } from 'firebase/auth';

import logo from '../../assets/imagens/logo.png';
import { auth } from '../../Services/FireBaseConfig';

export default function CreateUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth as Auth);

    function criarUsuario(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        // Verifica se os campos de e-mail e senha estão vazios
        if (!email || !password) {
            window.alert('Por favor, preencha todos os campos.');
            return;
        }

        // Cadastra os dados do usuario no banco de dados
        createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.alert('Cadastro realizado com sucesso!');
        })
        .catch((error) => {
            window.alert(`Erro ao cadastrar: ${error.message}`);
        });
    }

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <div className="bg-sky-300">
                <div className='container py-20 mx-auto flex flex-col gap-10'>
                    <header className="header">
                        <img src={logo} alt="Workflow" className="logoImg" />
                        <span>Por favor, digite suas informações de cadastro</span>
                    </header>

                    <form className='flex flex-col gap-5'>
                        <div className="flex gap-2">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2">
                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="************"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button 
                            onClick={criarUsuario} 
                            className="bg-red-600 max-w-[300px] "
                        >
                            Cadastrar 
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
