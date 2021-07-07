import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if (!savedList.includes(movie)) {
    setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div className="App">
      <SavedList list={savedList} />
      <ul className="navbar">
        {/* FOR FUTURE REFERENCE:
        <li>
          <NavLink to="/" activeClassName="activeNavButton" className="link">MOVIELIST</NavLink>
        </li>
        <li>
          <NavLink to="/movie" activeClassName="activeNavButton" className="link">MOVIE</NavLink>
        </li> */}
      </ul>
      <Route exact path='/' component={MovieList}  />
      <Route exact path='/movies/:id' render={props => (<Movie {...props} addToSavedList={addToSavedList} />)} />
    </div>
  );
};
    
export default App;