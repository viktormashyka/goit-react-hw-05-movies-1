import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy } from 'react';
import styled from 'styled-components';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { MovieDetails } from '../pages/MovieDetails';
// import { Reviews } from './Reviews';
// import { Cast } from './Cast';

// import NotFound from 'path/to/pages/NotFound';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

// export const App = () => {
//   return (
//     <div>
//       <nav
//         style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '20px' }}
//       >
//         <StyledLink to="/" end style={{ marginRight: '20px' }}>
//           Home
//         </StyledLink>
//         <StyledLink to="/movies">Movies</StyledLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </div>
//   );
// };
