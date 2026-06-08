import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Settings } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import Logo3D from '../components/Logo3D';
import './Home.css';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-logo-wrapper reveal-on-scroll reveal-scale">
            <video
              className={`kling-logo-video ${videoLoaded ? 'video-loaded' : ''}`}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              aria-label="Logo animado de Ciscontrolcamm"
            >
              <source src="/Media/kling_20260409_generate_3017_0.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="trayectoria-text">Trayectoria sólida,</span><br/>
              <span className="text-accent mission-text">misión renovada</span>
            </h1>
            <p className="hero-subtitle">
              Soluciones integrales de alta gama en automatización, energía, telecomunicaciones y protección atmosférica. Innovación y confiabilidad técnica para los desafíos más exigentes.
            </p>
            <div className="hero-actions hero-actions-anim">
              <Link to="/servicios" className="btn-accent">Conoce nuestros servicios</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Galería de Infraestructura ANIMADA */}
      <ImageSlider />

      {/* Parallax Divider */}
      <section className="parallax-divider">
        <div className="parallax-bg-img"></div>
        <div className="parallax-divider-overlay"></div>
        <div className="container parallax-content reveal-on-scroll reveal-scale">
          <h2 className="title align-center">Innovación en Infraestructura</h2>
          <p className="subtitle align-center">
            Diseñamos soluciones tecnológicas a gran escala para asegurar la confiabilidad en el suministro eléctrico y redes de telecomunicación.
          </p>
          <Link to="/proyectos" className="btn-accent">Ver Proyectos Destacados</Link>
        </div>
      </section>

      {/* Alianzas Estratégicas - Logo Carousel */}
      <section className="section alianzas-section">
        <div className="container">
          <h2 className="title align-center">Nuestras Alianzas Estratégicas</h2>
          <div className="carousel-wrapper">
            <div className="alianzas-carousel">
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">Suminicor</span></div>
               </div>
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">Diselectar</span></div>
               </div>
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">PC3</span></div>
               </div>
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">DINNTECO</span></div>
               </div>
               {/* Duplicated for seamless scrolling */}
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">Suminicor</span></div>
               </div>
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">Diselectar</span></div>
               </div>
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">PC3</span></div>
               </div>
               <div className="logo-slide">
                 <div className="alliance-logo"><span className="placeholder-text">DINNTECO</span></div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
