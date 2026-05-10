import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isRegistered, getDisplayName } = useAuth();

  const links = [
    { name: "Carteleria", path: "/" },
    { name: "Confiteria", path: "/confiteria" },
    { name: "Promociones", path: "/promociones" },
    { name: "Cine Flow", path: "/cine-flow" },
  ];

  return (
    <header className="navbar" aria-label="Navegacion principal">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Ir al inicio">
          <img src="/CineFlow01.png" alt="Cine Flow" className="navbar__logo" />
          <span>Cine Flow</span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-label">Menu</span>
        </button>

        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`} id="navbar-menu" aria-label="Menu principal">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          {isRegistered ? (
            <Link to="/perfil" className="navbar__profile" aria-label="Ir a mi perfil">
              <span className="navbar__profile-avatar">{getDisplayName().charAt(0).toUpperCase()}</span>
              <div className="navbar__profile-copy">
                <span className="navbar__profile-label">Perfil</span>
                <strong className="navbar__profile-name">{getDisplayName()}</strong>
              </div>
            </Link>
          ) : (
            <>
              <Link to="/iniciar-sesion" className="navbar__btn navbar__btn--ghost">
                Iniciar sesion
              </Link>
              <Link to="/registrarse" className="navbar__btn navbar__btn--primary">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
