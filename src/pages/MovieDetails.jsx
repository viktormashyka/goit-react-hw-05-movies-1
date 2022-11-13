import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink';
import { fetchMovieById } from 'api';

export const MovieDetails = () => {
  console.log('Run MovieDetails... ');

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  console.log('MovieDetails movieId, ', movieId);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovieById({ movieId });
      console.log('MoviesDetails movie, ', movie);
      setMovie(movie);
    };
    getMovie();
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <img src={movie.backdrop_path} alt={movie.title} />
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        {/* Product - {product.name} - {id} */}
        <h2>
          {movie.title} - {movieId}
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
