// Fotos reales extraídas del Brochure General (public/Media/hero).
// Orden obligatorio de servicios: Electricidad, Automatización, DDCE, PC3 (SPRC), Fibra óptica.
// Las imágenes son de baja resolución (≈400–1800px de ancho): evitar mostrarlas a pantalla
// completa sin overlay/oscurecido, o usarlas en paneles/marcos más pequeños.

export const heroServices = [
  { id: 'electricidad', label: 'Electricidad' },
  { id: 'automatizacion', label: 'Automatización' },
  { id: 'ddce', label: 'DDCE' },
  { id: 'pc3', label: 'PC3' },
  { id: 'fibra', label: 'Fibra óptica' },
];

export const heroSlides = [
  { src: '/Media/hero/01-electricidad-tableros.jpg', service: 'electricidad', caption: 'Centros de control de motores y tableros de potencia', position: 'center', width: 823, height: 651 },
  { src: '/Media/hero/02-electricidad-subestacion.jpg', service: 'electricidad', caption: 'Subestación eléctrica — Refinería El Chaure (PDVSA)', position: 'center', width: 717, height: 648 },
  { src: '/Media/hero/03-automatizacion-sala-control.jpg', service: 'automatizacion', caption: 'Sistemas SCADA y salas de control', position: 'center', width: 592, height: 339 },
  { src: '/Media/hero/04-automatizacion-valvulas.jpg', service: 'automatizacion', caption: 'Instrumentación y control en campo', position: 'center 30%', width: 809, height: 580 },
  { src: '/Media/hero/05-ddce-torres.jpg', service: 'ddce', caption: 'Protección contra descargas atmosféricas en subestaciones', position: 'center', width: 418, height: 316 },
  { src: '/Media/hero/06-ddce-plataforma.jpg', service: 'ddce', caption: 'Sistemas DDCE en plataformas petroleras', position: 'center', width: 397, height: 268 },
  { src: '/Media/hero/07-pc3-pozo.jpg', service: 'pc3', caption: 'Prevención y remoción de corrosión en pozos', position: '35% center', width: 1816, height: 562 },
  { src: '/Media/hero/08-pc3-refineria.jpg', service: 'pc3', caption: 'Soluciones anticorrosión para la industria petrolera', position: 'center 40%', width: 602, height: 793 },
  { src: '/Media/hero/09-fibra-empalme.jpg', service: 'fibra', caption: 'Empalme y certificación de fibra óptica', position: 'center', width: 829, height: 572 },
  { src: '/Media/hero/10-fibra-despliegue.jpg', service: 'fibra', caption: 'Diseño y despliegue de redes FTTH', position: 'center', width: 1148, height: 642 },
];
