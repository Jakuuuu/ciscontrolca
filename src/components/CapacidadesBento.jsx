import React from 'react';
import { Link } from 'react-router-dom';
import { heroServices } from '../data/heroSlides';
import './CapacidadesBento.css';

const capacidades = [
  {
    id: 'electricidad',
    title: 'Electricidad',
    desc: 'Ingeniería eléctrica de alta y media tensión.',
    image: '/Media/service_electricity.png',
    linkText: 'EXPLORAR DETALLES',
    isWide: true
  },
  {
    id: 'automatizacion',
    title: 'Automatización Industrial',
    desc: 'Sistemas PLC, SCADA y optimización de procesos mediante tecnología de vanguardia.',
    image: '/Media/service_automation.png',
    linkText: 'SABER MÁS',
    isWide: false
  },
  {
    id: 'ddce',
    title: 'DDCE',
    desc: 'Protección avanzada de infraestructuras críticas.',
    image: '/Media/media_ddce_refinery.png',
    linkText: 'SABER MÁS',
    isWide: false
  },
  {
    id: 'sprc',
    title: 'Sistemas de Corrosión',
    desc: 'Protección galvánica y monitoreo de integridad.',
    image: '/Media/corrosion.png',
    linkText: 'SABER MÁS',
    isWide: false
  },
  {
    id: 'ftth',
    title: 'Red FTTH',
    desc: 'Infraestructura de red robusta para entornos industriales.',
    image: '/Media/fibra.png',
    linkText: 'SABER MÁS',
    isWide: false
  }
];

const pad = (n) => String(n).padStart(2, '0');
// Etiqueta corta del servicio, la misma que usa la tira de fotos del hero (mismo orden).
const tagFor = (i) => heroServices[i]?.label ?? '';

const CapacidadesBento = () => {
  return (
    <section className="cap-bento-section" aria-labelledby="cap-bento-title">
      {/* Banda superior en navy: continúa el hero (retícula + kicker dorado) */}
      <div className="cap-bento-top bx-grid-dark bx-grid-fade">
        <div className="bx-container cap-bento-header">
          <div className="cap-bento-title-block">
            <p className="bx-kicker">NUESTRAS CAPACIDADES</p>
            <h2 id="cap-bento-title" className="bx-title cap-title">
              Soluciones de
              <span className="bx-title-accent bx-title-accent--block">Ingeniería Crítica</span>
            </h2>
          </div>
          <div className="cap-link-block">
            <Link to="/servicios" className="bx-btn bx-btn-outline-light cap-view-all-link">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </div>

      {/* Bento Grid: las tarjetas montan sobre el borde navy/claro */}
      <div className="cap-bento-body bx-grid-light">
        <div className="bx-container">
          <ul className="cap-bento-grid">
            {capacidades.map((cap, i) => (
              <li
                className={`cap-card bx-card bx-card--light bx-card--hover bx-card--accent${cap.isWide ? ' cap-card-wide' : ''}`}
                key={cap.id}
              >
                <figure className="cap-card-media bx-frame bx-frame--shade">
                  <img src={cap.image} alt={cap.title} loading="lazy" />
                  <span className="bx-ticks bx-ticks--top" aria-hidden="true"></span>
                  <span className="cap-card-tag" aria-hidden="true">
                    <span className="cap-card-num">{pad(i + 1)}</span>
                    <span className="bx-tag bx-tag--gold"><i></i>{tagFor(i)}</span>
                  </span>
                </figure>
                <div className="cap-card-content">
                  <h3 className="bx-card-title cap-card-title">{cap.title}</h3>
                  <p className="bx-card-text cap-card-text">{cap.desc}</p>
                  <Link to="/servicios" className="cap-card-link">
                    {cap.linkText}
                    <span className="bx-sr"> sobre {cap.title}</span>
                    <span className="cap-card-arrow" aria-hidden="true"></span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CapacidadesBento;
