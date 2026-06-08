import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from '../Componentes/UI/Breadcrumb';
import { enviarRetroalimentacion } from '../supabaseClient';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ESTRELLA_LLENA  = '#C9A84C';
const ESTRELLA_VACIA  = '#D1D5DB';

const TIPOS = [
  { value: 'estudiante',     label: 'Estudiante' },
  { value: 'docente',        label: 'Docente' },
  { value: 'artesano',       label: 'Artesano / artesana' },
  { value: 'investigador',   label: 'Investigador / investigadora' },
  { value: 'otro',           label: 'Otro' },
];

const INICIAL = {
  tipo_visitante: '',
  procedencia:    '',
  calificacion:   0,
  comentario:     '',
  nombre:         '',
};

const Retroalimentacion = () => {
  useMeta({
    titulo: 'Retroalimentación',
    descripcion: 'Comparte tu experiencia en el Museo Virtual de Historia Natural de la Universidad del Cauca',
  });
  const { trackEvent } = useAnalytics('Retroalimentación');

  const [form, setForm]         = useState(INICIAL);
  const [hover, setHover]       = useState(0);
  const [estado, setEstado]     = useState('inicial'); // inicial | enviando | exito | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validar = () => {
    if (!form.tipo_visitante) return 'Selecciona cómo nos visitas.';
    if (!form.procedencia.trim()) return 'Indica desde dónde nos visitas.';
    if (form.calificacion < 1 || form.calificacion > 5) return 'Selecciona una calificación del 1 al 5.';
    if (form.comentario.trim().length < 20) return 'El comentario debe tener al menos 20 caracteres.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validar();
    if (error) { setErrorMsg(error); return; }
    setErrorMsg('');
    setEstado('enviando');
    try {
      await enviarRetroalimentacion({
        tipo_visitante: form.tipo_visitante,
        procedencia:    form.procedencia.trim(),
        calificacion:   form.calificacion,
        comentario:     form.comentario.trim(),
        nombre:         form.nombre.trim() || null,
      });
      trackEvent('Retroalimentacion', 'envio_exitoso', form.tipo_visitante);
      setEstado('exito');
    } catch {
      setEstado('error');
    }
  };

  return (
    <div className="min-h-screen bg-unicauca-blancoRoto">
      <main>
        <div className="w-full px-4 pt-4 max-w-screen-md mx-auto">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Retroalimentación', path: '/Retroalimentacion' },
          ]} />
        </div>

        {/* Encabezado */}
        <section className="w-full bg-unicauca-azul py-12 px-6 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins">Tu opinión importa</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Comparte tu experiencia con el Museo Virtual de Historia Natural.
            Tu retroalimentación nos ayuda a mejorar.
          </p>
        </section>

        <div className="max-w-screen-md mx-auto px-4 py-12">

          {/* Estado éxito */}
          {estado === 'exito' && (
            <div className="flex flex-col items-center text-center gap-5 py-10">
              <AiOutlineCheckCircle className="text-6xl text-unicauca-verde" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-unicauca-grisOscuro font-poppins">
                ¡Gracias por tu retroalimentación!
              </h2>
              <p className="text-sm text-unicauca-grisMedio max-w-md leading-relaxed">
                Tu opinión es muy importante para mejorar esta plataforma y el acceso al patrimonio
                cultural del suroccidente colombiano.
              </p>
              <Link
                to="/"
                className="mt-2 px-6 py-2.5 bg-unicauca-verde hover:bg-green-800 text-white font-semibold rounded-md transition-colors text-sm"
              >
                Volver al inicio
              </Link>
            </div>
          )}

          {/* Formulario */}
          {estado !== 'exito' && (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

              {/* Tipo de visitante */}
              <div className="flex flex-col gap-1">
                <label htmlFor="tipo_visitante" className="text-sm font-medium text-unicauca-grisOscuro">
                  ¿Cómo nos visitas? <span className="text-red-500">*</span>
                </label>
                <select
                  id="tipo_visitante"
                  name="tipo_visitante"
                  required
                  value={form.tipo_visitante}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-verde bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  {TIPOS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Procedencia */}
              <div className="flex flex-col gap-1">
                <label htmlFor="procedencia" className="text-sm font-medium text-unicauca-grisOscuro">
                  ¿Desde dónde nos visitas? <span className="text-red-500">*</span>
                </label>
                <input
                  id="procedencia"
                  name="procedencia"
                  type="text"
                  required
                  value={form.procedencia}
                  onChange={handleChange}
                  placeholder="Ciudad y país (ej: Popayán, Colombia)"
                  className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-verde"
                />
              </div>

              {/* Calificación — estrellas */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-unicauca-grisOscuro">
                  ¿Cómo calificarías tu experiencia? <span className="text-red-500">*</span>
                </p>
                <div className="flex gap-2" role="group" aria-label="Calificación de 1 a 5 estrellas">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${n} estrella${n > 1 ? 's' : ''}`}
                      onClick={() => setForm({ ...form, calificacion: n })}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      className="text-3xl transition-transform hover:scale-110 focus:outline-none"
                      style={{
                        color: n <= (hover || form.calificacion) ? ESTRELLA_LLENA : ESTRELLA_VACIA,
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Comentario */}
              <div className="flex flex-col gap-1">
                <label htmlFor="comentario" className="text-sm font-medium text-unicauca-grisOscuro">
                  Tu comentario <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  required
                  rows={5}
                  value={form.comentario}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué te pareció la plataforma, qué mejorarías o qué fue lo que más te gustó…"
                  className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-verde resize-none"
                />
                <p className={`text-xs ${form.comentario.length < 20 ? 'text-gray-400' : 'text-unicauca-verde'}`}>
                  {form.comentario.length}/20 caracteres mínimos
                </p>
              </div>

              {/* Nombre (opcional) */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nombre" className="text-sm font-medium text-unicauca-grisOscuro">
                  Nombre <span className="text-gray-400 font-normal">(opcional)</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre (opcional)"
                  className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-verde"
                />
              </div>

              {/* Error de validación */}
              {errorMsg && (
                <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                  {errorMsg}
                </p>
              )}

              {/* Error de Supabase */}
              {estado === 'error' && (
                <div role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex justify-between items-center gap-3">
                  <span>Ocurrió un error al enviar. Por favor intenta de nuevo.</span>
                  <button
                    type="button"
                    onClick={() => setEstado('inicial')}
                    className="text-xs underline shrink-0"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={estado === 'enviando'}
                className="w-full bg-unicauca-azul hover:bg-unicauca-azulhover disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              >
                {estado === 'enviando' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : 'Enviar retroalimentación'}
              </button>

            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default Retroalimentacion;
