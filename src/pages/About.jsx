import React from 'react';
import PageHero from '../components/PageHero';
import { aboutData } from '../data/aboutData';
import './About.css';

/* Iconos de línea (mismo trazo que el resto del sitio). Orden fijo de servicios:
   Electricidad, Automatización, DDCE/SPRC, Fibra óptica. */
const ICON_PROPS = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  stroke: 'currentColor',
  strokeWidth: 1.8,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

const capabilityIcons = [
  <svg key="elec" {...ICON_PROPS}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  <svg key="auto" {...ICON_PROPS}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  <svg key="ddce" {...ICON_PROPS}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="fibra" {...ICON_PROPS}><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></svg>,
];

const identityIcons = {
  mision: <svg {...ICON_PROPS}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>,
  vision: <svg {...ICON_PROPS}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>,
};

const pad = (n) => String(n).padStart(2, '0');

const About = () => {
  const { intro, identity, values } = aboutData;
  const identityItems = [
    { key: 'mision', ...identity.mision },
    { key: 'vision', ...identity.vision },
  ];

  return (
    <div className="ab-page">
      <PageHero
        className="ab-hero"
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Nosotros' }]}
        kicker="Nosotros"
        title="Integración"
        titleAccent="Multidisciplinaria"
        subtitle={
          <>
            Integramos un equipo multidisciplinario altamente capacitado para resolver los desafíos técnicos más complejos de la industria. Fusionamos diversas ramas de la ingeniería y nos apoyamos en alianzas estratégicas sólidas para garantizar la seguridad, eficiencia y continuidad operativa de sus infraestructuras en <strong>CIS CONTROL, C.A.</strong> y <strong>Control Integral MM, C.A.</strong>
          </>
        }
        image={{
          src: intro.images.topRight,
          alt: 'Técnicos trabajando en tableros eléctricos',
          position: '50% 40%',
        }}
      />

      {/* Capacidades: collage enmarcado + 4 áreas en orden de servicios */}
      <section className="bx-section bx-section--light ab-caps" aria-labelledby="ab-caps-title">
        <div className="bx-container ab-caps-grid">
          <div className="ab-collage reveal-on-scroll reveal-up">
            <div className="ab-collage-offset bx-frame-offset" aria-hidden="true" />
            <figure className="bx-frame ab-collage-main">
              <img src={intro.images.main} alt="Ingenieros corporativos en trabajo de campo" loading="lazy" decoding="async" />
              <span className="bx-ticks bx-ticks--top" aria-hidden="true" />
            </figure>
            <figure className="bx-frame ab-collage-side">
              <img src="/Media/hero/01-electricidad-tableros.jpg" alt="Centros de control de motores y tableros de potencia" loading="lazy" decoding="async" />
              <span className="bx-ticks bx-ticks--top" aria-hidden="true" />
            </figure>
            <figure className="bx-frame ab-collage-side">
              <img src={intro.images.bottomRight} alt="Instalaciones industriales modernas" loading="lazy" decoding="async" />
              <span className="bx-ticks bx-ticks--top" aria-hidden="true" />
            </figure>
          </div>

          <div className="ab-caps-copy">
            <h2 className="bx-sr" id="ab-caps-title">Servicios</h2>
            <p className="bx-kicker" aria-hidden="true">Servicios</p>
            <ul className="ab-caps-list">
              {intro.bulletPoints.map((text, i) => (
                <li key={text} className={`reveal-on-scroll reveal-up delay-${i + 1}`}>
                  <div className="bx-card bx-card--hover bx-card--accent ab-cap">
                    <span className="bx-card-icon ab-cap-icon">{capabilityIcons[i]}</span>
                    <span className="bx-num ab-cap-num" aria-hidden="true">{pad(i + 1)}</span>
                    <p className="ab-cap-text">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Identidad institucional */}
      <section className="bx-section bx-section--dark bx-grid-fade ab-identity" aria-labelledby="ab-identity-title">
        <div className="bx-container">
          <div className="bx-head">
            <p className="bx-kicker">Misión y Visión</p>
            <h2 className="bx-title" id="ab-identity-title">
              Nuestra <span className="bx-title-accent">Identidad</span>
            </h2>
          </div>
          <div className="ab-identity-grid">
            {identityItems.map((item, i) => (
              <div key={item.key} className={`reveal-on-scroll reveal-up${i ? ' delay-1' : ''}`}>
                <article className="bx-card bx-card--hover bx-card--accent ab-identity-card">
                  <span className="bx-ticks ab-identity-ticks" aria-hidden="true" />
                  <div className="ab-identity-head">
                    <span className="bx-card-icon ab-identity-icon">{identityIcons[item.key]}</span>
                    <h3 className="bx-title bx-title--sm ab-identity-title">{item.title}</h3>
                  </div>
                  <p className="bx-card-text ab-identity-text">{item.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bx-section bx-section--white ab-values" aria-labelledby="ab-values-title">
        <div className="bx-container">
          <div className="bx-head bx-head--center">
            <p className="bx-kicker">Valores</p>
            <h2 className="bx-title" id="ab-values-title">
              Nuestros Valores <span className="bx-title-accent">Fundamentales</span>
            </h2>
          </div>
          <ol className="ab-values-grid">
            {values.map((v, i) => (
              <li key={v.number} className={`reveal-on-scroll reveal-up delay-${i + 1}`}>
                <article className="bx-card bx-card--hover bx-card--accent ab-value">
                  <span className="bx-num ab-value-num" aria-hidden="true">{pad(v.number)}</span>
                  <h3 className="bx-card-title">{v.title}</h3>
                  <p className="bx-card-text">{v.desc}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default About;
