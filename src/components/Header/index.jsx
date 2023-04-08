import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import "./Menu.css";
import "./Header-Mobile.css";

import Logo from "../../assets/logo.png";
import LogoMobile from "../../assets/logo-mobile.png";

const Header = () => {
  const location = useLocation();
  const paginas = [
    {
      title: "Programação",
      path: "/",
    },
    {
      title: "Compre Online",
      path: "/comprar",
    },
    {
      title: "Preços",
      path: "/precos",
    },
    {
      title: "Bomboniere",
      path: "/bomboniere",
    },
    {
      title: "Convenios",
      path: "/convenios",
    },
    {
      title: "Contato",
      path: "/contato",
    },
  ];

  function renderPaginas() {
    return paginas.map((pagina) => {
      return (
        <Link
          key={pagina.path}
          className={location.pathname === pagina.path ? "page-select" : ""}
          to={pagina.path}
        >
          {pagina.title}
        </Link>
      );
    });
  }

  return (
    <header className="header">
      <main className="header-flex">
        <img src={Logo} alt="logo patrocine" />
        <div className="header-btts">{renderPaginas()}</div>
      </main>
      <main className="inner-nav">
        <img src={LogoMobile} alt="logo patrocine mobile" />
        <input type="checkbox" id="check-menu" className="check-menu" />
        <label className="menu-icon" htmlFor="check-menu">
          <span></span>
        </label>
        <label className="menu-background" htmlFor="check-menu"></label>
        <main className="menu-box">
          <a href="index.html">
            <label htmlFor="check-menu"> Programação </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Compre Online </label>
          </a>
          <a href="precos/precos.html">
            <label htmlFor="check-menu"> Preços </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Bomboniere </label>
          </a>
          <a href="Convenios/convenios.html">
            <label htmlFor="check-menu"> Convenios </label>
          </a>
          <a href="contato/contato.html">
            <label htmlFor="check-menu"> Contato </label>
          </a>
        </main>
      </main>
    </header>
  );
};

export default Header;
