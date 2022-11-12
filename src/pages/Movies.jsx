import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { MoviesList } from '../components/MoviesList';
import { SearchBox } from '../components/SearchBox';
import { fetchMoviesByName } from '../api';

export const Movies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState;
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  // const visibileMovies = movies.filter(movie =>
  //   movie.name.toLowerCase().includes(movieName.toLowerCase())
  // );

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    console.log('nextParams, ', nextParams);
  };
  console.log('movieName, ', movieName);
  console.log('query, ', query);
  console.log('searchParams, ', searchParams);
  console.log('movies, ', movies);

  useEffect(() => {
    if (!movieName) return;
    const getMovies = async () => {
      // const { movies } = await fetchMoviesByName({ query });
      const movies = await fetchMoviesByName({ movieName });
      console.log('movies, ', movies);
      setMovies(movies);
    };
    getMovies();
  }, [movieName]);

  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <h1>Movies by name:</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

// import { useSearchParams } from 'react-router-dom';
// import { ProductList } from '../components/ProductList';
// import { SearchBox } from '../components/SearchBox';
// import { getProducts } from '../fakeAPI';

// export const Products = () => {
//   const products = getProducts();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const productName = searchParams.get('name') ?? '';

//   const visibleProducts = products.filter(product =>
//     product.name.toLowerCase().includes(productName.toLowerCase())
//   );

// const updateQueryString = name => {
//   const nextParams = name !== '' ? { name } : {};
//   setSearchParams(nextParams);
// };

//   return (
//     <main>
//       <SearchBox value={productName} onChange={updateQueryString} />
//       <ProductList products={visibleProducts} />
//     </main>
//   );
// };

// import axios from 'axios';
// import { Notify } from 'notiflix';

// export { feachPhotos };

// async function feachPhotos(searchPhotos, page, per_page) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '29782836-0cb6e5c5167e525a8102df66c';
//   const url = `${BASE_URL}?key=${API_KEY}&q=${searchPhotos}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;
//   const response = await axios.get(url);
//   // {
//   //   params: {
//   //     // q: 'searchPhotos',
//   //     image_type: 'photo',
//   //     orientation: 'horizontal',
//   //     safesearch: 'true',
//   //     page: 1,
//   //     per_page: 40,
//   //   },
//   //   header: {
//   //     'Content-Type': 'aplication/json',
//   //     Authorization: '29782836-0cb6e5c5167e525a8102df66c',
//   //   },
//   // }
//   // );
//   if (response.status !== 200) {
//     throw new Error(response.status);
//     Notify.failure(error);
//   }
//   return response.data;
// }
