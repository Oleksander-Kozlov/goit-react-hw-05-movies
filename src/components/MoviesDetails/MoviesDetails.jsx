// import { FilmCard } from 'components/FilmCard/FilmCard';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '../App.styled.js';
import { fetchMovieInfoById } from '../Api.js';
import { useEffect, useState } from 'react';
const MoviesDetails = () => {
  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  useEffect(() => {
    const abortCTRL = new AbortController();
    const fetchData = async () => {
      //
      // if (searchImg === '' && page === 1) {
      //   return;
      // }
      try {
        const film = await fetchMovieInfoById({ id });
        console.log('film', film);
        console.log('moviesId', id);
        setFilmInfo(film);
      } catch {
      } finally {
      }
    };
    fetchData();
    return () => {
      abortCTRL.abort();
    };
  }, [id]);

  const { genres, title, overview, release_date, poster_path } = filmInfo;
 
  return (
    <div>
      <Link to="/">GO BACK</Link>

      <h2>
        {title} {release_date&&release_date.substring(0, 4)}
      </h2>

      <div>{overview}</div>
      {genres && genres.length > 0 && (
        <div>
          {genres.map(genre => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
      )}
      <span>
        `Now showing product with id - {id}
        {
          release_date
          //
        }
        `
      </span>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width={200}
      />
    </div>
  );
};

export default MoviesDetails;
// {/* <Outlet />; */}
