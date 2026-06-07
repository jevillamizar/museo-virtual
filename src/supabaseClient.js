import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

const HF_BUCKET_BASE = import.meta.env.VITE_HUGGING_FACE_BUCKET;

export function getHFModelUrl(filename) {
  if (!HF_BUCKET_BASE || !filename) return null;
  return `${HF_BUCKET_BASE}/resolve/${filename}`;
}

export async function insertData(table, data) {
  const { error } = await supabase.from(table).insert(data);
  if (error) {
    console.error('Error inserting data:', error);
  }
  return !error;
}

export async function fetchData(table) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }
  return data;
}

export async function getPiezasPorCultura(cultura) {
  const { data, error } = await supabase
    .from('piezas_arqueologicas')
    .select('*')
    .eq('cultura', cultura)
    .eq('activo', true)
    .order('nombre', { ascending: true });
  return { data, error };
}

export async function enviarRetroalimentacion(datos) {
  const { data, error } = await supabase
    .from('retroalimentacion')
    .insert([datos]);
  if (error) throw error;
  return data;
}

export async function getConfiguracionSitio() {
  const { data, error } = await supabase
    .from('configuracion_sitio')
    .select('clave, valor');
  const config = data?.reduce((acc, item) => {
    acc[item.clave] = item.valor;
    return acc;
  }, {}) || {};
  return { config, error };
}
