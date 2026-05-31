# Propuesta 1: Cyber-Industrial (Cybertech & Glow)

Esta propuesta está inspirada en la estética tecnológica de la industria pesada y la automatización avanzada. Utiliza un entorno oscuro dominante con efectos de brillo (glow) en cian eléctrico y acentos en oro bronce para destacar la precisión de los sistemas de protección atmosférica y la potencia eléctrica.

---

## 🎨 Paleta de Colores y Estilos (Variables CSS)

Copia y pega estas variables en el `:root` de tu `src/index.css` si decides adoptar este estilo:

```css
:root {
  /* Fondo Oscuro Profundo del Espacio Cyber */
  --color-background: #060913; 
  --color-surface: #0E1326;
  --color-surface-hover: #161D3A;
  
  /* Tonos Principales de Luz */
  --color-primary: #00F2FE;       /* Cian Eléctrico */
  --color-accent: #00C6FF;        /* Azul Eléctrico */
  --color-accent-hover: #00A6D6;  /* Azul Eléctrico Oscuro */
  --color-tertiary: #E2B659;      /* Oro Bronce Metálico */
  
  /* Textos */
  --color-text-main: #F1F5F9;     /* Gris Platino muy claro */
  --color-text-muted: #8E9BB4;    /* Azul Slate suave */
  
  /* Efectos Especiales */
  --shadow-glow: 0 0 25px rgba(0, 242, 254, 0.35);
  --shadow-glow-gold: 0 0 20px rgba(226, 182, 89, 0.2);
  --glass-bg: rgba(14, 19, 38, 0.65);
  --glass-border: rgba(0, 242, 254, 0.15);
  --glass-blur: blur(20px);
}
```

---

## 🌟 Mapeo de Datos Reales (Vercel Production)

Hemos consolidado todo tu contenido de producción en el archivo [servicesData.js](file:///c:/Users/danie/Dropbox/My%20PC%20%28DESKTOP-VFCBPUJ%29/Documents/Antigravity%20sources/Pagina%20definitiva%20Alberto/src/data/servicesData.js) y [homeData.js](file:///c:/Users/danie/Dropbox/My%20PC%20%28DESKTOP-VFCBPUJ%29/Documents/Antigravity%20sources/Pagina%20definitiva%20Alberto/src/data/homeData.js). Así es como los componentes renderizan dinámicamente tu contenido real bajo esta propuesta:

### Componente de Servicios Dinámico (`Services.jsx` con Cybertech Estilo)

```jsx
import React from 'react';
import { servicesData } from '../data/servicesData';
import './ServicesCyber.css';

const ServicesCyber = () => {
  return (
    <div className="services-page-cyber">
      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div className="services-header-cyber">
            <span className="cyber-terminal-badge">INFRAESTRUCTURA DE ALTO RENDIMIENTO</span>
            <h1 className="title-cyan-glow">Ingeniería e Infraestructura Especializada</h1>
            <p className="subtitle-glow">Diseños rigurosos y ejecución transversal para garantizar la continuidad operativa nacional.</p>
          </div>
          
          <div className="services-container-cyber">
            {servicesData.map((service, index) => (
              <div 
                className={`service-card-cyber ${index % 2 !== 0 ? 'reverse-card' : ''} reveal-on-scroll`} 
                key={service.id}
              >
                <div className="cyber-image-container">
                  <img src={service.image} alt={service.title} className="cyber-service-img" />
                  <div className="glow-border-layer"></div>
                </div>
                <div className="cyber-service-info">
                  <span className="service-index">0{index + 1}</span>
                  <h2>{service.title}</h2>
                  <p className="service-paragraph">{service.desc}</p>
                  
                  <ul className="cyber-specs-list">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <span className="spec-indicator-dot"></span>
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

export default ServicesCyber;
```

---

## 💻 Componente Hero Premium con Contenido Real y Logo 3D

Consumiendo los textos exactos de [homeData.js](file:///c:/Users/danie/Dropbox/My%20PC%20%28DESKTOP-VFCBPUJ%29/Documents/Antigravity%20sources/Pagina%20definitiva%20Alberto/src/data/homeData.js), reemplazamos la columna estática de video por una presentación dinámica que expone el logotipo 3D interactivo e incluye partículas de red en CSS.

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { homeData } from '../data/homeData';
import Logo3D from './Logo3D';
import './HeroCyber.css';

const HeroCyber = () => {
  const { hero } = homeData;
  return (
    <section className="hero-cyber">
      {/* Fondo interactivo con rejilla CSS */}
      <div className="cyber-grid-overlay"></div>
      
      <div className="container hero-cyber-container">
        <div className="hero-text-block">
          <div className="tech-badge">TECNOLOGÍA & POTENCIA ELÉCTRICA</div>
          <h1 className="hero-title">
            {hero.titleLine1}<br />
            <span className="text-glow-cyan">{hero.titleLine2}</span>
          </h1>
          <p className="hero-subtitle">
            {hero.subtitle}
          </p>
          <div className="hero-actions">
            <Link to="/servicios" className="btn-glow-cyan">{hero.ctaText}</Link>
            <Link to="/contacto" className="btn-outline-gold">Agendar Reunión Técnica</Link>
          </div>
        </div>

        <div className="hero-logo-3d-wrapper">
          <Logo3D />
        </div>
      </div>
    </section>
  );
};

export default HeroCyber;
```
