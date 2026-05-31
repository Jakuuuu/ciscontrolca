import React from 'react';
import { aboutData } from '../../data/aboutData';
import { Shield, Zap, Target, Eye } from 'lucide-react';
import './AboutV2.css';

const AboutV2 = () => {
  const { intro, identity, values } = aboutData;

  return (
    <div className="about-page-v2">
      {/* Bloque Introductorio */}
      <section className="about-intro-section-v2">
        <div className="container">
          <div className="intro-split-v2">
            <div className="intro-text-block-v2">
              <span className="ref-tag-v2">QUIÉNES SOMOS</span>
              <h2 className="intro-title-v2">{intro.title}</h2>
              <p className="intro-p-v2">{intro.paragraph}</p>
              
              <ul className="intro-bullets-v2">
                {intro.bulletPoints.map((bullet, idx) => (
                  <li key={idx}>
                    <span className="bullet-indicator-v2"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="intro-images-v2">
              <div className="main-img-holder-v2">
                <img src={intro.images.main} alt="Trabajo en campo" />
              </div>
              <div className="side-images-v2">
                <div className="side-img-v2">
                  <img src={intro.images.topRight} alt="Ingenieros" />
                </div>
                <div className="side-img-v2">
                  <img src={intro.images.bottomRight} alt="Instalaciones" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="about-identity-section-v2">
        <div className="container">
          <div className="identity-grid-v2">
            <div className="identity-card-v2">
              <div className="identity-card-header-v2">
                <Target size={24} className="identity-card-icon-v2" />
                <h3>{identity.mision.title}</h3>
              </div>
              <p>{identity.mision.text}</p>
            </div>
            
            <div className="identity-card-v2">
              <div className="identity-card-header-v2">
                <Eye size={24} className="identity-card-icon-v2" />
                <h3>{identity.vision.title}</h3>
              </div>
              <p>{identity.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="about-values-section-v2">
        <div className="container">
          <h2 className="values-main-title-v2">Nuestros Valores Fundamentales</h2>
          
          <div className="values-grid-v2">
            {values.map((val) => (
              <div className="value-card-v2" key={val.number}>
                <div className="value-num-v2">0{val.number}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutV2;
