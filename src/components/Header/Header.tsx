import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/images/logo.svg" alt="Café Neko Logo" />
      </div>
      <nav className="header-nav">
        <a href="#about" className="header-link">
          Qui sommes-nous ?
        </a>
        <a href="#values" className="header-link">
          Nos valeurs
        </a>
        <a href="#booking" className="header-link header-link--cta">
          Réservez !
        </a>
      </nav>
      <button
        className="header-burger"
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>
      {menuOpen && (
        <div className="header-mobile-menu" role="menu">
          <a
            href="#about"
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            Qui sommes-nous ?
          </a>
          <a
            href="#values"
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            Nos valeurs
          </a>
          <a
            href="#booking"
            className="header-link header-link--cta"
            onClick={() => setMenuOpen(false)}
          >
            Réservez !
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
