import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="page-header contact-header">
        <div className="header-overlay"></div>
        <div className="container">
          <h1 className="title text-white">Contáctenos</h1>
          <p className="subtitle text-white">Inicemos la planificación de su próximo gran proyecto de ingeniería.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="title">Información de Contacto</h2>
              <p className="contact-desc">
                Nuestro personal técnico y asesores comerciales están listos para evaluar sus requerimientos y ofrecer soluciones dimensionadas a sus necesidades corporativas.
              </p>
              
              <div className="info-cards">
                <div className="info-card glass-card">
                  <Phone className="info-icon" size={28} />
                  <div>
                    <h3>Teléfono</h3>
                    <p>04241245656</p>
                    <p>Lunes a Viernes, 8:00am - 5:00pm</p>
                  </div>
                </div>
                
                <div className="info-card glass-card">
                  <Mail className="info-icon" size={28} />
                  <div>
                    <h3>Correo Electrónico</h3>
                    <p>info@ciscontrolmm.com</p>
                  </div>
                </div>
                
                <div className="info-card glass-card">
                  <MapPin className="info-icon" size={28} />
                  <div>
                    <h3>Sede Operativa</h3>
                    <p>Centro de Ingeniería</p>
                    <p>Edo. Zulia, Venezuela</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container glass-card">
              <h3 className="form-title">Envíenos un Mensaje</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" placeholder="Ej. Carlos Pérez" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input type="text" id="company" placeholder="Nombre de su organización" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo Corporativo</label>
                  <input type="email" id="email" placeholder="ejemplo@empresa.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select id="service" defaultValue="" required>
                    <option value="" disabled>Seleccione un área</option>
                    <option value="automatizacion">Automatización y Control</option>
                    <option value="energia">Calidad Eléctrica</option>
                    <option value="corrosion">Corrosión</option>
                    <option value="telecom">Telecomunicaciones</option>
                    <option value="ddce">Protección DDCE</option>
                    <option value="otro">Asesoría General</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Detalles del Proyecto</label>
                  <textarea id="message" rows="5" placeholder="Describa brevemente sus necesidades técnicas o el proyecto a desarrollar..." required></textarea>
                </div>
                
                <button type="submit" className="btn-accent submit-btn">
                  Enviar Requerimiento <Send size={18} />
                </button>
                {submitted && (
                  <p className="form-success" role="status" aria-live="polite">
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

export default Contact;
