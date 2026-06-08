# Museo Virtual — Volantes de Huso · Unicauca

Plataforma web para la divulgación del patrimonio arqueológico del Museo de Historia Natural de la Universidad del Cauca. Permite explorar piezas de las culturas **Popayán, Corinto, Patía y Quimbaya** mediante modelos 3D interactivos basados en **Gaussian Splatting**.

## Stack principal

- **React 18 + Vite** — SPA con routing client-side
- **Gaussian Splatting** (`@mkkellogg/gaussian-splats-3d`) — renderizado 3D fotorrealista
- **Three.js / R3F** — panoramas 360° y modelos GLTF
- **Tailwind CSS** — sistema de diseño institucional Unicauca
- **Framer Motion** — animaciones scroll-triggered
- **Supabase** — piezas arqueológicas y retroalimentación
- **Hugging Face** — almacenamiento de modelos `.splat` / `.ply`

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
```

## Variables de entorno

Crear `.env` en la raíz con:

```env
VITE_SUPABASE_URL=https://skazarlezlzhwpfwpzwf.supabase.co
VITE_SUPABASE_PUBLIC_KEY=...
VITE_HUGGING_FACE_BUCKET=https://huggingface.co/buckets/jevillamizar/volantes-uso-splats
VITE_GA_TRACKING_ID=          # opcional — Google Analytics 4
```

## Despliegue

El frontend se despliega en **Vercel** desde la rama `mejora-visual-y-funcional`.  
Ver [`docs/deployment-guide.md`](docs/deployment-guide.md) para el paso a paso completo.
