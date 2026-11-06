import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

/**
 * Cabecera navy de página interior: hermana corta del hero de Inicio (HeroHome).
 *
 * Props
 *  - kicker      string   Texto dorado en versalitas con línea previa (p. ej. "NOSOTROS").
 *  - title       node     Primera línea del h1 (blanca).
 *  - titleAccent node     Segunda línea del h1 en degradado azul claro (opcional).
 *  - subtitle    node     Bajada corta bajo el título (opcional).
 *  - breadcrumb  array    [{ label, to? }] — miga de pan sobre el kicker (opcional);
 *                         el último elemento se marca como página actual.
 *  - image       object   { src, alt, caption?, position? } — foto enmarcada a la derecha
 *                         con marcas de esquina y marco rayado desplazado (opcional).
 *  - children    node     Botones/CTAs bajo la bajada (se envuelven en .bx-actions).
 *  - id, className        Pasan al <section>.
 */
const PageHero = ({
  kicker,
  title,
  titleAccent,
  subtitle,
  breadcrumb,
  image,
  children,
  id,
  className = '',
}) => {
  const hasImage = Boolean(image && image.src);

  return (
    <section
      id={id}
      className={`bx-pagehero bx-grid-dark bx-grid-fade ${hasImage ? 'bx-pagehero--media' : ''} ${className}`.trim()}
    >
      {hasImage && (
        <div className="bx-pagehero-ambient" aria-hidden="true">
          <div className="bx-pagehero-ambient-img" style={{ backgroundImage: `url("${image.src}")` }} />
        </div>
      )}

      <div className="bx-container bx-pagehero-inner">
        <div className="bx-pagehero-copy">
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="bx-pagehero-crumbs" aria-label="Ruta de navegación">
              <ol>
                {breadcrumb.map((c, i) => {
                  const last = i === breadcrumb.length - 1;
                  return (
                    <li key={`${c.label}-${i}`}>
                      {c.to && !last ? (
                        <Link to={c.to}>{c.label}</Link>
                      ) : (
                        <span aria-current={last ? 'page' : undefined}>{c.label}</span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {kicker && <p className="bx-kicker bx-pagehero-kicker">{kicker}</p>}

          <h1 className="bx-title bx-title--xl bx-pagehero-title">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="bx-title-accent bx-title-accent--block">{titleAccent}</span>
              </>
            )}
          </h1>

          {subtitle && <p className="bx-lead bx-pagehero-subtitle">{subtitle}</p>}

          {children && <div className="bx-actions bx-pagehero-actions">{children}</div>}
        </div>

        {hasImage && (
          <div className="bx-pagehero-media">
            <div className="bx-frame-wrap">
              <div className="bx-frame-offset" aria-hidden="true" />
              <figure className={`bx-frame bx-pagehero-frame ${image.caption ? 'bx-frame--shade' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt || ''}
                  style={image.position ? { objectPosition: image.position } : undefined}
                  decoding="async"
                />
                <span className="bx-ticks bx-ticks--top" aria-hidden="true" />
                {image.caption && <figcaption className="bx-frame-caption">{image.caption}</figcaption>}
              </figure>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
