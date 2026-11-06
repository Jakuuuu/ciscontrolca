import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './NavbarV2.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
];

// Header oscuro en todo el sitio V2: transparente sobre la cabecera navy de cada
// página y azul marino sólido al hacer scroll o con el menú móvil abierto.
const NavbarV2 = () => {
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  // Cerrar el menú al cambiar de ruta (ajuste de estado durante el render, sin efecto)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      root.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      root.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  const navClass = (base) => ({ isActive }) => `${base} ${isActive ? 'active' : ''}`;

  return (
    <header className={`ref-header-v2 ref-header-dark-v2 ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container ref-header-container-v2">
        <Link to="/" className="ref-logo-v2" aria-label="Ciscontrol — Inicio">
          <img src="/Media/logo-dark.png" alt="Ciscontrol" className="ref-logo-img-v2" />
        </Link>

        {/* Desktop Menu */}
        <nav className="ref-desktop-menu-v2" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navClass('ref-nav-link-v2')}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contacto" className={navClass('ref-btn-contact-v2')}>Contacto</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="ref-mobile-menu-btn-v2"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
          aria-controls="ref-mobile-nav-v2"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        id="ref-mobile-nav-v2"
        className={`ref-mobile-nav-v2 ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Principal (móvil)"
      >
        {links.map((l, i) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={navClass('ref-mobile-link-v2')}>
            <span className="ref-mobile-num-v2" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/contacto" className={navClass('ref-mobile-link-v2 ref-btn-contact-mobile-v2')}>Contacto</NavLink>
      </nav>
    </header>
  );
};

export default NavbarV2;
