import React from 'react';
import { servicesData } from '../../data/servicesData';
import { projectsData, timelineData, clientsData } from '../../data/projectsData';
import { Terminal, Shield, Hammer, HardHat, ShieldCheck } from 'lucide-react';
import './Proposal3.css';

const Proposal3 = () => {
  return (
    <div className="theme-brutalist">
      {/* Blueprint Header */}
      <header className="brutalist-header">
        <div className="container brutalist-header-container">
          <div className="brutalist-logo">
            <span className="terminal-cursor">&gt;_</span> CISCONTROL_CA
          </div>
          <nav className="brutalist-nav">
            <span className="b-active">SYS_HOME</span>
            <span>SYS_SERVICES</span>
            <span>SYS_PROJECTS</span>
            <span className="btn-brutalist-nav">RUN_CONTACT</span>
          </nav>
        </div>
      </header>

      {/* Hero technical schematic block */}
      <section className="brutalist-hero">
        <div className="container brutalist-hero-container">
          <div className="brutalist-schematic-bg"></div>
          <div className="hero-technical-content">
            <span className="terminal-tag">[ STATUS: ACTIVE // DEPLOYED ]</span>
            <h1 className="brutalist-title">
              TRAYECTORIA SÓLIDA<br />
              <span className="text-orange">MISIÓN RENOVADA</span>
            </h1>
            <p className="brutalist-subtitle">
              Sistemas de automatización, calidad eléctrica, despliegue FTTH y deionizadores DDCE de alta criticidad en campo. Sin placeholders. Ingeniería tridimensional y ejecución impecable.
            </p>
            <div className="brutalist-actions">
              <a href="#matrix" className="btn-brutalist-primary">LOAD_SERVICES</a>
              <a href="#timeline" className="btn-brutalist-secondary">READ_TIMELINE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Technical Matrix */}
      <section id="matrix" className="brutalist-bento-section">
        <div className="container">
          <div className="bento-header-grid">
            <div>
              <span className="terminal-prompt">$ run ciscontrol --show-catalog</span>
              <h2 className="bento-main-title">Matriz de Servicios de Ingeniería</h2>
            </div>
            <p className="bento-intro-text">
              Sistemas operativos de alta resistencia e instrumentación industrial precisa. Inspección de infraestructura bajo los estándares más estrictos del planeta.
            </p>
          </div>

          <div className="bento-matrix-grid">
            {servicesData.map((service, index) => (
              <div className="bento-tech-card" key={service.id}>
                <div className="card-tech-header">
                  <span className="tech-code">ID-0{index + 1}</span>
                  <span className="tech-tag">SPEC_REAL</span>
                </div>
                <div className="card-tech-body">
                  <h3>{service.title}</h3>
                  <p className="tech-desc">{service.desc}</p>
                  
                  <div className="tech-specs-table">
                    {service.features.map((feature, i) => (
                      <div className="tech-spec-row" key={i}>
                        <span className="spec-label">Item_0{i + 1}</span>
                        <span className="spec-value">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-tech-footer">
                  <span className="footer-status-indicator"></span>
                  <span>OPERATIVIDAD NOMINAL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monospace Timeline */}
      <section id="timeline" className="brutalist-timeline-section">
        <div className="container">
          <span className="terminal-prompt center">$ cat trayectoria_historia.log</span>
          <h2 className="bento-main-title center">Cronograma de Operaciones</h2>
          
          <div className="brutalist-timeline-flow">
            {timelineData.map((item, index) => (
              <div className="brutalist-timeline-row" key={index}>
                <div className="brutalist-timeline-year">
                  <span>{item.year}</span>
                </div>
                <div className="brutalist-timeline-content">
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Footer */}
      <footer className="brutalist-footer">
        <div className="container brutalist-footer-flex">
          <div className="footer-status-box">
            <span className="blink-light"></span>
            <span>SYSTEMS_OPERATIONAL // SECURE</span>
          </div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} CISCONTROL_CA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Proposal3;
