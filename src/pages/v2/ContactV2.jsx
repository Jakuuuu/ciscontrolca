import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    <div className="contact-page-v2">
      <div className="ref-contact-header-v2">
        <div className="ref-contact-overlay-v2"></div>
        <div className="container ref-contact-header-content-v2">
          <span className="ref-section-tag-v2" style={{ color: '#D4AF37' }}>PLANIFICACIÓN INICIAL</span>
          <h1 className="ref-contact-title-v2">Contáctenos</h1>
          <p className="ref-contact-subtitle-v2">Iniciemos la planificación y dimensionamiento de su próximo gran proyecto de ingeniería.</p>
        </div>
      </div>

      <section className="contact-section-v2">
        <div className="container">
          <div className="contact-grid-v2">
            
            {/* Contact Info */}
            <div className="contact-info-v2">
              <h2 className="info-title-v2">Información de Contacto</h2>
              <p className="info-desc-v2">Nuestro personal técnico y asesores comerciales están listos para evaluar sus requerimientos y ofrecer soluciones dimensionadas a sus necesidades corporativas.</p>
              
              <div className="info-cards-v2">
                <div className="info-card-v2">
                  <Phone className="info-icon-v2" size={24} />
                  <div>
                    <h3>Teléfono</h3>
                    <p>04128245656</p>
                    <p className="sub-p-v2">Lunes a Viernes, 8:00am - 5:00pm</p>
                  </div>
                </div>
                
                <div className="info-card-v2">
                  <Mail className="info-icon-v2" size={24} />
                  <div>
                    <h3>Correo Electrónico</h3>
                    <p>info@ciscontrolmm.com</p>
                  </div>
                </div>
                
                <div className="info-card-v2">
                  <MapPin className="info-icon-v2" size={24} />
                  <div>
                    <h3>Sede Operativa</h3>
                    <p>Centro de Ingeniería</p>
                    <p className="sub-p-v2">Edo. Zulia, Venezuela</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container-v2">
              <h3 className="form-title-v2">Envíenos un Mensaje</h3>
              <form className="contact-form-v2" onSubmit={handleSubmit}>
                <div className="form-group-v2">
                  <label htmlFor="name-v2">Nombre Completo</label>
                  <input type="text" id="name-v2" placeholder="Ej. Carlos Pérez" required />
                </div>
                
                <div className="form-group-v2">
                  <label htmlFor="company-v2">Empresa</label>
                  <input type="text" id="company-v2" placeholder="Nombre de su organización" />
                </div>
                
                <div className="form-group-v2">
                  <label htmlFor="email-v2">Correo Corporativo</label>
                  <input type="email" id="email-v2" placeholder="ejemplo@empresa.com" required />
                </div>
                
                <div className="form-group-v2">
                  <label htmlFor="service-v2">Servicio de Interés</label>
                  <select id="service-v2" defaultValue="" required>
                    <option value="" disabled>Seleccione un área</option>
                    <option value="automatizacion">Automatización y Control</option>
                    <option value="energia">Calidad Eléctrica</option>
                    <option value="corrosion">Corrosión</option>
                    <option value="telecom">Telecomunicaciones</option>
                    <option value="ddce">Protección DDCE</option>
                    <option value="otro">Asesoría General</option>
                  </select>
                </div>
                
                <div className="form-group-v2 full-width-v2">
                  <label htmlFor="message-v2">Detalles del Proyecto</label>
                  <textarea id="message-v2" rows="5" placeholder="Describa brevemente sus necesidades técnicas o el proyecto a desarrollar..." required></textarea>
                </div>
                
                <button type="submit" className="btn-accent-v2">
                  Enviar Requerimiento <Send size={18} style={{ marginLeft: '8px' }} />
                </button>
                {submitted && (
                  <p className="form-success-v2" role="status" aria-live="polite">
                    ✓ Su mensaje fue enviado correctamente. Le contactaremos a la brevedad.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactV2;
