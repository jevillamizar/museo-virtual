import { useState } from 'react';
import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from '../Componentes/UI/Breadcrumb';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineClockCircle } from 'react-icons/ai';

const INFO = [
  {
    Icono: AiOutlineEnvironment,
    titulo: 'Dirección',
    texto: 'Calle 5 # 4-70, Popayán, Cauca, Colombia\nMuseo de Historia Natural — Universidad del Cauca',
  },
  {
    Icono: AiOutlinePhone,
    titulo: 'Teléfono',
    texto: '+57 (2) 820 9800 ext. 2160',
  },
  {
    Icono: AiOutlineMail,
    titulo: 'Correo electrónico',
    texto: 'museohistorianatural@unicauca.edu.co',
  },
  {
    Icono: AiOutlineClockCircle,
    titulo: 'Horario de atención',
    texto: 'Lunes a viernes\n8:00 a.m. – 12:00 m. y 2:00 – 5:00 p.m.',
  },
];

const Contact = () => {
  useAnalytics('Contacto');
  useMeta({
    titulo: 'Contacto',
    descripcion: 'Contáctanos — Museo de Historia Natural de la Universidad del Cauca',
  });

  const [form, setForm] = useState({ nombre: '', correo: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-unicauca-blancoRoto">
      <main>
        <div className="w-full px-4 pt-4 max-w-screen-lg mx-auto">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Contacto', path: '/Contact' },
          ]} />
        </div>

        {/* Encabezado */}
        <section className="w-full bg-unicauca-azul py-12 px-6 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins">Contáctanos</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            ¿Tienes preguntas sobre la colección, quieres coordinar una visita educativa
            o simplemente deseas saber más? Escríbenos.
          </p>
        </section>

        <div className="max-w-screen-lg mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Formulario */}
          <section aria-label="Formulario de contacto">
            <h2 className="text-xl font-bold text-unicauca-grisOscuro mb-5">Envíanos un mensaje</h2>

            {enviado ? (
              <div className="bg-green-50 border border-green-300 rounded-xl p-6 text-center">
                <p className="text-green-800 font-semibold text-lg mb-1">¡Mensaje enviado!</p>
                <p className="text-green-700 text-sm">
                  Gracias por contactarnos. Te responderemos a la brevedad posible.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nombre: '', correo: '', asunto: '', mensaje: '' }); }}
                  className="mt-4 text-sm text-unicauca-azul underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="flex flex-col gap-1">
                  <label htmlFor="nombre" className="text-sm font-medium text-unicauca-grisOscuro">
                    Nombre completo <span className="text-unicauca-rojo">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-azul"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="correo" className="text-sm font-medium text-unicauca-grisOscuro">
                    Correo electrónico <span className="text-unicauca-rojo">*</span>
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-azul"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="asunto" className="text-sm font-medium text-unicauca-grisOscuro">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    value={form.asunto}
                    onChange={handleChange}
                    placeholder="Visita educativa, consulta sobre colección…"
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-azul"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="mensaje" className="text-sm font-medium text-unicauca-grisOscuro">
                    Mensaje <span className="text-unicauca-rojo">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí…"
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-unicauca-azul resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-unicauca-azul hover:bg-unicauca-azulhover text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </section>

          {/* Info de contacto */}
          <section aria-label="Información de contacto" className="flex flex-col gap-5">
            <h2 className="text-xl font-bold text-unicauca-grisOscuro">Información de contacto</h2>

            {INFO.map(({ Icono, titulo, texto }) => (
              <div key={titulo} className="flex gap-4 items-start bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <Icono className="text-2xl text-unicauca-azul shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-unicauca-grisOscuro mb-0.5">{titulo}</p>
                  <p className="text-sm text-unicauca-grisMedio whitespace-pre-line">{texto}</p>
                </div>
              </div>
            ))}

            {/* Mapa embebido */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 mt-2">
              <iframe
                title="Ubicación del Museo de Historia Natural Unicauca"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.3!2d-76.6062!3d2.4448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3031a42e8e2b0f%3A0x1!2sMuseo+de+Historia+Natural+Universidad+del+Cauca!5e0!3m2!1ses!2sco!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Contact;