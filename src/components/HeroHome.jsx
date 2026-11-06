import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { homeData } from '../data/homeData';
import { heroSlides, heroServices } from '../data/heroSlides';
import './HeroHome.css';

// Propuesta D — "Panel dividido + filmstrip": el formato de la propuesta B (texto a la
// izquierda, panel enmarcado con barrido diagonal a la derecha) más la tira de fotos en
// movimiento de la propuesta C. Avanza siempre de forma automática: no se pausa con el
// ratón ni con el foco; solo con el botón de pausa o cuando la pestaña está oculta.

const SLIDE_MS = 5500;
const TOTAL = heroSlides.length;
const pad = (n) => String(n).padStart(2, '0');

const serviceIndex = (id) => heroServices.findIndex((s) => s.id === id);
const serviceLabel = (id) => heroServices.find((s) => s.id === id)?.label ?? '';

// Fichas de la tira: todas del mismo formato (ritmo regular, estilo plano técnico) y
// estrechas para que una copia de la lista (10 fichas) quepa en pantallas de escritorio:
// así la ficha de la foto activa siempre está a la vista mientras la tira se desplaza.
const stripSlides = heroSlides.map((s, i) => ({ ...s, index: i, label: serviceLabel(s.service) }));
// Bucle sin saltos: tres copias de la lista (≈1.250–1.500px cada una en escritorio) y la
// pista se desplaza exactamente una copia (-33.333%); cubre pantallas de hasta ~2.800px.
const LOOP = [...stripSlides, ...stripSlides, ...stripSlides];

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

