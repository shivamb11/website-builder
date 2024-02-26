import NavItem from "./navitem/NavItem.jsx";
import "./navlist.scss";

const content = ["Categories", "Website builders", "Today's deals"];

function NavList() {
  return (
    <ul>
      {content.map((item) => (
        <NavItem content={item} key={item} />
      ))}
    </ul>
  );
}

export default NavList;
