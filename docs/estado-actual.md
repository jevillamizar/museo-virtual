# AUDITORÍA TÉCNICA - MUSEO VIRTUAL UNICAUCA
## Estado Actual del Proyecto

---

### 1. ESTRUCTURA DEL PROYECTO

#### Árbol completo de archivos y carpetas

```
museo-virtual/
├── .env                          # Variables de entorno (incompleto)
├── .eslintrc.cjs                 # Configuración ESLint
├── .git/                         # Control de versiones
├── .gitignore                    # Archivos ignorados por Git
├── README.md                     # Documentación básica del proyecto
├── index.html                    # Punto de entrada HTML
├── package-lock.json             # Lock de dependencias
├── package.json                  # Configuración del proyecto y dependencias
├── postcss.config.js             # Configuración PostCSS
├── tailwind.config.js            # Configuración Tailwind CSS
├── vite.config.js                # Configuración Vite
├── public/                       # Archivos estáticos
│   ├── 3DObjects/                # Modelos 3D
│   │   ├── Volante/              # Modelo 3D Volante 1
│   │   │   ├── scene.bin         # Datos binarios GLTF
│   │   │   ├── scene.gltf        # Modelo GLTF
│   │   │   ├── license.txt       # Licencia del modelo
│   │   │   └── textures/         # Texturas (vacío)
│   │   ├── Volante2/             # Modelo 3D Volante 2
│   │   │   ├── scene.bin
│   │   │   ├── scene.gltf
│   │   │   └── textures/
│   │   └── Volante3/             # Modelo 3D Volante 3
│   │       ├── scene.bin
│   │       ├── scene.gltf
│   │       └── textures/
│   ├── imagenArea/               # Área de imágenes (vacío)
│   ├── imagenes/                 # Imágenes generales (vacío)
│   ├── imagenes360/              # Imágenes 360° (vacío)
│   └── vite.svg                  # Icono Vite
└── src/                          # Código fuente
    ├── App.jsx                   # Componente principal con rutas
    ├── core.js                   # Archivo core (mínimo)
    ├── index.css                 # Estilos globales
    ├── main.jsx                  # Punto de entrada React
    ├── supabaseClient.js         # Cliente Supabase
    ├── assets/                   # Assets del código fuente
    │   └── index.css             # Estilos de assets
    ├── Componentes/              # Componentes reutilizables
    │   ├── 2D/                   # Componentes 2D
    │   │   ├── Card.jsx          # Tarjeta con badge de cultura (Fase 5)
    │   │   ├── Contenedor.jsx    # Contenedor estándar
    │   │   ├── ContenedorInvert.jsx # Contenedor invertido
    │   │   ├── HeroBanner.jsx    # Hero principal con animaciones (Fase 5)
    │   │   ├── HojaLibro.jsx     # Componente libro
    │   │   ├── Informacion.jsx   # Componente información
    │   │   ├── LineaTiempo.jsx   # Línea de tiempo cultural
    │   │   ├── Recuadro.jsx      # Recuadro 2D
    │   │   ├── RecursosEducativos.jsx # Sección recursos educativos
    │   │   ├── SeccionEducativa.jsx   # 3 tarjetas con stagger (Fase 5)
    │   │   └── SeccionInfo.jsx   # Layout asimétrico imagen/texto (Fase 5)
    │   ├── 3D/                   # Componentes 3D
    │   │   ├── Card3D.jsx        # Tarjeta 3D con modelos
    │   │   ├── Contenedor3D.jsx  # Contenedor 3D
    │   │   ├── Datos.jsx         # Componente datos 3D con tracking
    │   │   ├── Loader.jsx        # Loader 3D
    │   │   ├── Recuadro360.jsx   # Recuadro imágenes 360°
    │   │   └── Recuadro3D.jsx    # Recuadro con modelo 3D
    │   ├── Map/                  # Componentes de mapa
    │   │   ├── Map.jsx           # Mapa de imagen con áreas interactivas
    │   │   └── MapI.jsx          # Mapa Leaflet (4 marcadores activos)
    │   ├── Text/                 # Componentes de texto
    │   │   ├── Boxtext.jsx       # Caja de texto
    │   │   ├── Infotext.jsx      # Texto informativo
    │   │   ├── Texto.jsx         # Componente texto básico
    │   │   └── Texto2.jsx        # Variante de texto
    │   ├── UI/                   # Componentes de interfaz
    │   │   ├── Breadcrumb.jsx    # Migas de pan (prop dark Fase 5)
    │   │   ├── CookieBanner.jsx  # Banner de consentimiento GDPR
    │   │   ├── Footer.jsx        # Footer institucional
    │   │   ├── Hint3D.jsx        # Ayuda contextual 3D
    │   │   ├── LoadingPage.jsx   # Pantalla de carga
    │   │   ├── PageHeader.jsx    # Header con imagen/overlay (Fase 5)
    │   │   └── SectionTitle.jsx  # Título de sección animado (Fase 5)
    │   ├── canvas/               # Componentes canvas 3D
    │   │   ├── Volante.jsx       # Canvas modelo Volante 1
    │   │   ├── Volante2.jsx      # Canvas modelo Volante 2
    │   │   └── Volante3.jsx      # Canvas modelo Volante 3
    │   ├── Navbar.jsx            # Barra de navegación (versión 1)
    │   └── Navbar1.jsx           # Navbar activa (overlay + hover Fase 5)
    ├── Screens/                  # Páginas/vistas principales
    │   ├── Contact.jsx           # Página de contacto
    │   ├── Home.jsx              # Sobre el Museo (refactorizado Fase 5)
    │   ├── Page.jsx              # Página genérica
    │   ├── Principal.jsx         # HeroBanner + 4 zonas + badges
    │   ├── Retroalimentacion.jsx # Formulario de retroalimentación
    │   ├── Volantes.jsx          # Colección (4 zonas activas)
    │   └── Secundarias/          # Páginas secundarias
    │       ├── Calima.jsx        # DESACTIVADA → NotFound
    │       ├── Corinto.jsx       # ACTIVA — PageHeader + SeccionInfo
    │       ├── Nariño.jsx        # DESACTIVADA → NotFound
    │       ├── Patia.jsx         # ACTIVA — PageHeader + SeccionInfo
    │       ├── Popayan.jsx       # ACTIVA — PageHeader + SeccionInfo
    │       ├── Quimbaya.jsx      # ACTIVA — PageHeader + SeccionInfo
    │       ├── TierraAdentro.jsx # DESACTIVADA → NotFound
    │       └── Tumaco.jsx        # DESACTIVADA → NotFound
    ├── hooks/                    # Hooks reutilizables
    │   ├── useAnalytics.js       # Tracking GA4 por ruta
    │   ├── useMeta.js            # SEO dinámico
    │   └── useRevealOnScroll.js  # Animaciones reveal (Fase 5)
    └── firebase/                 # Configuración Firebase
        └── config.js             # Archivo de configuración Firebase
```

