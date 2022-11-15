import axios from 'axios';
// import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '857288c3c5f42347171bc7541b9a4b57';

export const fetchMoviesTrendingToday = async () => {
  const url = `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url);
    console.log(
      'fetchMoviesTrendingToday response.data.results, ',
      response.data.results
    );
    const movies = getNormalizedMovies(response.data.results);
    return movies;
  } catch (error) {
    throw new Error(error);
  }
};

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
    ({ id, original_title, title, overview, genre_ids }) => {
      return { id, original_title, title, overview, genre_ids };
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

// export const getMovieById = movieId => {
//   return movies.find(movie => movie.id === movieId);
// };

// export const getProductById = productId => {
//   return products.find(product => product.id === productId);
// };

// fetchPhotos.propTypes = {
//   searchPhotos: PropTypes.array.isRequired,
//   page: PropTypes.number.isRequired,
// };

// import axios from 'axios';
// import PropTypes from 'prop-types';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '29782836-0cb6e5c5167e525a8102df66c';

// export const fetchPhotos = async ({ searchPhotos, page }) => {
//   const per_page = 12;

//   const url = `${BASE_URL}?key=${API_KEY}&q=${searchPhotos}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;

//   try {
//     const response = await axios.get(url);

//     const images = getNormalizedImages(response.data.hits);
//     const pages = Math.ceil(response.data.totalHits / per_page);

//     return { images, pages };
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const getNormalizedImages = images => {
//   const normalizedData = images.map(
//     ({ id, tags, webformatURL, largeImageURL }) => {
//       return { id, tags, webformatURL, largeImageURL };
//     }
//   );
//   return normalizedData;
// };

// fetchPhotos.propTypes = {
//   searchPhotos: PropTypes.array.isRequired,
//   page: PropTypes.number.isRequired,
// };

//*** ***/
const products = [
  { id: 'h-1', name: 'Hoodie 1' },
  { id: 'h-2', name: 'Hoodie 2' },
  { id: 'h-3', name: 'Hoodie 3' },
  { id: 's-1', name: 'Sneakers 1' },
  { id: 's-2', name: 'Sneakers 2' },
  { id: 's-3', name: 'Sneakers 3' },
  { id: 's-4', name: 'Sneakers 4' },
  { id: 'p-1', name: 'Pants 1' },
  { id: 'p-2', name: 'Pants 2' },
  { id: 'p-3', name: 'Pants 3' },
];

export const getProducts = () => {
  return products;
};

export const getProductById = productId => {
  return products.find(product => product.id === productId);
};
