import React from 'react';
import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import { servicesData } from '../../data/servicesData';
import { projectsData } from '../../data/projectsData';
import Logo3D from '../../components/Logo3D';
import { ArrowRight, Cpu, Radio, ShieldAlert, Award, Database, Terminal } from 'lucide-react';
import './Proposal1.css';

const Proposal1 = () => {
  const { hero } = homeData;

  return (
    <div className="theme-cyber">
      {/* Barra de Navegación Scoped */}
      <header className="cyber-header">
        <div className="container cyber-header-container">
          <div className="cyber-logo">
            <span className="glow-dot"></span>
            CISCONTROL <span className="tech-version">v1.0_CYBER</span>
          </div>
          <nav className="cyber-nav">
            <span className="nav-item-active">Inicio</span>
            <span>Servicios</span>
            <span>Proyectos</span>
            <span className="accent-nav">REUNIÓN TÉCNICA</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-cyber">
        <div className="cyber-grid-overlay"></div>
        <div className="container hero-cyber-container">
          <div className="hero-text-block">
            <div className="tech-badge">
              <Cpu size={14} className="badge-icon" /> SISTEMAS DE PROTECCIÓN ATMOSFÉRICA & POTENCIA
            </div>
            <h1 className="hero-title">
              {hero.titleLine1}<br />
              <span className="text-glow-cyan">{hero.titleLine2}</span>
            </h1>
            <p className="hero-subtitle">
              {hero.subtitle}
            </p>
            <div className="hero-actions">
              <a href="#servicios" className="btn-glow-cyan">
                {hero.ctaText} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </a>
              <a href="#contacto" className="btn-outline-gold">Monitoreo y Diagnóstico</a>
            </div>
          </div>

          <div className="hero-logo-3d-wrapper">
            <Logo3D />
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="cyber-services-section">
        <div className="container">
          <div className="section-header-cyber">
            <h2 className="title-cyan-glow">Ingeniería e Infraestructura Crítica</h2>
            <p className="subtitle-glow">Diseños de alta ingeniería transversales para la continuidad operativa industrial.</p>
          </div>

          <div className="cyber-services-grid">
            {servicesData.map((service, index) => (
              <div className="cyber-service-card" key={service.id}>
                <div className="service-card-glow"></div>
                <div className="card-top">
                  <span className="service-number">0{index + 1}</span>
                  <Database className="card-tech-icon" size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-specs">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="spec-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Galería */}
      <section className="cyber-projects-section">
        <div className="container">
          <div className="section-header-cyber">
            <h2 className="title-cyan-glow">Galería de Obras Destacadas</h2>
            <p className="subtitle-glow">Proyectos ejecutados con éxito bajo estándares internacionales de seguridad.</p>
          </div>

          <div className="cyber-projects-grid">
            {projectsData.slice(0, 6).map((project) => (
              <div className="cyber-project-card" key={project.id}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="project-cyber-overlay">
                    <span className="project-cyber-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-cyber-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Scoped */}
      <footer className="cyber-footer">
        <div className="container">
          <div className="footer-flex">
            <p>&copy; {new Date().getFullYear()} Ciscontrol, C.A. Todos los derechos reservados.</p>
            <div className="terminal-status">
              <Terminal size={14} className="terminal-status-icon" /> STATUS: OPERATIVIDAD NOMINAL [OK]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Proposal1;
