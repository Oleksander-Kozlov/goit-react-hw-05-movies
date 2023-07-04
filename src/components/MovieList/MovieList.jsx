// import {
//   useEffect,
//   // useRef,
//   useState,
// } from 'react';
// import { fetchMovieTrendToday } from '../Api.js';
import { Link } from '../App.styled.js';

export const MovieList = ({ movies }) => {
  //   const [movieList, setMovieList] = useState([]);
  //   // const [movieInfo, setMovieInfo] = useState([]);
  //   useEffect(() => {
  //     const abortCTRL = new AbortController();
  //     const fetchData = async () => {
  //       //
  //       // if (searchImg === '' && page === 1) {
  //       //   return;
  //       // }
  //       try {
  //         // ініціалізація абортконтролера
  //         if (abortCTRL.current) {
  //           abortCTRL.current.abort();
  //         }
  //         abortCTRL.current = new AbortController();

  //         const MovieListToday = await fetchMovieTrendToday(abortCTRL.signal);
  //         setMovieList([
  //           ...MovieListToday.results,
  //           // .map(({ title, id, poster_path }) => ({ title, id, poster_path }))
  //         ]);
  //         // const film = fetchMovieInfoById(movieInfo);
  //         // console.log(film);
  //       } catch {
  //       } finally {
  //       }
  //     };
  //     fetchData();
  //     return () => {
  //       abortCTRL.abort();
  //     };
  //   }, []);
 movies.map(film => (
         console.log(film.id)))
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
