import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Header.css";
import "./Menu.css";
import "./Header-Mobile.css";

import Logo from "../../assets/logo.png";
import LogoMobile from "../../assets/logo-mobile.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const checkMenu = useRef();

  function handleLogoClick() {
    navigate("/");
    window.scrollTo(0, 0);
  }

  function renderPaginas() {
    return paginas.map((pagina) => {
      return (
        <Link
          key={pagina.path}
          className={location.pathname === pagina.path ? "page-select" : ""}
          onClick={() => {
            checkMenu.current.click();
            window.scrollTo(0, 0);
          }}
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
        <img onClick={handleLogoClick} src={Logo} alt="logo patrocine" />
        <div className="header-btts">{renderPaginas()}</div>
      </main>
      <main className="inner-nav">
        <img
          onClick={handleLogoClick}
          src={LogoMobile}
          alt="logo patrocine mobile"
        />
        <input
          type="checkbox"
          ref={checkMenu}
          id="check-menu"
          className="check-menu"
        />
        <label className="menu-icon" htmlFor="check-menu">
          <span></span>
        </label>
        <label className="menu-background" htmlFor="check-menu"></label>
        <main className="menu-box">{renderPaginas()}</main>
      </main>
    </header>
  );
};

export default Header;
