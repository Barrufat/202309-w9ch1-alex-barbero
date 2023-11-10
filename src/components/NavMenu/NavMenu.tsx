import { NavLink } from "react-router-dom";
import NavMenuStyled from "./NavMenuStyled";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled>
      <ul className="nav-container">
        <li>
          <NavLink aria-label="home" to="/films">
            Films List
          </NavLink>
        </li>
        <li>
          <NavLink aria-label="add" to="/add">
            Add New
          </NavLink>
        </li>
      </ul>
    </NavMenuStyled>
  );
};

export default NavMenu;
