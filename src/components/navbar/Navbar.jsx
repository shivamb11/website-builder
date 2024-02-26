import NavList from "./navlist/NavList.jsx";
import Search from "./search/Search.jsx";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <Search />
      <NavList />
    </nav>
  );
}

export default Navbar;
