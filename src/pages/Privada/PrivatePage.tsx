import { useUser } from "../../contexts/Auth/UserContext"


export default function PrivatePage(){
    const { logOut } = useUser(); // Use o hook do contexto do usuário para acessar a função logOut

    // const handleLogout = () => {
    //     logOut(); // Chame a função logOut quando o botão de logout for clicado
    // };

    return (
        <div>
            <h1 className="text-4xl text-red-600">Olá  seja bem vindo a página do usuário</h1>

            <button onClick={logOut} className="bg-white border-2 w-[200px] ">
                sair
            </button>
        </div>
    )
}