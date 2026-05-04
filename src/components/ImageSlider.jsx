import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  { url: '/Media/service_telecom.png', title: 'Infraestructura de Telecomunicaciones', desc: 'Sistemas de cableado y racks para conectividad corporativa.' },
  { url: '/Media/fibra.png', title: 'Fibra Óptica (FTTH)', desc: 'Distribución y empalmes de fibra geométrica de alta precisión.' },
  { url: '/Media/media_ddce_towers.png', title: 'Protección en Alturas', desc: 'Instalación de pararrayos y sistemas DDCE en torres de telecomunicaciones.' },
  { url: '/Media/media_ddce_refinery.png', title: 'Seguridad Industrial', desc: 'Protección avanzada contra descargas en instalaciones petroleras y alta criticidad.' }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="image-slider-section section">
      <div className="container">
         <h2 className="title align-center">Proyectos Operativos</h2>
         <p className="slider-intro align-center">Galería visual de nuestra infraestructura y soluciones tecnológicas desplegadas en campo.</p>
         <div className="slider-container premium-card">
            {images.map((img, index) => (
               <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
                  <div className="slide-image-wrapper">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="slide-image"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.opacity = '0.4'; }}
                    />
                  </div>
                  <div className="slide-content">
                     <h3>{img.title}</h3>
                     <p>{img.desc}</p>
                  </div>
               </div>
            ))}
            <div className="slider-indicators">
              {images.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${index === current ? 'active' : ''}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                />
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default ImageSlider;
