# GUÍA DE DESPLIEGUE - MUSEO VIRTUAL UNICAUCA
## Paso a Paso para Poner en Producción el Museo Virtual

> **Estado actual (Fase 5):** Supabase y Hugging Face ya están configurados y en uso. Esta guía sirve tanto para configurar desde cero como de referencia para el entorno existente.

---

## 🎯 VISIÓN GENERAL

Esta guía te permite desplegar el proyecto desde cero usando únicamente servicios gratuitos:
- **Supabase**: Base de datos (piezas arqueológicas + retroalimentación)
- **Hugging Face**: Storage de modelos Gaussian Splat (.splat, .ply)
- **Vercel**: Hosting del frontend (recomendado — maneja React Router automáticamente)
- **Tiempo estimado**: 45-60 minutos
- **Costo total**: $0

**Repositorio:** `jevillamizar/museo-virtual` — rama `mejora-visual-y-funcional`

---

## 📋 PRERREQUISITOS

### Cuentas Requeridas
- [ ] **GitHub**: Repositorio del código
- [ ] **Supabase**: Base de datos y API
- [ ] **Hugging Face**: Storage de modelos 3D
- [ ] **Vercel**: Hosting del frontend

### Herramientas Locales
- [ ] **Git**: Para control de versiones
- [ ] **Node.js 18+**: Para desarrollo local
- [ ] **Git LFS**: Para archivos grandes (modelos 3D)

---

## 🗄️ PASO 1 — CONFIGURAR SUPABASE

### 1.1 Crear Proyecto Supabase

