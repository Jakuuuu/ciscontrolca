import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './FooterV2.css';

const FooterV2 = () => {
  return (
    <footer className="ref-footer-v2">
      <div className="container">
        <div className="ref-footer-grid-v2">
          <div className="ref-footer-brand-v2">
            <img src="/Media/logo.png" alt="Ciscontrol" className="ref-footer-logo-v2" style={{ filter: "brightness(0) invert(1)" }} />
            <p>Soluciones integrales de alta gama en electricidad, automatización, protección atmosférica, anticorrosión y fibra óptica. Respaldando la industria nacional con total excelencia.</p>
          </div>
          
          <div className="ref-footer-contacts-v2">
            <div className="ref-contact-item-v2">
              <MapPin size={18} className="ref-footer-icon-v2" />
              <span>Torre BVC, PB, Oficina 13, Avenida Andrés Bello (Intercomunal), Lechería, Estado Anzoátegui.</span>
            </div>
            <div className="ref-contact-item-v2">
              <Phone size={18} className="ref-footer-icon-v2" />
              <span>04128245656</span>
            </div>
            <div className="ref-contact-item-v2">
              <Mail size={18} className="ref-footer-icon-v2" />
              <span>info@ciscontrolmm.com</span>
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
