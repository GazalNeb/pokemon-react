import React from "react";
import "./SearchBox.scss";

const SearchBox = ({searchTerm, searchTermChangeHandler, searchResultCount, handleFuzzySearchInput}) => {

  let searchResultText = searchResultCount == 1 ? "Found 1 pokemon" : `Found ${searchResultCount} pokemons`;

  return (
    <div className="search-box">
      <label htmlFor="searchBox">By name:</label>
      <input
        type="text"
        id="searchBox"
        className="search-box__name-search"
        placeholder="Name to search"
        onChange={searchTermChangeHandler}
        value={searchTerm}
      />
      <label htmlFor="fuzzySearch">Fuzzy search?</label>
      <input id="fuzzySearch" type="checkbox" className='search-box__fuzzy-ind' onInput={handleFuzzySearchInput}/>
      <p>{searchResultText}</p>
    </div>
  );
};

export default SearchBox;
