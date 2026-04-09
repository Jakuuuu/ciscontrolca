import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
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
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Block body scroll when mobile menu is open
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
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/Media/logo.png" alt="Ciscontrol" className="logo-img" />
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
          <Link to="/nosotros" className={`nav-link ${location.pathname === '/nosotros' ? 'active' : ''}`}>Nosotros</Link>
          <Link to="/servicios" className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}>Servicios</Link>
          <Link to="/proyectos" className={`nav-link ${location.pathname === '/proyectos' ? 'active' : ''}`}>Proyectos</Link>
          <Link to="/contacto" className="btn-primary">Contacto</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link">Inicio</Link>
        <Link to="/nosotros" className="mobile-link">Nosotros</Link>
        <Link to="/servicios" className="mobile-link">Servicios</Link>
        <Link to="/proyectos" className="mobile-link">Proyectos</Link>
        <Link to="/contacto" className="mobile-link btn-primary-mobile">Contacto</Link>
      </div>
    </header>
  );
};

export default Navbar;
