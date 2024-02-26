import "./navitem.scss";

function NavItem({ content }) {
  return (
    <li className=".nav-item">
      <a href="#">{content}</a>
    </li>
  );
}

export default NavItem;