1. Ir a [supabase.com](https://supsupase.com)
2. Click en **"Start your project"**
3. Iniciar sesión con GitHub
4. Click **"New Project"**
5. Seleccionar organización (crear una si es necesario)
6. Configurar proyecto:
   ```
   Database Name: volante-huso
   Database Password: [generar contraseña segura]
   Region: [seleccionar la más cercana a tus usuarios]
   ```
7. Click **"Create new project**

### 1.2 Ejecutar SQL de Creación de Tablas

Una vez creado el proyecto, ir a **SQL Editor** y ejecutar:

```sql
-- Tabla principal de piezas arqueológicas
CREATE TABLE piezas_arqueologicas (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre                  TEXT NOT NULL,
  descripcion             TEXT,
  periodo                 TEXT,
  cultura                 TEXT,
  lugar_hallazgo          TEXT,
  dimensiones             TEXT,
  material                TEXT,
  numero_catalogo         TEXT,
  significado             TEXT,
  usos                    TEXT,
  relevancia_educativa    TEXT,
  dato_curioso            TEXT,
  estado_conservacion     TEXT,
  imagen_url              TEXT,
  modelo_3d_url           TEXT,
  modelo_3d_tipo          TEXT,       -- 'gaussian_splat' | 'ply' | 'glb'
  camera_url              TEXT,       -- URL a cameras.json (cálculo COLMAP)
  camera_initial_position FLOAT8[],   -- [x, y, z]
  camera_look_at          FLOAT8[],   -- [x, y, z]
  activo                  BOOLEAN DEFAULT true,
  created_at              TIMESTAMPTZ DEFAULT NOW(),
  updated_at              TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de retroalimentación de visitantes
CREATE TABLE retroalimentacion (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo_visitante  TEXT NOT NULL,
  procedencia     TEXT NOT NULL,
  calificacion    INT NOT NULL CHECK (calificacion BETWEEN 1 AND 5),
  comentario      TEXT NOT NULL CHECK (length(trim(comentario)) >= 20),
  nombre          TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_piezas_cultura ON piezas_arqueologicas(cultura);
CREATE INDEX idx_piezas_activas ON piezas_arqueologicas(activo);
CREATE INDEX idx_piezas_tipo    ON piezas_arqueologicas(modelo_3d_tipo);

-- Restricciones para calidad de datos
ALTER TABLE piezas_arqueologicas
ADD CONSTRAINT check_cultura
  CHECK (cultura IN ('Popayán', 'Corinto', 'Patía', 'Quimbaya',
                     'Calima', 'Nariño', 'Tumaco', 'Tierradentro'));

ALTER TABLE piezas_arqueologicas
ADD CONSTRAINT check_tipo_modelo
  CHECK (modelo_3d_tipo IN ('gaussian_splat', 'ply', 'glb'));

ALTER TABLE piezas_arqueologicas
ADD CONSTRAINT check_nombre_not_empty
  CHECK (length(trim(nombre)) > 0);

-- Habilitar RLS
ALTER TABLE piezas_arqueologicas ENABLE ROW LEVEL SECURITY;
ALTER TABLE retroalimentacion    ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad
CREATE POLICY "Piezas activas son públicas" ON piezas_arqueologicas
  FOR SELECT USING (activo = true);

CREATE POLICY "Retroalimentación: inserción pública" ON retroalimentacion
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Solo actualizar autenticados" ON piezas_arqueologicas
  FOR UPDATE USING (auth.role() = 'authenticated');
```

### 1.3 Configurar Storage Buckets

1. Ir a **Storage** en el menú lateral
2. Crear bucket **"imagenes"**:
   - Name: `imagenes`
   - Public bucket: ✅
3. Crear bucket **"thumbnails"**:
   - Name: `thumbnails`
   - Public bucket: ✅
4. Para cada bucket, ir a **Settings** y configurar políticas:

```sql
-- Política para bucket imagenes
CREATE POLICY "Imágenes son públicas" ON storage.objects
FOR SELECT USING (bucket_id = 'imagenes');

CREATE POLICY "Cualquiera puede subir imágenes" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'imagenes');

CREATE POLICY "Cualquiera puede actualizar imágenes" ON storage.objects
FOR UPDATE USING (bucket_id = 'imagenes');

-- Política para bucket thumbnails
CREATE POLICY "Thumbnails son públicos" ON storage.objects
FOR SELECT USING (bucket_id = 'thumbnails');

CREATE POLICY "Cualquiera puede subir thumbnails" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'thumbnails');

CREATE POLICY "Cualquiera puede actualizar thumbnails" ON storage.objects
FOR UPDATE USING (bucket_id = 'thumbnails');
```

### 1.4 Obtener Credenciales

1. Ir a **Settings → API**
2. Copiar los siguientes valores:
   ```
   Project URL: https://[project-id].supabase.co
   anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...
   ```

---

## 🤖 PASO 2 — CONFIGURAR HUGGING FACE

### 2.1 Crear Cuenta y Organización

1. Ir a [huggingface.co](https://huggingface.co)
2. Crear cuenta gratuita
3. Ir a **Settings → Organizations** (opcional)
4. Crear organización para el proyecto (ej: `universidad-cauca`)

### 2.2 Dataset existente

> **El bucket ya está creado y en uso:**
> ```
> https://huggingface.co/buckets/jevillamizar/volantes-uso-splats
> ```
> Variable de entorno: `VITE_HUGGING_FACE_BUCKET`

Para crear uno nuevo desde cero:
1. Ir a **Datasets → New dataset**
2. Configurar:
   ```
   Dataset name: volantes-uso-splats
   Namespace: [tu-usuario] o [tu-organización]
   License: MIT
   Public: ✅
   ```
3. Click **"Create dataset"**

### 2.3 Configurar Git LFS

```bash
# Instalar Git LFS (si no está instalado)
git lfs install

# Clonar el dataset
git clone https://huggingface.co/datasets/[org]/volante-huso-modelos

# Entrar al directorio
cd volante-huso-modelos

# Configurar Git LFS para archivos 3D
echo "*.splat filter=lfs diff=lfs merge=lfs -text" >> .gitattributes
echo "*.ply filter=lfs diff=lfs merge=lfs -text" >> .gitattributes
echo "*.glb filter=lfs diff=lfs merge=lfs -text" >> .gitattributes

# Crear estructura de carpetas
mkdir -p modelos
mkdir -p metadata

# Crear README.md
cat > README.md << 'EOF'
# Volante Huso - Modelos 3D

Dataset para almacenamiento de modelos 3D del proyecto Volante Huso.

## Estructura
- `modelos/`: Archivos 3D (.splat, .ply, .glb)
- `metadata/`: Metadatos adicionales

## Formatos Soportados
- Gaussian Splatting (.splat)
- Point Clouds (.ply)
- Binary GLTF (.glb)

## Licencia
MIT License
EOF

# Commit inicial
git add .
git commit -m "feat: initial dataset structure"
git push
```

### 2.4 Subir Modelo de Ejemplo (Opcional)

```bash
# Copiar un modelo de ejemplo
cp /ruta/a/tu/modelo.splat volante-huso-modelos/modelos/

# Hacer commit
cd volante-huso-modelos
git add modelos/modelo.splat
git commit -m "feat: add example model"
git push

# La URL pública será:
# https://huggingface.co/datasets/[org]/volante-huso-modelos/resolve/main/modelos/modelo.splat
```

### 2.5 URL Base del bucket

La URL base para los modelos (existente):
```
https://huggingface.co/buckets/jevillamizar/volantes-uso-splats
```

Cada pieza en Supabase guarda su URL completa en `modelo_3d_url`. No se construye dinámicamente desde la variable de entorno — la variable es solo referencia de configuración.

---

## 🌐 PASO 3 — CONFIGURAR FRONTEND EN VERCEL

### 3.1 Conectar Repositorio a Vercel

1. Ir a [vercel.com](https://vercel.com)
2. Iniciar sesión con GitHub
3. Click **"Add New..." → "Project"**
4. Seleccionar el repositorio `jevillamizar/museo-virtual`
5. Seleccionar la rama **`mejora-visual-y-funcional`** (o `main` si se hace merge)
6. Vercel detectará automáticamente que es un proyecto React + Vite

### 3.2 Configurar Variables de Entorno

En **Environment Variables**, agregar las siguientes 4 variables:

| Variable | Valor |
|---|---|
| `VITE_SUPABASE_URL` | `https://skazarlezlzhwpfwpzwf.supabase.co` |
| `VITE_SUPABASE_PUBLIC_KEY` | *(JWT anon key del proyecto Supabase)* |
| `VITE_HUGGING_FACE_BUCKET` | `https://huggingface.co/buckets/jevillamizar/volantes-uso-splats` |
| `VITE_GA_TRACKING_ID` | *(Measurement ID de GA4 — dejar vacío si aún no existe)* |

> ⚠️ El `.env` local no se sube al repositorio (está en `.gitignore`). Las variables **solo viven en Vercel**. Cada cambio requiere un Redeploy.

### 3.3 Configurar Build Settings

Vercel detectará automáticamente desde `package.json`:
```
Framework Preset:  Vite
Build Command:     npm run build
Output Directory:  dist
Install Command:   npm install
```

> ℹ️ El build genera 8 chunks de vendor paralelos gracias a `manualChunks` en `vite.config.js`. El bundle principal es ~348 KB (gzip ~94 KB).

### 3.4 Deploy Inicial

1. Click **"Deploy"**
2. Esperar ~2 minutos a que termine el build
3. El sitio estará disponible en la URL generada por Vercel

> **React Router y rutas SPA**: Vercel maneja automáticamente las rutas del tipo `/Popayan`, `/Corinto`, etc. No se requiere configuración adicional de rewrites.

---

## ✅ PASO 4 — VERIFICACIÓN POST-DEPLOY

### 4.1 Verificar Conexión Supabase

1. Abrir el sitio en el navegador
2. Abrir **Developer Tools → Console**
3. Buscar errores de conexión a Supabase
4. Deberías ver las piezas cargando (aunque estén vacías inicialmente)

```javascript
// Para verificar manualmente en consola del navegador:
fetch('https://skazarlezlzhwpfwpzwf.supabase.co/rest/v1/piezas_arqueologicas?select=nombre,cultura&activo=eq.true', {
  headers: {
    'apikey': '[VITE_SUPABASE_PUBLIC_KEY]',
    'Authorization': 'Bearer [VITE_SUPABASE_PUBLIC_KEY]'
  }
})
.then(r => r.json())
.then(console.log);
// Debería retornar array con las piezas de Popayán, Corinto, Patía, Quimbaya
```

### 4.2 Verificar modelos 3D (Gaussian Splat)

1. Ir a una página de zona arqueológica (ej. `/Popayan`)
2. Seleccionar una pieza del dropdown
3. Verificar que aparece la barra de progreso de descarga y luego el visor
4. Si el modelo pesa >100 MB, aparecerá el aviso de confirmación antes de descargar

### 4.3 Verificar formulario de retroalimentación

1. Ir a `/Retroalimentacion`
2. Completar todos los campos y enviar
3. Verificar en **Supabase → Table Editor → retroalimentacion** que el registro fue insertado

### 4.4 Verificar Analytics GA4

1. Al entrar al sitio aparece el `CookieBanner` — aceptar cookies
2. Abrir **DevTools → Network** y buscar peticiones a `google-analytics.com`
3. Si `VITE_GA_TRACKING_ID` está vacío, GA4 no se inicializa — es el comportamiento esperado hasta tener la cuenta

---

## 🔧 PASO 5 — CONFIGURACIÓN ADICIONAL

### 5.1 Dominio Personalizado (Opcional)

1. En Vercel → **Settings → Domains**
2. Agregar dominio personalizado (ej: `museo.universidad.edu`)
3. Configurar DNS según instrucciones de Vercel

### 5.2 Activar Google Analytics 4

> El tracking GA4 **ya está implementado** en el frontend (Fase 4). Solo falta el Measurement ID.

1. Ir a [analytics.google.com](https://analytics.google.com) → crear cuenta y propiedad
2. Copiar el **Measurement ID** (`G-XXXXXXXXXX`)
3. En Vercel → **Settings → Environment Variables** → actualizar `VITE_GA_TRACKING_ID`
4. Hacer **Redeploy** desde Vercel dashboard

Eventos ya implementados: `page_view`, `carga_completa`, `primera_rotacion`, `error_carga`, `vista_gltf`, `interaccion_gltf`, `envio_exitoso`.

### 5.3 Monitoreo de Errores (Opcional)

1. Crear cuenta en Sentry o similar
2. Agregar variables de entorno
3. `ErrorBoundary` ya está implementado en el árbol de componentes 3D

---

## 📋 CHECKLIST FINAL

### Supabase ✅
- [ ] Tabla `piezas_arqueologicas` creada con columnas de cámara
- [ ] Tabla `retroalimentacion` creada
- [ ] Políticas RLS aplicadas (lectura pública piezas, inserción pública retroalimentación)
- [ ] Piezas de las 4 culturas activas cargadas (Popayán, Corinto, Patía, Quimbaya)
- [ ] Variables de entorno en Vercel configuradas

### Hugging Face ✅
- [ ] Bucket `jevillamizar/volantes-uso-splats` accesible públicamente
- [ ] URLs de modelos `.splat` guardadas en columna `modelo_3d_url` de Supabase
- [ ] Archivos `cameras.json` subidos (si se usa cálculo COLMAP)

### Vercel ✅
- [ ] Repositorio `jevillamizar/museo-virtual` conectado
- [ ] Rama `mejora-visual-y-funcional` seleccionada
- [ ] 4 variables de entorno configuradas
- [ ] Build exitoso (sin errores, solo warning de three-vendor >500 KB — esperado)
- [ ] Sitio accesible en URL de Vercel

### Funcionalidad ✅
- [ ] Página principal carga con HeroBanner y carrusel de 4 culturas
- [ ] Páginas de zona (Popayán, Corinto, Patía, Quimbaya) muestran PageHeader y SeccionInfo
- [ ] Dropdown de piezas carga desde Supabase
- [ ] Visor Gaussian Splat descarga y renderiza correctamente
- [ ] Formulario de retroalimentación inserta en Supabase
- [ ] CookieBanner aparece en primera visita
- [ ] No hay errores en consola (excepto VITE_GA_TRACKING_ID vacío si GA4 no está configurado)
- [ ] Rutas desactivadas (Calima, Nariño, Tumaco, TierraAdentro) redirigen a 404

---

## 🚨 SOLUCIÓN DE PROBLEMAS COMUNES

### Error: "Invalid Supabase URL"
**Causa**: Variables de entorno incorrectas
**Solución**: Verificar URL y key en Vercel dashboard

### Error: "Model not found" 404 en el visor Splat
**Causa**: URL en columna `modelo_3d_url` incorrecta o bucket privado
**Solución**: Verificar que el bucket de Hugging Face sea público y la URL esté bien escrita en Supabase

### Error: El visor Splat no aparece / página en blanco después de descargar
**Causa**: `gaussian-splats-3d` inyecta un div en `body` que no se limpia
**Solución**: Ya corregido en `VisorSplat.jsx` — `destroyViewer` elimina el div residual

### Error: "CORS policy blocked"
**Causa**: Políticas CORS en Supabase o Hugging Face
**Solución**: Verificar en Supabase → Settings → API → CORS origins; agregar el dominio de Vercel

### Error: "Build failed" en Vercel
**Causa**: Dependencias faltantes o errores de código
**Solución**: Revisar logs de build en Vercel; probar `npm run build` localmente primero

### Warning: "chunk larger than 500 kB" en build
**Causa**: `three-vendor` pesa ~902 KB — inherente a Three.js
**Solución**: No es un error, el build es exitoso. El resto de chunks ya están optimizados con `manualChunks`

### Error: "RLS policy violation" al insertar retroalimentación
**Causa**: Política RLS de `retroalimentacion` no permite inserción pública
**Solución**: Verificar que la política `FOR INSERT WITH CHECK (true)` esté aplicada en la tabla

---

## 📊 MONITOREO Y MANTENIMIENTO

### Métricas a Monitorear
- **Uso de Supabase**: Requests, storage, bandwidth
- **Uso de Vercel**: Bandwidth, builds, visitors
- **Performance**: Tiempo de carga de modelos 3D
- **Errores**: Logs de errores en frontend

### Tareas de Mantenimiento Mensual
- [ ] Revisar límites de uso en Supabase
- [ ] Actualizar dependencias del frontend
- [ ] Optimizar modelos 3D si es necesario
- [ ] Revisar logs de errores
- [ ] Backup de datos importantes

---

## 🎯 SIGUIENTES PASOS

Una vez desplegado:

1. **Activar GA4**: Crear cuenta y añadir `VITE_GA_TRACKING_ID` en Vercel → Redeploy
2. **Verificar imágenes**: Confirmar que las imágenes en `/public/imagenArea/` y `/public/imagenes/` estén presentes para las 4 zonas activas
3. **Agregar más piezas**: Subir modelos `.splat` al bucket de Hugging Face e insertar registros en `piezas_arqueologicas`
4. **Dominio personalizado**: Configurar `museo.unicauca.edu.co` o similar en Vercel → Settings → Domains
5. **Activar zonas pendientes**: Cuando estén listos los modelos de Calima, Nariño, Tumaco y Tierradentro, cambiar sus rutas en `App.jsx` de `NotFound` al componente correspondiente

---

## 📞 SOPORTE

Si encuentras problemas durante el despliegue:

1. **Revisar logs** en Vercel y Supabase
2. **Consultar documentación** oficial de cada servicio
3. **Verificar variables de entorno** estén correctas
4. **Probar localmente** antes de deploy

**Recursos útiles:**
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Hugging Face Docs](https://huggingface.co/docs)
- [Google Analytics 4](https://analytics.google.com)

---

**¡Felicidades!** Tu museo virtual Volante_Huso está ahora en producción y accesible para el mundo.
