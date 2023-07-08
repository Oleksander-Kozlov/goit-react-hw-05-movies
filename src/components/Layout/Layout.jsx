import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Link, Logo } from '../App.styled';
const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Search Video Info
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>

          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
