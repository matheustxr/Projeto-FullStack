import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Auth } from 'firebase/auth';

import { auth } from '../Services/FireBaseConfig';

export default function CreateUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
    ] = useCreateUserWithEmailAndPassword(auth as Auth);

    //ENVIA OS DADOS DO USUARIO PARA O BANCO DE DADOS 
    function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        createUserWithEmailAndPassword(email, password)
            .then(() => {
                window.alert('Cadastro realizado com sucesso!');
            })
            .catch((error) => {
                window.alert(`Erro ao cadastrar: ${error.message}`);
            });
    }

    return (
        <>
            <div className="w-full p-5">
                <div className=' flex flex-col gap-10'>

                    <form className='flex flex-col gap-5' onSubmit={handleSignUp}>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="w-[60px] " htmlFor="email">E-mail:</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 px-4 rounded-xl bg-gray-200"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="w-[60px] " htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*********"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 px-4 rounded-xl bg-gray-200"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="bg-red-600 w-full max-w-[300px] mx-auto py-3 rounded-[30px] font-bold "
                        >
                            Criar Conta
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}