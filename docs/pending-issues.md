# PROBLEMAS CONOCIDOS - VOLANTE_HUSO (BACKEND + FRONTEND)
## Issues y Tareas Pendientes del Estado Actual

---

## 🚨 PRIORIDAD INMEDIATA — Configuración Backend Completa

### Backend Crítico (Bloquea Todo)
- [x] **Crear proyecto Supabase** y obtener credenciales reales
- [x] **Completar .env** con VITE_SUPABASE_URL y VITE_SUPABASE_PUBLIC_KEY
- [x] **Ejecutar SQL completo** de creación de tablas (piezas_arqueologicas + configuracion_sitio)
- [ ] **Configurar Storage buckets** en Supabase (imagenes, thumbnails)
- [x] **Crear dataset Hugging Face** para modelos Gaussian Splatting
- [x] **Configurar Git LFS** y subir primer modelo de prueba
- [ ] **Conectar a Vercel** para despliegue automático
- [x] **Eliminar Firebase** (src/firebase/config.js) - ya no se usa

### Variables de Entorno Faltantes
```env
# .env actual - INCOMPLETO
VITE_SUPABASE_URL=                    # CRÍTICO: Sin valor
VITE_SUPABASE_PUBLIC_KEY=             # CRÍTICO: Sin valor
VITE_HUGGING_FACE_REPO=               # NUEVO: Agregar URL base HF
```

---

## � PROBLEMAS CRÍTICOS (Bloquean Funcionalidad)

### 1. ❌ Backend No Configurado - Impacto Total
**Severidad:** Crítica  
**Archivos afectados:** Todo el sistema  
**Impacto:** Ninguna funcionalidad de datos funciona

#### **Problema Backend:**
- **Supabase sin credenciales** - No hay conexión a base de datos
- **Tablas no creadas** - No hay estructura de datos
- **Hugging Face no configurado** - No hay storage para modelos 3D
- **Variables de entorno vacías** - Frontend no puede conectar

#### **Problema Frontend (Consecuencia):**
```javascript
// En todas las páginas secundarias
const { data, error } = await supabase.from('InfoVolante').select('*');
// Error: Invalid Supabase URL - TODAS las páginas fallan
```

#### **Consecuencias Completas:**
- **Páginas de cultura** muestran errores de conexión
- **Componente Datos.jsx** no carga información
- **Selector de piezas** no funciona
- **Modelos 3D Gaussian Splatting** no pueden cargarse
- **Configuración del sitio** no disponible

#### **Solución Backend Requerida:**
```sql
-- Ejecutar en Supabase SQL Editor
CREATE TABLE piezas_arqueologicas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT,
  periodo TEXT,
  cultura TEXT,
  dimensiones TEXT,
  estado_conservacion TEXT,
  imagen_url TEXT,
  modelo_3d_url TEXT,
  modelo_3d_tipo TEXT,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE configuracion_sitio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clave TEXT UNIQUE NOT NULL,
  valor TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **Solución Frontend Requerida:**
```javascript
// Actualizar supabaseClient.js para nuevas tablas
export async function getPiezasPorCultura(cultura) {
  const { data, error } = await supabase
    .from('piezas_arqueologicas')
    .select('*')
    .eq('cultura', cultura)
    .eq('activo', true);
  return { data, error };
}
```

---

## 🗂️ ASSETS Y STORAGE (Backend + Frontend)

### 2. ❌ Storage No Configurado - Assets Inaccesibles
**Severidad:** Alta  
**Impacto:** Imágenes y modelos 3D no cargan

#### **Problema Backend:**
- **Supabase Storage buckets no creados** (imagenes, thumbnails)
- **Hugging Face Dataset no existe** - Modelos .splat sin hogar
- **Políticas de acceso no configuradas** - URLs públicas no funcionan

#### **Problema Frontend:**
```javascript
// Assets referenciados pero no accesibles
const imagenPath = `/imagenes360/${props.imagen}.png`;     // 404
const modeloUrl = pieza.modelo_3d_url;                    // undefined/null
```

#### **Consecuencias:**
- **Imágenes 360°** no cargan (404 errors)
- **Modelos Gaussian Splatting** no pueden cargarse
- **Thumbnails** faltantes
- **Experiencia visual** comprometida

#### **Solución Backend:**
```bash
# Crear buckets en Supabase Storage
- imagenes/     # Para imágenes preview (max 1MB)
- thumbnails/   # Para miniaturas (max 100KB)

