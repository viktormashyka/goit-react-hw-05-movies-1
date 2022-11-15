import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByIdReviews } from 'api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await fetchMovieByIdReviews({ movieId });
      console.log('MovieDetailsReviews, ', reviews);
      setReviews(reviews);
    };
    getReviews();
  }, [movieId]);

  return (
    <section>
      <div>
        <h2>Authors review</h2>
        <ul>
          {reviews.map(r => (
            <li key={r.id}>
              <p>Author: {r.author}</p>
              <p>{r.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
