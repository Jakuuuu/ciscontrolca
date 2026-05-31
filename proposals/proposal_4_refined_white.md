# Propuesta 4: Evolución Premium (Blanco & Azul)

Esta propuesta responde exactamente al requerimiento de identidad de tu cliente: **mantener al 100% la estética de fondo blanco con azul corporativo y toques dorados** de tu página en producción (`https://ciscontrolmm2.vercel.app`), pero refinada bajo estándares modernos, con transiciones de alta fidelidad, excelente legibilidad y una arquitectura completamente modular.

---

## 🎨 Paleta de Colores y Estilos (Variables CSS)

Copia y pega estas variables en tu `:root` de `src/index.css` si decides adoptar este estilo:

```css
:root {
  /* Fondos Limpios Blanco y Gris Platino */
  --color-background: #F8FAFC; 
  --color-surface: #FFFFFF;
  --color-surface-hover: #F1F5F9;
  
  /* Azul Corporativo Puro y Acentos */
  --color-primary: #1C56A4;       /* Azul Corporativo de Producción */
  --color-primary-hover: #164687; /* Azul Corporativo Oscuro */
  --color-text-main: #0B1120;     /* Slate Text (Casi Negro) */
  --color-text-muted: #64748B;    /* Slate Text Muted */
  --color-tertiary: #D4AF37;      /* Oro Metálico/Bronce */
  
  /* Bordes Redondeados Profesionales */
  --radius-sm: 4px;
  --radius-md: 8px;
  
  /* Sombras Ultra Suaves */
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 16px 36px rgba(28, 86, 164, 0.08);
}
```

---

## 🌟 Mapeo de Datos Modulares

Toda la página está construida dinámicamente consumiendo tus textos e imágenes reales desde:
- `src/data/servicesData.js`
- `src/data/projectsData.js`
- `src/data/aboutData.js`
- `src/data/homeData.js`

De esta forma, cualquier cambio futuro en la redacción o enlaces se realiza en un único archivo de datos sin tocar la estructura visual.

---

## 🚀 Probar en Vivo
El servidor de desarrollo ya está ejecutándose localmente. Abre tu navegador en:
👉 **[http://localhost:5173/propuesta-4](http://localhost:5173/propuesta-4)**
