import {useEffect, useState} from 'react';
import { fetchMovieTrendToday } from '../Api.js';
import {MovieList} from '../MovieList/MovieList.jsx'
// import { useLocation } from 'react-router-dom';


const Home = () => {
const [movieList, setMovieList] = useState([]);
//  const location = useLocation(); 
  useEffect(() => {
    const abortCTRL = new AbortController();
    const fetchData = async () => {
      //
      // if (searchImg === '' && page === 1) {
      //   return;
      // }
      try {
        // ініціалізація абортконтролера
        if (abortCTRL.current) {
          abortCTRL.current.abort();
        }
        abortCTRL.current = new AbortController();

        const MovieListToday = await fetchMovieTrendToday(abortCTRL.signal);
        setMovieList([
          ...MovieListToday.results,
     
        ]);
   
      } catch {
      } finally {
      }
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, []);



  return (
    <main>
      <MovieList movies={movieList} />
      {/* <ul>
        {movieList.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
};
export  default Home