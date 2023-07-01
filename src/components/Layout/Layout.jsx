import React from "react";
import { Outlet } from 'react-router-dom';

import { Container, Header, Link, Logo } from '../App.styled.js';
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
        <Outlet />
      </Container>
    );
}
export default Layout