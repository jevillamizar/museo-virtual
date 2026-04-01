import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

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