const HeroHome = () => {
  const { hero } = homeData;
  const reducedMotion = usePrefersReducedMotion();

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('next');
  const [userPaused, setUserPaused] = useState(false);
  const [announce, setAnnounce] = useState(false);
  const [tabHidden, setTabHidden] = useState(
    typeof document !== 'undefined' ? document.hidden : false
  );

  // Solo el botón de pausa o la pestaña oculta detienen el avance (nunca hover/foco).
  const paused = userPaused || tabHidden;

  // Tiempo restante del slide actual (para reanudar donde se pausó).
  const remainingRef = useRef(SLIDE_MS);
  const startedAtRef = useRef(0);

  const goTo = useCallback(
    (target, dir) => {
      const next = ((target % TOTAL) + TOTAL) % TOTAL;
      if (next === index) return;
      setPrevIndex(index);
      setDirection(dir ?? (next > index ? 'next' : 'prev'));
      setIndex(next);
    },
    [index]
  );
  const goNext = useCallback(() => goTo(index + 1, 'next'), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, 'prev'), [goTo, index]);

  // Acción manual: salta y anuncia el cambio (el temporizador se reinicia al cambiar index).
  const userGo = (fn) => () => {
    setAnnounce(true);
    fn();
  };

  // Cada cambio de slide reinicia el tiempo restante a la duración completa.
  useEffect(() => {
    remainingRef.current = SLIDE_MS;
  }, [index]);

  // Autoplay; la pausa (botón / pestaña oculta) conserva el tiempo restante.
  useEffect(() => {
    if (paused) return undefined;
    startedAtRef.current = performance.now();
    const id = window.setTimeout(() => {
      // Avance automático: no se anuncia (solo los cambios elegidos por el usuario).
      setAnnounce(false);
      goNext();
    }, remainingRef.current);
    return () => {
      window.clearTimeout(id);
      const elapsed = performance.now() - startedAtRef.current;
      remainingRef.current = Math.max(400, remainingRef.current - elapsed);
    };
  }, [index, paused, goNext]);

  // Pausar cuando la pestaña no está visible.
  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Precargar la siguiente imagen (y la anterior, para navegación hacia atrás).
  useEffect(() => {
    [heroSlides[(index + 1) % TOTAL], heroSlides[(index - 1 + TOTAL) % TOTAL]].forEach((s) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = s.src;
    });
  }, [index]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setAnnounce(true); goNext(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); setAnnounce(true); goPrev(); }
  };

  const slide = heroSlides[index];
  const activeService = serviceIndex(slide.service);
  const layers = prevIndex !== null && prevIndex !== index ? [prevIndex, index] : [index];
  const stripItems = reducedMotion ? stripSlides : LOOP;

  return (
    <section
      className={`hpd ${reducedMotion ? 'hpd--reduced' : ''} ${paused ? 'is-paused' : ''}`}
      aria-roledescription="carousel"
      aria-label="Servicios de CIS CONTROL"
    >
      <div className="hpd-blueprint" aria-hidden="true" />
      <div className="hpd-ambient" aria-hidden="true">
        <div
          key={slide.src}
          className="hpd-ambient-img"
          style={{ backgroundImage: `url(${slide.src})` }}
        />
      </div>

      <div className="hpd-inner">
        {/* Columna de texto */}
        <div className="hpd-copy">
          <span className="hpd-kicker">INGENIERÍA E INFRAESTRUCTURA INDUSTRIAL</span>
          <h1 className="hpd-title">
            {hero.titleLine1}
            <br />
            <span className="hpd-title-accent">{hero.titleLine2}</span>
          </h1>
          <p className="hpd-subtitle">{hero.subtitle}</p>
          <div className="hpd-actions">
            <Link to="/servicios" className="ref-btn-primary-v2">{hero.ctaText}</Link>
            <Link to="/proyectos" className="ref-btn-outline-v2">Ver Proyectos</Link>
          </div>
        </div>

        {/* Columna del panel fotográfico */}
        <div className="hpd-media" onKeyDown={onKeyDown}>
          <div className="hpd-stage">
            <div className="hpd-frame-deco" aria-hidden="true" />
            <div className="hpd-panel" data-dir={direction}>
              {layers.map((i) => {
                const s = heroSlides[i];
                const isActive = i === index;
                return (
                  <div
                    key={i}
                    className={`hpd-slide ${isActive ? 'is-active' : 'is-prev'}${prevIndex === null ? ' is-first' : ''}`}
                    aria-hidden="true"
                  >
                    <img
                      src={s.src}
                      alt=""
                      width={s.width}
                      height={s.height}
                      decoding="async"
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                      style={{ objectPosition: s.position }}
                    />
                  </div>
                );
              })}
              {prevIndex !== null && !reducedMotion && (
                <div key={`edge-${index}`} className="hpd-edge" aria-hidden="true">
                  <span />
                </div>
              )}
              <div className="hpd-shade" aria-hidden="true" />
              <span className="hpd-tick hpd-tick--tl" aria-hidden="true" />
              <span className="hpd-tick hpd-tick--tr" aria-hidden="true" />
              <p key={`cap-${index}`} className="hpd-caption" aria-hidden="true">
                {slide.caption}
              </p>
            </div>
          </div>

          <div className="hpd-meta">
            <div className="hpd-meta-top">
              <div className="hpd-service" aria-hidden="true">
                <span className="hpd-service-num">{pad(activeService + 1)}</span>
                <span key={`svc-${slide.service}`} className="hpd-service-name">
                  {serviceLabel(slide.service)}
                </span>
              </div>

              <div className="hpd-controls">
                <span className="hpd-counter" aria-hidden="true">
                  <strong>{pad(index + 1)}</strong>
                  <span className="hpd-counter-sep">/</span>
                  {pad(TOTAL)}
                </span>
                <button
                  type="button"
                  className="hpd-btn"
                  onClick={() => setUserPaused((p) => !p)}
                  aria-label={userPaused ? 'Reanudar presentación' : 'Pausar presentación'}
                  aria-pressed={userPaused}
                >
                  {userPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
                </button>
                <button type="button" className="hpd-btn" onClick={userGo(goPrev)} aria-label="Foto anterior">
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button type="button" className="hpd-btn" onClick={userGo(goNext)} aria-label="Foto siguiente">
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>

            <ol className="hpd-track" aria-label="Seleccionar foto por servicio">
              {heroServices.map((svc, sIdx) => {
                const svcSlides = heroSlides
                  .map((s, i) => ({ s, i }))
                  .filter(({ s }) => s.service === svc.id);
                return (
                  <li
                    key={svc.id}
                    className={`hpd-group ${sIdx === activeService ? 'is-current' : ''} ${sIdx < activeService ? 'is-done' : ''}`}
                  >
                    <div className="hpd-group-bars">
                      {svcSlides.map(({ i }, n) => (
                        <button
                          key={i}
                          type="button"
                          className={`hpd-seg ${i === index ? 'is-active' : ''} ${i < index ? 'is-done' : ''}`}
                          onClick={userGo(() => goTo(i))}
                          aria-label={`${svc.label}, foto ${n + 1} de ${svcSlides.length}`}
                          aria-current={i === index ? 'true' : undefined}
                        >
                          <span
                            key={i === index ? `fill-${index}` : 'fill'}
                            className="hpd-seg-fill"
                            style={{
                              animationDuration: `${SLIDE_MS}ms`,
                              animationPlayState: paused ? 'paused' : 'running',
                            }}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="hpd-group-label" aria-hidden="true">{svc.label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Tira de fotos en movimiento (de la propuesta C): clic en una ficha = saltar a esa foto */}
      <div className="hpd-strip" role="group" aria-label="Galería de proyectos por servicio">
        <div className="hpd-strip-viewport">
          <ul className="hpd-strip-track">
            {stripItems.map((s, k) => {
              const copy = k >= TOTAL; // solo la primera serie es accesible
              const isActive = s.index === index;
              return (
                <li key={`${s.index}-${k}`} className="hpd-strip-item">
                  <button
                    type="button"
                    className={`hpd-tile${isActive ? ' is-active' : ''}`}
                    onClick={userGo(() => goTo(s.index))}
                    aria-label={copy ? undefined : `Ver foto ${s.index + 1} de ${TOTAL}: ${s.label}, ${s.caption}`}
                    aria-current={!copy && isActive ? 'true' : undefined}
                    aria-hidden={copy ? 'true' : undefined}
                    tabIndex={copy ? -1 : undefined}
                  >
                    <img
                      src={s.src}
                      alt=""
                      width={s.width}
                      height={s.height}
                      loading={k < TOTAL ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable="false"
                      style={{ objectPosition: s.position }}
                    />
                    <span className="hpd-tile-tag" aria-hidden="true">
                      <i />
                      <span className="hpd-tile-label">{s.label}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="hpd-sr" aria-live={announce || userPaused ? 'polite' : 'off'} aria-atomic="true">
        {`Foto ${index + 1} de ${TOTAL}: ${serviceLabel(slide.service)}. ${slide.caption}`}
      </p>
    </section>
  );
};

export default HeroHome;
