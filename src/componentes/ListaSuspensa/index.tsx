import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor:string) => void
    label: string;
    obrigatorio: boolean;
    valor: string;
    itens: string[];
}

export default function ListaSuspensa ({aoAlterado, label, obrigatorio, valor, itens}:ListaSuspensaProps) {
    return(
        <div className='lista-suspensa'>
            <label> {label} </label>
            <select 
                    onChange={evento => 
                    aoAlterado(evento.target.value)} 
                    required={obrigatorio} 
                    value={valor}
                >
                <option value=""></option>
                {itens.map( (item) => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}
/*
key é o "id" de um determinado item precisa ter para que o react saiba 
quando ele precisa renderizar ou não, ou seja é o identificador de um item 
que o react precisa saber seu id para que sempre que o item seja atualizado o
react saiba que prcisa renderiza-lo novamente
*/
