import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'LA Lakers',
      corPrimaria: '#552583',
      corSecundaria: '#FDB927'
    },
    {
      nome: 'LA Clippers',
      corPrimaria: '#C8102E',
      corSecundaria: '#1D428A'
    },
    {
      nome: 'Toronto Raptors',
      corPrimaria: '#000000',
      corSecundaria: '#CE1141'
    },
    {
      nome: 'New York Knicks',
      corPrimaria: '#006BB6',
      corSecundaria: '#F58426'
    },
    {
      nome: 'Golden State Wariors',
      corPrimaria: '#1D428A',
      corSecundaria: '#FFC72C'
    },
    {
      nome: 'Boston Celtics',
      corPrimaria: '#BA9653',
      corSecundaria: '#007A33'
    },
    {
      nome: 'Minnesota Timberwolves',
      corPrimaria: '#0C2340',
      corSecundaria: '#236192'
    },
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdd = (jogador) => {
    console.log(jogador);
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdd(jogador)} />

      {times.map(time => <Time
       key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria} 
       jogadores={jogadores.filter(jogador => jogador.time === time.nome)}/>)}

    </div>
  );
}

export default App;
