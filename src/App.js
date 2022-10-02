import React from 'react';
import './App.css';
import pokemon from './helpers/defaultProps'
import Pokedex from './Pokedex';

function App() {
  return (
    <>
    <h2 id='pokedex-header'>Pokedex</h2>
    <Pokedex pokemon={pokemon}/>
    </>
  );
}



export default App;
