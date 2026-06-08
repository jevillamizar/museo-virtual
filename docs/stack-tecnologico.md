# STACK TECNOLÓGICO - MUSEO VIRTUAL UNICAUCA
## Análisis detallado de tecnologías, dependencias y versiones

---

## 🛠️ STACK TECNOLÓGICO COMPLETO

### 📋 Lenguajes y Tecnologías Base

#### JavaScript/TypeScript
- **JavaScript (ES6+)**: Lenguaje principal del proyecto
- **JSX**: Extensión para componentes React
- **TypeScript Types**: @types/react y @types/react-dom para desarrollo
- **Módulos ES**: Sistema de módulos nativo (`"type": "module"`)

#### HTML/CSS
- **HTML5**: Estructura semántica del documento
- **CSS3**: Estilos con preprocessadores
- **PostCSS**: Procesamiento CSS
- **Tailwind CSS**: Framework de utilidades CSS

---

## ⚛️ FRAMEWORKS Y LIBRERÍAS PRINCIPALES

### React Ecosystem
```json
{
  "react": "^18.2.0",           // Core de React 18
  "react-dom": "^18.2.0",       // Renderizado DOM
  "@vitejs/plugin-react": "^4.2.1" // Plugin React para Vite
}
```

**Características React implementadas:**
- ✅ **React 18**: Última versión estable con Concurrent Features
- ✅ **Hooks**: useState, useEffect, useRef, useCallback, useInView en toda la aplicación
- ✅ **Componentes Funcionales**: Todo el proyecto usa funciones
- ✅ **React.StrictMode**: Activado para desarrollo
- ✅ **JSX**: Sintaxis de componentes
- ✅ **ErrorBoundary**: Captura errores en árbol de componentes sin romper la app
- ✅ **Suspense**: Para carga asíncrona de componentes 3D

**Hooks personalizados implementados:**
```
src/hooks/
├── useAnalytics.js      — tracking automático de page_view por ruta (GA4)
├── useMeta.js           — actualiza <title> y meta description dinámicamente
└── useRevealOnScroll.js — animaciones reveal al entrar en viewport (framer-motion)
```

### Build Tools y Desarrollo
```json
{
  "vite": "^5.2.0",             // Bundler y servidor de desarrollo
  "autoprefixer": "^10.4.19",   // Prefijos CSS automáticos
  "postcss": "^8.4.38",         // Procesador CSS
  "eslint": "^8.57.0",          // Linting de código
  "gh-pages": "^6.1.1"          // Deploy a GitHub Pages
}
```

**Configuración Vite:**
- ⚡ **Hot Module Replacement**: Recarga rápida en desarrollo
- ⚡ **Optimización de dependencias**: Pre-bundling con esbuild
- ⚡ **Build rápido**: Compilación optimizada para producción
- ⚡ **Dev server**: Por defecto en puerto 5173
- ⚡ **manualChunks** (Fase 5): vendors separados en chunks paralelos para mejor caché

**Chunks de producción actuales (tras optimización Fase 5):**
```
react-vendor   → 162 KB   (React + ReactDOM + Router)
three-vendor   → 902 KB   (Three.js + R3F + Drei + maath)
splat-vendor   → 252 KB   (gaussian-splats-3d)
ui-vendor      →   0 KB   (MUI — tree-shaken)
motion-vendor  → 116 KB   (framer-motion)
map-vendor     → 154 KB   (Leaflet + react-leaflet)
misc-vendor    →  68 KB   (slick, react-icons, prop-types)
index          → 348 KB   (código de la aplicación)
```
> Antes de la optimización: un único `index.js` de 1.755 KB.

---

## 🎮 GRÁFICOS 3D Y RENDERIZADO

### Three.js Ecosystem
```json
{
  "three": "^0.164.1",                    // Motor 3D principal
  "@react-three/fiber": "^8.16.8",         // React renderer para Three.js
  "@react-three/drei": "^9.106.0",         // Utilidades y helpers
  "maath": "^0.10.7"                      // Utilidades matemáticas 3D
}
```

### Gaussian Splatting (principal tecnología 3D)
```json
{
  "@mkkellogg/gaussian-splats-3d": "^0.4.7"  // Renderizado de Gaussian Splats
}
```

