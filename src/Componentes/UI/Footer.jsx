import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      aria-label="Pie de página institucional"
      style={{ backgroundColor: '#004d27' }}
      className="w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Columna 1 — Identidad institucional */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold leading-tight">Museo de Historia Natural</p>
          <p className="text-sm font-semibold text-white/70">Universidad del Cauca</p>
          <p className="text-xs text-white/50 leading-relaxed">
            Proyecto de investigación ID 6292<br />
            Vicerrectoría de Investigaciones — Popayán, Colombia
          </p>
        </div>

        {/* Columna 2 — Navegación rápida */}
        <nav aria-label="Navegación rápida desde el pie de página">
          <p className="text-sm font-bold uppercase tracking-wide text-white/70 mb-4">Explorar</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Volantes" className="text-sm text-white/80 hover:text-white transition-colors">
                Colección
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-sm text-white/80 hover:text-white transition-colors">
                Sobre el Museo
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-sm text-white/80 hover:text-white transition-colors">
                Recursos Educativos
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="text-sm text-white/80 hover:text-white transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Columna 3 — Participación */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">Tu opinión importa</p>
          <p className="text-sm text-white/80 leading-relaxed">
            Ayúdanos a mejorar esta plataforma con tu experiencia.
          </p>
          <Link
            to="/Retroalimentacion"
            className="self-start border border-white text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-white hover:text-[#004d27] transition-colors"
          >
            Dejar retroalimentación
          </Link>
        </div>

      </div>

      {/* Línea de copyright */}
      <div className="border-t border-white/10 py-4 px-6 text-center">
        <p className="text-xs text-white/40">
          © 2025 Museo de Historia Natural — Universidad del Cauca. Contenido bajo licencia CC BY 4.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
