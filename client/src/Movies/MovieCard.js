import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  
  const { title, director, metascore, stars } = movie;
  console.log("AGAIN", movie)

  return (
    <Link to={`/movie/${movie.id}`}>
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
    </Link>
  );;
};

export default MovieCard;
