# Fase 4 — Analytics, Retroalimentación y Alcance

## Objetivo
Implementar la infraestructura de métricas de comportamiento (GA4), tracking de interacciones 3D, consentimiento de cookies conforme a la normativa, formulario de retroalimentación conectado a Supabase, footer institucional y cobertura de analytics en todas las páginas.

---

## Tareas completadas

### 4.1 — Arquitectura GA4 (`ga4.js`)
- Creación de `src/analytics/ga4.js` como módulo centralizado.
- `initGA(measurementId)`: inyecta el script de Google Tag Manager dinámicamente. No lanza errores si el ID está vacío o no se ha proporcionado.
- `trackEvent(categoria, accion, etiqueta)`: envía eventos personalizados a GA4 sin errores si GA4 no está inicializado.
- `trackPageView(ruta, titulo)`: registra vistas de página con path y título.
- Variable de entorno `VITE_GA_TRACKING_ID=` añadida al `.env` (vacía por ahora, se completa al crear la cuenta GA4).

### 4.2 — Tracking de interacciones 3D

#### VisorSplat.jsx
- `carga_completa` → disparado cuando el Gaussian Splat termina de cargar y renderizar.
- `primera_rotacion` → disparado la primera vez que el usuario hace `onPointerDown` sobre el visor (usando `useRef` para evitar duplicados).
- `error_carga` → disparado en errores de descarga (`fetch`) y en errores de inicialización del visor.

#### Datos.jsx — Canvas GLTF
- Nuevo componente `GltfVisorWithTracking` que envuelve el canvas GLTF existente.
- `vista_gltf` → disparado al montar el componente (`useEffect` sin dependencias de interacción).
- `interaccion_gltf` → disparado la primera vez que el usuario hace `onPointerDown` sobre el canvas (usando `useRef`).
- Todos los eventos incluyen el nombre de la pieza como etiqueta.

### 4.3 — Hook useAnalytics
- Creación de `src/hooks/useAnalytics.js`.
- Llama a `trackPageView` automáticamente al cambiar de ruta (usando `useLocation`).
- Devuelve `{ trackEvent }` para que cada página pueda disparar eventos específicos.
- Integrado en **todas las pantallas**:
  - `Principal.jsx` → `'Inicio'`
  - `Home.jsx` → `'Sobre el Museo'`
  - `Contact.jsx` → `'Contacto'`
  - `Volantes.jsx` → `'Colección de Volantes de Huso'`
  - `Ceramoteca.jsx` → `'Ceramoteca'`
  - `Textiles.jsx` → `'Textiles en la Arqueología'`
  - `Retroalimentacion.jsx` → `'Retroalimentación'`
  - `Popayan.jsx` → `'Cultura - Popayán'`
  - `Calima.jsx` → `'Cultura - Calima'`
  - `Corinto.jsx` → `'Cultura - Corinto'`
  - `Nariño.jsx` → `'Cultura - Nariño'`
  - `Patia.jsx` → `'Cultura - Patía'`
  - `Tumaco.jsx` → `'Cultura - Tumaco'`
  - `TierraAdentro.jsx` → `'Cultura - Tierradentro'`
  - `Quimbaya.jsx` → `'Cultura - Quimbaya'`

### 4.4 — Formulario de Retroalimentación
- `supabaseClient.js`: nueva función `enviarRetroalimentacion(datos)` que inserta en tabla `retroalimentacion`.
- Creación de `src/Screens/Retroalimentacion.jsx`:
  - **Campos**: tipo de visitante (select), procedencia (text), calificación (5 estrellas interactivas), comentario (mínimo 20 caracteres), nombre (opcional).
  - **Validación** en cliente antes de enviar (sin envío si falta campo requerido).
  - **Estados**: inicial → enviando (botón + spinner deshabilitado) → éxito (formulario reemplazado por mensaje de agradecimiento) → error (mensaje amigable con botón "Intentar de nuevo").
  - Estrellas con color dorado (`#C9A84C`) al seleccionar y al hover.
  - `trackEvent` al envío exitoso con tipo de visitante como etiqueta.
- Ruta `/Retroalimentacion` registrada en `App.jsx`.
- Link "Retroalimentación" añadido en `Navbar1.jsx` (desktop y móvil).

