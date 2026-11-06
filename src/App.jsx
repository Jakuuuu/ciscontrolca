import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Estructura y Páginas de la Versión 2 (Blanco & Azul Refinado)
import LayoutV2 from './components/LayoutV2';
import HomeV2 from './pages/v2/HomeV2';
import ProjectsV2 from './pages/v2/ProjectsV2';
import ContactV2 from './pages/v2/ContactV2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Principales Definitivas (V2 - Blanco & Azul Refinado) */}
        <Route path="/" element={<LayoutV2 />}>
          <Route index element={<HomeV2 />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="proyectos" element={<ProjectsV2 />} />
          <Route path="contacto" element={<ContactV2 />} />
        </Route>

        {/* Rutas de Respaldo / Históricas (V1) */}
        <Route path="/v1" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
