import {
  Routes, Route,
  // Outlet

} from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { Movies } from './pages/Movies.jsx';
import { Reviews } from '../components/Reviews/Reviews.jsx';
import { Cast } from '../components/Cast/Cast.jsx';
import MoviesDetails from '../components/MoviesDetails/MoviesDetails.jsx';
import { NotFound } from '../components/NotFound/NotFound.jsx';
import Layout from './Layout/Layout.jsx';
// import {  Container, Header, Link, Logo} from './App.styled.js';

 const App = () => {
  // const StyledLink = styled(NavLink)`
  //   color: black;

  //   &.active {
  //     color: orange;
  //   }
  // `;
  return (
    // <Container> </Container>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index="home" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App