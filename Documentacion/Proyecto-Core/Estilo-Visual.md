---
title: Estilo Visual
status: en-progreso
updated: 2026-04-16
---

# Estilo Visual

## Dirección estética

- **Norte Creativo:** "Lógica Atmosférica" (Atmospheric Logic).
- **Concepto:** Interpretar la nube como un entorno expansivo e ingrávido, superando la estética estándar de software con un diseño de tipo "editorial" que respira.
- **Técnicas clave:** Asimetría intencional (espacios amplios a un lado) y Profundidad tonal usando cambios sutiles de fondo y sombras suaves en lugar de líneas fuertes.
- **Objetivo:** Reflejar software de alto rendimiento como una infraestructura invisible.

## Decisiones a definir

- Ajustar comportamientos responsivos si los textos `display` solapan el layout asimétrico.
- Crear prototipos de interacciones ("hover states") usando el "Atmospheric Glow".

## Decisiones aplicadas (Atmospheric Logic)

- **Paleta de Estratosfera:**
	- Primario: `#006591` (Acciones principales).
	- Contenedor Primario: `#0ea5e9` (Highlights, sky accent, gradientes).
	- Secundario: `#006c4f` (Estados de éxito).
	- Superficies: `surface_container_lowest` (#ffffff) para elementos elevados y `surface` (#fbf8fc) para el canvas base.
	- Tinta de texto: Evitar negro puro absoluto. Usar `on_surface` (#1b1b1e).
- **Regla de "Cero Líneas":** Prohibido usar bordes de `1px` sólidos para separar secciones o tarjetas.
- **Glassmorphism:** Uso de color de superficie al 70% de opacidad y `backdrop-blur` de `24px` para modales y navegación flotante.
- **Tipografías:** `Plus Jakarta Sans` para titulares editoriales e `Inter` para cuerpos de texto funcionales.
- **Estilos de UI:** Botones primarios con gradiente a 135 grados (radio `md` - 0.75rem). Tarjetas con radio `xl` (1.5rem) sin divisores internos.

## Responsive aplicado

- Breakpoint `1200px`: ajuste de ancho del contenedor.
- Breakpoint `900px`: centrado de header y navegacion.
- Breakpoint `400px`: enlaces de navegacion apilados a ancho completo.

## Pendientes de cierre visual

- Refactorizar hoja de estilos (`style.css`) para eliminar el tema RPG e inyectar las variables CSS de la Estratosfera (`:root`).
- Implementar importaciones para las tipografías *Plus Jakarta Sans* e *Inter*.
- Adaptar las tarjetas e inputs de formulario eliminando bordes directos y aplicando la separación por campos tonales o "Borde fantasma" (15% de opacidad).
- Construir clase especial `.atmospheric-glow` para highlights con gradientes radiales e inyectar *Cloud Shadows* (opacidad 4%, blur 40px) a contenedores flotantes.

## Registro (Decisiones "Atmospheric Logic")

**Colores y Elevación (No-Line Rule):**
- *Por qué se eligió:* Transmite un nivel "premium", limpio y evoca el concepto de "Nube" e infraestructura rápida.
- *Dónde se aplica:* Fondos, navbars, modales flotantes y separación de contenedores.
- *Beneficio:* Elimina la sensación de encierro de las "cajas", dando lugar a una IU que respira.

**Tipografía Editorial (Asimetría Intencional):**
- *Por qué se eligió:* `Plus Jakarta Sans` emparejada con `Inter` da precisión técnica junto con calidad de diseño humano y audaz.
- *Dónde se aplica:* Encabezados asimétricos con alta separación y mucha zona en blanco; y cuerpos de texto.
- *Beneficio:* Mejora radicalmente la accesibilidad al no amontonar datos y crear un impacto visual de clase alta a primer vistazo.
