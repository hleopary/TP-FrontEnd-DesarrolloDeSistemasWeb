---
title: Index Bitacora
status: activo
owner: equipo-clouds
updated: 2026-04-16
---

# Index Bitacora

Este indice agrupa la documentacion de proceso, reuniones y uso de IA.

## Minutas de reunion

- [[Bitacora/Bitacora/2026-04-17]]
- [[Bitacora/Bitacora/2026-04-08]]

## Estructura estandar para minutas con fecha

Todo documento de reunion con formato `YYYY-MM-DD.md` debe seguir esta estructura:

1. Frontmatter:
- `title`: Minuta YYYY-MM-DD
- `status`: activa o archivada

2. Titulo principal:
- `# Minuta de Reunion - Nombre del equipo`

3. Datos de la reunion:
- Fecha
- Participantes

4. Propuestas discutidas:
- Listado numerado de propuestas evaluadas

5. Contexto de trabajo y herramientas:
- Contexto general
- Archivo de contexto compartido (si aplica)
- Stack de IA sugerido (si aplica)

6. Procedimientos obligatorios por reunion:
- Decisiones de diseno
- Bitacora de errores
- Registro de IA

7. Nota final:
- Fuente de asistencia IA usada para redactar la minuta (si aplica)

## Plantilla base (copiar y completar)

```markdown
---
title: Minuta YYYY-MM-DD
status: activa
---

# Minuta de Reunion - Grupo Clouds

## Datos de la reunion

Fecha: 
Participantes: 

## Propuestas discutidas

1. 
2. 
3. 

## Contexto de trabajo y herramientas


### Archivo de contexto compartido

- 

### Stack de IA sugerido

- 

## Procedimientos obligatorios por reunion

### 1. Decisiones de diseno

- 

### 2. Bitacora de errores

- 

### 3. Registro de IA

- 

## Nota

Nota: 
```

## Regla de mantenimiento

- Toda nueva minuta se agrega en `Bitacora/Bitacora/`.
- Toda asistencia de IA se documenta por integrante en `Bitacora/BitacoraIA/`.
