import React from 'react';
import './PokemonImage.scss';

const PokemonImage = ({name, sprite}) => {

  const capitaliseName = name => {
    return name[0].toUpperCase() + name.slice(1);
  }
  return (
    <>
      <section className='poke-image-card' >
        <h2 className='card__heading'>{capitaliseName(name)}</h2>
        <img src={sprite} alt={capitaliseName(name)} className="card__image"/>
      </section>
    </>
  )
}

export default PokemonImage;