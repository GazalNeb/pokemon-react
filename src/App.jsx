import { useState } from "react";
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';
import pokemonArr from "./data/pokemon";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFuzzySearch, setIsFuzzySearch] = useState(false);

  const handleFuzzySearchInput = (event) => {
    setIsFuzzySearch(!isFuzzySearch);
  };
  let filteredPokemons;
  if (isFuzzySearch === false) {
     filteredPokemons = pokemonArr.filter((pokemon) => {
      return pokemon.name.toLowerCase().startsWith(searchTerm);
    });

  } else if (isFuzzySearch === true) {
      filteredPokemons = pokemonArr.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchTerm);
    });
  }
  console.log(filteredPokemons);

  const searchTermChangeHandler = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchTerm(text);
  };

  return (
    <div className="">
      <NavBar
        searchTerm={searchTerm}
        searchTermChangeHandler={searchTermChangeHandler}
        searchResultCount={filteredPokemons.length}
        handleFuzzySearchInput={handleFuzzySearchInput}
      />
      <PokemonImageList pokemonArr={filteredPokemons} />
    </div>
  );
};

export default App;
