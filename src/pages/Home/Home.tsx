import { useState } from 'react';
import Banner from '../../componentes/PROJETO ALURA/Banner/Banner';
import Formulario from '../../componentes/PROJETO ALURA/Formulario';
import Time from '../../componentes/PROJETO ALURA/Time';
import { IColaborador } from '../../compatilhado/interfaces/IColaborador';

import imgBanner from '../../assets/imagens/banner.png'

export default function Home(){

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
            <Banner url={imgBanner} />
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
            
            {times.map(time => <Time 
                key={time.nome} nome={time.nome} 
                corPrimaria={time.corPrimaria} 
                corSecundaria={time.corSecundaria}
                colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />)}
        </>
    )
}