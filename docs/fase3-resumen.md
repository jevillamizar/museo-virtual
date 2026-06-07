# Fase 3 — Contenido Real y Arquitectura de Páginas

## Objetivo
Reemplazar todos los textos placeholder con contenido museográfico real, crear los componentes educativos e informativos de la plataforma, estructurar la arquitectura de páginas temáticas y corregir errores de importación de íconos.

---

## Tareas completadas

### 3.1 — Textos reales en Principal.jsx
- Reemplazo completo de textos placeholder por contenido sobre volantes de huso, la Ceramoteca y las 8 culturas arqueológicas.
- Títulos, párrafos y tarjetas del carrusel con información validada por los Anexos de investigación.
- Integración del componente `SeccionEducativa` al final de la pantalla principal.

### 3.2 — SeccionEducativa.jsx
- Creación de `src/Componentes/2D/SeccionEducativa.jsx`.
- Tres bloques educativos: **¿Qué es un volante de huso?**, **Técnica de hilado**, **Lectura cultural**.
- Íconos de `react-icons/gi`, grid responsive, colores institucionales.
- Corrección de error: `GiThread` (inexistente) → `GiYarn`.

### 3.3 — Textos reales en las 8 páginas secundarias
- Reemplazo de textos placeholder en: Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro, Quimbaya.
- Textos culturales específicos por zona arqueológica en componentes `Infotext` y `Texto`.
- `Breadcrumb` integrado en todas las páginas con ítems correctos por página.

### 3.4 — LineaTiempo.jsx
- Creación de `src/Componentes/2D/LineaTiempo.jsx`.
- 5 eventos históricos con fecha, título, texto, ícono y color por era.
- Períodos: Formativos → Tumaco-La Tolita → Período Clásico → Tardío → Tradición Viva.
- Layout alternado izquierda/derecha en desktop, lineal en móvil.
- Corrección de error: `GiPottery` (inexistente) → `GiBrokenPottery`.
- Integrado en `Home.jsx`.

### 3.5 — Sección Tradición Viva en Home.jsx
- Nuevo bloque en `Home.jsx` con tres tarjetas de íconos: comunidades actuales, técnica viva, conexión pasado-presente.
- Colores institucionales Unicauca, layout responsive en 3 columnas.

### 3.6 — RecursosEducativos.jsx
- Creación de `src/Componentes/2D/RecursosEducativos.jsx`.
- Tres recursos con ícono, título, descripción y botón de acción.
- Corrección de error: `GiThread` (inexistente) → `GiYarn`.
- Integrado en `Home.jsx`.

### 3.7 — Rediseño de HojaLibro.jsx
- Eliminación de alturas fijas que causaban solapamiento entre imagen, texto y botón.
- Imagen con `object-cover` y altura fija por breakpoint.
- Texto con `line-clamp` responsive (4/5/6 líneas según viewport).
- `h-full` + `items-stretch` para igualar altura entre tarjetas hermanas.
- Botón siempre al fondo con `flex-1` en el párrafo.

### 3.8 — Arquitectura de páginas temáticas
- **Eliminación** de `Page.jsx` (contenido placeholder) y su ruta `/Page`.
- **Creación** de `Volantes.jsx` → `/Volantes`: colección de volantes + Recuadro3D + grid de 8 culturas.
- **Creación** de `Ceramoteca.jsx` → `/Ceramoteca`: panorama 360° + descripción + 3 bloques informativos.
- **Creación** de `Textiles.jsx` → `/Textiles`: historia textil + 4 etapas del proceso + tradición viva.
- **Rediseño** de `Contact.jsx`: formulario institucional con validación, 4 bloques de info de contacto y mapa embebido.

### 3.9 — Actualización de rutas y navegación
- `App.jsx`: rutas `/Volantes`, `/Ceramoteca`, `/Textiles` añadidas; `/Page` eliminada.
- `Navbar1.jsx`: link "Volantes" → `/Volantes` (desktop y móvil); texto corregido a "Volantes de huso".
- `Principal.jsx`: links de `Recuadro360` → `/Ceramoteca`, `HojaLibro` "Textiles" → `/Textiles`, `HojaLibro` "Colección" → `/Volantes`.

---

## Correcciones de errores

| Error | Archivo afectado | Solución |
|---|---|---|
| `GiThread` no existe en react-icons/gi | `SeccionEducativa.jsx`, `RecursosEducativos.jsx` | Reemplazado por `GiYarn` |
| `GiPottery` no existe en react-icons/gi | `LineaTiempo.jsx` | Reemplazado por `GiBrokenPottery` |
| Múltiples nodos raíz en `Home.jsx` | `Home.jsx` | Envuelto en fragmento `<>...</>` |
| Solapamiento de texto sobre imagen en HojaLibro | `HojaLibro.jsx` | Eliminadas alturas fijas, `object-cover`, `line-clamp` |

---

## Archivos clave creados o modificados

| Archivo | Descripción |
|---|---|
| `src/Componentes/2D/SeccionEducativa.jsx` | Bloques educativos sobre volantes de huso |
| `src/Componentes/2D/LineaTiempo.jsx` | Línea de tiempo histórica interactiva |
| `src/Componentes/2D/RecursosEducativos.jsx` | Recursos para docentes y comunidades |
| `src/Componentes/2D/HojaLibro.jsx` | Rediseño layout sin solapamiento |
| `src/Screens/Volantes.jsx` | Página de la colección de volantes |
| `src/Screens/Ceramoteca.jsx` | Página de la Ceramoteca |
| `src/Screens/Textiles.jsx` | Página de textiles arqueológicos |
| `src/Screens/Contact.jsx` | Formulario de contacto institucional |
| `src/Screens/Principal.jsx` | Textos reales + links corregidos |
| `src/Screens/Home.jsx` | LineaTiempo + TradiciónViva + RecursosEducativos |
| `src/Screens/Secundarias/*.jsx` | Textos reales + Breadcrumb en 8 páginas |
| `src/App.jsx` | Nuevas rutas, eliminación de /Page |
| `src/Componentes/Navbar1.jsx` | Link Volantes corregido |
| ~~`src/Screens/Page.jsx`~~ | Eliminado (contenido placeholder) |

---

## Pendiente para Fase 4
- Arquitectura de analytics GA4.
- Tracking de interacciones con modelos 3D.
- Footer institucional.
- Banner de consentimiento de cookies.
- Formulario de retroalimentación conectado a Supabase.