#### Propósito de cada carpeta principal

- **public/**: Archivos estáticos servidos directamente al navegador
- **src/**: Código fuente de la aplicación React
- **src/Componentes/**: Componentes UI reutilizables organizados por tipo
- **src/Screens/**: Páginas principales de la aplicación
- **src/assets/**: Recursos del código fuente
- **public/3DObjects/**: Modelos 3D en formato GLTF

#### Archivos de configuración encontrados

- **package.json**: Gestión de dependencias y scripts npm
- **vite.config.js**: Configuración del bundler Vite
- **tailwind.config.js**: Configuración Tailwind CSS con colores personalizados
- **postcss.config.js**: Configuración PostCSS
- **.eslintrc.cjs**: Configuración ESLint para código JavaScript/React
- **.env**: Variables de entorno (incompleto)

---

### 2. STACK TECNOLÓGICO

#### Lenguajes utilizados
- **JavaScript (ES6+)**: Lenguaje principal
- **JSX**: Para componentes React
- **CSS**: Estilos con Tailwind CSS

#### Frameworks y librerías principales

**Frontend Core:**
- React 18.2.0
- React DOM 18.2.0
- Vite 5.2.0 (Build tool)

**3D y Gráficos:**
- Three.js 0.164.1
- @react-three/fiber 8.16.8 (React renderer para Three.js)
- @react-three/drei 9.106.0 (Utilidades para React Three Fiber)
- maath 0.10.7 (Utilidades matemáticas para 3D)

**UI y Estilos:**
- Tailwind CSS 3.4.3
- Material-UI (@mui/material) 5.15.20
- @emotion/react 11.11.4
- @emotion/styled 11.11.5
- Framer Motion 11.2.6 (Animaciones)

**Navegación y Routing:**
- React Router DOM 6.23.1

**Mapas:**
- Leaflet 1.9.4
- React Leaflet 4.2.1

**Carruseles y Galerías:**
- React Slick 0.30.2
- Slick Carousel 1.8.1

**Imágenes 360°:**
- React Pannellum 0.2.16

**Backend y Base de Datos:**
- Supabase (@supabase/supabase-js) 2.44.2
- Firebase 10.12.2

**Utilidades:**
- React Icons 5.2.1
- PropTypes 15.8.1
- React Tilt 1.0.2 (Efectos 3D)
- EmailJS (@emailjs/browser) 4.3.3 (Formularios de contacto)

#### Herramientas de build/bundler
- **Vite 5.2.0**: Bundler principal y servidor de desarrollo
- **PostCSS**: Procesamiento CSS
- **Autoprefixer**: Prefijos CSS automáticos

#### Dependencias principales vs devDependencies

**Producción (dependencies):** 23 paquetes incluyendo React, Three.js, Supabase, Material-UI, etc.
**Desarrollo (devDependencies):** 9 paquetes incluyendo Vite, ESLint, Tailwind CSS, TypeScript types

---

### 3. ARQUITECTURA ACTUAL

#### Patrón de arquitectura identificado

**Arquitectura basada en Componentes React con enfoque SPA (Single Page Application)**

- **Patrón**: Component-based architecture
- **Paradigma**: Funcional con Hooks
- **Estado**: Local (useState) y externo (Supabase)
- **Routing**: Client-side con React Router

#### Organización del código

**Estructura por capas funcionales:**

1. **Capa de Presentación (Screens/)**
   - Páginas principales y secundarias
   - Componentes de nivel superior

2. **Capa de Componentes (Componentes/)**
   - **2D/**: Componentes visuales 2D reutilizables
   - **3D/**: Componentes con renderizado 3D
   - **canvas/**: Wrappers de Three.js
   - **Map/**: Componentes de mapas
   - **Text/**: Componentes tipográficos

3. **Capa de Datos (firebase/, supabaseClient.js)**
   - Conexión a bases de datos externas
   - Configuración de servicios

4. **Capa de Configuración**
   - Archivos de configuración de herramientas
   - Variables de entorno

#### Flujo general de la aplicación

```
1. index.html → main.jsx → App.jsx
2. App.jsx configura React Router
3. Navbar1.jsx proporciona navegación global
4. Routes renderiza componentes según URL:
   - / → Principal.jsx (carrusel de tarjetas)
   - /Popayan, /Calima, etc. → Páginas secundarias
   - /Contact → Contact.jsx
5. Componentes 3D cargan modelos GLTF desde public/
6. Datos dinámicos desde Supabase (tablas InfoVolante)
7. Estilos con Tailwind CSS + Material-UI
```

---

### 4. FUNCIONALIDADES IMPLEMENTADAS

#### Qué hace actualmente la aplicación

**Museo Virtual Interactivo** con las siguientes funcionalidades:

1. **Página Principal (Principal.jsx)**
   - `HeroBanner` con degradado, overlay y animaciones framer-motion
   - Carrusel de 4 tarjetas con badges de color por cultura (Fase 5)
   - Navegación a las 4 páginas secundarias activas
   - Diseño responsive con slick-carousel

2. **Páginas de Cultura (4 activas)**
   - Popayán, Corinto, Patía, Quimbaya
   - `PageHeader` con imagen de área, overlay verde y breadcrumb blanco (Fase 5)
   - `SeccionInfo` con layout asimétrico imagen/texto y animaciones de entrada (Fase 5)
   - Carga dinámica de datos desde Supabase
   - Visor 3D/360° interactivo
   - 4 páginas desactivadas (Calima, Nariño, Tumaco, TierraAdentro) → redirigen a NotFound

3. **Visualización 3D**
   - Tres modelos 3D (Volante, Volante2, Volante3)
   - Renderizado con Three.js y React Three Fiber
   - Controles de órbita para interacción
   - Iluminación ambiental y direccional

4. **Imágenes 360°**
   - Componente Recuadro360 para panoramas esféricos
   - Navegación interactiva con OrbitControls
   - Texturas mapeadas en geometría esférica

5. **Mapas Interactivos**
   - Integración con Leaflet
   - Componente MapI para visualización geográfica

6. **Sistema de Navegación**
   - Navbar1.jsx con enlaces a todas las secciones
   - React Router para navegación SPA

#### Pantallas o vistas existentes

1. **Principal** - Carrusel principal de culturas
2. **Home** - Página de inicio alternativa
3. **Page** - Página genérica
4. **Contact** - Formulario de contacto
5. **8 Páginas Secundarias** - Una por cada cultura/zona:
   - Popayán, Calima, Corinto, Nariño, Patía, Tumaco, Tierradentro, Quimbaya

#### Componentes o módulos identificados

**Componentes 2D:**
- Card, Contenedor, Recuadro, HojaLibro, Información

**Componentes 3D:**
- Card3D, Contenedor3D, Datos, Recuadro3D, Recuadro360, Loader

**Canvas 3D:**
- Volante, Volante2, Volante3 (modelos GLTF)

**Textuales:**
- Texto, Texto2, Infotext, Boxtext

**Mapas:**
- MapI (Leaflet integration)

**Navegación:**
- Navbar, Navbar1

#### Interacciones del usuario ya implementadas

- **Navegación** entre páginas mediante menú
- **Carrusel** deslizable en página principal
- **Modelos 3D** rotables y zoomables
- **Imágenes 360°** navegables con controles de órbita
- **Selección dinámica** de documentos en páginas secundarias
- **Links** de "Leer más" y "Conoce más"
- **Formulario de contacto** (implementado con EmailJS)

---

### 5. IMPLEMENTACIÓN 3D / GAUSSIAN SPLATTING

#### Librerías y motores 3D en uso

**Stack 3D Principal:**
- **Three.js 0.164.1**: Motor 3D principal
- **@react-three/fiber 8.16.8**: React renderer para Three.js
- **@react-three/drei 9.106.0**: Utilidades y abstracciones
- **maath 0.10.7**: Utilidades matemáticas

**NOTA IMPORTANTE**: No se encontró implementación de **Gaussian Splatting**. El proyecto utiliza renderizado 3D tradicional con modelos GLTF.

#### Carga de archivos 3D

**Formatos soportados:**
- **GLTF/GLB**: Formato principal para modelos 3D
- **Imágenes 360°**: PNG/JPG para panoramas esféricos

**Rutas de carga:**
```javascript
// Modelos 3D GLTF
"./3DObjects/Volante/scene.gltf"
"./3DObjects/Volante2/scene.gltf" 
"./3DObjects/Volante3/scene.gltf"

// Imágenes 360°
`/imagenes360/${props.imagen}.png`
```

#### Lógica de renderizado identificada

**Componentes Canvas:**
```javascript
// Estructura típica de componente 3D
const Modelo3D = () => {
  const model = useGLTF("./3DObjects/Modelo/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
      <spotLight /* ... */ />
      <pointLight /* ... */ />
      <primitive
        object={model.scene}
        scale={12}
        position={[0, -3.5, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
```

**Configuración de Canvas:**
- `frameloop="demand"`: Renderizado bajo demanda
- `shadows`: Sombras activadas
- `dpr={[1, 2]}`: Device pixel ratio adaptativo
- `preserveDrawingBuffer`: Para capturas de pantalla

**Controles:**
- `OrbitControls`: Rotación, zoom, pan
- Configuración de cámara: `position: [20, 3, 5], fov: 25`

#### Assets 3D presentes y sus rutas

**Modelos 3D GLTF:**
- `/public/3DObjects/Volante/scene.gltf` (11.6MB bin + 21KB gltf)
- `/public/3DObjects/Volante2/scene.gltf`
- `/public/3DObjects/Volante3/scene.gltf`

**Texturas:**
- Carpetas `/textures/` existentes pero vacías
- Texturas probablemente embebidas en archivos GLTF

**Imágenes 360°:**
- Ruta esperada: `/public/imagenes360/`
- Estado: Carpeta vacía, referencias en código pero sin archivos

---

### 6. DATOS Y ASSETS

#### Archivos de modelos 3D encontrados

**Modelos GLTF:**
- **Volante/scene.gltf**: Modelo principal "volante"
- **Volante2/scene.gltf**: Segunda variante del modelo
- **Volante3/scene.gltf**: Tercera variante del modelo

**Tamaños:**
- scene.bin: ~11.6MB por modelo
- scene.gltf: ~21KB por modelo
- Total aproximado: ~35MB de assets 3D

**Formatos soportados:**
- GLTF (JSON + binario)
- Texturas embebidas

#### Imágenes, íconos, fuentes y otros assets

**Imágenes:**
- `/public/imagenes/`: Carpeta vacía
- `/public/imagenArea/`: Carpeta vacía  
- `/public/imagenes360/`: Carpeta vacía (referenciada en código)
- `/public/vite.svg`: Icono Vite (1.5KB)

**Fuentes:**
- Google Fonts: Roboto (cargado desde CDN en index.html)
- Tailwind CSS: Sistema de fuentes por defecto

**Íconos:**
- React Icons 5.2.1: Biblioteca de íconos
- Material-UI Icons: Incluidos en @mui/material

#### Archivos de datos estáticos

**Base de datos externa:**
- **Supabase**: Tabla "InfoVolante" para contenido dinámico
- Configuración incompleta en `.env`

**Archivos de configuración:**
- Firebase config.js (presente pero no utilizado activamente)
- Supabase client para conexión a base de datos

#### Cómo se sirven los assets actualmente

**Estrategia de serving:**
1. **Assets estáticos**: Servidos directamente desde `/public/` por Vite
2. **Modelos 3D**: Cargados relativamente desde `./3DObjects/`
3. **Imágenes**: Referencias absolutas desde `/imagenes/`, `/imagenes360/`
4. **Fuentes**: CDN externo (Google Fonts)
5. **Datos dinámicos**: API calls a Supabase

**Problemas identificados:**
- Carpetas de imágenes vacías pero referenciadas en código
- Rutas hardcoded a `localhost:5173` en componentes
- Variables de entorno de Supabase sin configurar

---

### 7. LO QUE FALTA O ESTÁ INCOMPLETO

#### Funcionalidades a medias o con TODOs

**No se encontraron comentarios TODO/FIXME explícitos**, pero se identificaron funcionalidades incompletas:

1. **Configuración de Supabase incompleta**
   - Archivo `.env` vacío: `VITE_SUPABASE_URL=` y `VITE_SUPABASE_PUBLIC_KEY=`
   - Todas las páginas secundarias intentan conectar a Supabase pero fallarán

2. **Assets faltantes**
   - Carpeta `/imagenes360/` vacía pero referenciada en `Recuadro360.jsx`
   - Carpeta `/imagenes/` vacía
   - Carpetas `/textures/` vacías en modelos 3D

3. **Contenido placeholder**
   - Textos repetitivos: "Curiosidades sobre los pingüinos" en múltiples componentes
   - Contenido genérico no relacionado con museo arqueológico

#### Errores evidentes en el código

1. **Rutas hardcoded**
   ```javascript
   const linkPath = `http://localhost:5173/${props.link}`;
   ```
   - Problema en producción, debería usar rutas relativas

2. **Manejo de errores básico**
   ```javascript
   {CanvasComponent ? <CanvasComponent /> : <div>Error: Component not found</div>}
   ```
   - Mensajes de error visibles para usuario final

3. **Consola con errores**
   - Múltiples `console.error()` por fallos de conexión a Supabase
   - Errores en todas las páginas secundarias

#### Dependencias referenciadas pero no utilizadas

1. **Firebase configurado pero no utilizado**
   - `firebase/` y `config.js` presentes
   - No se encuentra importación activa en componentes

2. **EmailJS configurado pero implementación incompleta**
   - Dependencia presente pero formulario de contacto parece no funcional

3. **React Pannellum para 360°**
   - Dependencia instalada pero no se utiliza activamente
   - Se usa implementación custom con Three.js

#### Rutas o imports rotos

1. **Imports relativos inconsistentes**
   ```javascript
   import Volante3Canvas from "../canvas/Volante3";  // Funciona
   import { supabase } from '../../supabaseClient';  // Funciona
   ```

2. **Assets no encontrados**
   - Todas las referencias a imágenes en `/imagenes360/` fallarán
   - Texturas de modelos 3D probablemente no carguen

#### Problemas de configuración

1. **Variables de entorno**
   - `.env` incompleto causará fallos en producción
   - Supabase no funcionará sin credenciales

2. **Build y deploy**
   - Script `deploy` configurado para gh-pages pero sin configuración
   - Assets relativos pueden fallar en deploy

---

### 8. PUNTOS DE ENTRADA

#### Archivo principal de la aplicación

**Punto de entrada HTML:**
- `/index.html` - Define el contenedor `#root` y carga scripts

**Punto de entrada JavaScript:**
- `/src/main.jsx` - Inicializa React y monta App.jsx
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Componente principal:**
- `/src/App.jsx` - Configura React Router y estructura general

#### Cómo se levanta el proyecto localmente

**Comandos npm disponibles:**
```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo Vite

# Build  
npm run build        # Construye versión de producción

# Preview
npm run preview      # Previa versión de producción local

# Linting
npm run lint         # Ejecuta ESLint

# Deploy
npm run deploy       # Deploy a GitHub Pages (requiere configuración)
```

**Servidor de desarrollo:**
- Por defecto en `http://localhost:5173`
- Hot reload activo
- Build rápido con Vite

#### Variables de entorno requeridas

**Archivo `.env` actual (incompleto):**
```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLIC_KEY=
```

**Variables necesarias para funcionamiento completo:**
```env
# Supabase (requerido para páginas secundarias)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLIC_KEY=your-anon-key

# Opcional: EmailJS para formulario de contacto
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

# Opcional: Firebase (si se decide usar)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
# ... otras configuraciones Firebase
```

**Configuración adicional necesaria:**
1. **Base de datos Supabase** con tabla `InfoVolante`
2. **Configuración de GitHub Pages** para deploy automático
3. **Assets faltantes** en carpetas `/imagenes/` y `/imagenes360/`

---

## RESUMEN EJECUTIVO

### Estado General del Proyecto

**Museo Virtual Unicauca** es una aplicación web React con capacidades 3D para exhibición de contenido arqueológico/cultural. El proyecto tiene una arquitectura sólida pero requiere configuración y contenido para ser funcional.

### Fortalezas Principales

✅ **Arquitectura moderna** con React 18, Vite, Tailwind CSS  
✅ **Capacidades 3D avanzadas** con Three.js y React Three Fiber  
✅ **Sistema de diseño consistente** con SectionTitle, PageHeader, SeccionInfo  
✅ **Animaciones de entrada** con framer-motion y useRevealOnScroll (Fase 5)  
✅ **Diseño responsive** con Tailwind y componentes mobile-first  
✅ **4 zonas arqueológicas activas** con identidad visual completa  
✅ **Analytics GA4** con consentimiento de cookies  
✅ **Integración con Supabase** para carga de piezas arqueológicas  

### Problemas Críticos

❌ **Configuración de Supabase incompleta** - Todas las páginas secundarias fallan  
❌ **Assets faltantes** - Imágenes 360° y texturas no presentes  
❌ **Contenido placeholder** - Textos genéricos no relacionados con museo  
❌ **Rutas hardcoded** - Problemas en producción  
❌ **Manejo de errores visible al usuario**  

### Próximos Pasos Recomendados

1. **Verificar imágenes** en `/public/imagenArea/` para las 4 zonas (Popayán, Corinto, Patía, Quimbaya) — requeridas por `PageHeader` y `SeccionInfo`.
2. **Crear cuenta GA4** y completar `VITE_GA_TRACKING_ID` en `.env`.
3. **Crear tabla `retroalimentacion`** en Supabase si no existe.
4. **Completar variables de entorno** de Supabase en producción.
5. **Migrar componentes legacy** (`Contenedor.jsx`, `ContenedorInvert.jsx`) al sistema de diseño de Fase 5 cuando corresponda.

El proyecto tiene una base técnica sólida con identidad visual consistente y está preparado para producción una vez resueltos los assets y las variables de entorno.
