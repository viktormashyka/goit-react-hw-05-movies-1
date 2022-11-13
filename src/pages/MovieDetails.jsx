import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink';
import { fetchMoviesById } from 'api';

export const MovieDetails = () => {
  console.log('Run MovieDetails... ');

  const [movie, setMovie] = useState({});
  const { id } = useParams();

  console.log('MovieDetails id, ', id);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMoviesById({ id });
      console.log('MoviesDetails movie, ', movie);
      setMovie(movie);
    };
    getMovie();
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        {/* Product - {product.name} - {id} */}
        <h2>
          {movie.title} - {id}
        </h2>
        <p>Score</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>genres</p>
      </div>
      <div>
        <h3>Additional name</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

// export const MovieDetails = ({ getMovieById }) => {
//   console.log('Run MovieDetails... ');
//   //   const getMovieById = movieId => {
//   //     return movies.find(movie => movie.id === movieId);
//   //   };
//   const { id } = useParams();
//   const movie = getMovieById(id);

//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? '/movies';

//   console.log('movie, ', movie);

//   return (
//     <main>
//       <BackLink to={backLinkHref}>Back to movies</BackLink>
//       <img src={movie.poster_path} alt={movie.title} />
//       <div>
//         {/* Product - {product.name} - {id} */}
//         <h2>
//           {movie.title} - {id}
//         </h2>
//         <p>Score</p>
//         <h3>Overview</h3>
//         <p>{movie.overview}</p>
//         <h3>Genres</h3>
//         <p>genres</p>
//       </div>
//       <div>
//         <h3>Additional name</h3>
//         <ul>
//           <li>
//             <Link to="cast">Cast</Link>
//           </li>
//           <li>
//             <Link to="reviews">Reviews</Link>
//           </li>
//         </ul>
//         <Outlet />
//       </div>
//     </main>
//   );
// };
