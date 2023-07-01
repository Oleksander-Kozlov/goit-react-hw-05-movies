import axios from 'axios';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGEzYWE4NDJlODc3MzIzMTZmNjUyMmY5NGNjYWIzYiIsInN1YiI6IjY0OTllYjZkYmJkMGIwMDEwNjZmZGNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FmL6ArnlTWaeJhkdkm9WJSU56E0EQ8jMnjSepQWr4_g';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['accept'] = 'application/json';
//   /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function fetchMovieTrendToday(
    abortCtrl
) {
  const response = await axios.get('trending/movie/day?language=en-US', {
    signal: abortCtrl.signal,
  });
  
  return response.data;
}

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
export async function fetchQueryMovie({queryMovie, abortCtrl, page}) {
  const response = await axios.get('search/movie}', {
    signal: abortCtrl.signal,
    params: {
      query: queryMovie,
      language: 'en-US',
      include_adult: false,
      page: page,
    },
  });

  return response.data;
}
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
export async function fetchMovieInfoById({ id
  // , abortCtrl
}) {
  console.log('ID', id);
  const response = await axios.get(`movie/${id}}`, {
    // signal: abortCtrl.signal,
    params: {
      language: 'en-US',
      include_adult: false,
      // append_to_response: 'credits, reviews',
    },
  });
console.log(response.data);

  return response.data;
}

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/collection/1070802',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer b8a3aa842e87732316f6522f94ccab3b',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// console.log(response.data);
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
