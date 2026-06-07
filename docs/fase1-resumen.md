# Fase 1 — Fundación del Museo Virtual

## Objetivo
Establecer la base técnica del museo virtual: infraestructura de datos, diseño visual institucional, navegación por culturas y renderizado interactivo de modelos 3D de Gaussian Splatting.

---

## Tareas completadas

### 1.1 — Configuración de Supabase y modelo de datos
- Creación de la tabla `piezas_arqueologicas` con campos técnicos, culturales y de cámara.
- Políticas RLS para acceso público de lectura.
- Columnas agregadas en fases: `camera_url`, `camera_initial_position`, `camera_look_at`.
- Script completo en `sql-setup.sql`.

### 1.2 — Sistema de diseño institucional (Tailwind)
- Tokens de color Unicauca definidos en `tailwind.config.js`:
  - `unicauca-azul`, `unicauca-rojo`, `unicauca-dorado`, `unicauca-grisClaro`, `unicauca-grisMedio`.
- Aplicados de forma consistente en todos los componentes 2D, 3D y pantallas.

### 1.3 — Navbar y pantalla Principal
- `Navbar1.jsx` actualizado con logo institucional y navegación por culturas.
- `Principal.jsx` rediseñada con identidad visual Unicauca.

### 1.4 — Pantallas culturales secundarias
- 8 pantallas implementadas: Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro, Quimbaya.
- Cada una consulta `piezas_arqueologicas` por cultura vía Supabase.
- Dropdown para selección de pieza y renderizado condicional de visor 3D.

### 1.5 — Componentes UI reutilizables
- `ErrorBoundary.jsx`: captura errores en árbol de componentes sin romper la app.
- `LoadingPage.jsx`: spinner institucional reutilizable.

### 1.6 — VisorSplat — Renderizado de Gaussian Splatting
- Librería: `@mkkellogg/gaussian-splats-3d`.
- Flujo: HEAD request → advertencia si >100 MB → descarga con streaming → progreso → blob URL → render.
- `sharedMemoryForWorkers: false` para evitar requerir COEP headers.
- Cámara configurada por pieza desde Supabase (`camera_initial_position`, `camera_look_at`).
- Fallback al cálculo automático desde `cameras.json` (intersección de rayos COLMAP).
- Cleanup correcto del canvas y renderer al cambiar de pieza.

---

## Modelos 3D publicados

| Pieza     | Cultura  | Formato        | Almacenamiento         |
|-----------|----------|----------------|------------------------|
| Volante 1 | Popayán  | Gaussian Splat | Hugging Face Bucket    |
| Volante 2 | Popayán  | Gaussian Splat | Hugging Face Bucket    |
| Volante 3 | Popayán  | Gaussian Splat | Hugging Face Bucket    |

Bucket: `jevillamizar/volantes-uso-splats`

---

## Archivos clave modificados

| Archivo | Descripción |
|---|---|
| `tailwind.config.js` | Tokens de color institucional |
| `src/index.css` | Estilos base |
| `src/App.jsx` | Rutas y ErrorBoundary global |
| `src/Componentes/Navbar1.jsx` | Navegación principal |
| `src/Screens/Principal.jsx` | Pantalla de inicio |
| `src/Screens/Secundarias/*.jsx` | 8 pantallas culturales |
| `src/Componentes/3D/Datos.jsx` | Selector de visor según tipo de modelo |
| `src/Componentes/canvas/VisorSplat.jsx` | Visor de Gaussian Splatting |
| `src/Componentes/ErrorBoundary.jsx` | Manejo de errores React |
| `src/Componentes/UI/LoadingPage.jsx` | Spinner institucional |
| `sql-setup.sql` | Script DDL completo de Supabase |

---

## Anexos de investigación
- `Anexo1-variabilidad-volantes-de-huso.pdf`
- `Anexo2-tecnologías-de-reconstrucción-renderizado-digital-objetos-3D.pdf`
- `Anexo3-Evaluación-efectividad-alcance-plataforma-Web.pdf`

---

## Pendiente para Fase 2
- Información cultural completa por pieza (descripción, usos, contexto histórico).
- Más culturas con piezas y modelos 3D.
- Sistema de retroalimentación de visitantes.
