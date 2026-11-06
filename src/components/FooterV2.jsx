import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { heroServices } from '../data/heroSlides';
import './FooterV2.css';

// Orden obligatorio: Electricidad, Automatización, DDCE, PC3 (SPRC), Fibra óptica
const FooterV2 = () => {
  return (
    <footer className="ref-footer-v2 bx-grid-dark bx-hairline-top">
      <div className="bx-container">
        <div className="ref-footer-grid-v2">
          <div className="ref-footer-brand-v2">
            <Link to="/" className="ref-footer-logo-link-v2" aria-label="Ciscontrol — Inicio">
              <img src="/Media/logo-dark.png" alt="Ciscontrol" className="ref-footer-logo-v2" loading="lazy" />
            </Link>
            <p>Soluciones integrales de alta gama en electricidad, automatización, protección atmosférica, anticorrosión y fibra óptica. Respaldando la industria nacional con total excelencia.</p>
          </div>

          <nav className="ref-footer-col-v2" aria-labelledby="ref-footer-services-title">
            <h2 id="ref-footer-services-title" className="bx-kicker ref-footer-kicker-v2">Servicios</h2>
            <ul className="ref-footer-services-v2">
              {heroServices.map((s) => (
                <li key={s.id}>
                  <Link to="/servicios" className="ref-footer-link-v2">
                    <i aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ref-footer-col-v2">
            <h2 className="bx-kicker ref-footer-kicker-v2">Contacto</h2>
            <div className="ref-footer-contacts-v2">
              <div className="ref-contact-item-v2">
                <MapPin size={18} className="ref-footer-icon-v2" aria-hidden="true" />
                <span>Torre BVC, PB, Oficina 13, Avenida Andrés Bello (Intercomunal), Lechería, Estado Anzoátegui.</span>
              </div>
              <div className="ref-contact-item-v2">
                <Phone size={18} className="ref-footer-icon-v2" aria-hidden="true" />
                <span>04128245656</span>
              </div>
              <div className="ref-contact-item-v2">
                <Mail size={18} className="ref-footer-icon-v2" aria-hidden="true" />
                <span>info@ciscontrolmm.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ref-footer-bottom-v2">
          <p>&copy; {new Date().getFullYear()} Ciscontrol, C.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
