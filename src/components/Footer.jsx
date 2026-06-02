import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/Media/logo.png" alt="Ciscontrol" className="logo-img" style={{height: "46px", filter: "brightness(0) invert(1)"}} />
          </div>
        </div>

        <div className="footer-col contact-col">
          <div className="contact-list">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Calle Tajalí D1-B, Urbanización Mar, Lechería, Estado Anzoátegui.</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>04241245656</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>info@ciscontrolmm.com</span>
            </div>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ciscontrol, C.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
