import { fetchMovies } from '../api';

export const Movies = () => {
  const movies = fetchMovies();
  return <main>{/* <MoviesList movies={movies} /> */}</main>;
};

// import { getProducts } from "../fakeAPI";

// export const Products = () => {
//   const products = getProducts();
//   return (
//     <main>
//       <ProductList products={products} />
//     </main>
//   );
// };
