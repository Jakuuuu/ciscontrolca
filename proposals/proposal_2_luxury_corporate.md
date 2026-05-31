# Propuesta 2: Luxury Clean Corporate (Minimalismo de Lujo)

Esta propuesta está diseñada con un enfoque corporativo de altísimo standing, emulando la identidad visual de grandes firmas multinacionales de consultoría e ingeniería civil y petrolera. Prioriza la máxima claridad institucional, el espaciado generoso (whitespace) y una paleta cromática sobria de alto contraste con toques dorados satinados.

---

## 🎨 Paleta de Colores y Estilos (Variables CSS)

Copia y pega estas variables en tu `:root` de `src/index.css` si decides adoptar este estilo:

```css
:root {
  /* Fondos Suaves y Platino */
  --color-background: #F8FAFC; 
  --color-surface: #FFFFFF;
  --color-surface-hover: #F1F5F9;
  
  /* Azul Marino Institucional y Acentos */
  --color-primary: #0F172A;       /* Azul Slate Profundo / Casi Negro */
  --color-secondary: #1E293B;     /* Slate Corporativo */
  --color-accent: #0284C7;        /* Azul Cielo Corporativo */
  --color-accent-hover: #0369A1;  /* Azul Cielo Oscuro */
  --color-tertiary: #B29146;      /* Oro Satinado Suave (Champagne) */
  
  /* Textos */
  --color-text-main: #1E293B;     /* Slate Principal */
  --color-text-muted: #64748B;    /* Slate Atenuado */
  
  /* Radios de Borde Redondeado y Suave */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Sombras de Alta Fidelidad (Casi imperceptibles) */
  --shadow-sm: 0 4px 6px -1px rgba(15, 23, 42, 0.03), 0 2px 4px -2px rgba(15, 23, 42, 0.03);
  --shadow-md: 0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -4px rgba(15, 23, 42, 0.05);
  --shadow-lg: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.08);
}
```

---

## 🌟 Mapeo de Datos Reales (Vercel Production)

Hemos consolidado todo tu contenido real en [projectsData.js](file:///c:/Users/danie/Dropbox/My%20PC%20%28DESKTOP-VFCBPUJ%29/Documents/Antigravity%20sources/Pagina%20definitiva%20Alberto/src/data/projectsData.js). A continuación se muestra cómo este componente de línea de tiempo renderiza tu trayectoria real de forma impecable e interactiva.

### Componente de Trayectoria Dinámico (`TimelineCorporate.jsx` con Oro Satinado)

```jsx
import React from 'react';
import { timelineData } from '../data/projectsData';
import './TimelineCorporate.css';

const TimelineCorporate = () => {
  return (
    <section className="timeline-corporate-section">
      <div className="container">
        <span className="section-subtitle-gold">NUESTRO LEGADO Y RESPALDO</span>
        <h2 className="timeline-section-title">Nuestra Trayectoria Histórica</h2>
        
        <div className="timeline-horizontal-flow">
          <div className="timeline-connecting-bar"></div>
          
          <div className="timeline-items-wrapper">
            {timelineData.map((item, index) => (
              <div className="timeline-card-item" key={index}>
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-card-content">
                  <span className="timeline-card-year">{item.year}</span>
                  <h3 className="timeline-card-title">{item.subtitle}</h3>
                  <p className="timeline-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineCorporate;
```

---

### Componente de Alianzas y Clientes con Contenido de Producción

En lugar de renderizar tarjetas pesadas, esta propuesta renderiza un slider horizontal fluido (infinite auto-scroll) con logos en escala de grises de alta fidelidad, que se iluminan a color con un efecto hover de alta gama.

```jsx
import React from 'react';
import { clientsData } from '../data/projectsData';
import './ClientsSlider.css';

const ClientsSlider = () => {
  return (
    <section className="clients-slider-section">
      <div className="container">
        <h3 className="clients-slider-title">Han Confiado en Nosotros</h3>
        <div className="infinite-slider-track">
          <div className="slider-group">
            {clientsData.map((client, index) => (
              <div className="client-logo-card" key={index}>
                <span className="client-text-logo">{client}</span>
              </div>
            ))}
          </div>
          {/* Duplicado para un scroll continuo infinito */}
          <div className="slider-group" aria-hidden="true">
            {clientsData.map((client, index) => (
              <div className="client-logo-card" key={`dup-${index}`}>
                <span className="client-text-logo">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
```
