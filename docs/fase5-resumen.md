# Fase 5 — UI Visual, Componentes Reutilizables y Animaciones

## Objetivo
Establecer una identidad visual consistente en toda la aplicación mediante componentes reutilizables, mejorar la experiencia de usuario con animaciones de entrada al hacer scroll, y actualizar las páginas secundarias para presentar las zonas arqueológicas con encabezados y secciones informativas de alto impacto visual.

---

## Tareas completadas

### 5.1 — HeroBanner en página Principal
- Creación de `src/Componentes/2D/HeroBanner.jsx`.
- Degradado verde institucional con overlay y animaciones de entrada via `framer-motion`.
- Botón de scroll suave hacia la sección de áreas arqueológicas.
- Botón de navegación secundario hacia la colección de volantes.

### 5.2 — SectionTitle reutilizable
- Creación de `src/Componentes/UI/SectionTitle.jsx`.
- Props: `titulo` (requerido), `subtitulo` (opcional), `alineacion` (`'center'` | `'left'`, default `'center'`).
- Título en `font-poppins font-bold text-unicauca-azul`, línea decorativa amarilla y subtítulo en rojo institucional.
- Integrado como estándar de encabezado de sección en toda la aplicación.

### 5.3 — Actualización de Principal.jsx
- Reducido a 4 zonas arqueológicas activas: Popayán, Corinto, Patía y Quimbaya.
- Textos del carrusel y encabezados actualizados para reflejar solo las 4 zonas.

### 5.4 — Reorganización visual de Home.jsx
- Refactorizado siguiendo la estructura de `Contact.jsx` con `Breadcrumb` y `main`.
- Ajuste de espaciado y actualización de textos a las 4 zonas activas.
- Sección introductoria con imagen y texto añadida debajo del encabezado.

### 5.5 — Ajustes visuales generales
- `Navbar1.jsx`: añadido overlay `bg-black/40` para mayor contraste visual con el `HeroBanner`. Color hover del menú corregido a `bg-unicauca-azulhover`.
- `Retroalimentacion.jsx`: color del botón de envío cambiado a `bg-unicauca-azul` con hover `bg-unicauca-azulhover`.
- `Volantes.jsx`: reducido texto del encabezado, grilla reducida a 4 zonas, sección introductoria con imagen añadida.
- `MapI.jsx`: eliminados marcadores de zonas inactivas (Calima, Nariño, Tumaco, TierraAdentro); corregido el centro y zoom del mapa; corregida la coordenada de Quimbaya.
- `App.jsx`: rutas de Calima, Nariño, Tumaco y TierraAdentro desactivadas (redirigen a `NotFound`) sin eliminar sus archivos.

### 5.6 — Badges de cultura en tarjetas del carrusel
- `Card.jsx` modificado para aceptar props `cultura` (string) y `colorCultura` (clase Tailwind).
- Badge `absolute top-3 left-3 z-10` sobre la imagen con texto en mayúsculas, bordes redondeados y color por cultura.
- `Principal.jsx` actualizado con los colores asignados a cada zona:
  - Popayán → `bg-green-700 text-white`
  - Corinto → `bg-orange-700 text-white`
  - Patía → `bg-teal-700 text-white`
  - Quimbaya → `bg-amber-700 text-white`

### 5.7 — Componente PageHeader
- Creación de `src/Componentes/UI/PageHeader.jsx`.
- Props: `titulo` (requerido), `imagen` (opcional), `breadcrumbItems` (array, requerido).
- Imagen de fondo `object-cover` con overlay `bg-green-900/65`; fallback a degradado si no hay imagen.
- Título centrado en `font-poppins font-bold text-4xl md:text-5xl text-white drop-shadow-lg`.
- Integra `<Breadcrumb dark />` con texto blanco sobre el overlay.
- `Breadcrumb.jsx` extendido con prop `dark` (boolean, default `false`) para cambiar todos los colores a blanco/blanco semitransparente.
- Integrado en las 4 páginas secundarias activas: `Popayan.jsx`, `Corinto.jsx`, `Patia.jsx`, `Quimbaya.jsx`.

### 5.8 — Componente SeccionInfo
- Creación de `src/Componentes/2D/SeccionInfo.jsx`.
- Props: `imagen` (string, requerido), `titulo` (string, requerido), `parrafos` (array de strings, requerido), `invertido` (boolean, default `false`).
- Layout 2 columnas desktop (5/12 imagen, 7/12 texto), 1 columna móvil.
- Imagen con `rounded-xl shadow-lg object-cover h-80 md:h-96` y efecto de offset vertical (`md:translate-y-6` / `md:-translate-y-6`).
- Texto con título `font-poppins font-bold text-green-800`, línea decorativa `bg-yellow-600` y párrafos en `text-gray-600`.
- Integrado en las 4 páginas secundarias activas con `invertido` alternado para variedad visual:
  - Popayán → `invertido=false`
  - Corinto → `invertido=false`
  - Patía → `invertido=true`
  - Quimbaya → `invertido=false`

### 5.10 — Animaciones de entrada con framer-motion
- Creación de `src/hooks/useRevealOnScroll.js`:
  - Hook `useRevealOnScroll(opciones)`: combina `useRef` + `useInView` con `once: true` y `margin: '-50px'`.
  - Variante `revealVariants`: fade + slide-up (`y: 40 → 0`, 0.6s, easeOut).
  - Variante `revealFromLeft`: fade + slide desde la izquierda (`x: -40 → 0`, 0.6s, easeOut).
  - Variante `revealFromRight`: fade + slide desde la derecha (`x: 40 → 0`, 0.6s, easeOut).
  - Variante `staggerContainer`: contenedor que distribuye la animación con `staggerChildren: 0.15s`.
