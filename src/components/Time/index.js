import React from 'react'
import './Time.css'
import Jogador from '../Jogador'

const Time = (props) => {
  return (
    
    (props.jogadores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
      <h3 style={{borderColor: props.corPrimaria, color: props.corPrimaria}}>{props.nome}</h3>
      <div className='jogadores'>
      {props.jogadores.map(jogador => <Jogador corFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} cargo={jogador.cargo} imagem={jogador.imagem} />)}
      </div>
    </section>
    : ''
  )
}

export default Time