import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return (
      <div className="movie-list">
        {movies.map((elmt) => (
          <MovieCard film={elmt} />
        ))}
      </div>
    );
}

export default MovieList

