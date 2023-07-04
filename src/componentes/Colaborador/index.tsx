import './colaborador.css'
import { IColaborador } from '../../compatilhado/interfaces/IColaborador';

interface ColoboradorProps extends IColaborador {
    corDeFundo: string;
}

export default function Colaborador({nome, imagem, cargo, corDeFundo}:ColoboradorProps){ //forma para desestruturar as props 
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}