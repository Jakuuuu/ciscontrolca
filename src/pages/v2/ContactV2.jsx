import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageHero from '../../components/PageHero';
import './ContactV2.css';

const ContactV2 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="ctc-page">
      <PageHero
        className="ctc-hero"
        kicker="PLANIFICACIÓN INICIAL"
        title="Contáctenos"
        subtitle="Iniciemos la planificación y dimensionamiento de su próximo gran proyecto de ingeniería."
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]}
        image={{
          src: '/Media/about_workspace.png',
          alt: 'Ingenieros revisando planos técnicos en una pantalla de trabajo',
          position: 'center 40%',
        }}
      />

      <section className="bx-section bx-section--light ctc-section">
        <div className="bx-container">
          <div className="ctc-grid">

            {/* Información de contacto */}
            <div className="ctc-info">
              <div className="bx-head ctc-head">
                <p className="bx-kicker">Contacto</p>
                <h2 className="bx-title">
                  Información <span className="bx-title-accent">de Contacto</span>
                </h2>
                <p className="bx-lead">
                  Nuestro personal técnico y asesores comerciales están listos para evaluar sus requerimientos y ofrecer soluciones dimensionadas a sus necesidades corporativas.
                </p>
              </div>

              <ul className="ctc-cards">
                <li className="bx-card bx-card--hover bx-card--accent ctc-card">
                  <span className="bx-card-icon ctc-card-icon" aria-hidden="true">
                    <Phone size={22} strokeWidth={1.8} />
                  </span>
                  <div className="ctc-card-body">
                    <h3 className="ctc-card-label">Teléfono</h3>
                    <p className="ctc-card-value">
                      <a href="tel:04128245656">04128245656</a>
                    </p>
                    <p className="ctc-card-sub">Lunes a Viernes, 8:00am - 5:00pm</p>
                  </div>
                </li>

                <li className="bx-card bx-card--hover bx-card--accent ctc-card">
                  <span className="bx-card-icon ctc-card-icon" aria-hidden="true">
                    <Mail size={22} strokeWidth={1.8} />
                  </span>
                  <div className="ctc-card-body">
                    <h3 className="ctc-card-label">Correo Electrónico</h3>
                    <p className="ctc-card-value">
                      <a href="mailto:info@ciscontrolmm.com">info@ciscontrolmm.com</a>
                    </p>
                  </div>
                </li>

                <li className="bx-card bx-card--hover bx-card--accent ctc-card">
                  <span className="bx-card-icon ctc-card-icon" aria-hidden="true">
                    <MapPin size={22} strokeWidth={1.8} />
                  </span>
                  <div className="ctc-card-body">
                    <h3 className="ctc-card-label">Sede Operativa</h3>
                    <p className="ctc-card-value">Torre BVC, PB, Oficina 13</p>
                    <p className="ctc-card-sub">Avenida Andrés Bello (Intercomunal), Lechería, Estado Anzoátegui</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Formulario */}
            <div className="ctc-form-col">
              <div className="bx-frame-wrap ctc-form-wrap">
                <div className="bx-frame-offset ctc-form-offset" aria-hidden="true" />
                <div className="ctc-panel">
                  <span className="bx-ticks" aria-hidden="true" />

                  <h3 className="ctc-form-title">Envíenos un Mensaje</h3>

                  <form className="ctc-form" onSubmit={handleSubmit}>
                    <div className="ctc-field">
                      <label htmlFor="name-v2">Nombre Completo</label>
                      <input type="text" id="name-v2" placeholder="Ej. Carlos Pérez" autoComplete="name" required />
                    </div>

                    <div className="ctc-field">
                      <label htmlFor="company-v2">Empresa</label>
                      <input type="text" id="company-v2" placeholder="Nombre de su organización" autoComplete="organization" />
                    </div>

                    <div className="ctc-field">
                      <label htmlFor="email-v2">Correo Corporativo</label>
                      <input type="email" id="email-v2" placeholder="ejemplo@empresa.com" autoComplete="email" required />
                    </div>

                    <div className="ctc-field">
                      <label htmlFor="service-v2">Servicio de Interés</label>
                      <div className="ctc-select">
                        <select id="service-v2" defaultValue="" required>
                          <option value="" disabled>Seleccione un área</option>
                          <option value="energia">Electricidad</option>
                          <option value="automatizacion">Automatización y Control</option>
                          <option value="ddce">Protección DDCE</option>
                          <option value="corrosion">Corrosión (SPRC)</option>
                          <option value="telecom">Fibra Óptica (FTTH)</option>
                          <option value="otro">Asesoría General</option>
                        </select>
                      </div>
                    </div>

                    <div className="ctc-field ctc-field--full">
                      <label htmlFor="message-v2">Detalles del Proyecto</label>
                      <textarea id="message-v2" rows="5" placeholder="Describa brevemente sus necesidades técnicas o el proyecto a desarrollar..." required></textarea>
                    </div>

                    <button type="submit" className="bx-btn bx-btn-primary ctc-submit">
                      Enviar Requerimiento <Send size={18} aria-hidden="true" />
                    </button>
                    {submitted && (
                      <p className="ctc-success" role="status" aria-live="polite">
                        ✓ Su mensaje fue enviado correctamente. Le contactaremos a la brevedad.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactV2;