# Crear dataset en Hugging Face
- [org]/volante-huso-modelos/
- modelos/      # Para .splat, .ply, .glb
- metadata/     # JSON con metadatos
```

#### **Solución Frontend:**
```javascript
// Actualizar rutas para nuevo sistema
const imagenUrl = `${SUPABASE_URL}/storage/v1/object/public/imagenes/${pieza.imagen_url}`;
const modeloUrl = pieza.modelo_3d_url; // Desde Hugging Face
```

### 3. ❌ Modelos 3D Gaussian Splatting Sin Sistema
**Severidad:** Alta  
**Impacto:** Funcionalidad principal no disponible

#### **Problema:**
- **No hay componente VisorSplat.jsx** en src/Componentes/canvas/
- **No hay sistema de carga** para archivos .splat grandes
- **No hay indicadores de progreso** para carga de modelos >100MB

#### **Solución Requerida:**
```javascript
// Crear componente especializado
// src/Componentes/canvas/VisorSplat.jsx
const VisorSplat = ({ url, onProgress, onLoad, onError }) => {
  // Implementar carga progresiva de .splat
  // Mostrar advertencia si >100MB
  // Manejar errores específicos de Gaussian Splatting
};
```

---

## � PROBLEMAS DE CÓDIGO (Frontend + Backend Integration)

### 4. ❌ Rutas Hardcodeadas a Localhost
**Severidad:** Alta  
**Archivos afectados:** Múltiples componentes  
**Impacto:** No funcionará en producción

#### **Problema:**
```javascript
// En Card3D.jsx línea 7
const linkPath = `http://localhost:5173/${props.link}`;

// En Recuadro3D.jsx línea 6  
const linkPath = `http://localhost:5173/${props.link}`;
```

#### **Consecuencias:**
- **Links rotos** en producción
- **Navegación** no funciona fuera de desarrollo
- **SEO** comprometido
- **Experiencia de usuario** rota en deploy

#### **Solución requerida:**
```javascript
// Corregir a rutas relativas
const linkPath = `/${props.link}`;

