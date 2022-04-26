import React from 'react'
import './PokemonImage.scss';
import { toProper } from "../../utils";
import {Link} from "react-router-dom";

const PokemonImage = ({ name, sprite, id}) => {

  // // converts a string to a proper string - makes first letter a capital
  // const toProper = (string) => {
  //   return string[0].toUpperCase() + string.substring(1);
  // }

  return (
    <>
      <article className='poke-image-card' >
        <Link to={"/pokemon/" + id}>
        <h2 className='card__heading' >{toProper(name)}</h2>
        </Link>
        <img src={sprite} alt={ toProper(name) } className="card__image" />
      </article>
    </>
  )
}

export default PokemonImage;