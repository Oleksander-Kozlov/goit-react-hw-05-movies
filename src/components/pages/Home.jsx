
import {
  useEffect,
  // useRef,
  useState,
} from 'react';
import { fetchMovieTrendToday } from '../Api.js';
import { Link } from '../App.styled.js';
// import { Movies } from './Movies.jsx';
// import { fetchMovieInfoById } from '../Api.js';

export const Home = () => {
  // const abortCtrl = useRef(null);
  const [movieList, setMovieList] = useState([]);
  // const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    const abortCTRL = new AbortController();
    const fetchData = async () => {
      //
      // if (searchImg === '' && page === 1) {
      //   return;
      // }
      try {
        //ініціалізація абортконтролера
        // if (abortCtrl.current) {
        //   abortCtrl.current.abort();
        // }
        // abortCtrl.current = new AbortController();

        const MovieListToday = await fetchMovieTrendToday(abortCTRL.signal);
        setMovieList([
          ...MovieListToday.results,
          // .map(({ title, id, poster_path }) => ({ title, id, poster_path }))
        ]);
        // const film = fetchMovieInfoById(movieInfo);
        // console.log(film);
      } catch {
      } finally {
      }
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, []);

  console.log(movieList);

  // const handleClick = (id) => {
  //   console.log('idHANDLE', id);
  //   // setMovieInfo(movieList.find(el => el.id === id));
  //   const film = fetchMovieInfoById({id});
  //   console.log(film);
  // };

  return (
    <main>
      <ul>
        {movieList.map(film => (
          <li
            key={film.id}
            
          >
            <Link to={`movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
