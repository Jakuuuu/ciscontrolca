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

// Páginas de Vista Previa de Propuestas
import Proposal1 from './pages/proposals/Proposal1';
import Proposal2 from './pages/proposals/Proposal2';
import Proposal3 from './pages/proposals/Proposal3';
import Proposal4 from './pages/proposals/Proposal4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Originales de Producción */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="contacto" element={<Contact />} />
        </Route>

        {/* Rutas Paralelas V2 - Blanco & Azul Refinado */}
        <Route path="/v2" element={<LayoutV2 />}>
          <Route index element={<HomeV2 />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="proyectos" element={<ProjectsV2 />} />
          <Route path="contacto" element={<ContactV2 />} />
        </Route>
        
        {/* Rutas de Vista Previa Interactiva */}
        <Route path="/propuesta-1" element={<Proposal1 />} />
        <Route path="/propuesta-2" element={<Proposal2 />} />
        <Route path="/propuesta-3" element={<Proposal3 />} />
        <Route path="/propuesta-4" element={<Proposal4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
