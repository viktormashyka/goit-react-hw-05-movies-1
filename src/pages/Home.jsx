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
