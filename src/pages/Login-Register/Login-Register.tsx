import CreateUser from "../../contexts/createUserEmailAndPassword";
import Login from "../../contexts/AuthEmailAndPassword";
import { useNavigate } from 'react-router-dom';
import { useAuthGoogle } from '../../contexts/AuthGoogle';



export default function LoginRegister(){

    const { signInGoogle } = useAuthGoogle();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInGoogle();
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer login com o Google:', error);
        }
    };

    //funções animações
    function callCardLogin(){
        const coverCard = document.querySelector('#coverCard');
        coverCard?.classList.remove('left-side');
        coverCard?.classList.add('right-side');

        const contentLogin = document.querySelector('#hoverLogin');
        contentLogin?.classList.add('hideContent')

        const contentCriar = document.querySelector('#hoverCreate');
        contentCriar?.classList.remove('hideContent')
    }

    function callCardCreate(){
        const coverCard = document.querySelector('#coverCard');
        coverCard?.classList.remove('right-side')
        coverCard?.classList.add('left-side')

        const contentLogin = document.querySelector('#hoverLogin');
        contentLogin?.classList.remove('hideContent')

        const contentCriar = document.querySelector('#hoverCreate');
        contentCriar?.classList.add('hideContent')
    }

    return(
        <>
            <div className=" container my-20 mx-auto px-5 md:px-10 xl:px-20 ">
                <div className="relative flex flex-col md:flex-row justify-around rounded-[30px] bg-white overflow-hidden">
                    {/* LOGIN */}
                    <div className="w-full lg:min-h-[550px] p-5 md:p-10 flex flex-col items-center gap-4 border-2 border-red-600 ">
                        <h2 className="text-3xl">Entrar</h2>
                        <div className="flex justify-center gap-5">
                            <button onClick={handleGoogleLogin}>
                                <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4S5.6 7.6 8 7.6c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2z"></path></svg>
                                </div>
                            </button>
                        </div>
                        
                        <Login />
                    </div>

                    {/* CRIAR CONTA */}
                    <div className="w-full lg:min-h-[550px] p-5 md:p-10 flex flex-col items-center gap-4 border-2 border-red-600 "
                    >
                        <h2 className="text-3xl">Criar Conta</h2>
                        <div className="flex justify-center gap-5">

                            <button onClick={handleGoogleLogin}>
                                <div className="p-5 flex justify-center items-center border rounded-full shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4S5.6 7.6 8 7.6c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2z"></path></svg>
                                </div>
                            </button>
                        </div>
                        
                        <CreateUser />
                    </div>
                    
                    {/* HOVER LOGIN */}
                    <div 
                        id="hoverLogin"
                        className="absolute z-20 top-0 md:left-0 w-full md:w-1/2 h-1/2 md:h-full p-5 md:p-10  flex flex-col items-center justify-center gap-4 transition-all duration-1000"
                    >
                        <h2 className="text-4xl font-extrabold ">
                        Bem-vindo de volta!
                        </h2>

                        <p>
                        Se mantenha conectado fazendo login com as suas informações!
                        </p>

                        <button 
                            className="w-full max-w-[300px] mx-auto py-3 text-white font-bold border rounded-[30px] hover:bg-white hover:text-black"
                            onClick={callCardLogin}
                        >
                            JÁ TENHO CONTA
                        </button>
                    </div>

                    {/* HOVER CRIAR CONTA */}
                    <div 
                        id="hoverCreate"
                        className="absolute z-20 bottom-0 md:right-0 w-full md:w-1/2 h-1/2 md:h-full p-5 md:p-10 flex flex-col items-center justify-center gap-4 transition-all duration-1000 hideContent"
                    >
                        <h2 className="text-4xl font-extrabold ">
                            Olá, amigo(a)!
                        </h2>

                        <p>
                        Insira algumas informações e comece a sua jornada conosco!
                        </p>

                        <button 
                            className="w-full max-w-[300px] mx-auto py-3 text-white font-bold uppercase border rounded-[30px] hover:bg-white hover:text-black"
                            onClick={callCardCreate}
                        >
                            quero criar uma conta
                        </button>
                    </div>

                    {/* BG QUE MUDA DE LADO */}
                    <div id="coverCard" className="absolute top-0 md:left-0 z-10 w-full md:w-1/2 h-1/2 md:h-full transition-all duration-[900ms] bg-green-600 ">
                    </div>
                </div>
            </div>
        </>
    )
}

// LOGICA DE LOGIN E CRIAÇÃO COM EMAIL E SENHA E PERMANCENCIA DO LOGIN ESTÁ FEITA  -  FALTA TERMINA A TELA PARA ENTRAR OU CRIAR CONTA   -   FALTA ENTRAR OU CRIAR CONTA COM OUTRAS CONTAS