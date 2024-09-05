import { NavLink } from "react-router-dom";
import cn from "./style.module.scss";

const Navs = () => {
  return (
    <ul className={cn.Navs}>
      <li>
        <NavLink activeClassName="active" to="/">Bosh sahifa</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="mentors">Mentorlar</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="professions">Kasblar</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="connection">Bog'lanish</NavLink>
      </li>
    </ul>
  );
};

export default Navs;