### 4.5 — Footer institucional
- Creación de `src/Componentes/UI/Footer.jsx`.
- Layout 3 columnas en desktop, 1 columna en móvil.
- Fondo `#004d27` (verde oscuro institucional).
- **Columna 1**: nombre del museo, subtítulo Unicauca, ID del proyecto y Vicerrectoría.
- **Columna 2**: navegación rápida (Inicio, Colección, Sobre el Museo, Recursos Educativos, Contacto).
- **Columna 3**: CTA de retroalimentación con botón borde blanco / hover fondo blanco.
- Línea inferior: copyright y licencia CC BY 4.0.
- Integrado en `App.jsx` después de `</Routes>`, aparece en todas las páginas automáticamente.

### 4.6 — Banner de consentimiento de cookies (CookieBanner)
- Creación de `src/Componentes/UI/CookieBanner.jsx`.
- Persiste la decisión en `localStorage` bajo la clave `'cookies_aceptadas'`.
- Primera visita: muestra el banner. Visitas siguientes: no muestra el banner.
- **"Aceptar"**: guarda `'true'`, oculta banner, activa GA4 llamando a `initGA`.
- **"Rechazar"**: guarda `'false'`, oculta banner, GA4 **no** se inicializa.
- Al recargar con decisión previa de aceptar: GA4 se inicializa automáticamente.
- `initGA` **eliminado de `main.jsx`**: GA4 solo se activa desde el banner.
- Integrado en `App.jsx` antes del cierre de `</BrowserRouter>`.

---

## Arquitectura de datos de analytics

| Categoría | Acción | Etiqueta | Momento |
|---|---|---|---|
| `Modelo3D` | `carga_completa` | nombre de la pieza | Al terminar de renderizar el Splat |
| `Modelo3D` | `primera_rotacion` | nombre de la pieza | Primer `onPointerDown` en el Splat |
| `Modelo3D` | `error_carga` | nombre de la pieza | Error en descarga o renderizado |
| `Modelo3D` | `vista_gltf` | nombre de la pieza | Al montar el canvas GLTF |
| `Modelo3D` | `interaccion_gltf` | nombre de la pieza | Primer `onPointerDown` en canvas GLTF |
| `Retroalimentacion` | `envio_exitoso` | tipo de visitante | Al insertar exitosamente en Supabase |
| Automático | `page_view` | — | Cada cambio de ruta (useAnalytics) |

---

## Flujo de activación de GA4

```
Usuario visita el sitio
  └─ localStorage['cookies_aceptadas'] === undefined
       └─ CookieBanner se muestra
            ├─ "Aceptar" → localStorage = 'true' → initGA(VITE_GA_TRACKING_ID)
            └─ "Rechazar" → localStorage = 'false' → GA4 no se activa

Visita siguiente
  └─ localStorage['cookies_aceptadas'] === 'true' → initGA automático al montar CookieBanner
  └─ localStorage['cookies_aceptadas'] === 'false' → sin GA4
```

---

## Archivos clave creados o modificados

| Archivo | Descripción |
|---|---|
| `src/analytics/ga4.js` | Módulo centralizado GA4 |
| `src/hooks/useAnalytics.js` | Hook de tracking automático por ruta |
| `src/Componentes/UI/Footer.jsx` | Footer institucional |
| `src/Componentes/UI/CookieBanner.jsx` | Banner de consentimiento de cookies |
| `src/Screens/Retroalimentacion.jsx` | Formulario de retroalimentación |
| `src/supabaseClient.js` | Función `enviarRetroalimentacion` |
| `src/Componentes/canvas/VisorSplat.jsx` | Tracking eventos Splat 3D |
| `src/Componentes/3D/Datos.jsx` | `GltfVisorWithTracking`, tracking canvas GLTF |
| `src/Componentes/Navbar1.jsx` | Link Retroalimentación |
| `src/App.jsx` | Footer, CookieBanner, ruta Retroalimentacion |
| `.env` | `VITE_GA_TRACKING_ID=` (vacío hasta crear cuenta GA4) |

---

## Pendiente / próximos pasos
- Crear la cuenta GA4 y añadir el Measurement ID en `.env`.
- Crear la tabla `retroalimentacion` en Supabase si no existe (campos: `tipo_visitante`, `procedencia`, `calificacion`, `comentario`, `nombre`).
- Revisión del formulario de `Contact.jsx` para conectar a un backend real (actualmente simula el envío localmente con estado React).
