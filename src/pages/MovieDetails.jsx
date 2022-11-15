import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink';
import { fetchMovieById } from 'api';

export const MovieDetails = () => {
  console.log('Run MovieDetails... ');

  const [movie, setMovie] = useState({});
  // const [cast, setCast] = useState([]);
  // const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovieById({ movieId });
      console.log('MovieDetails movie, ', movie);
      setMovie(movie);
    };
    getMovie();
  }, [movieId]);

  // useEffect(() => {
  //   const getCast = async () => {
  //     const cast = await fetchMovieByIdCast({ movieId });
  //     console.log('MovieDetailsCast cast, ', cast);
  //     setCast(cast);
  //   };
  //   getCast();
  // }, [movieId]);

  // useEffect(() => {
  //   const getReviews = async () => {
  //     const reviews = await fetchMovieByIdReviews({ movieId });
  //     console.log('MovieDetailsReviews, ', reviews);
  //     setReviews(reviews);
  //   };
  //   getReviews();
  // }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { title, poster_path, release_date, vote_average, overview } = movie;
  const strPoster = 'https://image.tmdb.org/t/p/w300';
  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <img src={strPoster + poster_path} alt={title} />
      <div>
        {/* <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2> */}
        <h2>
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>genres</p>
        {/* <p>{Object.values(movie.genres.name)}</p> */}
      </div>
      <div>
        <h3>Additional name</h3>
        <ul>
          <li>
            <Link
              to="cast"
              // cast={cast}
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              // reviews={reviews}
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </Link>
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