- `SeccionEducativa.jsx`: `staggerContainer` en el grid de 3 tarjetas; `revealVariants` en cada tarjeta hija (delay escalonado de 0.15s entre ellas).
- `SeccionInfo.jsx`: animación simétrica izquierda/derecha según el prop `invertido`; imagen y texto se revelan desde lados opuestos.
- `SectionTitle.jsx`: `revealVariants` con `once: true` en el contenedor del título.

---

## Arquitectura de componentes creados

```
src/
├── hooks/
│   └── useRevealOnScroll.js        # Hook + variantes framer-motion
├── Componentes/
│   ├── 2D/
│   │   ├── SeccionInfo.jsx         # Layout asimétrico imagen/texto (NUEVO)
│   │   └── SeccionEducativa.jsx    # 3 tarjetas educativas (ANIMADO)
│   └── UI/
│       ├── PageHeader.jsx          # Header con imagen + overlay + breadcrumb (NUEVO)
│       ├── SectionTitle.jsx        # Título de sección reutilizable (ANIMADO)
│       └── Breadcrumb.jsx          # Extendido con prop dark
```

---

## Páginas secundarias — estado tras Fase 5

Cada página activa (Popayán, Corinto, Patía, Quimbaya) tiene ahora la siguiente estructura:

```
<PageHeader titulo imagen breadcrumbItems />          ← Encabezado visual (5.7)
<SeccionInfo imagen titulo parrafos invertido />      ← Sección intro asimétrica (5.8)
<Boxtext />                                            ← Subtítulo de bloque
<imagen + Texto /> × 2                                 ← Bloques existentes
<selector de pieza + Datos />                         ← Visor 3D (preexistente)
```

---

## Archivos clave creados o modificados

| Archivo | Descripción |
|---|---|
| `src/hooks/useRevealOnScroll.js` | Hook y variantes de animación reutilizables (NUEVO) |
| `src/Componentes/UI/PageHeader.jsx` | Header con imagen, overlay y breadcrumb blanco (NUEVO) |
| `src/Componentes/2D/SeccionInfo.jsx` | Layout asimétrico imagen/texto con animaciones (NUEVO) |
| `src/Componentes/2D/HeroBanner.jsx` | Hero de la página principal (NUEVO) |
| `src/Componentes/UI/SectionTitle.jsx` | Título de sección con animación reveal (NUEVO + ANIMADO) |
| `src/Componentes/2D/SeccionEducativa.jsx` | 3 tarjetas educativas con stagger (ANIMADO) |
| `src/Componentes/UI/Breadcrumb.jsx` | Extendido con prop `dark` |
| `src/Componentes/2D/Card.jsx` | Badge de cultura sobre la imagen |
| `src/Screens/Principal.jsx` | 4 zonas, badges de color, HeroBanner |
| `src/Screens/Home.jsx` | Estructura refactorizada, textos actualizados |
| `src/Screens/Volantes.jsx` | Encabezado reducido, 4 zonas, sección intro |
| `src/Screens/Retroalimentacion.jsx` | Color de botón corregido |
| `src/Screens/Secundarias/Popayan.jsx` | PageHeader + SeccionInfo integrados |
| `src/Screens/Secundarias/Corinto.jsx` | PageHeader + SeccionInfo integrados |
| `src/Screens/Secundarias/Patia.jsx` | PageHeader + SeccionInfo integrados |
| `src/Screens/Secundarias/Quimbaya.jsx` | PageHeader + SeccionInfo integrados |
| `src/Componentes/Navbar1.jsx` | Overlay + hover color corregido |
| `src/Componentes/Map/MapI.jsx` | Solo 4 marcadores, coordenadas corregidas |
| `src/App.jsx` | 4 rutas desactivadas (redirigen a NotFound) |

---

## Criterios de animación aplicados

| Componente | Variante | Disparador |
|---|---|---|
| `SectionTitle` | `revealVariants` (fade + y) | Al entrar en viewport |
| `SeccionEducativa` (grid) | `staggerContainer` | Al entrar en viewport |
| `SeccionEducativa` (tarjeta) | `revealVariants` | Escalonado 0.15s |
| `SeccionInfo` (imagen) | `revealFromLeft` / `revealFromRight` según `invertido` | Al entrar en viewport |
| `SeccionInfo` (texto) | `revealFromRight` / `revealFromLeft` según `invertido` | Al entrar en viewport |

Todas las animaciones usan `once: true` — se ejecutan una sola vez por sesión.

---

## Pendiente / próximas fases

- Integrar `PageHeader` y `SeccionInfo` en páginas de contexto general (`Home.jsx`, `Volantes.jsx`) si se considera necesario.
- Añadir animaciones a otros componentes legacy (`Contenedor.jsx`, `ContenedorInvert.jsx`) cuando se migren al nuevo sistema de diseño.
- Crear `TarjetaServicio.jsx` y `SeccionCita.jsx` si se incorporan nuevas secciones en la página principal (preparados para usar `useRevealOnScroll`).
- Verificar disponibilidad de imágenes en `/public/imagenArea/` para todas las zonas (actualmente referenciadas en `PageHeader` y `SeccionInfo`).
