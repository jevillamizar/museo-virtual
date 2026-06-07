import { useEffect } from 'react';

export function useMeta({ titulo, descripcion }) {
  useEffect(() => {
    document.title = titulo
      ? `${titulo} | Museo Historia Natural Unicauca`
      : 'Museo Historia Natural Unicauca';

    const meta = document.querySelector('meta[name="description"]');
    if (meta && descripcion) {
      meta.setAttribute('content', descripcion);
    }
  }, [titulo, descripcion]);
}
