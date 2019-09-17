import React from 'react';
import { Link, Route } from 'react-router-dom';
import App from '../App';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link exact to='/' className="home-button">Home</Link>
    <Route path='./' component={App} />
  </div>
);

export default SavedList;
