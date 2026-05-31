# Propuesta 3: Brutalist Premium Engineering (Ingeniería Pura)

Esta propuesta rompe los esquemas corporativos tradicionales y adopta un estilo de diseño de "plano técnico" o "esquema de ingeniería" (brutalismo web de alta gama). Se caracteriza por grillas explícitas con bordes delgados de 1px de color acero, fondos grises oscuros y acentos de color naranja o ámbar industrial. Transmite precisión técnica, solidez mecánica e instrumentación precisa sin filtros.

---

## 🎨 Paleta de Colores y Estilos (Variables CSS)

Copia y pega estas variables en tu `:root` de `src/index.css` si decides adoptar este estilo:

```css
:root {
  /* Fondo Industrial Acero Oscuro */
  --color-background: #121214; 
  --color-surface: #1E1E22;
  --color-surface-hover: #26262C;
  
  /* Acentos de Alta Visibilidad de Seguridad Industrial */
  --color-primary: #FF7A00;       /* Naranja Neón / Industrial Amber */
  --color-secondary: #E56A00;     /* Naranja Oscuro */
  --color-accent: #3A3D4A;        /* Gris Acero */
  --color-accent-hover: #4E5162;  /* Gris Acero Claro */
  --color-tertiary: #00FF66;      /* Verde Terminal de Diagnóstico */
  
  /* Textos */
  --color-text-main: #FFFFFF;     /* Blanco Puro */
  --color-text-muted: #A0A0AA;    /* Gris Zinc */
  
  /* Líneas de Grilla Rígida (Sustituye a las Sombras) */
  --border-tech: 1px solid #2A2A30;
  --border-tech-hover: 1px solid #FF7A00;
  
  /* Bordes Rectos Estilo Ingeniería */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
}
```

---

## 🌟 Mapeo de Datos Reales (Vercel Production)

Hemos consolidado todo tu contenido de producción en el módulo centralizado [servicesData.js](file:///c:/Users/danie/Dropbox/My%20PC%20%28DESKTOP-VFCBPUJ%29/Documents/Antigravity%20sources/Pagina%20definitiva%20Alberto/src/data/servicesData.js). Así es como este componente Bento técnico renderiza de forma limpia y directa tu catálogo real bajo esta estética:

### Componente Bento Técnico Dinámico (`BentoTechnical.jsx` con Ámbar Industrial)

```jsx
import React from 'react';
import { servicesData } from '../data/servicesData';
import './BentoTechnical.css';

const BentoTechnical = () => {
  return (
    <section className="bento-technical-section">
      <div className="container">
        <div className="bento-header-grid">
          <div>
            <span className="terminal-prompt">$ run ciscontrol --show-catalog</span>
            <h2 className="bento-main-title">Matriz de Servicios de Ingeniería</h2>
          </div>
          <p className="bento-intro-text">
            Sistemas operativos de alta resistencia e instrumentación industrial precisa. Inspección de infraestructura bajo los estándares más estrictos del planeta.
          </p>
        </div>

        <div className="bento-matrix-grid">
          {servicesData.map((service, index) => (
            <div className="bento-tech-card" key={service.id}>
              <div className="card-tech-header">
                <span className="tech-code">ID-0{index + 1}</span>
                <span className="tech-tag">CATA-REAL</span>
              </div>
              <div className="card-tech-body">
                <h3>{service.title}</h3>
                <p className="tech-desc">{service.desc}</p>
                
                <div className="tech-specs-table">
                  {service.features.map((feature, i) => (
                    <div className="tech-spec-row" key={i}>
                      <span className="spec-label">Opción 0{i + 1}</span>
                      <span className="spec-value">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-tech-footer">
                <span className="footer-status-indicator"></span>
                <span>OPERATIVIDAD NOMINAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoTechnical;
```
