import {useContext} from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"


export default function PrivatePage(){
    const auth = useContext(AuthContext)
    return (
        <div>
            <h1>Olá {auth.user?.name} seja bem vindo a página do usuário</h1>
        </div>
    )
}