**Implementación en `VisorSplat.jsx`:**
- Flujo: HEAD → advertencia si >100 MB → streaming con progreso → Blob URL → render
- `sharedMemoryForWorkers: false` para evitar requerir headers COEP
- Cámara configurada por pieza desde Supabase (`camera_initial_position`, `camera_look_at`)
- Fallback automático desde `cameras.json` (cálculo COLMAP — intersección de rayos)
- Cleanup del canvas + div residual inyectado por la librería en `document.body`
- Modelos alojados en Hugging Face Bucket: `jevillamizar/volantes-uso-splats`

### Capacidades 3D Implementadas

#### **React Three Fiber (R3F)**
- 🎮 **Renderizado React**: Declarativo y basado en componentes
- 🎮 **Performance**: Optimizado con renderizado bajo demanda
- 🎮 **Hooks Three**: useGLTF, useFrame, useThree
- 🎮 **Integración**: Perfecta con ecosistema React

#### **@react-three/drei**
- 🛠️ **OrbitControls**: Controles de cámara interactivos
- 🛠️ **useGLTF**: Carga de modelos GLTF/GLB
- 🛠️ **Preload**: Precarga de assets 3D
- 🛠️ **Suspense**: Manejo de carga asíncrona

#### **Three.js Core**
- 🌐 **WebGL Renderer**: Renderizado acelerado por GPU
- 💡 **Sistema de luces**: Hemisphere, Directional, Ambient, Spot, Point
- 📦 **Geometrías**: SphereGeometry para panoramas 360°
- 🎨 **Materiales**: MeshBasicMaterial, texturas
- 🎥 **Cámaras**: Perspective camera con FOV configurable

#### **maath**
- 🧮 **Utilidades matemáticas**: Vectores, matrices, interpolaciones
- 🧮 **Animaciones**: Easing functions, splines

---

## 🎨 UI/UX FRAMEWORKS Y STYLING

### Material-UI Ecosystem
```json
{
  "@mui/material": "^5.15.20",     // Componentes Material Design
  "@emotion/react": "^11.11.4",     // CSS-in-JS core
  "@emotion/styled": "^11.11.5"    // Componentes styled
}
```

### Tailwind CSS
```json
{
  "tailwindcss": "^3.4.3"          // Framework de utilidades CSS
}
```


### Sistema de diseño institucional (Tailwind)

Tokens de color Unicauca definidos en `tailwind.config.js`:
```javascript
colors: {
  'unicauca-azul':       '#1E3A5F',
  'unicauca-azulhover':  '#162E4D',
  'unicauca-rojo':       '#8B1A1A',
  'unicauca-rojohover':  '#6B1414',
  'unicauca-dorado':     '#C9A84C',
  'unicauca-amarillo':   '#F0C040',
  'unicauca-verde':      '#2D6A4F',
  'unicauca-blancoRoto': '#F9F7F2',
  'unicauca-grisClaro':  '#F5F5F5',
  'unicauca-grisMedio':  '#9E9E9E',
  'unicauca-grisOscuro': '#424242',
}
fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
  lato:    ['Lato', 'sans-serif'],
}
```

### Animaciones
```json
{
  "framer-motion": "^11.2.6"   // Librería de animaciones declarativas
}
```

**Uso sistemático implementado en Fase 5 vía `useRevealOnScroll`:**

| Variante | Efecto | Usada en |
|---|---|---|
| `revealVariants` | fade + slide-up (y: 40→0) | `SectionTitle`, `SeccionEducativa` |
| `revealFromLeft` | fade + slide desde izquierda | `SeccionInfo` (imagen/texto) |
| `revealFromRight` | fade + slide desde derecha | `SeccionInfo` (imagen/texto) |
| `staggerContainer` | distribuye animación hijos 0.15s | grid de `SeccionEducativa` |

- Todas las animaciones: `once: true`, `margin: -50px` (se disparan justo antes de entrar en viewport)
- En Fase 2: `Hint3D.jsx` usa framer-motion para el indicador de interacción 3D

---

## 🧭 NAVEGACIÓN Y ROUTING

### React Router
```json
{
  "react-router-dom": "^6.23.1"  // Routing client-side
}
```

