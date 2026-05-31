import React from 'react';
import { timelineData, clientsData, projectsData } from '../../data/projectsData';
import { aboutData } from '../../data/aboutData';
import { servicesData } from '../../data/servicesData';
import { Mail, Phone, MapPin, Award, Compass, HeartHandshake, Eye } from 'lucide-react';
import './Proposal2.css';

const Proposal2 = () => {
  return (
    <div className="theme-luxury">
      {/* Navbar Luxury Scoped */}
      <header className="luxury-header">
        <div className="container luxury-header-container">
          <div className="luxury-logo">
            <span className="brand-cap">C</span>ISCONTROL <span className="brand-sub">INGENIERÍA</span>
          </div>
          <nav className="luxury-nav">
            <span className="luxury-active">INICIO</span>
            <span>TRAYECTORIA</span>
            <span>SERVICIOS</span>
            <span className="luxury-cta">CONTACTAR</span>
          </nav>
        </div>
      </header>

      {/* Hero Intro Block */}
      <section className="luxury-hero">
        <div className="container luxury-hero-container">
          <span className="luxury-gold-label">EXCELENCIA EN INGENIERÍA</span>
          <h1 className="luxury-title">
            Trayectoria Sólida,<br />
            <span className="luxury-italic">Misión Renovada</span>
          </h1>
          <p className="luxury-subtitle">
            Soluciones integrales de alta gama en automatización, energía, telecomunicaciones y protección atmosférica. Respaldamos su operatividad con excelencia técnica y alianzas estratégicas globales.
          </p>
          <div className="luxury-actions">
            <a href="#trayectoria" className="btn-luxury-primary">Explorar Trayectoria</a>
            <a href="#servicios" className="btn-luxury-secondary">Nuestros Servicios</a>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="luxury-identity-section">
        <div className="container">
          <div className="luxury-identity-grid">
            <div className="identity-block">
              <div className="identity-header">
                <Compass className="identity-icon" size={24} />
                <h3>{aboutData.identity.mision.title}</h3>
              </div>
              <p>{aboutData.identity.mision.text}</p>
            </div>
            <div className="identity-block">
              <div className="identity-header">
                <Eye className="identity-icon" size={24} />
                <h3>{aboutData.identity.vision.title}</h3>
              </div>
              <p>{aboutData.identity.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria Timeline */}
      <section id="trayectoria" className="luxury-timeline-section">
        <div className="container">
          <span className="luxury-gold-label center">CRONOLOGÍA</span>
          <h2 className="luxury-section-title">Hitos Históricos de Ciscontrol</h2>
          
          <div className="luxury-timeline-flow">
            <div className="luxury-connecting-line"></div>
            <div className="luxury-timeline-items">
              {timelineData.map((item, index) => (
                <div className="luxury-timeline-card" key={index}>
                  <div className="luxury-dot-holder">
                    <div className="luxury-dot-core"></div>
                  </div>
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.subtitle}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Grid de Alta Autoridad */}
      <section className="luxury-clients-section">
        <div className="container">
          <span className="luxury-gold-label center">RESPALDO</span>
          <h2 className="luxury-section-title">Han Confiado en Nosotros</h2>
          <div className="luxury-clients-grid">
            {clientsData.map((client, index) => (
              <div className="luxury-client-card" key={index}>
                <HeartHandshake className="client-handshake-icon" size={16} />
                <span className="client-title">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Scoped */}
      <footer className="luxury-footer">
        <div className="container">
          <div className="luxury-footer-grid">
            <div className="footer-brand">
              <h4>CISCONTROL</h4>
              <p>Trayectoria y respaldo técnico a gran escala.</p>
            </div>
            <div className="footer-contacts">
              <div className="contact-line">
                <MapPin size={16} />
                <span>Lechería, Estado Anzoátegui, Venezuela.</span>
              </div>
              <div className="contact-line">
                <Phone size={16} />
                <span>04241245656</span>
              </div>
            </div>
          </div>
          <div className="luxury-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ciscontrol, C.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Proposal2;
