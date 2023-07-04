import { useState } from 'react';
import Formulario from '../../componentes/Formulario';
import { IColaborador } from '../../compatilhado/interfaces/IColaborador';

function Cadastro() {
    const times = [
        {
          nome: 'Programação',
          corPrimaria: '#D9F7E9',
          corSecundaria: '#57C278',
        },
    
        {
          nome: 'Front-End',
          corPrimaria: '#E8F8FF',
          corSecundaria: '#82CFFA',
        },
    
        {
          nome: 'Back-End',
          corPrimaria: '#F0F8E2',
          corSecundaria: '#A6D157',
        },
    
        {
          nome: 'Devops',
          corPrimaria: '#FDE7E8',
          corSecundaria: '#E06B69',
        },
    
        {
          nome: 'UI/UX Design',
          corPrimaria: '#FAE9F5',
          corSecundaria: '#DB6EBF',
        },
    
        {
          nome: 'Mobile',
          corPrimaria: '#FFF5D9',
          corSecundaria: '#FFBA05',
        },
    ]
    const [colaboradores, setColaboradores] = useState<IColaborador[]>([])
    const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
        setColaboradores([...colaboradores, colaborador]) //é preciso espalhar os antigos colaboradores que ja estavam no array usanso o "...colaboradores" e então adicionar o novo com colaborador
      }

    return (
        <>
            Cadastro
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        </>
    );
}

export default Cadastro;