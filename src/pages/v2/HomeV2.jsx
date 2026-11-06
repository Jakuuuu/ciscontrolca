import React from 'react';
import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import CapacidadesBento from '../../components/CapacidadesBento';
import HeroHome from '../../components/HeroHome';
import { heroServices, heroSlides } from '../../data/heroSlides';
import './HomeV2.css';

const HomeV2 = () => {
  const { alliances } = homeData;
  // Foto del brochure para la banda de proyectos (subestación, Refinería El Chaure)
  const featured = heroSlides[1];

  return (
    <div className="home-page-v2">
      {/* Hero: panel de fotos del brochure + tira en movimiento (servicios en orden) */}
      <HeroHome />

      {/* Matriz Bento Grid de Capacidades */}
      <CapacidadesBento />

      {/* Banda navy "Innovación en Infraestructura": retícula + foto enmarcada */}
      <section className="hm-innov bx-section bx-section--dark bx-grid-fade bx-hairline-top" aria-labelledby="hm-innov-title">
        <div className="bx-container hm-innov-inner">
          <div className="hm-innov-copy reveal-on-scroll reveal-up">
            <p className="bx-kicker">PROYECTOS DESTACADOS</p>
            <h2 id="hm-innov-title" className="bx-title hm-innov-title">
              Innovación en
              <span className="bx-title-accent bx-title-accent--block">Infraestructura</span>
            </h2>
            <ul className="hm-innov-tags" aria-label="Servicios">
              {heroServices.map((s, i) => (
                <li key={s.id}>
                  <span className="bx-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="bx-tag"><i></i>{s.label}</span>
                </li>
              ))}
            </ul>
            <div className="bx-actions">
              <Link to="/proyectos" className="bx-btn bx-btn-primary">Ver Proyectos Destacados</Link>
            </div>
          </div>

          <div className="hm-innov-media reveal-on-scroll reveal-scale">
            <div className="bx-frame-wrap">
              <div className="bx-frame-offset" aria-hidden="true"></div>
              <figure className="bx-frame bx-frame--shade hm-innov-frame">
                <img src={featured.src} alt={featured.caption} width={featured.width} height={featured.height} loading="lazy" />
                <span className="bx-ticks bx-ticks--top" aria-hidden="true"></span>
                <figcaption className="bx-frame-caption" aria-hidden="true">{featured.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Alianzas Estratégicas: fichas enmarcadas estilo plano técnico */}
      <section className="hm-alianzas bx-section bx-section--light" aria-labelledby="hm-alianzas-title">
        <div className="bx-container">
          <div className="bx-head bx-head--center hm-alianzas-head">
            <p className="bx-kicker">ALIANZAS</p>
            <h2 id="hm-alianzas-title" className="bx-title">
              Nuestras Alianzas <span className="bx-title-accent">Estratégicas</span>
            </h2>
          </div>
          <ul className="hm-alianzas-grid">
            {alliances.map((alliance, idx) => (
              <li className="hm-alliance bx-card bx-card--hover bx-card--accent" key={alliance.name}>
                <span className="bx-ticks bx-ticks--ink" aria-hidden="true"></span>
                <span className="bx-num hm-alliance-num" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                <span className="hm-alliance-name">{alliance.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
