---
title: Bitacora IA - Marcelo
status: en-progreso
integrante: marcelo
updated: 2026-04-19
---

# Bitacora IA - Marcelo

## Formato de registro

Esta bitacora se mantiene en formato changelog.
Cada entrada representa un cambio puntual realizado con asistencia de IA.

## Changelog

### [2026-04-19] Refactorización a CSS Vanilla, Menú Desplegable y Modo Oscuro "Relámpago Dorado"

- Tipo: Refactorización y UI/UX Frontend.
- Modelo: Claude Opus 4.6 (Thinking) / Gemini 3.1 Pro.
- Herramienta: AI Assistant.
- Archivos impactados:
  - `Proyecto/index.html`
  - `Proyecto/css/style.css`
  - `Proyecto/js/main.js`
- Cambio:
  - Migración completa de clases utilitarias de Tailwind a CSS vanilla estructurado con metodología BEM.
  - Actualización de la barra de navegación: Enlaces a "Principal", "Bitácora", y creación de un menú desplegable interactivo "Team" para los integrantes.
  - Implementación del modo oscuro basado en estética "Relámpago Dorado" (inspirado en `indexexample2.html`), y adición de un botón de toggle dinámico (Sol/Luna) usando JavaScript y `localStorage`.
- Impacto:
  - Cumplimiento de requisitos de usar CSS vanilla puro. Mejora sustancial de la arquitectura de la interfaz y usabilidad con capacidades de tematización y navegación optimizada.
- Validación manual:
  - Se verificó visualmente el resultado comprobando estilos de Tailwind removidos, la apertura del dropdown de equipo sin errores, y persistencia del switch de modo oscuro en la recarga del navegador.

### [2026-04-17] Generación de prototipos visuales y reglas de diseño

- Tipo: Diseño y Prototipado Frontend.
- Modelo: Modelo interno de Google Stitch.
- Herramienta: Google Stitch.
- Archivos impactados:
  - `Documentacion/ejemploshtml/indexexample2.html`
  - `Documentacion/ejemploshtml/bitacora.html`
  - `Documentacion/ejemploshtml/tarjeta.html`
  - `Documentacion/Proyecto-Core/DESIGN.md`
- Cambio:
  - Se elaboraron maquetas funcionales y demostraciones de diseño en HTML usando el nuevo tema corporativo (Lógica Atmosférica).
  - Se redactó `DESIGN.md` como guía central de estilo UI/UX, definiendo la regla de 'cero líneas', colores de estratosfera y fuentes asimétricas.
- Impacto:
  - Establece la base de código frontend y la arquitectura visual que todo el equipo deberá usar para el resto de la cursada/proyecto.
- Validacion manual:
  - El equipo revisó los HTMLs generados comprobando la responsividad y la cohesión con la dirección estética dictada.