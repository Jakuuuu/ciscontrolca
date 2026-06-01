import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './NavbarV2.css';

const NavbarV2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
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
    return () => {
      document.body.style.overflow = '';
      root.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`ref-header-v2 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container ref-header-container-v2">
        <Link to="/" className="ref-logo-v2">
          <img src="/Media/logo.png" alt="Ciscontrol" className="ref-logo-img-v2" />
        </Link>

        {/* Desktop Menu */}
        <nav className="ref-desktop-menu-v2">
          <Link to="/" className={`ref-nav-link-v2 ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
          <Link to="/nosotros" className={`ref-nav-link-v2 ${location.pathname === '/nosotros' ? 'active' : ''}`}>Nosotros</Link>
          <Link to="/servicios" className={`ref-nav-link-v2 ${location.pathname === '/servicios' ? 'active' : ''}`}>Servicios</Link>
          <Link to="/proyectos" className={`ref-nav-link-v2 ${location.pathname === '/proyectos' ? 'active' : ''}`}>Proyectos</Link>
          <Link to="/contacto" className="ref-btn-contact-v2">Contacto</Link>
        </nav>

        {/* Mobile menu button */}
        <button className="ref-mobile-menu-btn-v2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`ref-mobile-nav-v2 ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="ref-mobile-link-v2">Inicio</Link>
        <Link to="/nosotros" className="ref-mobile-link-v2">Nosotros</Link>
        <Link to="/servicios" className="ref-mobile-link-v2">Servicios</Link>
        <Link to="/proyectos" className="ref-mobile-link-v2">Proyectos</Link>
        <Link to="/contacto" className="ref-mobile-link-v2 ref-btn-contact-mobile-v2">Contacto</Link>
      </div>
    </header>
  );
};

export default NavbarV2;
