import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav
          style={{
            marginLeft: '50px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <Link to="/" end style={{ marginRight: '20px' }}>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
