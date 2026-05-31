import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import CapacidadesBento from '../../components/CapacidadesBento';
import './HomeV2.css';

const HomeV2 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { hero, alliances } = homeData;

  return (
    <div className="home-page-v2">
      {/* Hero Section con Video original e Impacto Blanco/Azul */}
      <section className="hero-section-v2">
        <div className="hero-bg-v2">
          <div className="hero-overlay-v2"></div>
          <video
            className={`ref-hero-video-v2 ${videoLoaded ? 'loaded' : ''}`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        </div>
        
        <div className="container hero-content-v2">
          <span className="ref-kicker-v2">INGENIERÍA E INFRAESTRUCTURA INDUSTRIAL</span>
          <h1 className="hero-title-v2">
            {hero.titleLine1}<br />
            <span className="text-blue-accent-v2">{hero.titleLine2}</span>
          </h1>
          <p className="hero-subtitle-v2">
            {hero.subtitle}
          </p>
          <div className="hero-actions-v2">
            <Link to="/v2/servicios" className="ref-btn-primary-v2">{hero.ctaText}</Link>
            <Link to="/v2/proyectos" className="ref-btn-outline-v2">Ver Proyectos</Link>
          </div>
        </div>
      </section>

      {/* Matriz Bento Grid de Capacidades */}
      <CapacidadesBento />

      {/* Parallax Divider */}
      <section className="parallax-divider-v2">
        <div className="parallax-bg-img-v2"></div>
        <div className="parallax-divider-overlay-v2"></div>
        <div className="container parallax-content-v2 reveal-on-scroll reveal-scale">
          <h2 className="title align-center">Innovación en Infraestructura</h2>
          <Link to="/v2/proyectos" className="ref-btn-primary-v2">Ver Proyectos Destacados</Link>
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
