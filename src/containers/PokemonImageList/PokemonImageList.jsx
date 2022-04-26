import React from 'react';
import './PokemonImageList.scss';
import PokemonImage from "../../components/PokemonImage/PokemonImage";

const PokemonImageList = ({pokemonArr}) => {

  const pokemonJSX = pokemonArr.map(pokemon => {
    return <PokemonImage key={"pokemon" + pokemon.id} name={pokemon.name} sprite={pokemon.sprite}/>
  })

  return (
    <>
      <div className='poke-image-container'>
        {pokemonJSX}
      </div> 
    </>
    
  )
}

export default PokemonImageList;