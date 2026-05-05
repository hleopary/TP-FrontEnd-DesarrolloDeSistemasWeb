---
title: Arquitectura
status: activo
updated: 2026-04-19
---

# Arquitectura

## Estructura del repositorio

```text
TP-FrontEnd-DesarrolloDeSistemasWeb/
├─ README.md
├─ Documentacion/
│  ├─ Index-Principal.md
│  ├─ Consigna TP1 - Markdown.md
│  ├─ Proyecto-Core/
│  │  ├─ Overview.md
│  │  ├─ Arquitectura.md
│  │  ├─ Estilo-Visual.md
│  │  ├─ DESIGN.md
│  │  └─ Consignas-Faltantes-Por-Definir.md
│  ├─ Bitacora/
│  │  ├─ Bitacora/
│  │  │  ├─ Index-Bitacora.md
│  │  │  └─ YYYY-MM-DD.md
│  │  └─ BitacoraIA/
│  │     ├─ Index-BitacoraIA.md
│  │     ├─ Eduardo-IA.md
│  │     ├─ Leandro-IA.md
│  │     ├─ Marcelo-IA.md
│  │     └─ Melisa-IA.md
│  └─ Imagenes/
└─ Proyecto/
	├─ index.html
	├─ bitacora.html
	├─ eduardo.html
	├─ leandro.html
	├─ marcelo.html
	├─ melisa.html
	├─ css/
	│  ├─ base/
	│  ├─ components/
	│  ├─ layout/
	│  ├─ pages/
	│  ├─ theme/
	│  └─ style.css
	├─ js/
	│  └─ main.js
	└─ img/
		├─ avatares/
		├─ fondos/
		└─ ui/
```

## Frontend (entregable TP1)

- `index.html`: portada principal y acceso a todas las secciones.
- `bitacora.html`: registro del proceso dentro del menu principal.
- `eduardo.html`, `leandro.html`, `marcelo.html`, `melisa.html`: una pagina por integrante.
- `css/style.css`: entrypoint que enlaza la arquitectura modular de estilos (variables, componentes y vistas).
- `js/main.js`: interacciones compartidas del sitio.
- `img/`: recursos visuales usados por la web final.

## Criterios

- Navegacion comun en todas las paginas.
- Componentes reutilizables.
- Interacciones JS pequenas y visuales en portada y paginas individuales.
- Responsive en 400px, 900px y 1200px.

## Convenciones

- Los HTML viven en la raiz de `Proyecto`.
- Guía de Diseño: Utilizar rigurosamente `DESIGN.md` como fuente de verdad para componentes, colores y animaciones estéticas.
- La hoja de estilos principal es `css/style.css`, la cual funciona únicamente como índice mediante `@import`. El CSS debe distribuirse modularmente dentro de sus respectivos subdirectorios (`base/`, `components/`, etc.).
- Se usa un solo script global: `js/main.js`.
- Imagenes de entrega solo en `Proyecto/img`.
- Nombres de archivos en minuscula y sin espacios.
- Las minutas de reunion usan formato `YYYY-MM-DD.md`.
- Cada cambio asistido por IA se registra en `Documentacion/Bitacora/BitacoraIA/`.

## Regla de trabajo

Evitar estilos y funciones duplicadas. Si una solucion sirve para varias paginas, debe vivir en un bloque reutilizable o en una funcion compartida.
