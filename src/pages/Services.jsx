import React, { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import './Services.css';

/* Orden fijo: Electricidad, Automatización, DDCE, SPRC (PC3), Fibra óptica (FTTH).
   `short` es la etiqueta corta para el índice y el kicker; `accent` (opcional) es la
   parte final del título que se pinta con el acento de marca — el texto no cambia. */
const services = [
  {
    id: 'electricidad',
    short: 'Electricidad',
    title: 'Electricidad',
    image: '/Media/service_electricity.png',
    desc: 'Energizamos la industria con soluciones seguras y de alto rendimiento. Realizamos diseños de equipos de baja y media potencia y respaldados por nuestra alianza con Diselectar realizamos la fabricación de equipos.',
    features: ['Centro de control de motores', 'Sub estaciones de media y baja tensión', 'Switchgear', 'Transferencias automáticas', 'Centro de distribución de potencia']
  },
  {
    id: 'automatizacion',
    short: 'Automatización',
    title: 'Automatización',
    image: '/Media/service_automation.png',
    desc: 'Optimizamos procesos para alcanzar la máxima eficiencia operativa. Nuestro equipo técnico cuenta con una profunda experiencia que abarca la ingeniería conceptual, básica y de detalle implementando sistemas Scada a la industria petrolera, realizamos mantenimiento y calibración en instrumentación de control.',
    features: ['Gestión de proyectos y Sistemas de control', 'Sistemas Scadas', 'Diseño ingeniería conceptual, básica y de detalle', 'Integración de PLC', 'Alarma contra incendios y control de emergencias']
  },
  {
    id: 'ddce',
    short: 'DDCE',
    title: 'Deionizador de cargas electromagnéticas',
    accent: '(DDCE)',
    image: '/Media/media_ddce_device_full.png',
    contain: true,
    desc: 'Hemos integrado la tecnología DINNTECO para la protección contra descargas atmosféricas que consiste en la deionización del área que protege evitando la descarga de rayos.',
    features: ['Torres de comunicación y transmisión', 'Tanques de almacenamiento de crudo', 'Radares', 'Refinerías', 'Aeropuertos']
  },
  {
    id: 'sprc',
    short: 'SPRC',
    title: 'Sistema de prevención y remoción de corrosión',
    accent: '(SPRC)',
    image: '/Media/corrosion.png',
    desc: 'Hemos incorporado un sistema de prevención y remoción de corrosión diseñado para optimizar la extracción y manejo de crudo, inhibiendo la corrosión, evitando la solidificación de parafina y evitando la formación de incrustaciones minerales.',
    features: ['Tubo de producción de petróleo', 'Protección de bombas BES/BCP', 'Entrada al separador', 'Tanques de agua para inyección de pozos', 'Entrada a intercambiador de calor, calderas y torres de enfriamiento']
  },
  {
    id: 'ftth',
    short: 'FTTH',
    title: 'Despliegue',
    accent: 'FTTH',
    image: '/Media/fibra.png',
    desc: 'Contamos con una sólida trayectoria en el diseño, despliegue e instalación de redes de fibra óptica (FTTH) para servicios de internet.',
    features: ['Instalación de OLT', 'Diseño e ingeniería de despliegue de fibra óptica', 'Construcción de ODN', 'Acometidas a los hogares', 'Instalación de ONT']
  }
];

const pad = (n) => String(n).padStart(2, '0');
const fullTitle = (s) => (s.accent ? `${s.title} ${s.accent}` : s.title);

const Services = () => {
  const [active, setActive] = useState(services[0].id);
  const [pinned, setPinned] = useState({ on: false, top: 75, h: 0 });
  const slotRef = useRef(null);
  const navRef = useRef(null);
  const listRef = useRef(null);

  /* Índice fijo bajo el header al hacer scroll. Se hace con JS porque html/body
     tienen overflow-x:hidden (index.css), lo que anula position:sticky. */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const slot = slotRef.current;
      const nav = navRef.current;
      if (!slot || !nav) return;
      const header = document.querySelector('.ref-header-v2');
      const top = header ? header.getBoundingClientRect().bottom : 75;
      const on = slot.getBoundingClientRect().top <= top;
      const h = nav.offsetHeight;
      setPinned((p) => (p.on === on && p.top === top && p.h === h ? p : { on, top, h }));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* En móvil el índice se desplaza en horizontal: mantiene visible el chip activo
     (solo mueve la lista, nunca la página) */
  useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const link = list.querySelector(`a[href="#${active}"]`);
    if (!link) return;
    const left = link.offsetLeft - list.offsetLeft;
    const right = left + link.offsetWidth;
    const fade = list.clientWidth * 0.15;
    let target = null;
    if (left < list.scrollLeft) target = left;
    else if (right > list.scrollLeft + list.clientWidth - fade) target = right - list.clientWidth + fade;
    if (target === null) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollTo({ left: Math.max(0, target), behavior: reduce ? 'auto' : 'smooth' });
  }, [active]);

  /* Resalta en el índice la fila de servicio que ocupa el centro de la pantalla */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="svc-page" style={{ '--svc-offset': `${Math.round(pinned.top + pinned.h)}px` }}>
      <PageHero
        kicker="Nuestros Servicios"
        title="Nuestros"
        titleAccent="Servicios"
        subtitle="Ingeniería transversal, integral y precisa para operaciones ininterrumpidas."
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Servicios' }]}
        image={{
          src: '/Media/hero/04-automatizacion-valvulas.jpg',
          alt: 'Instrumentación y control en campo',
          position: 'center 30%',
        }}
      />

      <div ref={slotRef} className="svc-index-slot" style={pinned.on ? { height: pinned.h } : undefined}>
        <nav
          ref={navRef}
          className={`svc-index ${pinned.on ? 'is-pinned' : ''}`}
          style={pinned.on ? { top: pinned.top } : undefined}
          aria-label="Servicios"
        >
          <div className="bx-container svc-index-inner">
            <ol ref={listRef} className="svc-index-list">
              {services.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`svc-index-link ${active === s.id ? 'is-active' : ''}`}
                    aria-current={active === s.id ? 'true' : undefined}
                  >
                    <span className="svc-index-num">{pad(i + 1)}</span>
                    {s.short}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>

      {services.map((s, index) => {
        const dark = index % 2 === 1;
        const reverse = index % 2 === 1;
        return (
          <section
            id={s.id}
            key={s.id}
            className={`bx-section ${dark ? 'bx-section--dark' : 'bx-section--light'} svc-row-section`}
            aria-labelledby={`${s.id}-title`}
          >
            <div className={`bx-container svc-row ${reverse ? 'svc-row--reverse' : ''}`}>
              <div className="svc-media reveal-on-scroll reveal-up">
                <div className="bx-frame-wrap">
                  <div className="bx-frame-offset" aria-hidden="true" />
                  <figure className={`bx-frame bx-frame--shade svc-frame ${s.contain ? 'svc-frame--contain' : ''}`}>
                    <img
                      src={s.image}
                      alt={fullTitle(s)}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <span className="bx-ticks bx-ticks--top" aria-hidden="true" />
                    <span className="svc-frame-tag" aria-hidden="true">
                      <span className="bx-tag bx-tag--gold svc-frame-num">
                        <i></i>{pad(index + 1)} / {pad(services.length)}
                      </span>
                    </span>
                  </figure>
                </div>
              </div>

              <div className="svc-copy reveal-on-scroll reveal-up delay-1">
                <p className="bx-kicker svc-kicker">
                  <span className="svc-kicker-num">{pad(index + 1)}</span>
                  {s.short !== s.title && (
                    <>
                      <span aria-hidden="true">—</span>
                      {s.short}
                    </>
                  )}
                </p>
                <h2 id={`${s.id}-title`} className="bx-title svc-title">
                  {s.title}
                  {s.accent && (
                    <>
                      {' '}
                      <span className="bx-title-accent">{s.accent}</span>
                    </>
                  )}
                </h2>
                <p className="bx-lead svc-desc">{s.desc}</p>
                <ul className="svc-features">
                  {s.features.map((feature) => (
                    <li key={feature}>
                      <span className="svc-feature-mark" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Services;
