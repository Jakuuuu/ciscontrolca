import React, { useRef } from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: 'La Vega (2.800 pts ópticos)', category: 'Fibra Óptica (FTTH) - JM TELECO', description: 'Diseño e instalación masiva de fibra óptica corporativa.', image: '/Media/fibra.png' },
  { id: 2, title: 'Plataforma E-KU-A2 PEMEX', category: 'Protección DDCE - Sector Petrolero', description: 'Sustitución de 20 pararrayos Franklin por 2 sistemas DDCE-100.', image: '/Media/media_ddce_pemex.png' },
  { id: 3, title: 'Lomas del Ávila (3.472 pts)', category: 'Fibra Óptica (FTTH) - CANTV', description: 'Despliegues GPON y última milla en urbanismos complejos.', image: '/Media/fibra.png' },
  { id: 4, title: 'Radares en España y USA', category: 'Protección - Telecomunicaciones', description: 'Protección en más de 30 radares para aeropuertos españoles.', image: '/Media/media_ddce_spain.png' },
  { id: 5, title: 'Planta de Ácido Nítrico CAVIM', category: 'Automatización Industrial', description: 'Instrumentación avanzada y automatización de procesos críticos.', image: '/Media/automatizacion.png' },
  { id: 6, title: 'Refinería El Chaure Fase II', category: 'Electricidad - PDVSA', description: 'Desarrollo de Power House y Estación de Agua Salada.', image: '/Media/refineria_chaure_fase2.png' },
  { id: 7, title: 'Subestaciones de Alta Tensión', category: 'Protección DDCE - Electricidad', description: 'Sistemas instalados en ENDESA (Barcelona) y 138Kv Bávaro.', image: '/Media/tableros_subestacion.png' },
  { id: 8, title: 'Flotas Navieras y Radares', category: 'Mantenimiento Especializado', description: 'Sistemas de navegación en buques Atlantic Global Transport S.A.', image: '/Media/about_workspace.png' },
  { id: 9, title: 'Reservorio Agua Faisaliah', category: 'Protección Infraestructura', description: 'Cobertura atmosférica de vanguardia en Arabia Saudita.', image: '/Media/media_ddce_towers.png' }
];

const clients = [
  "PDVSA",
  "CANTV",
  "CAVIM",
  "CORPOELEC",
  "Seguros Horizonte C.A.",
  "MINEC",
  "ATLANTIC GLOBAL TRANSPORT S.A.",
  "PEMEX"
];

const timeline = [
  { year: '2003-2005', subtitle: 'Inicios y Automatización', description: 'Consolidación en la instalación de Sistemas de Seguridad Electrónica e inicio de la automatización en la Planta de Ácido Nítrico de CAVIM.' },
  { year: '2006-2011', subtitle: 'Servicios Petroleros', description: 'Fuertes contratos de servicios profesionales en automatización industrial, calibración de instrumentos y migración de sistemas Scada para diversas filiales de PDVSA (Gas, Petróleo, INTEVEP).' },
  { year: '2023-2024', subtitle: 'Redes Masivas FTTH', description: 'Fuerte incursión en las telecomunicaciones, ejecutando redes FTTH masivas de miles de puntos ópticos para empresas como CANTV y JM Teleco.' },
  { year: '2025', subtitle: 'Expansión Marítima', description: 'Expansión de servicios hacia el mantenimiento especializado de sistemas de navegación marítima y radares de gran escala.' }
];

const Projects = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="projects-page">
      {/* Galería de Proyectos / Carrusel */}
      <section className="section bg-light" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <h1 className="title center mb-section animated-gallery-title fade-in-up">Galería de Obras Destacadas</h1>
          
          <div className="carousel-container">
            <button className="carousel-btn left" onClick={scrollLeft} aria-label="Desplazar a la izquierda">
              &lt;
            </button>
            <div className="projects-carousel" ref={carouselRef}>
              {projects.map((project, index) => (
                <div className="project-card-carousel reveal-on-scroll reveal-scale" style={{ animationDelay: `${(index % 3) * 0.1}s` }} key={project.id}>
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="project-overlay">
                      <span className="project-category">{project.category}</span>
                    </div>
                  </div>
                  <div className="project-card-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn right" onClick={scrollRight} aria-label="Desplazar a la derecha">
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Clientes de Alta Autoridad */}
      <section className="section">
        <div className="container">
          <h2 className="title align-center mb-section">Han Confiado en Nosotros</h2>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div className="client-card reveal-on-scroll reveal-up" style={{ animationDelay: `${index * 0.05}s` }} key={client}>
                <div className="client-name">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trayectoria / Timeline */}
      <section className="section bg-timeline-gray py-timeline">
        <div className="container">
          <h2 className="title align-center mb-section">Nuestra Trayectoria Histórica</h2>
          <div className="timeline-container horizontal">
            <div className="timeline-line reveal-on-scroll"></div>
            <div className="timeline-items">
              {timeline.map((item, index) => (
                <div className="timeline-item reveal-on-scroll reveal-up" style={{ animationDelay: `${index * 0.2 + 0.3}s` }} key={item.year}>
                  <div className="timeline-dot"></div>
                  <div className={`timeline-content ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                    <h3 className="timeline-year text-accent">{item.year}</h3>
                    <h4 className="timeline-subtitle">{item.subtitle}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