#### **Configuración de Rutas — estado actual (Fase 5)**
```javascript
// Rutas activas
<Route path='/'                element={<Principal />} />
<Route path='/Contact'         element={<Contact />} />
<Route path='/About'           element={<Home />} />
<Route path='/Volantes'        element={<Volantes />} />
<Route path='/Ceramoteca'      element={<Ceramoteca />} />
<Route path='/Textiles'        element={<Textiles />} />
<Route path='/Retroalimentacion' element={<Retroalimentacion />} />

// Zonas arqueológicas activas (PageHeader + SeccionInfo + visor 3D)
<Route path='/Popayan'         element={<Popayan />} />
<Route path='/Corinto'         element={<Corinto />} />
<Route path='/Patia'           element={<Patia />} />
<Route path='/Quimbaya'        element={<Quimbaya />} />

// Zonas desactivadas — redirigen a NotFound
<Route path='/Calima'          element={<NotFound />} />
<Route path='/Nariño'          element={<NotFound />} />
<Route path='/Tumaco'          element={<NotFound />} />
<Route path='/TierraAdentro'   element={<NotFound />} />

// Catch-all
<Route path='*'                element={<NotFound />} />
```

---

## 🗺️ MAPAS Y GEOLOCALIZACIÓN

### Leaflet Ecosystem
```json
{
  "leaflet": "^1.9.4",            // Librería de mapas
  "react-leaflet": "^4.2.1"       // Componentes React para Leaflet
}
```

#### **Capacidades de Mapas**
- 🗺️ **Mapas interactivos**: Componente `MapI.jsx` (Leaflet) — 4 marcadores activos
- 🗺️ **Marcadores activos**: Popayán, Corinto, Patía, Quimbaya (con icono y popup)
- 🗺️ **Controles**: Zoom, pan, markers
- 🗺️ **Tiles**: OpenStreetMap por defecto
- 🗺️ **React Integration**: Componentes declarativos
- 🗺️ **Mapa de imagen**: `Map.jsx` — áreas interactivas `<area>` con coordenadas COLMAP

---

## 🎠 CARRUSELES Y GALERÍAS

### Slick Carousel
```json
{
  "react-slick": "^0.30.2",       // Componente carrusel React
  "slick-carousel": "^1.8.1"      // Core de Slick Carousel
}
```

#### **Configuración del Carrusel Principal**
```javascript
const settings = {
  dots: true,                    // Indicadores de página
  infinite: true,                // Bucle infinito
  speed: 500,                    // Velocidad de transición
  slidesToShow: 3,               // Slides visibles (desktop)
  slidesToScroll: 1,             // Slides al hacer scroll
  responsive: [                  // Breakpoints responsive
    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1280, settings: { slidesToShow: 2 } }
  ]
};
```

**Tarjetas del carrusel (Fase 5):** cada `Card` incluye un badge de color absoluto (`top-3 left-3`) con el nombre de la cultura:

| Cultura | Color badge |
|---|---|
| Popayán | `bg-green-700 text-white` |
| Corinto | `bg-orange-700 text-white` |
| Patía | `bg-teal-700 text-white` |
| Quimbaya | `bg-amber-700 text-white` |

---

## 🌐 IMÁGENES 360° Y PANORAMAS

### React Pannellum (Instalado pero no usado)
```json
{
  "react-pannellum": "^0.2.16"   // Visor de panoramas 360°
}
```

#### **Implementación Actual (Custom Three.js)**
- 🌐 **Panoramas esféricos**: Usando Three.js nativo
- 🌐 **SphereGeometry**: Geometría esférica de 500 radio
- 🌐 **BackSide rendering**: Textura en cara interna
- 🌐 **OrbitControls**: Navegación interactiva sin zoom

---

## 🗄️ BASES DE DATOS Y BACKEND

### Supabase (Principal)
```json
{
  "@supabase/supabase-js": "^2.44.2"  // Cliente Supabase
}
```

