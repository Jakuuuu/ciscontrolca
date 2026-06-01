import React from 'react';
import { Link } from 'react-router-dom';
import './CapacidadesBento.css';

const capacidades = [
  {
    id: 'electricidad',
    title: 'Electricidad',
    desc: 'Ingeniería eléctrica de alta y media tensión.',
    image: '/Media/service_electricity.png',
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
    id: 'ftth',
    title: 'Red FTTH',
    desc: 'Infraestructura de red robusta para entornos industriales.',
    image: '/Media/fibra.png',
    linkText: 'SABER MÁS',
    isWide: false
  },
  {
    id: 'automatizacion',
    title: 'Automatización Industrial',
    desc: 'Sistemas PLC, SCADA y optimización de procesos mediante tecnología de vanguardia.',
    image: '/Media/service_automation.png',
    linkText: 'EXPLORAR DETALLES',
    isWide: true
  },
  {
    id: 'sprc',
    title: 'Sistemas de Corrosión',
    desc: 'Protección galvánica y monitoreo de integridad.',
    image: '/Media/corrosion.png',
    linkText: 'SABER MÁS',
    isWide: false
  }
];

const CapacidadesBento = () => {
  return (
    <section className="cap-bento-section">
      <div className="container">
        
        {/* Encabezado de la Sección */}
        <div className="cap-bento-header">
          <div className="cap-bento-title-block">
            <span className="cap-kicker">NUESTRAS CAPACIDADES</span>
            <h2 className="cap-title">Soluciones de<br />Ingeniería Crítica</h2>
          </div>
          <div className="cap-link-block">
            <Link to="/servicios" className="cap-view-all-link">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="cap-bento-grid">
          {capacidades.map((cap) => (
            <div 
              className={`cap-card ${cap.isWide ? 'cap-card-wide' : ''}`} 
              key={cap.id}
            >
              <div className="cap-card-img-holder">
                <img src={cap.image} alt={cap.title} loading="lazy" />
              </div>
              <div className="cap-card-content">
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <Link to="/servicios" className="cap-card-link">
                  {cap.linkText} <span className="line-suffix">──</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapacidadesBento;
