-- =====================================================
-- VOLANTE_HUSO - CREACIÓN DE TABLAS SUPABASE
-- =====================================================
-- Ejecutar este script en el SQL Editor de Supabase
-- https://supzaklezlzhwpfwpzwf.supabbase.co/project/sql

-- =====================================================
-- TABLA PRINCIPAL: piezas_arqueologicas
-- =====================================================
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

-- =====================================================
-- TABLA DE CONFIGURACIÓN: configuracion_sitio
-- =====================================================
CREATE TABLE configuracion_sitio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clave TEXT UNIQUE NOT NULL,
  valor TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- ÍNDICES PARA PERFORMANCE
-- =====================================================
CREATE INDEX idx_piezas_cultura ON piezas_arqueologicas(cultura);
CREATE INDEX idx_piezas_activas ON piezas_arqueologicas(activo);
CREATE INDEX idx_piezas_tipo ON piezas_arqueologicas(modelo_3d_tipo);
CREATE INDEX idx_configuracion_clave ON configuracion_sitio(clave);

-- =====================================================
-- RESTRICCIONES PARA CALIDAD DE DATOS
-- =====================================================
ALTER TABLE piezas_arqueologicas 
ADD CONSTRAINT check_cultura 
  CHECK (cultura IN ('Popayán', 'Calima', 'Corinto', 'Nariño', 'Patía', 'Tumaco', 'Tierradentro', 'Quimbaya'));

ALTER TABLE piezas_arqueologicas
ADD CONSTRAINT check_tipo_modelo 
  CHECK (modelo_3d_tipo IN ('gaussian_splat', 'ply', 'glb'));

ALTER TABLE piezas_arqueologicas
ADD CONSTRAINT check_nombre_not_empty 
  CHECK (length(trim(nombre)) > 0);

-- =====================================================
-- DATOS INICIALES DE CONFIGURACIÓN
-- =====================================================
INSERT INTO configuracion_sitio (clave, valor) VALUES
('sitio_publicado', 'false'),
('titulo_sitio', 'Volante Huso - Museo Virtual'),
('descripcion_sitio', 'Colección digital de piezas arqueológicas con Gaussian Splatting'),
('contacto_email', 'museo@universidad.edu');

-- =====================================================
-- POLÍTICAS DE SEGURIDAD (ROW LEVEL SECURITY)
-- =====================================================
-- Habilitar RLS en ambas tablas
ALTER TABLE piezas_arqueologicas ENABLE ROW LEVEL SECURITY;
ALTER TABLE configuracion_sitio ENABLE ROW LEVEL SECURITY;

-- Políticas para piezas_arqueologicas
CREATE POLICY "Piezas activas son públicas" ON piezas_arqueologicas
FOR SELECT USING (activo = true);

CREATE POLICY "Configuración es pública lectura" ON configuracion_sitio
FOR SELECT USING (true);

-- Opcional: Permitir inserciones si hay autenticación
CREATE POLICY "Solo insertar autenticados" ON piezas_arqueologicas
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Solo actualizar autenticados" ON piezas_arqueologicas
FOR UPDATE USING (auth.role() = 'authenticated');

-- =====================================================
-- VERIFICACIÓN DE CREACIÓN
-- =====================================================
-- Verificar que las tablas se crearon correctamente
SELECT table_name, table_type 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('piezas_arqueologicas', 'configuracion_sitio');

-- Verificar datos iniciales
SELECT clave, valor FROM configuracion_sitio;

-- =====================================================
-- COMPLETADO
-- =====================================================
-- Las tablas están listas para usar con el frontend
-- Siguiente paso: Configurar Storage buckets en Supabase

-- =====================================================
-- FASE 1.4: CAMPOS PEDAGÓGICOS Y TABLA RETROALIMENTACIÓN
-- =====================================================
-- Ejecutar en el SQL Editor de Supabase después de la
-- creación inicial. Seguro para re-ejecutar (IF NOT EXISTS).

-- Campos pedagógicos para piezas_arqueologicas
ALTER TABLE piezas_arqueologicas
  ADD COLUMN IF NOT EXISTS periodo_historico      TEXT,
  ADD COLUMN IF NOT EXISTS lugar_hallazgo         TEXT,
  ADD COLUMN IF NOT EXISTS material               TEXT,
  ADD COLUMN IF NOT EXISTS numero_catalogo        TEXT,
  ADD COLUMN IF NOT EXISTS descripcion_cultural   TEXT,
  ADD COLUMN IF NOT EXISTS usos                   TEXT,
  ADD COLUMN IF NOT EXISTS relevancia_educativa   TEXT,
  ADD COLUMN IF NOT EXISTS dato_curioso           TEXT;

-- Tabla retroalimentacion para Fase 4
CREATE TABLE IF NOT EXISTS retroalimentacion (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tipo_visitante TEXT CHECK (tipo_visitante IN (
                   'estudiante', 'docente', 'artesano',
                   'investigador', 'otro')),
  procedencia    TEXT,
  calificacion   INTEGER CHECK (calificacion BETWEEN 1 AND 5),
  comentario     TEXT,
  nombre         TEXT,
  fecha          TIMESTAMP DEFAULT NOW()
);
