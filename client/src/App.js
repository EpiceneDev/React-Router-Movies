import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import SavedList from './Movies/SavedList'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path='/' />
      <Route path='/movies/:id' />
    </div>
  );
}

export default App
