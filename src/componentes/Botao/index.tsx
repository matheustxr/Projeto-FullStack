import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: ReactElement | string;
}

export default function Botao(props: BotaoProps) {
    return(
        <div>
            <button className='botao'>
                {props.children}
            </button>
        </div>
    )
}