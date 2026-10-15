
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  function goHome() {
    closeMenu();
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={goHome}>
          WEBLYST<span> MOVIES</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <a href="/#discover" onClick={closeMenu}>
                Discover Movies
              </a>
            </li>
          </ul>
        </nav>

        <Link to="/" className="header-button" onClick={goHome}>
          Explore Movies
        </Link>
      </div>
    </header>
  );
}

export default Header;