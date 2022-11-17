import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByIdCast } from 'api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const cast = await fetchMovieByIdCast({ movieId });
      setCast(cast);
    };
    getCast();
  }, [movieId]);

  const strPoster = 'https://image.tmdb.org/t/p/w300';

  return (
    <section>
      <div>
        {cast.length > 0 ? (
          <ul>
            {cast.map(c => (
              <li key={c.id}>
                <img src={strPoster + c.profile_path} alt={c.name} />
                <p>{c.name}</p>
                <p>Character: {c.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have information about movie cast.</p>
        )}
      </div>
    </section>
  );
};

export default Cast;