#### **Configuración Requerida**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLIC_KEY=your-anon-key
```

#### **Uso en la Aplicación**
- 📊 **Tabla `piezas_arqueologicas`**: nombre, descripción, período, cultura, dimensiones, `modelo_3d_url`, `modelo_3d_tipo`, `camera_url`, `camera_initial_position`, `camera_look_at`
- 📊 **Tabla `retroalimentacion`**: tipo_visitante, procedencia, calificación, comentario, nombre
- 📊 **Políticas RLS**: lectura pública para piezas activas; inserción solo autenticada
- 📊 **Culturas activas**: Popayán, Corinto, Patía, Quimbaya
- 📊 **Tipos de modelo soportados**: `gaussian_splat`, `ply`, `glb`
- 📊 **CRUD Operations**: Select por cultura, insert de retroalimentación

### Firebase (Alternativa)
```json
{
  "firebase": "^10.12.2"          // SDK Firebase completo
}
```

#### **Estado Actual**
- ⚠️ **Configurado pero no usado**: firebase/config.js presente
- ⚠️ **Potencial alternativa**: Podría reemplazar a Supabase
- ⚠️ **Servicios disponibles**: Auth, Firestore, Storage, Hosting

---

## � ANALYTICS Y MÉTRICAS

### Google Analytics 4
```env
VITE_GA_TRACKING_ID=   # Completar al crear la cuenta GA4
```

**Módulo centralizado `src/analytics/ga4.js`:**
- `initGA(measurementId)`: inyecta GTM dinámicamente sin errores si el ID está vacío
- `trackEvent(categoria, accion, etiqueta)`: eventos personalizados
- `trackPageView(ruta, titulo)`: vistas de página

**Eventos implementados:**

| Categoría | Acción | Etiqueta | Momento |
|---|---|---|---|
| `Modelo3D` | `carga_completa` | nombre pieza | Splat termina de renderizar |
| `Modelo3D` | `primera_rotacion` | nombre pieza | Primer `onPointerDown` en Splat |
| `Modelo3D` | `error_carga` | nombre pieza | Error en descarga/render |
| `Modelo3D` | `vista_gltf` | nombre pieza | Al montar canvas GLTF |
| `Modelo3D` | `interaccion_gltf` | nombre pieza | Primer `onPointerDown` GLTF |
| `Retroalimentacion` | `envio_exitoso` | tipo visitante | Insert exitoso Supabase |
| automático | `page_view` | — | Cada cambio de ruta |

**Consentimiento GDPR (`CookieBanner.jsx`):**
- Persiste decisión en `localStorage['cookies_aceptadas']`
- GA4 solo se inicializa si el usuario acepta
- Al recargar con decisión previa de aceptar: GA4 se activa automáticamente

---

## �📧 FORMULARIOS Y COMUNICACIÓN

### EmailJS
```json
{
  "@emailjs/browser": "^4.3.3"    // Envío de emails desde frontend
}
```

#### **Implementación de Contacto**
- 📧 **Formulario de contacto**: Contact.jsx
- 📧 **Envío directo**: Sin backend requerido
- 📧 **Configuración necesaria**: Service ID, Template ID, Public Key

---

## 🎨 ICONOS Y ELEMENTOS VISUALES

### React Icons
```json
{
  "react-icons": "^5.2.1"         // Biblioteca de íconos
}
```

#### **Colecciones Disponibles**
- 🎨 **Font Awesome**: Íconos clásicos
- 🎨 **Material Design**: Íconos Google
- 🎨 **Feather Icons**: Íconos minimalistas
- 🎨 **Y muchas más**: 20+ bibliotecas incluidas

### Efectos Especiales
```json
{
  "react-tilt": "^1.0.2"          // Efectos 3D hover (Tilt.js)
}
```

---

## 📅 COMPONENTES DE TIMELINE

### Timeline Vertical
```json
{
  "react-vertical-timeline-component": "^3.6.0"  // Componente timeline
}
```

#### **Uso Potencial**
- 📅 **Líneas de tiempo**: Para historia cultural
- 📅 **Eventos secuenciales**: Cronologías arqueológicas
- 📅 **Diseño responsive**: Adaptativo a móviles

---

## 🔧 HERRAMIENTAS DE DESARROLLO

### ESLint y Calidad de Código
```json
{
  "eslint": "^8.57.0",
  "eslint-plugin-react": "^7.34.1",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.6"
}
```

#### **Configuración ESLint**
- ✅ **Reglas React**: Hooks, componentes, JSX
- ✅ **Best practices**: Código limpio y mantenible
- ✅ **Warnings**: Máximo 0 warnings permitidos
- ✅ **Modern ES6+**: Sintaxis actual JavaScript

### TypeScript Types
```json
{
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22"
}
```

#### **Tipado Implementado**
- 📝 **PropTypes**: Validación de props en componentes
- 📝 **TypeScript Ready**: Infraestructura preparada
- 📝 **Mejor IDE**: Autocompletado y detección de errores

---

## 📦 ANÁLISIS DE DEPENDENCIAS

### Dependencias de Producción (23 paquetes)
```
Core Framework:
├── react (18.2.0)
├── react-dom (18.2.0)
└── react-router-dom (6.23.1)

