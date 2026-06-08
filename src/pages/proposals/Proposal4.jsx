import React, { useState } from 'react';
import { homeData } from '../../data/homeData';
import { servicesData } from '../../data/servicesData';
import { projectsData, clientsData, timelineData } from '../../data/projectsData';
import { aboutData } from '../../data/aboutData';
import { ArrowRight, Mail, Phone, MapPin, Zap, Shield, Settings, CheckCircle2 } from 'lucide-react';
import './Proposal4.css';

const Proposal4 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { hero, slider } = homeData;

  return (
    <div className="theme-refined-white">
      {/* Header Corporativo Refinado */}
      <header className="ref-header">
        <div className="container ref-header-container">
          <div className="ref-logo">
            <img src="/Media/logo.png" alt="Ciscontrol" className="ref-logo-img" />
          </div>
          <nav className="ref-nav">
            <span className="ref-active">Inicio</span>
            <span>Nosotros</span>
            <span>Servicios</span>
            <span>Proyectos</span>
            <span className="ref-btn-contact">Contáctenos</span>
          </nav>
        </div>
      </header>

      {/* Hero Section con Video original e Impacto Blanco/Azul */}
      <section className="ref-hero">
        <div className="ref-hero-bg">
          <div className="ref-hero-overlay"></div>
          <video
            className={`ref-hero-video ${videoLoaded ? 'loaded' : ''}`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        </div>
        
        <div className="container ref-hero-content">
          <span className="ref-kicker">INGENIERÍA E INFRAESTRUCTURA INDUSTRIAL</span>
          <h1 className="ref-hero-title">
            {hero.titleLine1}<br />
            <span className="text-blue-accent">{hero.titleLine2}</span>
          </h1>
          <p className="ref-hero-subtitle">
            {hero.subtitle}
          </p>
          <div className="ref-hero-actions">
            <a href="#servicios" className="ref-btn-primary">Nuestros Servicios</a>
            <a href="#proyectos" className="ref-btn-outline">Ver Proyectos</a>
          </div>
        </div>
      </section>

      {/* Identidad / Misión y Visión Clásica */}
      <section className="ref-identity-section">
        <div className="container">
          <div className="ref-identity-grid">
            <div className="ref-identity-card">
              <div className="ref-card-header">
                <div className="ref-icon-wrapper"><Shield size={24} /></div>
                <h3>{aboutData.identity.mision.title}</h3>
              </div>
              <p>{aboutData.identity.mision.text}</p>
            </div>
            
            <div className="ref-identity-card">
              <div className="ref-card-header">
                <div className="ref-icon-wrapper"><Zap size={24} /></div>
                <h3>{aboutData.identity.vision.title}</h3>
              </div>
              <p>{aboutData.identity.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Premium Blanco & Azul */}
      <section id="servicios" className="ref-services-section">
        <div className="container">
          <div className="ref-section-header">
            <span className="ref-section-tag">NUESTRAS SOLUCIONES</span>
            <h2 className="ref-section-title">Servicios Especializados</h2>
            <p className="ref-section-desc">Ingeniería transversal, integral y precisa para operaciones ininterrumpidas en alta criticidad.</p>
          </div>

          <div className="ref-services-grid">
            {servicesData.map((service, index) => (
              <div className="ref-service-card" key={service.id}>
                <div className="ref-service-badge">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="ref-service-bullets">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={16} className="bullet-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Proyectos de Producción */}
      <section id="proyectos" className="ref-projects-section">
        <div className="container">
          <div className="ref-section-header">
            <span className="ref-section-tag">COMPROMISO DEMOSTRADO</span>
            <h2 className="ref-section-title">Galería de Obras Destacadas</h2>
          </div>

          <div className="ref-projects-grid">
            {projectsData.slice(0, 6).map((project) => (
              <div className="ref-project-card" key={project.id}>
                <div className="ref-project-img-holder">
                  <img src={project.image} alt={project.title} />
                  <span className="ref-project-cat">{project.category}</span>
                </div>
                <div className="ref-project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trayectoria Histórica Refinada */}
      <section className="ref-timeline-section">
        <div className="container">
          <div className="ref-section-header">
            <span className="ref-section-tag">RESPALDO</span>
            <h2 className="ref-section-title">Nuestra Trayectoria Histórica</h2>
          </div>

          <div className="ref-timeline-grid">
            {timelineData.map((item, index) => (
              <div className="ref-timeline-card" key={index}>
                <span className="ref-timeline-year">{item.year}</span>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Scoped */}
      <footer className="ref-footer">
        <div className="container">
          <div className="ref-footer-grid">
            <div className="ref-footer-brand">
              <img src="/Media/logo.png" alt="Ciscontrol" className="ref-footer-logo" style={{ filter: "brightness(0) invert(1)" }} />
              <p>Soluciones integrales de alta gama en automatización, energía, telecomunicaciones y protección atmosférica.</p>
            </div>
            
            <div className="ref-footer-contacts">
              <div className="ref-contact-item">
                <MapPin size={18} className="ref-footer-icon" />
                <span>Lechería, Estado Anzoátegui, Venezuela.</span>
              </div>
              <div className="ref-contact-item">
                <Phone size={18} className="ref-footer-icon" />
                <span>04128245656</span>
              </div>
              <div className="ref-contact-item">
                <Mail size={18} className="ref-footer-icon" />
                <span>info@ciscontrolmm.com</span>
              </div>
            </div>
          </div>
          
          <div className="ref-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ciscontrol, C.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Proposal4;
