import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMoviesTrendingToday } from 'api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const getMovies = async () => {
      try {
        const movies = await fetchMoviesTrendingToday(controller.signal);
        setMovies(movies);
      } catch (error) {
        console.log('Something went wrong:(');
      }
    };
    getMovies();

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const movies = await fetchMoviesTrendingToday();
  //     console.log('Home movies, ', movies);
  //     setMovies(movies);
  //   };
  //   getMovies();
  // }, []);

  return (
    <main style={{ marginLeft: '30px' }}>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;

// import { Link, useLocation } from 'react-router-dom';
// import { Container, CardWrapper, ProductName } from './ProductList.styled';

// export const ProductList = ({ products }) => {
//   const location = useLocation();

//   return (
//     <Container>
//       {products.map(product => (
//         <CardWrapper key={product.id}>
//           <Link to={`${product.id}`} state={{ from: location }}>
//             <img src="https://via.placeholder.com/200x100" alt="" />
//             <ProductName>{product.name}</ProductName>
//           </Link>
//         </CardWrapper>
//       ))}
//     </Container>
//   );
// };
