// import { useParams, useLocation } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
// import { BackLink } from 'components/BackLink';
// import { getMovieById } from '../api';

// // export const MovieDetails = () => {
// //   const { movieId } = useParams();
// //   return <div>Now showing movie with id - {movieId}</div>;
// // };

// export const MovieDetails = () => {
//   const { id } = useParams();
//   //   const { movieId } = useParams();
//     const movie = getMovieById(id);
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? '/movies';

//   return (
//     <main>
//       <BackLink to={backLinkHref}>Back to movies</BackLink>
//       <img src="https://via.placeholder.com/960x240" alt="" />
//       <div>
//         {/* Product - {product.name} - {id} */}
//         <h2>{movie.name}</h2>
//         <p>Score</p>
//         <h3>Overview</h3>
//         <p>overview</p>
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
