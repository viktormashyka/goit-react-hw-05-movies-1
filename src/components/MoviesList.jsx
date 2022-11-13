import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movie }) => {
  const location = useLocation();
  return (
    <li key={movie.id}>
      <Link to={`${movie.id}`} state={{ from: location }}>
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};
