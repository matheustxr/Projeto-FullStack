import { IColaborador } from '../../../compatilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador'
import './time.css'

interface TimeProps{
    corPrimaria: string;
    corSecundaria: string;
    nome: string;
    colaboradores: IColaborador [];
}

export default function Time( { corPrimaria, corSecundaria, nome, colaboradores} : TimeProps) {
    return (
        (colaboradores.length > 0) ? <section className='time' style={{backgroundColor: corPrimaria}}> {/*PARA SE FAZER UMA RENDERIZAÇÃO CONDICIONAL DEVEMOS ADICIONAR A CONDIÇÃO A ESQUERDA E O REACT RENDERIZAR OQ VIER A DIREITA*/}
            <h3 style={{borderColor: corSecundaria}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador 
                        key={colaborador.nome}
                        corDeFundo={corSecundaria}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
        : <></> // atalaho para o React.Fragment que é usado quando quero retornar um elemnto html vazio sem aparecer de fato na compilação da aplicação
    )
}