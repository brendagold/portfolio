import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="portfolio-logo"
          />
        </Link>
      </div>
      <div className={open ? "nav-open" : "hide"}>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
        <nav className="navv">
          <ul onClick={() => setOpen(false)} className="nav__list">
            <li className="nav__item">
              <a href="/#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/#services" className="nav__link">
                My Services
              </a>
            </li>
            <li className="nav__item">
              <a href="/#about" className="nav__link">
                About me
              </a>
            </li>
            <li className="nav__item">
              <a href="/#work" className="nav__link">
                My Work
              </a>
            </li>
            <li className="nav__item">
              <a href="/#contact" className="nav__link">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
