import React from 'react';
import './Services.css';

const services = [
  {
    id: 'electricidad',
    title: 'Electricidad',
    image: '/Media/service_electricity.png',
    desc: 'Energizamos la industria con soluciones seguras y de alto rendimiento. Realizamos diseños de equipos de baja y media potencia y respaldados por nuestra alianza con Diselectar realizamos la fabricación de equipos.',
    features: ['Centro de control de motores', 'Sub estaciones de media y baja tensión', 'Switchgear', 'Transferencias automáticas', 'Centro de distribución de potencia']
  },
  {
    id: 'ddce',
    title: 'Deionizador de cargas electromagnéticas (DDCE)',
    image: '/Media/media_ddce_device.png',
    desc: 'Hemos integrado la tecnología DINNTECO para la protección contra descargas atmosféricas que consiste en la deionización del área que protege evitando la descarga de rayos.',
    features: ['Torres de comunicación y transmisión', 'Tanques de almacenamiento de crudo', 'Radares', 'Refinerías', 'Aeropuertos']
  },
  {
    id: 'automatizacion',
    title: 'Automatización',
    image: '/Media/service_automation.png',
    desc: 'Optimizamos procesos para alcanzar la máxima eficiencia operativa. Nuestro equipo técnico cuenta con una profunda experiencia que abarca la ingeniería conceptual, básica y de detalle implementando sistemas Scada a la industria petrolera, realizamos mantenimiento y calibración en instrumentación de control.',
    features: ['Gestión de proyectos y Sistemas de control', 'Sistemas Scadas', 'Diseño ingeniería conceptual, básica y de detalle', 'Integración de PLC', 'Alarma contra incendios y control de emergencias']
  },
  {
    id: 'ftth',
    title: 'Despliegue FTTH',
    image: '/Media/fibra.png',
    desc: 'Contamos con una sólida trayectoria en el diseño, despliegue e instalación de redes de fibra óptica (FTTH) para servicios de internet.',
    features: ['Instalación de OLT', 'Diseño e ingeniería de despliegue de fibra óptica', 'Construcción de ODN', 'Acometidas a los hogares', 'Instalación de ONT']
  },
  {
    id: 'sprc',
    title: 'Sistema de prevención y remoción de corrosión (SPRC)',
    image: '/Media/corrosion.png',
    desc: 'Hemos incorporado un sistema de prevención y remoción de corrosión diseñado para optimizar la extracción y manejo de crudo, inhibiendo la corrosión, evitando la solidificación de parafina y evitando la formación de incrustaciones minerales.',
    features: ['Tubo de producción de petróleo', 'Protección de bombas BES/BCP', 'Entrada al separador', 'Tanques de agua para inyección de pozos', 'Entrada a intercambiador de calor, calderas y torres de enfriamiento']
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div className="services-header-unified">
            <h1 className="title text-white glow-title">Nuestros Servicios</h1>
            <p className="subtitle text-white">Ingeniería transversal, integral y precisa para operaciones ininterrumpidas.</p>
          </div>
          <div className="services-container">
            {services.map((service, index) => (
              <div 
                className={`service-row ${index % 2 !== 0 ? 'row-reverse reveal-right' : 'reveal-left'} reveal-on-scroll`} 
                key={service.id}
              >
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" />
                </div>
                <div className="service-details">
                  <h2 className="title">{service.title}</h2>
                  <p className="service-desc">{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <span className="bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