3D & Graphics:
├── three (0.164.1)
├── @react-three/fiber (8.16.8)
├── @react-three/drei (9.106.0)
└── maath (0.10.7)

UI Frameworks:
├── @mui/material (5.15.20)
├── @emotion/react (11.11.4)
├── @emotion/styled (11.11.5)
├── tailwindcss (3.4.3)
└── framer-motion (11.2.6)

Maps & Location:
├── leaflet (1.9.4)
└── react-leaflet (4.2.1)

Carousels & Galleries:
├── react-slick (0.30.2)
└── slick-carousel (1.8.1)

360° & Panoramas:
└── react-pannellum (0.2.16)

Backend & Database:
├── @supabase/supabase-js (2.44.2)
└── firebase (10.12.2)

Communication:
└── @emailjs/browser (4.3.3)

UI Components:
├── react-icons (5.2.1)
├── react-tilt (1.0.2)
└── react-vertical-timeline-component (3.6.0)

Development:
└── prop-types (15.8.1)
```

### Dependencias de Desarrollo (9 paquetes)
```
Build Tools:
├── vite (5.2.0)
├── @vitejs/plugin-react (4.2.1)
├── postcss (8.4.38)
└── autoprefixer (10.4.19)

Code Quality:
├── eslint (8.57.0)
├── eslint-plugin-react (7.34.1)
├── eslint-plugin-react-hooks (4.6.0)
└── eslint-plugin-react-refresh (0.4.6)

Deployment:
└── gh-pages (6.1.1)

