import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import pokemonArr from "./data/pokemon";
import PokemonImageList from "./containers/PokemonImageList/PokemonImageList";

const App = () => {
  
  return (
    <div className="">
      <NavBar />
      <PokemonImageList pokemonArr={pokemonArr}/>
    </div>
  );
}

export default App;
