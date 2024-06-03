import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { message } from 'antd'; // Importe a componente de mensagem do Ant Design
import { auth } from '../Services/FireBaseConfig';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { updateUser } = useUser(); // Obtenha a função updateUser do UserContext
    const navigate = useNavigate(); // Obtenha a função navigate do React Router

    const [
        createUserWithEmailAndPassword,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Função para validar o formato do email usando regex
    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    //ENVIA OS DADOS DO USUARIO PARA O BANCO DE DADOS 
    function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Valida o formato do email
        if (!validateEmail(email)) {
            message.error('Por favor, insira um email válido.');
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if (userCredential) {
                    const user = userCredential.user;
                    if (user) {
                        updateUser({ email: user.email, isLoggedIn: true }); // Atualiza o contexto do usuário
                        message.success('Cadastro realizado com sucesso!'); // Exibe mensagem de sucesso
                        navigate('/'); // Navega para a página inicial após o cadastro
                    } else {
                        message.error('Erro ao cadastrar: Usuário não encontrado');
                    }
                } else {
                    message.error('Erro ao cadastrar: Credencial de usuário não encontrada');
                }
            })
            .catch((error) => {
                message.error(`Erro ao cadastrar: ${error.message}`); // Exibe mensagem de erro
            });
    }

    return (
        <>
            <div className="w-full p-5">
                <div className=' flex flex-col gap-10'>

                    <form className='flex flex-col gap-5' onSubmit={handleSignUp}>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <label className="w-full max-w-[55px] " htmlFor="email">E-mail:</label>
                            <input
                                type="email" // Alterado para type="email" para ativar a validação de email do navegador
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
                            <label className="w-full max-w-[55px] " htmlFor="password">Senha:</label>
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
