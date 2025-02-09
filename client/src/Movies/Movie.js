import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Movie = props => {
  const [movie, setMovie] = useState();
  console.log("Movie: ", props);
  const id = props.match.params.id;

  useEffect(() => {
    
  
    
    console.log("Movie id = ", id)
   
      
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
        console.log("MOVIE response.data; ", response.data);
      })
      .catch(error => {
        console.error('Movie Server Error', error);
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

  return (
    <MovieCard movie={movie} {...props} />
  );
}

export default Movie;
