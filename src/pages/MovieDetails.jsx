import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { BackLink } from 'components/BackLink';
import { fetchMovieById } from 'api';

// const PosterUrl = relativeUrl => {
//   return 'https://image.tmdb.org/t/p/w300' + relativeUrl;
// };

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovieById({ movieId });
      setMovie(movie);
    };
    getMovie();
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  if (!movie) return <p>loading...</p>;

  // const { title, poster_path, vote_average, overview, release_date, genres } =
  //   movie;
  const { title, overview, posterUrl, year, userScore, genresList } = movie;

  // const strPoster = 'https://image.tmdb.org/t/p/w300';

  // const year1 = new Date(release_date).getFullYear();
  // const year2 = release_date.split('-')[0];
  // const year3 = release_date.slice(0, 4);

  // const genresList = genres.map(({ name }) => name).join(', ');
  // const genresList = genres.map(genre => genre.name).join(', ');

  // const userScore = Number.parseInt(vote_average * 10);

  return (
    <main style={{ marginLeft: '30px' }}>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {/* <img src={strPoster + poster_path} alt={title} /> */}
      {/* <img src={PosterUrl(poster_path)} alt={title} /> */}
      <img src={posterUrl} alt={title} />
      <div>
        <h2>
          {/* {title} ({year1}) */}
          {title} ({year})
        </h2>
        <p>User Score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
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
