# Fase 2 — Experiencia de Usuario y Accesibilidad

## Objetivo
Mejorar la experiencia del visitante mediante navegación contextual, orientación en visores 3D, SEO dinámico, manejo de rutas inexistentes y rediseño de la ficha arqueológica con información cultural completa.

---

## Tareas completadas

### 2.1 — Componente Breadcrumb
- Creación de `src/Componentes/UI/Breadcrumb.jsx`.
- Navegación contextual accesible con atributos ARIA (`aria-label`, `aria-current`).
- Integrado en todas las pantallas: Principal, Home, Contact, páginas secundarias culturales y páginas informativas.
- Estilizado con Tailwind y colores institucionales.

### 2.2 — Componente Hint3D
- Creación de `src/Componentes/UI/Hint3D.jsx`.
- Indicador visual animado (framer-motion) que enseña al visitante cómo interactuar con los modelos 3D.
- Se oculta automáticamente al primer `onPointerDown` sobre el visor.
- Integrado en `Datos.jsx` (visor Splat y canvas GLTF) y en `Recuadro3D.jsx`.

### 2.3 — Página 404 NotFound
- Creación de `src/Screens/NotFound.jsx`.
- Diseño institucional con iconografía, mensaje accesible y botones de navegación de regreso.
- Ruta catch-all `path='*'` añadida al final de las rutas en `App.jsx`.

### 2.4 — Rediseño de Datos.jsx
- Layout de dos columnas: **Ficha Arqueológica** (izquierda) y **Contexto Cultural** (derecha).
- Ficha arqueológica: nombre, número de catálogo, badge de cultura con color por zona, período, lugar de hallazgo, dimensiones, material.
- Contexto cultural: descripción, significado, usos, relevancia educativa, "¿Sabías que...?" en destaque dorado.
- Fallback `'No registrado'` para campos nulos.
- `ErrorBoundary` interno para capturar errores en el visor 3D sin romper la ficha.

### 2.5 — Hook useMeta (SEO dinámico)
- Creación de `src/hooks/useMeta.js`.
- Actualiza `<title>` y meta `description` de forma dinámica por ruta.
- Integrado en todas las pantallas principales y secundarias.

### 2.6 — Integración de Hint3D en Recuadro3D.jsx
- `Recuadro3D.jsx` envuelto en contenedor relativo.
- `Hint3D` con estado visible/oculto por primera interacción del puntero.

---

## Archivos clave creados o modificados

| Archivo | Descripción |
|---|---|
| `src/Componentes/UI/Breadcrumb.jsx` | Navegación contextual accesible |
| `src/Componentes/UI/Hint3D.jsx` | Indicador de interacción 3D |
| `src/Screens/NotFound.jsx` | Página 404 institucional |
| `src/Componentes/3D/Datos.jsx` | Ficha arqueológica + contexto cultural rediseñados |
| `src/Componentes/3D/Recuadro3D.jsx` | Integración Hint3D |
| `src/hooks/useMeta.js` | Hook SEO dinámico |
| `src/App.jsx` | Ruta catch-all + import NotFound |
| `src/Screens/Secundarias/*.jsx` | Breadcrumb integrado en las 8 páginas |
| `src/Screens/Contact.jsx` | Breadcrumb integrado |
| `src/Screens/Page.jsx` | Breadcrumb integrado (eliminada en Fase 3) |

---

## Pendiente para Fase 3
- Textos reales (no placeholder) en Principal.jsx y las 8 páginas secundarias.
- Componentes de contenido educativo: SeccionEducativa, LineaTiempo, RecursosEducativos.
- Sección Tradición Viva en Home.jsx.
