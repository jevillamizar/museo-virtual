import React from 'react';
import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from "../Componentes/UI/Breadcrumb";
import { Link } from 'react-router-dom';
import { GiSpinningTop, GiMaterialsScience, GiArchiveResearch } from 'react-icons/gi';
import { FaMapMarkerAlt, FaQuoteLeft, FaBalanceScale } from 'react-icons/fa';

const ArticuloVariabilidad = () => {
  // Configuración de analítica y SEO basándonos en tu plantilla
  useAnalytics('Artículo - Variabilidad en la Producción de Hilados');
  useMeta({
    titulo: 'Variabilidad en la Producción de Hilados Prehispánicos',
    descripcion: 'Artículo de investigación sobre las diferencias en la producción de hilos en las sociedades prehispánicas del suroccidente colombiano.',
  });

  // Datos de las regiones extraídos minuciosamente del documento original
  const regiones = [
    {
      nombre: 'Corinto',
      muestra: '24 volantes',
      contexto: 'Contextos funerarios, complejo Bolo-Quebrada Seca (800-1550 d.C.). Todos donados.',
      caracteristicas: 'Estructura compuesta (moldeados de dos o más volúmenes). Cuerpo discoidal con apéndice cilíndrico.',
      decoracion: 'Predomina la pintura roja presente en el 62.5% de los artefactos, localizada en el cuerpo, la base y el apéndice.'
    },
    {
      nombre: 'Patía',
      muestra: '31 volantes',
      contexto: 'Provenientes de investigaciones arqueológicas septentrionales, donaciones y colecciones de Henri Lehmann.',
      caracteristicas: 'Estructura simple con variedad de formas: cónica (45%), semiesférica (45%) y discoidal (10%). Algunos de base ligeramente convexa.',
      decoracion: 'Pintura roja, impresiones y punteado o compuestos de incisión/excisión. Patrones geométricos triangulares o en cruz.'
    },
    {
      nombre: 'Popayán',
      muestra: '34 volantes',
      contexto: 'Excavaciones en la Loma del Chirimoyo, colina de Molanga y donaciones. Con un asentamiento en Granja Caldas datado en el siglo VIII d.C.',
      caracteristicas: 'Forma simple, predominantemente cónica (88%), con pequeñas muestras de semiesféricos (6%) y discoidales (6%).',
      decoracion: 'Superficie erosionada, pero con rastro de pintura roja/naranja y patrones en la base formando una característica "X".'
    },
    {
      nombre: 'Quimbaya',
      muestra: '248 volantes',
      contexto: 'La colección más numerosa, proveniente de donaciones. Tumbas similares datadas entre los siglos VII y XVI d.C.',
      caracteristicas: 'Gran diversidad morfológica: troncocónica (33%), subglobular (23.7%), cónica (21.7%), bicónica (11.2%) y discoidal (9.6%). ¡20 de ellos eran huecos con una piedra adentro funcionando como sonajero!',
      decoracion: 'Alta decoración (89.6%) basada en incisiones lineales combinadas con impresiones punteadas y circulares.'
    }
  ];

  return (
    <div className='min-h-screen bg-unicauca-blancoRoto text-unicauca-grisOscuro flex flex-col items-center'>
      
      {/* Breadcrumb Navigation */}
      <div className="w-full max-w-7xl px-6 pt-4 text-left">
        <Breadcrumb items={[
          { label: 'Inicio', path: '/' },
          { label: 'Colección de Volantes', path: '/Volantes' },
          { label: 'Investigación: Variabilidad de Hilado', path: '/Articulo' },
        ]} />
      </div>

      {/* Hero Header Section */}
      <header className="w-full bg-unicauca-azul py-14 px-6 text-center text-white mt-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-unicauca-verde text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
            Artículo de Investigación
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            VARIABILIDAD EN LA PRODUCCIÓN DE HILADOS EN LAS SOCIEDADES PREHISPÁNICAS DEL SUROCCIDENTE COLOMBIANO
          </h1>
          
          {/* Autores */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80 border-t border-white/20 pt-6">
            <div>
              <p className="font-semibold text-white">Hernando Javier Giraldo</p>
              <p className="text-xs text-white/60">Universidad del Cauca</p>
            </div>
            <div>
              <p className="font-semibold text-white">Sofía Gutiérrez</p>
              <p className="text-xs text-white/60">Universidad del Cauca</p>
            </div>
            <div>
              <p className="font-semibold text-white">Luna Ledesma</p>
              <p className="text-xs text-white/60">Universidad del Cauca</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="w-full max-w-4xl px-6 py-12 flex flex-col gap-12 text-left">
        
        {/* Resumen & Abstract Box */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-unicauca-azul mb-3 uppercase tracking-wide">Resumen</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              El presente artículo describe las diferencias en la producción de hilos en cuatro áreas arqueológicas 
              (Corinto, Patía, Popayán y Quimbaya) del suroccidente colombiano (siglos VII a XVI d.C.) empleando la 
              colección de los volantes de huso del Museo de Historia Natural de la Universidad del Cauca. 
              Los resultados indican que la producción textil no fue homogénea: algunas regiones sugieren hilado 
              de múltiples fibras y calidades, mientras que otras se enfocaron en la especialización y obtención de estatus.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              <span className="font-semibold">Palabras clave:</span> Volantes de huso, producción artesanal, suroccidente colombiano.
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
            <h2 className="text-lg font-bold text-unicauca-azul mb-3 uppercase tracking-wide">Abstract</h2>
            <p className="text-sm leading-relaxed text-gray-600 italic">
              This article describes the differences in thread production in four archaeological areas (Corinto, Patía, 
              Popayán, and Quimbaya) of southwestern Colombia (700-1550 AD) using the spindle whorls collection stored 
              at the Natural History Museum. Results indicate that textile production was not homogeneous, ranging 
              from diverse household spinning strategies to highly specialized craft production linked to wealth and social status.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              <span className="font-semibold">Keywords:</span> Spindle whorls, craft production, Colombian southwest.
            </div>
          </div>
        </section>

        {/* Introducción y Marco Teórico */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <GiArchiveResearch className="text-2xl text-unicauca-verde" />
            <h2 className="text-xl font-bold text-unicauca-azul">Introducción y Contexto Económico</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            El estudio de la variabilidad en la producción de hilados brinda información sobre las diferencias culturales 
            en la elaboración de textiles en áreas próximas entre sí. Asimismo, proporciona datos clave sobre la relación 
            entre los textiles y los procesos de complejización social a través de la estandarización de su producción.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            De acuerdo con las investigaciones de Boada (2009), el control del hilado de algodón por parte de una élite 
            podría identificarse mediante la <span className="font-semibold text-unicauca-verde">estandarización</span> morfológica y tecnológica de los volantes de huso. 
            Por el contrario, la <span className="font-semibold text-unicauca-azul">autonomía económica</span> doméstica tiende a manifestarse en una mayor diversidad de 
            atributos (tamaño, materia prima y forma) dentro de los hogares.
          </p>
        </section>

        {/* Evidencias Etnohistóricas / Testimonios */}
        <section className="bg-gradient-to-br from-unicauca-azul/5 to-transparent rounded-xl p-6 border-l-4 border-unicauca-azul">
          <div className="flex items-center gap-2 mb-4">
            <FaQuoteLeft className="text-lg text-unicauca-azul" />
            <h3 className="font-bold text-unicauca-azul">Crónicas de Indias: Pedro Cieza de León (1553)</h3>
          </div>
          <div className="flex flex-col gap-4 text-sm text-gray-700 italic leading-relaxed">
            <blockquote className="pl-4 border-l-2 border-gray-300">
              "Las mujeres de éstos [Región Quimbaya] son también dispuestas como ellos, andan desnudos ellos y ellas, y descalzos. 
              No traen más que maures con que se cubren sus vergüenzas, y estos no de algodón, sino de unas cortezas de árboles los sacan..."
            </blockquote>
            <blockquote className="pl-4 border-l-2 border-gray-300">
              "[Cerca de Cali] Las mujeres todas andan vestidas de unas mantas gruesas de algodón. Los muertos que son más principales 
              los envuelven en muchas de aquellas mantas que son tan largas como tres varas, y tan anchas como dos."
            </blockquote>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Estos pasajes testimonian las marcadas diferencias regionales, de género, y el uso del material textil como un claro 
            indicador de jerarquía y estatus social al momento del contacto europeo.
          </p>
        </section>

        {/* Análisis Mecánico y Física del Hilado */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <GiSpinningTop className="text-2xl text-unicauca-verde" />
            <h2 className="text-xl font-bold text-unicauca-azul">La Física del Hilado: Atributos y Fibras</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            A través de estudios etnográficos y experimentales, se ha determinado que las características morfológicas 
            (peso, diámetro y altura) de un volante restringen mecánicamente el tipo de fibra hilada:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 my-2">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-unicauca-verde text-sm mb-1">Fibras Finas (Algodón, Pelo)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Requieren volantes pequeños y sumamente livianos. Un peso excesivo generaría demasiada tensión mecánica, rompiendo el delicado hilo en formación. El peso máximo registrado promedia los 14 gramos.
              </p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-unicauca-azul text-sm mb-1">Fibras Gruesas (Cabuya, Maguey, Lana)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Demandan una inercia de rotación superior para torcer los materiales burdos. Por lo tanto, se requiere de contrapesos mucho más grandes y pesados para garantizar la continuidad del giro.
              </p>
            </div>
          </div>
        </section>

        {/* Las Cuatro Regiones Arqueológicas */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaMapMarkerAlt className="text-2xl text-unicauca-verde" />
            <h2 className="text-xl font-bold text-unicauca-azul">Análisis por Regiones Arqueológicas</h2>
          </div>
          <p className="text-sm text-gray-600">
            La muestra analizada totaliza <span className="font-semibold">337 volantes de huso cerámicos</span> pertenecientes a la ceramoteca del Museo. A continuación, se detalla la variabilidad morfológica identificada en cada zona estudiada:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {regiones.map((reg, idx) => (
              <div key={idx} className="bg-white border-t-4 border-unicauca-verde p-5 rounded-lg shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <h3 className="font-bold text-lg text-unicauca-azul">{reg.nombre}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded">
                    {reg.muestra}
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Origen:</span> {reg.contexto}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Morfología:</span> {reg.caracteristicas}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Acabado/Decoración:</span> {reg.decoracion}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Metodología y Sesgos */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaBalanceScale className="text-2xl text-unicauca-verde" />
            <h2 className="text-xl font-bold text-unicauca-azul">Evaluación Científica de Sesgos</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Las colecciones de los museos adquiridas por donaciones de coleccionistas privados en décadas pasadas son proclives a estar sesgadas (por ejemplo, preferencia estética por piezas grandes o más decoradas). 
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Para validar científicamente los datos, la investigación aplicó métodos exploratorios estadísticos (gráficos de cajas, puntos, tallos y hojas), comparando las piezas de colecciones con muestras obtenidas mediante excavaciones controladas modernas y proyectos de arqueología preventiva de la zona.
          </p>
        </section>

        {/* Call to Action Final */}
        <section className="w-full mt-6 py-8 bg-unicauca-verde rounded-xl text-white text-center px-6 flex flex-col items-center gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">¿Quieres interactuar con estas piezas arqueológicas?</h3>
            <p className="text-sm text-white/90 max-w-xl mx-auto">
              Navega de forma tridimensional por los modelos interactivos escaneados de la ceramoteca del Museo de Historia Natural.
            </p>
          </div>
          <Link
            to="/Volantes"
            className="px-6 py-2.5 bg-unicauca-azul hover:bg-opacity-90 text-white font-semibold rounded-md transition-all text-sm shadow-md"
          >
            Explorar Colección 3D
          </Link>
        </section>

      </main>
    </div>
  );
};

export default ArticuloVariabilidad;