import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Bloque Introductorio */}
      <section className="section intro-section">
        <div className="container intro-container">
          <div className="intro-section-split">
            <div className="intro-text-block reveal-on-scroll reveal-up">
              <h2 className="title text-white">Integración<br/><span className="intro-accent">Multidisciplinaria</span></h2>
              <p className="text-light-blue intro-paragraph">
                Integramos un equipo multidisciplinario altamente capacitado para resolver los desafíos técnicos más complejos de la industria. Fusionamos diversas ramas de la ingeniería y nos apoyamos en alianzas estratégicas sólidas para garantizar la seguridad, eficiencia y continuidad operativa de sus infraestructuras en <strong>CIS CONTROL, C.A.</strong> y <strong>Control Integral MM, C.A.</strong>
              </p>
              
              <ul className="intro-services-list dynamic-list">
                <li className="reveal-on-scroll reveal-up delay-1">
                  <span className="icon gold-accent">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                  </span>
                  Ingeniería y potencia eléctrica.
                </li>
                <li className="reveal-on-scroll reveal-up delay-2">
                  <span className="icon gold-accent">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </span>
                  Automatización e instrumentación industrial.
                </li>
                <li className="reveal-on-scroll reveal-up delay-3">
                  <span className="icon gold-accent">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
                  </span>
                  Despliegue de redes de fibra óptica (FTTH).
                </li>
                <li className="reveal-on-scroll reveal-up delay-4">
                  <span className="icon gold-accent">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </span>
                  Sistemas de protección atmosférica (DDCE) y anticorrosión (SPRC).
                </li>
              </ul>
            </div>
            
            <div className="bento-grid-container reveal-on-scroll reveal-up delay-2">
              <div className="bento-item main-img">
                <img src="/Media/nosotros_img1.jfif" alt="Ingenieros corporativos en trabajo de campo" />
                <div className="bento-overlay"></div>
              </div>
              <div className="bento-item top-right-img delay-3 reveal-on-scroll reveal-scale">
                <img src="/Media/nosotros_img2.png" alt="Técnicos trabajando en tableros eléctricos" />
                <div className="bento-overlay"></div>
              </div>
              <div className="bento-item bottom-right-img delay-4 reveal-on-scroll reveal-scale">
                <img src="/Media/nosotros_img3.png" alt="Instalaciones industriales modernas" />
                <div className="bento-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identidad Institucional */}
      <section className="section identity-section bg-light">
        <div className="container">
          <h2 className="title align-center">Nuestra Identidad</h2>
          <div className="identity-cards">
            <div className="identity-card reveal-on-scroll reveal-up">
              <div className="card-header">
                <h3>Misión</h3>
              </div>
              <div className="card-body">
                <p>
                  Proveer soluciones integrales de ingeniería, diseño y ejecución de proyectos en electricidad, automatización, telecomunicaciones y protección atmosférica. Resolvemos desafíos técnicos aplicando tecnología de vanguardia para garantizar la seguridad, eficiencia y continuidad operativa de nuestros clientes a nivel nacional.
                </p>
              </div>
            </div>
            
            <div className="identity-card reveal-on-scroll reveal-up delay-1">
              <div className="card-header">
                <h3>Visión</h3>
              </div>
              <div className="card-body">
                <p>
                  Consolidarnos como líderes y referentes estratégicos en el sector de la ingeniería y tecnología del país. Aspiramos a destacar por nuestra excelencia, innovación constante y sólidas alianzas, impulsando industrias más seguras, eficientes y conectadas con el futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="section values-section">
        <div className="container">
          <h2 className="title align-center">Nuestros Valores Fundamentales</h2>
          <div className="values-grid">
            <div className="value-item reveal-on-scroll reveal-scale delay-1">
              <div className="value-icon">1</div>
              <h4>Trayectoria y Respaldo</h4>
              <p>Construimos nuestro presente sobre una base sólida de conocimientos y proyectos ejecutados con éxito.</p>
            </div>
            <div className="value-item reveal-on-scroll reveal-scale delay-2">
              <div className="value-icon">2</div>
              <h4>Innovación Tecnológica</h4>
              <p>Buscamos constantemente la integración de tecnologías de última generación, como los sistemas de DDCE y SPRC, para ofrecer soluciones superiores.</p>
            </div>
            <div className="value-item reveal-on-scroll reveal-scale delay-3">
              <div className="value-icon">3</div>
              <h4>Calidad y Seguridad</h4>
              <p>Nos apegamos a los más estrictos estándares técnicos en cada diseño, instalación y puesta en marcha.</p>
            </div>
            <div className="value-item reveal-on-scroll reveal-scale delay-4">
              <div className="value-icon">4</div>
              <h4>Alianzas Estratégicas</h4>
              <p>Creemos en la sinergia con empresas líderes para multiplicar el valor que entregamos a nuestros clientes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
