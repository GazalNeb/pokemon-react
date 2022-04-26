import React from 'react'
import './NavBar.scss';
import SearchBox from '../../components/SearchBox/SearchBox';

const NavBar = ({searchTerm, searchTermChangeHandler, searchResultCount, handleFuzzySearchInput}) => {
  return (
    <div className='navbar' >
         <h1 className='navbar__header' >PokéDom - gotta code 'em all!</h1>
         <SearchBox searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={searchResultCount} handleFuzzySearchInput={handleFuzzySearchInput}/>
    </div>
  )
}

export default NavBar;