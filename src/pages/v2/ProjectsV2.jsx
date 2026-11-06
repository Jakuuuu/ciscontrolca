import React, { useState } from 'react';
import { projectsDetailedData } from '../../data/projectsDetailedData';
import { clientsData, timelineData } from '../../data/projectsData';
import { Building, MapPin, Calendar, SlidersHorizontal, HeartHandshake } from 'lucide-react';
import PageHero from '../../components/PageHero';
import './ProjectsV2.css';

const categories = [
  { id: 'all', label: 'TODOS LOS SECTORES' },
  { id: 'electricidad', label: 'ELECTRICIDAD' },
  { id: 'automatizacion', label: 'AUTOMATIZACIÓN' },
  { id: 'ddce', label: 'DDCE' },
  { id: 'corrosion', label: 'CORROSIÓN' },
  { id: 'ftth', label: 'FIBRA ÓPTICA' }
];

const countFor = (id) =>
  id === 'all'
    ? projectsDetailedData.length
    : projectsDetailedData.filter((p) => p.category === id).length;

const pad = (n) => String(n).padStart(2, '0');

const ProjectsV2 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsDetailedData
    : projectsDetailedData.filter(p => p.category === activeCategory);

  return (
    <div className="pj-page">
      <PageHero
        kicker="Portafolio"
        title="Estos son algunos de"
        titleAccent="nuestros proyectos"
        subtitle="Soluciones de ingeniería de alto impacto ejecutadas bajo los más rigurosos estándares internacionales de calidad y seguridad."
        className="pj-hero"
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Proyectos' }]}
        image={{
          src: '/Media/hero/06-ddce-plataforma.jpg',
          alt: 'Plataforma petrolera costa afuera con sistema de protección DDCE',
          position: 'center 70%',
        }}
      />

      {/* Filtrado + grilla de proyectos */}
      <section className="bx-section bx-section--light pj-projects">
        <div className="bx-container">
          <div className="pj-filter bx-grid-dark" role="group" aria-labelledby="pj-filter-label">
            <span className="bx-ticks bx-ticks--top pj-filter-ticks" aria-hidden="true" />
            <p className="pj-filter-label" id="pj-filter-label">
              <SlidersHorizontal size={15} aria-hidden="true" />
              <span>FILTRAR</span>
            </p>
            <div className="pj-filter-list">
              {categories.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`pj-filter-btn ${active ? 'is-active' : ''}`}
                    aria-pressed={active}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <i aria-hidden="true" />
                    <span className="pj-filter-text">{cat.label}</span>
                    <span className="pj-filter-count" aria-hidden="true">{pad(countFor(cat.id))}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="pj-grid">
            {filteredProjects.map((project, index) => (
              <li
                className="pj-item bx-rise"
                key={`${activeCategory}-${project.id}`}
                style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
              >
                <article className="bx-card bx-card--light bx-card--hover bx-card--accent pj-card">
                  <figure className="bx-frame bx-frame--shade pj-card-frame">
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                    <span className="bx-ticks bx-ticks--top" aria-hidden="true" />
                    <span className="bx-tag pj-card-tag"><i aria-hidden="true" />{project.tag}</span>
                    <span className="bx-num pj-card-num" aria-hidden="true">{pad(index + 1)}</span>
                  </figure>

                  <div className="pj-card-body">
                    <h3 className="bx-card-title pj-card-title">{project.title}</h3>

                    <ul className="pj-meta">
                      <li>
                        <Building size={14} aria-hidden="true" />
                        <span>{project.client}</span>
                      </li>
                      <li>
                        <MapPin size={14} aria-hidden="true" />
                        <span>{project.location}</span>
                      </li>
                      <li>
                        <Calendar size={14} aria-hidden="true" />
                        <span>{project.year}</span>
                      </li>
                    </ul>

                    <p className="bx-card-text pj-card-text">{project.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clientes de Alta Autoridad */}
      <section className="bx-section bx-section--dark bx-grid-fade pj-clients">
        <div className="bx-container">
          <div className="bx-head bx-head--center">
            <p className="bx-kicker">Clientes</p>
            <h2 className="bx-title">Han Confiado <span className="bx-title-accent">en Nosotros</span></h2>
          </div>
          <ul className="pj-clients-grid">
            {clientsData.map((client, index) => (
              <li className="bx-card bx-card--hover pj-client" key={index}>
                <span className="bx-card-icon pj-client-icon" aria-hidden="true">
                  <HeartHandshake size={18} />
                </span>
                <span className="pj-client-name">{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trayectoria Timeline */}
      <section className="bx-section bx-section--white pj-timeline">
        <div className="bx-container">
          <div className="bx-head">
            <p className="bx-kicker">Trayectoria</p>
            <h2 className="bx-title">Nuestra Trayectoria <span className="bx-title-accent">Histórica</span></h2>
          </div>
          <ol className="pj-timeline-list">
            {timelineData.map((item, index) => (
              <li className="pj-timeline-item" key={index}>
                <span className="pj-timeline-node" aria-hidden="true" />
                <div className="bx-card bx-card--hover bx-card--accent pj-timeline-card">
                  <span className="bx-num" aria-hidden="true">{pad(index + 1)}</span>
                  <p className="pj-timeline-year">{item.year}</p>
                  <h3 className="bx-card-title">{item.subtitle}</h3>
                  <p className="bx-card-text">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ProjectsV2;
