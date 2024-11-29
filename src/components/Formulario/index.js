import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }



    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar os times do basquete</h2>

                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)} />

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)} />

                <CampoTexto 
                obrigatorio={false} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />


                <ListaSuspensa 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)} />


                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario