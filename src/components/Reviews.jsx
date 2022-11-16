import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByIdReviews } from 'api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await fetchMovieByIdReviews({ movieId });
      setReviews(reviews);
    };
    getReviews();
  }, [movieId]);

  return (
    <section>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(r => (
              <li key={r.id}>
                <p>Author: {r.author}</p>
                <p>{r.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    </section>
  );
};

export default Reviews;
