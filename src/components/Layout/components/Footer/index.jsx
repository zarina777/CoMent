import { Link } from "react-router-dom";
import Container from "../../../Container";
import cn from "./style.module.scss";

const Footer = () => {
  return (
    <div className={cn.Footer}>
      <p className={cn.logo}>CoMent</p>
      <ul className={cn.Navs}>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="mentors">Mentors</Link>
        </li>
        <li>
          <Link to="professions">Resources</Link>
        </li>
        <li>
          <Link to="connection">Contact</Link>
        </li>
        <li>
          <Link to="connection">Help</Link>
        </li>
      </ul>
      <Container className={cn.Container}>
        <div className={cn.contact}>
          <a>+998 99 389 27 28</a>
          <p>Tashkent, Uzbekistan</p>
          <p>© 2024 CoMent, all rights reserved.</p>
        </div>
        <div className={cn.wrap}>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
