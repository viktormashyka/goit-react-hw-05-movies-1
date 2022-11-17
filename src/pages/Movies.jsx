import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchBox } from '../components/SearchBox';
import { fetchMoviesByName } from '../api';

const Movies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  // const updateQueryString = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };
  // console.log('query: movieName, ', { query: movieName });

  useEffect(() => {
    if (!movieName) return;
    const getMovies = async () => {
      const movies = await fetchMoviesByName({ query: movieName });
      setMovies(movies);
    };
    getMovies();
  }, [movieName]);

  return (
    <main style={{ marginLeft: '30px' }}>
      <SearchBox />
      {/* <SearchBox value={movieName} onChange={updateQueryString} /> */}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;

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
