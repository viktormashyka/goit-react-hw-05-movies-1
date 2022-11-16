import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { BackLink } from 'components/BackLink';
import { fetchMovieById } from 'api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovieById({ movieId });
      setMovie(movie);
    };
    getMovie();
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;
  const strPoster = 'https://image.tmdb.org/t/p/w300';

  // const genresList = genres.map(genre => genre.name).join(', ');

  // const releaseDate = release_date.slice(0, 4);

  return (
    <main style={{ marginLeft: '30px' }}>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <img src={strPoster + poster_path} alt={title} />
      <div>
        <h2>
          {/* {title} ({releaseDate}) */}
          {/* {title} ({release_date.slice(0, 4)}) */}
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* <p>{genresList}</p> */}

        {/* {genres.map(genre => (
          <span key={genre.id} style={{ marginRight: '10px' }}>
            {genre.name}
          </span>
        ))} */}
      </div>
      <div>
        <h3>Additional name</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;

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
