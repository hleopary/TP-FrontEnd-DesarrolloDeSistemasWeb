# Grupo Clouds - Trabajo Práctico 1 Frontend

## Descripción

Este proyecto es una web grupal desarrollada para la entrega del TP1 de Frontend. La propuesta se presenta como Grupo Clouds, una identidad visual de estilo corporativo moderno orientada a una empresa de software y soluciones cloud.

El sitio incluye una portada principal, una bitácora de desarrollo y una página individual para cada integrante. La navegación está pensada para que el recorrido sea directo desde el menú principal, sin depender del botón Atrás del navegador.

## Links de entrega

- Repositorio: pendiente de completar.
- Deploy en Vercel: pendiente de completar.

## Integrantes

- Eduardo Moreno - página personal: [eduardo.html](eduardo.html) - GitHub: pendiente de completar.
- Leandro Paryszewsi - página personal: [leandro.html](leandro.html) - GitHub: pendiente de completar.
- Marcelo Moreno - página personal: [marcelo.html](marcelo.html) - GitHub: pendiente de completar.
- Melissa Galeano - página personal: [melisa.html](melisa.html) - GitHub: pendiente de completar.

## Tecnologías utilizadas

- HTML5.
- CSS3 con arquitectura modular.
- JavaScript.
- Google Fonts.
- Material Symbols Outlined.
- Git y GitHub.
- Vercel para publicación.

## Estructura del proyecto

- index.html: portada principal del sitio.
- bitacora.html: registro del proceso de trabajo.
- eduardo.html, leandro.html, marcelo.html, melisa.html: perfiles individuales de cada integrante.
- css/: estilos organizados por capas y vistas.
- js/main.js: lógica compartida del sitio.
- img/: recursos visuales del proyecto.
- Documentacion/: consigna, arquitectura, estilo visual y bitácoras del TP.

### Organización de CSS

La hoja principal css/style.css funciona como entrada del sistema de estilos y se apoya en una estructura modular separada por responsabilidad:

- css/base/: reseteo, tokens y utilidades.
- css/components/: navbar, footer y componentes reutilizables.
- css/layout/: media queries y ajustes de composición.
- css/pages/: estilos específicos de portada, bitácora y perfiles.
- css/theme/: soporte para modo oscuro.

## Guía visual

### Paleta de colores

La identidad visual está basada en la dirección definida en la documentación del proyecto, con una estética llamada Atmospheric Logic.

- Primario: #006591.
- Primario destacado: #0ea5e9.
- Secundario: #006c4f.
- Fondo principal: #fbf8fc.
- Superficie elevada: #ffffff.
- Texto principal: #1b1b1e.

### Tipografías

- Títulos: Plus Jakarta Sans.
- Cuerpo: Inter.

### Iconografía e imágenes

- Iconos: Material Symbols Outlined.
- Avatares e imágenes: uso de imágenes públicas y recursos generados o curados para mantener la privacidad del equipo.

## JavaScript

La lógica interactiva está centralizada en js/main.js y se reutiliza en todo el sitio.

- Portada y páginas internas: cambio de tema claro/oscuro con persistencia en localStorage y fallback a la preferencia del sistema.
- Perfiles individuales: carrusel de películas con navegación por flechas y puntos indicadores.
- Perfiles individuales: apertura y cierre de trailers mediante botones de reproducción.

### Funciones añadidas (nombre, ubicación, descripción)

- `initThemeToggle` — Ubicación: `js/main.js`. Descripción: gestiona el cambio de tema claro/oscuro; añade/quita la clase `dark` en el elemento raíz, persiste la preferencia en `localStorage` y usa la preferencia del sistema como fallback.

- `initMovieCarousel` — Ubicación: `js/main.js` (inline en páginas de perfil). Descripción: controla el carrusel de películas (navegación por flechas y dots), carga y detiene trailers en iframes y actualiza el estado visual de las slides.

- `initNavbarInteractions` — Ubicación: `js/main.js` (inline en páginas). Descripción: crea dinámicamente el overlay y el panel slide-out para navegación móvil, gestiona la apertura/cierre del menú hamburguesa y adapta el dropdown `Team` para permitir toggle por clic en dispositivos táctiles.

- `initBackToTop` — Ubicación: `eduardo.html`. Descripción: crea un botón flotante "Volver arriba"; aparece al hacer scroll y realiza scroll suave hasta el inicio al pulsarlo.

La interactividad está aplicada en la portada, la bitácora y las páginas de integrantes mediante componentes compartidos, no con scripts duplicados por página.

## Uso de IA

Durante el desarrollo se utilizó asistencia de IA como apoyo técnico y editorial. Este espacio queda preparado para documentar con precisión las herramientas usadas por el equipo.

- Herramientas utilizadas: GitHub Copilot.
- Uso en contenido y código: apoyo para organizar la documentación, redactar textos y revisar HTML, CSS y JavaScript.
- Imágenes: avatares públicos y recursos visuales seleccionados para preservar la privacidad del equipo.

Si el equipo utilizó otras herramientas como ChatGPT o Gemini, conviene agregarlas en esta sección junto con el uso concreto que tuvieron.

## Capturas de pantalla

Agregar aquí capturas finales de:

- Portada principal.
- Bitácora.
- Cada perfil individual.

## Documentación complementaria

- [Inicio de documentación](Documentacion/Index-Principal.md)
- [Consigna TP1](Documentacion/Consigna%20TP1%20-%20Markdown.md)
- [Arquitectura](Documentacion/Proyecto-Core/Arquitectura.md)
- [Estilo visual](Documentacion/Proyecto-Core/Estilo-Visual.md)

## Notas

- El proyecto está preparado para responsive design en 400px, 900px y 1200px.
- La navegación principal debe mantenerse disponible en todas las secciones.
- La bitácora debe seguir ampliándose con cada entrega y evolución del proyecto.