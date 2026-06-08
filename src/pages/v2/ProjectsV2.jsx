import React, { useState } from 'react';
import { projectsDetailedData } from '../../data/projectsDetailedData';
import { clientsData, timelineData } from '../../data/projectsData';
import { Building, MapPin, Calendar, ExternalLink, SlidersHorizontal, HeartHandshake } from 'lucide-react';
import './ProjectsV2.css';

const categories = [
  { id: 'all', label: 'TODOS LOS SECTORES' },
  { id: 'electricidad', label: 'ELECTRICIDAD' },
  { id: 'ddce', label: 'DDCE' },
  { id: 'automatizacion', label: 'AUTOMATIZACIÓN' },
  { id: 'corrosion', label: 'CORROSIÓN' },
  { id: 'ftth', label: 'FTTH' }
];

const ProjectsV2 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsDetailedData 
    : projectsDetailedData.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page-v2">
      {/* Encabezado y Filtrado */}
      <section className="projects-section-v2">
        <div className="container">
          <div className="ref-section-header-v2">
            <h1 className="ref-section-title-v2">Estos son algunos de nuestros proyectos</h1>
            <p className="ref-section-desc-v2">
              Soluciones de ingeniería de alto impacto ejecutadas bajo los más rigurosos estándares internacionales de calidad y seguridad.
            </p>
          </div>

          {/* Barra de Filtros */}
          <div className="filter-bar-v2">
            <div className="filter-label-v2">
              <SlidersHorizontal size={16} className="filter-icon-v2" />
              <span>FILTRAR</span>
            </div>
            <div className="filter-buttons-v2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn-v2 ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grilla de Proyectos Premium Filtrados */}
          <div className="ref-projects-grid-v2">
            {filteredProjects.map((project) => (
              <div className="ref-project-card-v2" key={project.id}>
                <div className="ref-project-img-holder-v2">
                  <img src={project.image} alt={project.title} />
                  <span className="ref-project-cat-v2">{project.tag}</span>
                </div>
                <div className="ref-project-info-v2">
                  <div className="project-title-row-v2">
                    <h3>{project.title}</h3>
                    <ExternalLink size={16} className="project-link-icon-v2" />
                  </div>
                  
                  {/* Cuadrícula de Metadatos */}
                  <div className="project-meta-grid-v2">
                    <div className="meta-item-v2">
                      <Building size={14} className="meta-icon-v2" />
                      <span>{project.client}</span>
                    </div>
                    <div className="meta-item-v2">
                      <MapPin size={14} className="meta-icon-v2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="meta-item-v2">
                      <Calendar size={14} className="meta-icon-v2" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="project-desc-text-v2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes de Alta Autoridad */}
      <section className="projects-clients-section-v2">
        <div className="container">
          <h2 className="clients-title-v2">Han Confiado en Nosotros</h2>
          <div className="clients-grid-v2">
            {clientsData.map((client, index) => (
              <div className="client-card-v2" key={index}>
                <HeartHandshake className="client-icon-v2" size={18} />
                <span className="client-name-v2">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trayectoria Timeline */}
      <section className="projects-timeline-section-v2">
        <div className="container">
          <h2 className="timeline-title-v2">Nuestra Trayectoria Histórica</h2>
          <div className="timeline-grid-v2">
            {timelineData.map((item, index) => (
              <div className="timeline-card-v2" key={index}>
                <span className="timeline-year-v2">{item.year}</span>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsV2;
