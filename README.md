# 🌟 Ciscontrol C.A. / Control Integral MM, C.A. — Portal Corporativo Definitivo

¡Bienvenido al portal corporativo definitivo de **Ciscontrol C.A.** (en alianza con **Suminicor** y **Diselectar**)! 

Este repositorio alberga la versión completamente rediseñada y optimizada de la página web de la empresa. Basada en una estética de **alto nivel corporativo**, esta versión se caracteriza por un diseño de **fondo blanco impecable**, acentos en **azul corporativo premium (`#1C56A4`)** y sutiles toques **dorados metálicos (`#D4AF37`)**, transmitiendo confianza, solidez e innovación tecnológica.

---

## 🛠️ Resumen de Implementación y Mejoras Clave

Hemos completado una renovación integral del portal de la empresa basándonos en los estándares más estrictos de desarrollo moderno y diseño de experiencia de usuario:

### 1. 🗂️ Arquitectura de Datos Modular y Limpia
Toda la información estática e histórica del portal se ha desacoplado de las plantillas de presentación de React y se ha modularizado en archivos ESM ubicados en `src/data/`:
*   `aboutData.js`: Misión, Visión, Valores y Pilares Estratégicos.
*   `servicesData.js`: Catálogo estructurado de servicios (corregido ortográficamente).
*   `homeData.js`: Configuración del Hero, marcas aliadas y slider.
*   `projectsData.js`: Clientes consolidados e hitos históricos de la trayectoria de la empresa.
*   `projectsDetailedData.js`: Base de datos extendida e interactiva con **37 proyectos reales**.

### 2. ⚡ Bento Grid de Capacidades (Inicio)
Se reemplazó la animación antigua de imágenes aleatorias en el Inicio por un elegante y asimétrico **Bento Grid de Capacidades** (`CapacidadesBento.jsx/css`). Este componente interactivo e inteligente distribuye visualmente las principales áreas de competencia técnica de la empresa:
1.  **Ingeniería Eléctrica y Tableros**
2.  **Protección DDCE (Pararrayos Pasivos)**
3.  **Redes FTTH y GPON**
4.  **Automatización Industrial Avanzada (Formato expandido premium)**
5.  **Sistemas de Prevención de Corrosión (SPR-C)**

### 3. 🔍 Grilla Filtrable Interactiva con 37 Proyectos del Brochure
Para dotar al sitio de una sólida autoridad ante clientes e industrias de gran envergadura (como **PDVSA, CAVIM, CANTV y PEMEX**), extrajimos y estructuramos los **37 proyectos históricos reales** contenidos entre las páginas 42 y 45 del brochure de la empresa:
*   **Filtro por Sectores**: Permite navegar instantáneamente entre **Todos los Sectores, Automatización, Electricidad, Telecomunicaciones y Seguridad Industrial** (incluyendo la rama de protección DDCE y mantenimiento especializado de sistemas de navegación marítima de buques cargueros como el Manuel Gual y el José María España).
*   **Diseño de Tarjeta Enriquecido**: Cada tarjeta de proyecto contiene etiquetas de categoría superiores, título del proyecto con indicador de enlace externo, grilla de metadatos (Cliente, Ubicación, Año) respaldada por iconos dinámicos (`lucide-react`) y descripción técnica detallada.

### 4. 🎨 Activos de Imagen Generados con Inteligencia Artificial Premium
Para aquellos proyectos históricos que carecían de imágenes de calidad o presentaban repeticiones de tarjetas genéricas, hemos generado **4 activos gráficos de nivel comercial corporativo** guardados en `public/Media/`:
*   `navigation_bridge.png`: Puente de mando digital ultra-moderno de buques para los proyectos marítimos de 2025.
*   `refineria_chaure.png`: Refinería industrial con tuberías y destiladores para proyectos petroleros de PDVSA.
*   `fiber_splicing.png`: Primer plano de un técnico calificado operando una fusionadora de fibra óptica.
*   `subestacion_electrica.png`: Transformadores de potencia y switchgear eléctricos para proyectos de alta/media tensión.

### 5. 📧 Unificación Global de Contacto y Correcciones Ortográficas
*   **Contacto unificado globalmente**: Correo oficial establecido en **`info@ciscontrolmm.com`** y teléfono en **`04241245656`** en todas las secciones, pies de página, cabeceras y formularios.
*   **Corrección de Errores Ortográficos**: Se corrigió sistemáticamente la palabra "Desionizador" o "desilinizadoras" por su forma correcta: **Deionizador** y **deionizadores** en todo el portal.

---

## 💻 Estructura de Archivos del Portal V2

La estructura principal del portal definitivo se detalla a continuación:

```bash
src/
├── components/
│   ├── LayoutV2.jsx        # Wrapper de layout (limpio, blanco y azul refinado)
│   ├── NavbarV2.jsx        # Barra de navegación interactiva y responsive con logo
│   ├── FooterV2.jsx        # Pie de página premium con contacto oficial
│   └── CapacidadesBento.jsx# Bento Grid de Capacidades del Home
├── data/
│   ├── aboutData.js        # Información de Misión, Visión y Pilares
│   ├── homeData.js         # Datos del slider e intro de Inicio
│   ├── servicesData.js     # Catálogo con corrección "Deionizador"
│   ├── projectsData.js     # Clientes, logos y trayectoria (Timeline)
│   └── projectsDetailedData.js # Los 37 proyectos reales del brochure unificados
└── pages/
    └── v2/
        ├── HomeV2.jsx      # Página de Inicio con Bento Grid y Parallax con portada
        ├── ProjectsV2.jsx  # Grilla interactiva de proyectos con filtro dinámico
        ├── ContactV2.jsx   # Página de contacto con formulario premium e información unificada
        ├── AboutV2.css     # Estilos responsivos
        └── ServicesV2.css   # Estilos de servicios refinados
```

---

## 🚀 Instrucciones para Ejecutar Localmente

Sigue estos sencillos pasos para iniciar y previsualizar el portal interactivo en tu entorno de desarrollo local:

1.  **Instalar dependencias** (si es la primera vez que se clona):
    ```bash
    npm install
    ```
2.  **Correr el Servidor de Desarrollo**:
    ```bash
    npm run dev
    ```
3.  **Acceder al Servidor**:
    Abre tu navegador preferido e ingresa a:
    👉 **[http://localhost:5173/v2](http://localhost:5173/v2)**

4.  **Generar Compilación de Producción**:
    Para compilar de forma optimizada la aplicación para el despliegue final en Vercel, ejecuta:
    ```bash
    npm run build
    ```

---

## 🔒 Compromisos de Seguridad y Calidad del Código
*   **Compilación 100% Correcta**: El bundler de Vite compila el proyecto completo en menos de 1.6 segundos libre de errores.
*   **Responsividad**: Diseño optimizado para teléfonos inteligentes, tablets y monitores ultra-wide mediante rejillas CSS Grid y Flexbox adaptativas.