// O usando BASE_URL si es necesario
const linkPath = `${import.meta.env.BASE_URL}${props.link}`;
```

### 5. ❌ Componentes Duplicados y Obsoletos
**Severidad:** Media  
**Archivos:** Múltiples duplicados  
**Impacto:** Confusión y mantenimiento difícil

#### **Problema:**
```
src/Componentes/Navbar.jsx     (2.6kb - No usado)
src/Componentes/Navbar1.jsx    (3.7kb - Activo)
src/firebase/config.js         (Configurado pero no se usa)
```

#### **Consecuencias:**
- **Código duplicado** innecesario
- **Mantenimiento confuso**
- **Bundle size** aumentado
- **Posibles bugs** si se usa el incorrecto

#### **Solución requerida:**
- Eliminar `Navbar.jsx` y `src/firebase/config.js`
- Consolidar en componentes únicos
- Limpiar dependencias no usadas

### 6. ❌ Textos Placeholder no Relacionados
**Severidad:** Media  
**Archivos afectados:** Principal.jsx y páginas secundarias  
**Impacto:** Contenido no profesional y confuso

#### **Problema:**
```javascript
// En Principal.jsx - Textos sobre pingüinos
{ imagen: 'calima', link: 'Calima', titulo: 'CALIMA', 
  parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos...' }
```

#### **Consecuencias:**
- **Contenido irrelevante** (pingüinos en museo arqueológico)
- **Confusión para usuarios**
- **Profesionalismo comprometido**
- **SEO negativo** por contenido no relacionado

#### **Solución requerida:**
```javascript
// Reemplazar con contenido real sobre cada cultura
{ imagen: 'calima', link: 'Calima', titulo: 'CALIMA',
  parrafo: 'La cultura Calima floreció en el valle del Cauca entre los años 200-1600 d.C...' }
```

---

## ♿ ACCESIBILIDAD WCAG 2.1 AA — Pendiente

### Paso B — Imágenes sin atributo alt descriptivo
**Severidad:** Alta (WCAG 1.1.1 Non-text Content)  
**Condición:** Ejecutar cuando todo el material visual esté subido  
**Tarea:** Buscar en todo `src/` etiquetas `<img>` con `alt=""` o sin `alt` y reemplazar con texto descriptivo real según contexto:
- Logo del museo → `alt="Logo Museo de Historia Natural Universidad del Cauca"`
- Imagen de cultura → `alt="Representación visual de la cultura [nombre]"`
- Imagen de pieza → `alt="Fotografía del [nombre de la pieza], cultura [cultura], período [período]"`

**Comando de búsqueda:**
```bash
grep -rn "<img" src/ | grep -v 'alt="[^"]'
```

---

## 📧 FORMULARIO DE CONTACTO Y COMUNICACIÓN

### 7. ❌ EmailJS Configuración Incompleta
**Severidad:** Media  
**Archivo:** `src/Screens/Contact.jsx`  
**Impacto:** Usuarios no pueden contactar

#### **Problema:**
```javascript
// EmailJS instalado pero probablemente sin configurar
import emailjs from '@emailjs/browser';
// Falta configuración de service ID, template ID, public key
```

#### **Solución requerida:**
```javascript
// Agregar configuración en .env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🔍 ERRORES TÉCNICOS Y CONSOLA

### 8. ❌ Múltiples Console Errors
**Severidad:** Media  
**Ubicación:** Todas las páginas secundarias  
**Impacto:** Experiencia de desarrollador y posible producción

#### **Errores actuales en consola:**
```javascript
// En todas las páginas secundarias
console.error("Error al obtener los documentos: ", error);
// Error: Invalid Supabase URL

// En Card3D.jsx y Datos.jsx
{CanvasComponent ? <CanvasComponent /> : <div>Error: Component not found</div>}
// Error visible para usuario final
```

#### **Solución requerida:**
- Implementar manejo de errores amigable
- Usar componentes de error en lugar de texto plano
- Configurar Supabase correctamente

---

## 📊 IMPACTO EN USUARIOS Y SISTEMA

### Experiencia Actual del Usuario

#### **Flujo Positivo (Funciona):**
1. ✅ Página principal carga correctamente
2. ✅ Carrusel de culturas funciona
3. ✅ Navegación básica entre páginas funciona
4. ✅ Modelos 3D genéricos cargan (Volante, Volante2, Volante3)

#### **Flujo Roto (No Funciona):**
1. ❌ Páginas de cultura muestran errores de conexión
2. ❌ Selector de piezas no funciona
3. ❌ Imágenes 360° no cargan
4. ❌ Modelos Gaussian Splatting no disponibles
5. ❌ Contenido es sobre pingüinos (no relacionado)
6. ❌ Formulario de contacto probablemente no funciona

### Impacto por Problema

| Problema | Impacto Usuario | Frecuencia | Severidad | Backend/Frontend |
|----------|-----------------|------------|-----------|------------------|
| Backend no configurado | No ve contenido cultural | Siempre | Crítica | Backend |
| Rutas localhost | No puede navegar en producción | Siempre | Alta | Frontend |
| Storage no configurado | No hay imágenes/modelos | Siempre | Alta | Backend |
| Textos placeholder | Contenido confuso | Siempre | Media | Frontend |
| Formulario contacto | No puede contactar | Ocasional | Media | Frontend |

---

## 🛠️ PLAN DE SOLUCIÓN INTEGRADO

### Fase 1: Backend Crítico (Funcionalidad Básica)
1. **Configurar Supabase** - Crear proyecto, ejecutar SQL, configurar variables
2. **Configurar Storage** - Buckets para imágenes y thumbnails
3. **Configurar Hugging Face** - Dataset para modelos 3D, Git LFS
4. **Actualizar Frontend** - Modificar supabaseClient.js para nuevas tablas

### Fase 2: Frontend Crítico (Experiencia de Usuario)
5. **Corregir Rutas** - Reemplazar localhost por rutas relativas
6. **Crear VisorSplat.jsx** - Componente para Gaussian Splatting
7. **Actualizar Componentes** - Integrar nuevo backend en páginas de cultura
8. **Reemplazar Textos** - Contenido real sobre culturas arqueológicas

### Fase 3: Assets y Contenido (Experiencia Completa)
9. **Subir Imágenes** - 360°, previews, thumbnails a Supabase Storage
10. **Subir Modelos 3D** - Gaussian Splatting a Hugging Face
11. **Configurar EmailJS** - Formulario de contacto funcional
12. **Testing Completo** - Verificar todo el flujo de usuario

### Fase 4: Limpieza y Optimización (Mantenimiento)
13. **Eliminar Duplicados** - Navbar.jsx, Firebase, dependencias no usadas
14. **Mejorar Errores** - Manejo amigable en lugar de console.error
15. **Optimizar Performance** - Lazy loading, caching, compresión
16. **Documentación** - Actualizar toda la documentación del sistema

---

## � CHECKLIST DE VERIFICACIÓN FINAL

### Backend (Configuración Crítica)
- [x] **Proyecto Supabase creado** con URL y anon key
- [x] **Tablas ejecutadas** (piezas_arqueologicas + configuracion_sitio)
- [ ] **Storage buckets creados** (imagenes, thumbnails)
- [x] **Dataset Hugging Face creado** para modelos 3D
- [x] **Git LFS configurado** y primer modelo subido
- [x] **Variables de entorno completas** en .env
- [x] **Firebase eliminado** del proyecto

### Frontend (Integración)
- [x] **supabaseClient.js actualizado** para nuevas tablas
- [x] **VisorSplat.jsx creado** para Gaussian Splatting
- [x] **Rutas localhost eliminadas** y reemplazadas
- [x] **Componentes duplicados eliminados** (Navbar.jsx, etc.)
- [ ] **Textos placeholder reemplazados** con contenido cultural
- [ ] **Manejo de errores implementado** (no console.error)

### Assets y Contenido
- [ ] **Imágenes 360° subidas** a Supabase Storage
- [x] **Modelos .splat subidos** a Hugging Face
- [ ] **Thumbnails generados** y subidos
- [ ] **Contenido culturalmente relevante** en todas las páginas
- [ ] **EmailJS configurado** para formulario de contacto

### Testing y Verificación
- [ ] **Conexión Supabase funciona** sin errores
- [ ] **Páginas de cultura cargan datos** correctamente
- [ ] **Modelos 3D cargan** desde Hugging Face
- [ ] **Navegación funciona** en todos los entornos
- [ ] **No hay errores 404** de assets
- [ ] **Experiencia móvil funcional**

---

## 🎯 ESTADO FINAL ESPERADO

### Sistema Funcional
- **Backend 100% gratuito**: Supabase + Hugging Face + Vercel
- **Modelos 3D Gaussian Splatting**: Cargan desde Hugging Face
- **Datos estructurados**: En Supabase con consultas optimizadas
- **Assets organizados**: Imágenes en Supabase, modelos en HF
- **Frontend integrado**: Componentes actualizados para nuevo backend

### Experiencia de Usuario
- **Carga rápida**: Modelos 3D con indicadores de progreso
- **Navegación fluida**: Sin errores ni links rotos
- **Contenido cultural**: Información real y relevante
- **Accesibilidad**: Funciona en desktop y móvil
- **Profesionalismo**: Sin placeholders ni errores visibles

---

**NOTA:** Esta lista prioriza la configuración del backend como requisito fundamental para cualquier funcionalidad del frontend. El sistema está diseñado para ser 100% gratuito y escalable usando la arquitectura Supabase + Hugging Face + Vercel.
