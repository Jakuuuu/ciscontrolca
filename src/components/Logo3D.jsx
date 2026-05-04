import React, { useState, useRef } from 'react';
import './Logo3D.css';

const SVGIsotipo = ({ isFrontal }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
    <circle cx="40" cy="50" r="14" fill={isFrontal ? '#A42526' : '#8c1c1dfA'} />
    <path 
      d="M 50 12.3 A 39 39 0 1 0 59.5 83.7 L 85 69.0 L 85 48.3 L 50.5 68.2 A 21 21 0 1 1 50 31.5 Z" 
      fill={isFrontal ? '#A42526' : '#8c1c1dfA'} 
    />
  </svg>
);

const Logo3D = () => {
  const layers = Array.from({ length: 80 });
  const [rotate, setRotate] = useState({ x: 15, y: -35 });
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const xAxis = (centerX - clientX) / 10;
      const yAxis = (centerY - clientY) / 10;
      setRotate({ x: -yAxis, y: xAxis });
      rafRef.current = null;
    });
  };

  return (
    <div 
      className="logo-3d-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setRotate({ x: 15, y: -35 }); }}
      style={{ perspective: '1000px' }}
    >
      <div 
        className={`logo-3d-scene ${!hovered ? 'animate-slow-spin' : ''}`}
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)` 
        }}
      >
        {/* Glow dinámico de fondo */}
        <div className="logo-3d-glow" />
        
        {/* Renderizamos las capas en loop */}
        {layers.map((_, index) => (
          <div 
            key={index} 
            className="logo-layer"
            style={{ transform: `translateZ(${index * 2}px)` }}
          >
            <SVGIsotipo isFrontal={index === layers.length - 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo3D;
