import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const MovieList = props => {
  const [movies, setMovies] = useState([])
  console.log("MovieList props: ", props);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log("MovieList's response.data: ", response.data)
          setMovies(response.data);
        })
        .catch(error => {
          console.error('MovieList Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to='./movie/:id'>
          <MovieDetails key={movie.id} movie={movie} id={movie.id} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <>
      <Link to={`/movies/${movie.id}`}>
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} id={id} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      </Link>
    </>
  );
}

export default MovieList;
