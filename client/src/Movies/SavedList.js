import React from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const SavedList = {props} => (
  const 
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to={'/'} className="home-button">Home</Link>
    </div>
  )
);

export default SavedList;
