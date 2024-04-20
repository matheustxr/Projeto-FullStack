import CreateUser from "../../componentes/createUser/createUser";
import Login from "../../componentes/login/Login";


export default function LoginRegister(){
    return(
        <>
            <div className=" container my-20 mx-auto  rounded-[30px] bg-white ">
                <div className="relative flex justify-around ">
                    {/* LOGIN */}
                    <div className="w-full p-5 md:p-10 flex flex-col items-center gap-4 border-2 border-red-600 ">
                        <h2 className="text-3xl">Entrar</h2>
                        <div className="flex justify-center gap-5">
                            <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                            </div>

                            <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4S5.6 7.6 8 7.6c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2z"></path></svg>
                            </div>

                            <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                            </div>
                        </div>
                        
                        <Login />
                    </div>
                    {/* CRIAR CONTA */}
                    <div className="w-full p-5 md:p-10 flex flex-col items-center gap-4 border-2 border-red-600 ">
                        <h2 className="text-3xl">Criar Conta</h2>
                        <div className="flex justify-center gap-5">
                            <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                            </div>

                            <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4S5.6 7.6 8 7.6c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2z"></path></svg>
                            </div>

                            <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                            </div>
                        </div>
                        
                        <CreateUser />
                    </div>
                    
                    {/* HOVER LOGIN */}
                    <div className="absolute hidden left-0 w-1/2 h-full p-5 md:p-10 flex flex-col items-center justify-center gap-4 ">
                        <h2 className="text-4xl font-extrabold bg-blue-500">
                        Bem-vindo de volta!
                        </h2>

                        <p>
                        Se mantenha conectado fazendo login com as suas informações!
                        </p>

                        <button className="w-full max-w-[300px] mx-auto py-3 text-white font-bold border rounded-[30px] hover:bg-white hover:text-black">
                            JÁ TENHO CONTA
                        </button>
                    </div>

                    {/* HOVER CRIAR CONTA */}
                    <div className="absolute hidden right-0 w-1/2 h-full p-5 md:p-10 flex flex-col items-center justify-center gap-4 ">
                        <h2 className="text-4xl font-extrabold bg-blue-500">
                            Olá, amigo(a)!
                        </h2>

                        <p>
                        Insira algumas informações e comece a sua jornada conosco!
                        </p>

                        <button className="w-full max-w-[300px] mx-auto py-3 text-white font-bold border rounded-[30px] hover:bg-white hover:text-black">
                            quero criar uma conta
                        </button>
                    </div>

                    <div className="absolute w-1/2 h-full">

                    </div>
                </div>
            </div>
        </>
    )
}

// LOGICA DE LOGIN E CRIAÇÃO COM EMAIL E SENHA ESTÁ FEITA   -     FALTA TERMINA A TELA PARA ENTRAR OU CRIAR CONTA    -   FALTA ENTRAR OU CRIAR CONTA COM OUTRAS CONTAS