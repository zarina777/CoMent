import React from "react";
import Container from "../../../Container";
import Navs from "./components/Navs";
import Search from "./components/Search";
import cn from "./style.module.scss";
const Navbar = () => {
  return (
    <div className={cn.Navbar}>
      <Container className={cn.Container}>
        <Navs />
        <a className={cn.logo} href="/">
          <img src="./CoMent.png" alt="logo" />
        </a>
        <div className={cn.controls}>
          <Search />
          <button className={cn.singup}>
            <a href="singup">Sing up</a>
          </button>
          <span>
            <i class="fa-solid fa-gear"></i>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