TypeScript:
├── @types/react (18.2.66)
└── @types/react-dom (18.2.22)
```

---

## 📊 ESTADÍSTICAS Y MÉTRICAS

### Tamaño de Dependencias
- **Producción**: ~150MB (node_modules)
- **Desarrollo**: ~50MB adicionales
- **Build final gzip total**: ~600 KB aprox. (suma de chunks)

### Versiones y Actualidad
- ✅ **React 18.2**: Última versión estable
- ✅ **Vite 5.4**: Última versión
- ✅ **Three.js 0.164**: Reciente y estable
- ✅ **Tailwind 3.4**: Última versión
- ✅ **Material-UI 5.15**: Actual
- ✅ **framer-motion 11.2**: En uso sistemático desde Fase 5
- ✅ **gaussian-splats-3d 0.4.7**: Principal tecnología de renderizado 3D

### Seguridad y Estabilidad
- 🔒 **Dependencias estables**: Sin vulnerabilidades críticas conocidas
- 🔒 **Versiones LTS**: React y Node.js compatibles
- 🔒 **Mantenimiento activo**: Todas las librerías con mantenimiento activo

---

## 🚀 PERFORMANCE Y OPTIMIZACIÓN

### Optimizaciones Implementadas
- ⚡ **Vite + manualChunks**: 7 chunks de vendor paralelos — bundle principal bajó de 1.755 KB a 348 KB
- ⚡ **React.memo**: Potencial para optimización de componentes
- ⚡ **Lazy loading**: Con React.lazy y Suspense
- ⚡ **Code splitting**: Automático con Vite + manual por vendor
- ⚡ **Tree shaking**: Eliminación de código muerto
- ⚡ **framer-motion `once: true`**: Las animaciones no se re-ejecutan, sin trabajo innecesario en scroll

### Optimizaciones 3D
- 🎮 **Renderizado bajo demanda**: `frameloop="demand"`
- 🎮 **DPR adaptativo**: `dpr={[1, 2]}`
- 🎮 **Preload de assets**: `<Preload all />`
- 🎮 **Suspense boundaries**: Para carga asíncrona
- 🎮 **Streaming de splat**: Descarga progresiva con Blob URL, sin cargar todo en memoria de una
- 🎮 **Advertencia de tamaño**: Si el modelo >100 MB, el usuario confirma antes de descargar
- 🎮 **Cleanup de viewer**: Canvas + div residual de gaussian-splats-3d eliminados al desmontar

---

## 🔮 POTENCIAL DE ESCALABILIDAD

### Arquitectura Modular
- 🧩 **Componentes reutilizables**: Fácil expansión
- 🧩 **Configuración centralizada**: Tailwind, Vite, ESLint
- 🧩 **Routing flexible**: Fácil agregar nuevas páginas
- 🧩 **Backend agnóstico**: Supabase/Firebase intercambiables

### Tecnologías Futuras Posibles
- 🚀 **TypeScript completo**: Migración progresiva
- 🚀 **State management**: Zustand o Redux Toolkit
- 🚀 **Testing**: Jest + React Testing Library
- 🚀 **PWA**: Service Workers y manifest
- 🚀 **SSR/SSG**: Next.js o Remix si se necesita SEO

---

## ⚠️ CONSIDERACIONES Y RECOMENDACIONES

### Dependencias No Utilizadas o Parciales
- 🔍 **react-pannellum**: Instalado pero no se usa (panoramas implementados con Three.js nativo)
- 🔍 **firebase**: Configurado pero reemplazado por Supabase
- 🔍 **react-vertical-timeline-component**: Instalado; `LineaTiempo.jsx` usa implementación propia con CSS/Tailwind
- 🔍 **@mui/material**: Instalado, tree-shaken casi completamente (chunk de 0.11 KB en build)

### Optimizaciones Recomendadas
- 📈 **Bundle analysis**: webpack-bundle-analyzer
- 📈 **Performance monitoring**: Lighthouse CI
- 📈 **Error boundaries**: Mejor manejo de errores
- 📈 **Loading states**: Skeletons y spinners consistentes

### Seguridad
- 🔒 **Environment variables**: Proteger claves API
- 🔒 **Content Security Policy**: Configurar headers
- 🔒 **Dependencies audit**: npm audit regular

---

## 📋 RESUMEN EJECUTIVO DEL STACK

### ✅ Fortalezas Técnicas
1. **Stack moderno y actualizado**: React 18, Vite 5.4, Three.js 0.164, framer-motion 11
2. **Arquitectura sólida**: Componentes modulares, hooks propios, routing bien definido
3. **Gaussian Splatting**: Tecnología de renderizado 3D fotorrealista con streaming progresivo
4. **Sistema de diseño consistente**: Tokens Unicauca en Tailwind + componentes PageHeader, SectionTitle, SeccionInfo
5. **Analytics GA4 con consentimiento GDPR**: Tracking de interacciones 3D y retroalimentación
6. **Build optimizado**: 7 chunks paralelos, bundle principal reducido 5× respecto al inicial

### 🎯 Enfoque del Proyecto
- **Museo Digital**: Experiencia cultural inmersiva sobre volantes de huso prehispánicos
- **Gaussian Splatting**: Principal tecnología de renderizado — modelos fotorrealistas sin geometría explícita
- **4 Zonas Arqueológicas Activas**: Popayán, Corinto, Patía, Quimbaya
- **Responsive Design**: Mobile-first con Tailwind y sistema de diseño institucional Unicauca
- **Contenido Dinámico**: Piezas arqueológicas desde Supabase, modelos desde Hugging Face Bucket
- **UX Moderna**: Animaciones scroll-triggered, badges de cultura, encabezados con imagen/overlay

### 🚀 Estado de Producción
- **Build optimizado**: `manualChunks` aplicado — 7 chunks de vendor paralelos
- **Deploy en Vercel**: Variables de entorno configuradas; rama `mejora-visual-y-funcional` desplegable
- **Performance**: Bundle principal 348 KB (gzip ~94 KB)
- **Accesibilidad**: Estructura semántica HTML5, atributos ARIA en breadcrumbs y visores
- **Variables de entorno requeridas**:
  ```env
  VITE_SUPABASE_URL=https://skazarlezlzhwpfwpzwf.supabase.co
  VITE_SUPABASE_PUBLIC_KEY=eyJ...
  VITE_HUGGING_FACE_BUCKET=https://huggingface.co/buckets/jevillamizar/volantes-uso-splats
  VITE_GA_TRACKING_ID=          # Completar al crear cuenta GA4
  ```

El stack tecnológico del Museo Virtual Unicauca es **moderno, completo y bien mantenido**, con Gaussian Splatting como tecnología central de renderizado, un sistema de diseño institucional consistente y analytics GA4 integrado con consentimiento GDPR.
