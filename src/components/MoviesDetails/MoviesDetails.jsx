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

  const { genres, title, overview, release_date, poster_path, vote_average } =
    filmInfo;
  
  console.log('vote_average', typeof vote_average);
 
  return (
    <div>
      <p>
        <Link to="/">GO BACK</Link>
      </p>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={200}
        />
      )}
      <div>
        {release_date && (
          <h2>
            {title} ({release_date.substring(0, 4)})
          </h2>
        )}
        {vote_average && (
          <p>User Score {Math.round(vote_average * 10)}%</p>
        )}
        <div>{overview}</div>
        <h3>Genres</h3>
        {genres && genres.length > 0 && (
          <div>{genres.map(genre => genre.name).join(' ')}</div>
        )}
      </div>
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default MoviesDetails;
// {/* <Outlet />; */}
