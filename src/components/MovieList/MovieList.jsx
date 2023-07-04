// import {
//   useEffect,
//   // useRef,
//   useState,
// } from 'react';
// import { fetchMovieTrendToday } from '../Api.js';
import { Link } from '../App.styled.js';

export const MovieList = ({ movies }) => {
       
  if (!movies) {
    return <p>"wait"</p>;
  }
  return (
    <ul>
      {movies.map(film => (
        <li key={film.id}>
          <Link to={`movies/${film.id}`}>{film.title}</Link>
          
        </li>
      ))}
    </ul>
  );
};
