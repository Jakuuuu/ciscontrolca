import React from 'react';
import { servicesData } from '../../data/servicesData';
import { CheckCircle2 } from 'lucide-react';
import './ServicesV2.css';

const ServicesV2 = () => {
  return (
    <div className="services-page-v2">
      <section className="services-section-v2">
        <div className="container">
          <div className="ref-section-header-v2">
            <span className="ref-section-tag-v2">NUESTROS SERVICIOS</span>
            <h2 className="ref-section-title-v2">Ingeniería e Infraestructura Especializada</h2>
            <p className="ref-section-desc-v2">Ingeniería transversal, integral y de alta precisión para operaciones críticas continuas.</p>
          </div>

          <div className="ref-services-grid-v2">
            {servicesData.map((service, index) => (
              <div className="ref-service-card-v2" key={service.id}>
                <div className="ref-service-badge-v2">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="ref-service-bullets-v2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={16} className="bullet-icon-v2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesV2;
