// src/data/projectsData.js

export const projectsData = [
  { 
    id: 1, 
    title: 'La Vega (2.800 pts ópticos)', 
    category: 'Fibra Óptica (FTTH) - JM TELECO', 
    description: 'Diseño e instalación masiva de fibra óptica corporativa.', 
    image: '/Media/fiber_splicing.png' 
  },
  { 
    id: 2, 
    title: 'Plataforma E-KU-A2 PEMEX', 
    category: 'Protección DDCE - Sector Petrolero', 
    description: 'Sustitución de 20 pararrayos Franklin por 2 sistemas DDCE-100.', 
    image: '/Media/media_ddce_pemex.png' 
  },
  { 
    id: 3, 
    title: 'Lomas del Ávila (3.472 pts)', 
    category: 'Fibra Óptica (FTTH) - CANTV', 
    description: 'Despliegues GPON y última milla en urbanismos complejos.', 
    image: '/Media/fibra.png' 
  },
  { 
    id: 4, 
    title: 'Radares en España y USA', 
    category: 'Protección - Telecomunicaciones', 
    description: 'Protección en más de 30 radares para aeropuertos españoles.', 
    image: '/Media/media_ddce_spain.png' 
  },
  { 
    id: 5, 
    title: 'Planta de Ácido Nítrico CAVIM', 
    category: 'Automatización Industrial', 
    description: 'Instrumentación avanzada y automatización de procesos críticos.', 
    image: '/Media/automatizacion.png' 
  },
  { 
    id: 6, 
    title: 'Refinería El Chaure Fase II', 
    category: 'Electricidad - PDVSA', 
    description: 'Desarrollo de Power House y Estación de Agua Salada.', 
    image: '/Media/refineria_chaure_fase2.png' 
  },
  { 
    id: 7, 
    title: 'Subestaciones de Alta Tensión', 
    category: 'Protección DDCE - Electricidad', 
    description: 'Sistemas instalados en ENDESA (Barcelona) y 138Kv Bávaro.', 
    image: '/Media/subestacion_electrica.png' 
  },
  { 
    id: 8, 
    title: 'Flotas Navieras y Radares', 
    category: 'Mantenimiento Especializado', 
    description: 'Sistemas de navegación en buques Atlantic Global Transport S.A.', 
    image: '/Media/navigation_bridge.png' 
  },
  { 
    id: 9, 
    title: 'Reservorio Agua Faisaliah', 
    category: 'Protección Infraestructura', 
    description: 'Cobertura atmosférica de vanguardia en Arabia Saudita.', 
    image: '/Media/media_ddce_towers.png' 
  }
];

export const clientsData = [
  "PDVSA",
  "CANTV",
  "CAVIM",
  "CORPOELEC",
  "Seguros Horizonte C.A.",
  "MINEC",
  "ATLANTIC GLOBAL TRANSPORT S.A.",
  "PEMEX"
];

export const timelineData = [
  { 
    year: '2003-2005', 
    subtitle: 'Inicios y Automatización', 
    description: 'Consolidación en la instalación de Sistemas de Seguridad Electrónica e inicio de la automatización en la Planta de Ácido Nítrico de CAVIM.' 
  },
  { 
    year: '2006-2011', 
    subtitle: 'Servicios Petroleros', 
    description: 'Fuertes contratos de servicios profesionales en automatización industrial, calibración de instrumentos y migración de sistemas Scada para diversas filiales de PDVSA (Gas, Petróleo, INTEVEP).' 
  },
  { 
    year: '2023-2024', 
    subtitle: 'Redes Masivas FTTH', 
    description: 'Fuerte incursión en las telecomunicaciones, ejecutando redes FTTH masivas de miles de puntos ópticos para empresas como CANTV y JM Teleco.' 
  },
  { 
    year: '2025', 
    subtitle: 'Expansión Marítima', 
    description: 'Expansión de servicios hacia el mantenimiento especializado de sistemas de navegación marítima y radares de gran escala.' 
  }
];
