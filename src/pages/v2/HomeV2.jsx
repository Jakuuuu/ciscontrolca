import React from 'react';
import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import CapacidadesBento from '../../components/CapacidadesBento';
import HeroHome from '../../components/HeroHome';
import './HomeV2.css';

const HomeV2 = () => {
  const { alliances } = homeData;

  return (
    <div className="home-page-v2">
      {/* Hero: panel de fotos del brochure + tira en movimiento (servicios en orden) */}
      <HeroHome />

      {/* Matriz Bento Grid de Capacidades */}
      <CapacidadesBento />

      {/* Parallax Divider */}
      <section className="parallax-divider-v2">
        <div className="parallax-bg-img-v2"></div>
        <div className="parallax-divider-overlay-v2"></div>
        <div className="container parallax-content-v2 reveal-on-scroll reveal-scale">
          <h2 className="title align-center">Innovación en Infraestructura</h2>
          <Link to="/proyectos" className="ref-btn-primary-v2">Ver Proyectos Destacados</Link>
        </div>
      </section>

      {/* Alianzas Estratégicas - Logo grid pulido */}
      <section className="alianzas-section-v2">
        <div className="container">
          <h2 className="alianzas-title-v2">Nuestras Alianzas Estratégicas</h2>
          <div className="alianzas-grid-v2">
            {alliances.map((alliance, idx) => (
              <div className="alliance-card-v2" key={idx}>
                <span className="alliance-text-v2">{alliance.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
