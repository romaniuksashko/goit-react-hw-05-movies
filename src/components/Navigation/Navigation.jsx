import { NavLink } from "react-router-dom";
import { Nav } from "./Navigation.styled";

function Layout() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </Nav>
  );
}

export default Layout;
