import axios from 'axios';
// import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '857288c3c5f42347171bc7541b9a4b57';

export const fetchMoviesTrendingToday = async signal => {
  const url = `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url, { signal: signal });
    console.log(
      'fetchMoviesTrendingToday response.data.results, ',
      response.data.results
    );
    const movies = getNormalizedMovies(response.data.results);
    return movies;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

// export const fetchMoviesTrendingToday = async () => {
//   const url = `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url);
//     console.log(
//       'fetchMoviesTrendingToday response.data.results, ',
//       response.data.results
//     );
//     const movies = getNormalizedMovies(response.data.results);
//     return movies;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const fetchMoviesByName = async ({ query }) => {
  const url = `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  try {
    const response = await axios.get(url);
    console.log(
      'fetchMoviesByName response.data.results, ',
      response.data.results
    );
    const movies = getNormalizedMovies(response.data.results);
    return movies;
  } catch (error) {
    throw new Error(error);
  }
};

const getNormalizedMovies = movies => {
  const normalizedData = movies.map(
    ({ id, original_title, title, overview, genres }) => {
      return { id, original_title, title, overview, genres };
    }
  );
  return normalizedData;
};

export const fetchMovieById = async ({ movieId }) => {
  const url = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url);
    console.log('fetchMoviesById response.data, ', response.data);
    // const movie = getNormalizedMovies(response.data.results);
    const movie = response.data;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieByIdCast = async ({ movieId }) => {
  const url = `${BASE_URL}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url);
    console.log('fetchMovieByIdCast response.data.cast, ', response.data.cast);
    // const movie = getNormalizedMovies(response.data.results);
    const cast = response.data.cast;
    return cast;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieByIdReviews = async ({ movieId }) => {
  const url = `${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url);
    console.log(
      'fetchMovieByIdReviews response.data.results, ',
      response.data.results
    );
    // const movie = getNormalizedMovies(response.data.results);
    const movie = response.data.results;
    return movie;
  } catch (error) {
    throw new Error(error);
  }
};