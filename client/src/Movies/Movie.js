import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList'

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  console.log("movie: ", props, props.match.params.id);
  const id = props.match.params.id;
  
  useEffect(() => {
    console.log("ID... ". id)
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

      axios
      .get(`http://localhost:5000/api/movies/:id`)
      .then(response => {
        setMovie(response.data);
        console.log("HERE", response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [id])

  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  console.log("AGAIN", movie)
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
                             {/* MAP HERE */}
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
