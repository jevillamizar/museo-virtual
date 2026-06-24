import React from 'react';
import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from "../Componentes/UI/Breadcrumb";
import { Link } from 'react-router-dom';
import { GiSpinningTop, GiMaterialsScience, GiArchiveResearch } from 'react-icons/gi';
import { FaMapMarkerAlt, FaQuoteLeft, FaBalanceScale, FaCogs, FaCheckCircle } from 'react-icons/fa';

const ArticuloVariabilidadV2 = () => {
  // Configuración de analítica y SEO para la versión extendida
  useAnalytics('Artículo V2 - Variabilidad en la Producción de Hilados');
  useMeta({
    titulo: 'Análisis de Variabilidad en Hilados Prehispánicos (V2)',
    descripcion: 'Versión detallada y académica sobre la variabilidad y estandarización textil en el suroccidente colombiano prehispánico.',
  });

  // Datos extendidos y específicos por región arqueológica
  const regionesDetalladas = [
    {
      nombre: 'Corinto',
      muestra: '24 artefactos (Muestra Total)',
      procedencia: 'Contextos funerarios adscritos al periodo Tardío, complejo Bolo-Quebrada Seca (800-1550 d.C.). Todos corresponden a donaciones privadas.',
      morfologia: 'Estructura marcadamente compuesta (moldeados a partir de dos o más volúmenes). Morfología típica de cuerpo discoidal provisto de un apéndice cilíndrico bien definido en la sección superior.',
      tecnologia: 'Superficies alisadas con un acabado homogéneo. Predomina de forma absoluta la aplicación de pintura roja (62.5% de la muestra), localizada estratégicamente sobre el cuerpo, la base y rodeando el apéndice.',
      interpretacion: 'La homogeneidad formal y decorativa sugiere una producción especializada o un fuerte marcador de identidad cultural/estatus compartido por el grupo local.'
    },
    {
      nombre: 'Patía',
      muestra: '31 artefactos (Muestra Total)',
      procedencia: 'Procedentes de investigaciones arqueológicas sistemáticas en el sector septentrional de la cuenca, complementados con donaciones de la colección Henri Lehmann.',
      morfologia: 'Estructura exclusivamente simple con una alta diversidad geométrica: cónica (45%), semiesférica (45%) y discoidal (10%). Se registran especímenes con bases ligeramente convexas.',
      tecnologia: 'Tratamiento de superficie alisado y pulido. Técnicas decorativas variadas: pintura roja, impresiones, punteado y patrones compuestos mediante incisión/excisión. Motivos geométricos en formas de cruz o triángulos enlazados.',
      interpretacion: 'La coexistencia paritaria de formas cónicas y semiesféricas apunta a una estrategia de hilado flexible, apta para el procesamiento de fibras con distintos grados de torsión.'
    },
    {
      nombre: 'Popayán',
      muestra: '34 artefactos (Muestra Total)',
      procedencia: 'Recuperados mediante excavaciones controladas en el sitio Loma del Chirimoyo, la colina de Molanga, transectos preventivos y donaciones contextualizadas. Cuenta con dataciones absolutas del siglo VIII d.C. (Granja Caldas).',
      morfologia: 'Predominio absoluto de la estructura simple de geometría cónica (88%), con escasa representación de formas semiesféricas (6%) y discoidales (6%).',
      tecnologia: 'Gran parte de las superficies exhiben un alto grado de erosión post-deposicional. No obstante, se identifican restos de pintura roja y naranja, junto con incisiones en la base que configuran un patrón geométrico característico en forma de "X".',
      interpretacion: 'El altísimo índice de formas cónicas (88%) denota el nivel de estandarización formal más elevado de la muestra del suroccidente, sugiriendo un patrón manufacturero unificado.'
    },
    {
      nombre: 'Quimbaya',
      muestra: '248 artefactos (Muestra Total)',
      procedencia: 'Constituye el lote más numeroso del Museo, derivado de donaciones masivas de la zona del Eje Cafetero. Morfológicamente idénticos a los recuperados en tumbas de pozo y cámara datadas entre los siglos VII y XVI d.C.',
      morfologia: 'Compleja heterogeneidad formal de estructura simple: troncocónica (33%), subglobular (23.7%), cónica (21.7%), bicónica (11.2%) y discoidal (9.6%). Destaca el hallazgo de 20 ejemplares con cámaras huecas internas que contienen esferas cerámicas a modo de sonajeros.',
      tecnologia: 'Elevado índice de decoración (89.6%). Uso intensivo de incisiones lineales finas combinadas rítmicamente con impresiones punteadas, circulares y muescas perimetrales.',
      interpretacion: 'La enorme diversidad geométrica y el refinamiento decorativo sugieren tanto una amplia autonomía económica doméstica (hilado de múltiples fibras) como la producción de bienes con alta carga suntuaria.'
    }
  ];

  return (
    <div className='min-h-screen bg-unicauca-blancoRoto text-unicauca-grisOscuro flex flex-col items-center antialiased'>
      
      {/* Navegación Historial (Breadcrumb) */}
      <div className="w-full max-w-7xl px-6 pt-4 text-left">
        <Breadcrumb items={[
          { label: 'Inicio', path: '/' },
          { label: 'Colección de Volantes', path: '/Volantes' },
          { label: 'Investigación: Variabilidad de Hilado (V2)', path: '/ArticuloV2' },
        ]} />
      </div>

      {/* Encabezado Principal Académico */}
      <header className="w-full bg-unicauca-azul py-16 px-6 text-center text-white mt-4 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-2xl md:text-5xl font-black mt-5 leading-tight tracking-tight">
            La Producción de Hilados en el Suroccidente Prehispánico Colombiano
          </h1>
        </div>
      </header>

      {/* Cuerpo del Artículo */}
      <main className="w-full max-w-5xl px-6 py-12 flex flex-col gap-12 text-left">
        
        {/* Sección de Resúmenes */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 grid md:grid-cols-1 gap-8">
          <div>
            <h2 className="text-sm font-bold text-unicauca-azul mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">Para empezar</h2>
            <p className="text-xs md:text-sm leading-relaxed text-gray-600 text-justify">
              Queremos mostrar la variabilidad material y tecnológica en la producción de hilos dentro de cuatro áreas arqueológicas 
              definidas del suroccidente colombiano (Corinto, Patía, Popayán y Quimbaya), abarcando cronologías entre los siglos VII y XVI d.C. 
              Para ello, se parte del análisis cuantitativo y cualitativo de 337 volantes de huso cerámicos resguardados en el Museo de Historia Natural 
              de la Universidad del Cauca, se evalúan las propiedades mecánicas de los artefactos. Los resultados demuestran que la actividad 
              textil prehispánica distó de ser un proceso homogéneo: osciló entre estrategias domésticas autónomas de hilado multifibra y 
              patrones de manufactura altamente estandarizados vinculados al control económico y la consolidación de estatus social.
            </p>
          </div>
        </section>

        {/* Planteamiento Teórico e Introducción Detallada */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <GiArchiveResearch className="text-3xl text-unicauca-verde" />
            <h2 className="text-xl md:text-2xl font-bold text-unicauca-azul">Introducción y Modelos de Organización Económica</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
            La investigación de las industrias artesanales prehispánicas, particularmente la textil, constituye una ventana analítica hacia 
            la comprensión de las estructuras socioeconómicas antiguas. Los volantes de huso, al actuar como el contrapeso mecánico indispensable 
            para dotar de inercia al huso manual, preservan en sus atributos físicos las decisiones tecnológicas de los antiguos hilanderos.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
            Bajo las premisas teóricas de la arqueología de la producción (Costin, 1991; Boada, 2009), la morfología de estos artefactos permite 
            testear modelos de organización laboral. Cuando una sociedad presenta una <span className="font-semibold text-unicauca-verde">alta estandarización</span> 
            (baja variabilidad en pesos, diámetros y formas), se infiere un escenario de producción controlada o especializada, donde un grupo 
            reducido de artesanos abastece la demanda bajo parámetros unificados. Por el contrario, la <span className="font-semibold text-unicauca-azul">autonomía doméstica</span> 
            se refleja en una marcada dispersión y heterogeneidad formal, evidenciando que cada unidad familiar confeccionaba y utilizaba herramientas 
            propias adaptadas a necesidades inmediatas y heterogéneas.
          </p>
        </section>

        {/* Marco de Datos Etnohistóricos */}
        <section className="bg-gradient-to-br from-unicauca-azul/5 via-transparent to-transparent rounded-xl p-6 border-l-4 border-unicauca-azul flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FaQuoteLeft className="text-xl text-unicauca-azul" />
            <h3 className="font-bold text-unicauca-azul text-base">Evidencias Etnohistóricas del Contacto (Siglo XVI)</h3>
          </div>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
            Las crónicas de Indias corroboran de manera documental las profundas asimetrías y especializaciones regionales en el uso del textil. 
            El cronista <span className="font-semibold">Pedro Cieza de León (1553)</span> legó descripciones contrastantes que ilustran cómo el vestuario 
            y el algodón operaban como complejos ordenadores sociales:
          </p>
          <div className="flex flex-col gap-4 text-xs md:text-sm text-gray-700 italic leading-relaxed bg-white/60 p-4 rounded-lg border border-gray-100">
            <blockquote className="pl-4 border-l-2 border-unicauca-verde text-justify">
              "Las mujeres de éstos [Provincia de Quimbaya] son también dispuestas como ellos, andan desnudos ellos y ellas, y descalzos. No traen más que maures con que se cubren sus vergüenzas, y estos no de algodón, sino de unas cortezas de árboles los sacan..."
              <span className="block text-right text-[10px] font-bold text-gray-500 mt-1">— Cieza de León, Cap. LIII.</span>
            </blockquote>
            <blockquote className="pl-4 border-l-2 border-unicauca-verde text-justify">
              "[En los valles cercanos a Cali] Las mujeres todas andan vestidas de unas mantas gruesas de algodón, y los hombres asimismo traen sus mantas y maures... Los muertos que son más principales los envuelven en muchas de aquellas mantas que son tan largas como tres varas, y tan anchas como dos..."
              <span className="block text-right text-[10px] font-bold text-gray-500 mt-1">— Cieza de León, Cap. XXVIII.</span>
            </blockquote>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed text-justify">
            La dicotomía entre el uso de cortezas vegetales crudas y el amortajamiento suntuario con extensas mantas tejidas de algodón fino 
            demuestra que el tejido no respondía a una mera necesidad biológica de abrigo, sino que fungía como un lenguaje de distinción política 
            y económica interregional.
          </p>
        </section>

        {/* Física y Mecánica Avanzada del Hilado */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <GiSpinningTop className="text-3xl text-unicauca-verde" />
            <h2 className="text-xl md:text-2xl font-bold text-unicauca-azul">Principios Mecánicos y Restricciones de la Fibra</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
            El análisis de los volantes de huso se fundamenta en leyes de la física rotacional. Las dimensiones físicas del artefacto 
            ejercen una restricción termodinámica y mecánica sobre la materia prima que se puede procesar de manera eficiente:
          </p>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <FaCogs className="text-xl text-unicauca-azul mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-gray-900">Masa, Momento de Inercia y Diámetro</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed text-justify">
                  El diámetro y la distribución de la masa hacia los extremos determinan el <span className="font-semibold text-unicauca-azul">Momento de Inercia</span>. 
                  Un volante con un diámetro amplio mantendrá el giro por más tiempo a revoluciones estables, ideal para torcer fibras largas y resistentes. 
                  En contraste, un volante con la masa concentrada cerca del eje girará más rápido pero se detendrá antes, requiriendo impulsos constantes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-xs font-bold text-unicauca-verde uppercase tracking-wide block mb-1">Hilado de Algodón y Pelo (Fibras Finas)</span>
                <p className="text-xs text-gray-600 text-justify leading-relaxed">
                  Requiere de piezas extremadamente ligeras y de diámetros reducidos (frecuentemente inferiores a 15-20 gramos). Un contrapeso excesivo 
                  rompería la débil hebra de algodón antes de consolidar la torsión.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-xs font-bold text-unicauca-azul uppercase tracking-wide block mb-1">Hilado de Cabuya y Maguey (Fibras Duras)</span>
                <p className="text-xs text-gray-600 text-justify leading-relaxed">
                  Exige artefactos masivos y pesados capaces de vencer la rigidez natural de las fibras duras. El gran momento de inercia es 
                  indispensable para forzar la cohesión del filamento basto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Datos Desglosados por Región */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaMapMarkerAlt className="text-3xl text-unicauca-verde" />
            <h2 className="text-xl md:text-2xl font-bold text-unicauca-azul">Datos Arqueológicos por Regiones Analizadas</h2>
          </div>
          <p className="text-sm md:text-base text-gray-700 text-justify">
            El universo de análisis comprende <span className="font-semibold text-unicauca-verde">337 volantes de huso</span>. El desglose 
            pormenorizado de los atributos morfológicos, decorativos y contextuales por cada área geográfica revela patrones singulares:
          </p>

          <div className="flex flex-col gap-6">
            {regionesDetalladas.map((reg, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-3 hover:border-unicauca-azul transition-colors">
                <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-unicauca-verde"></span>
                    <h3 className="font-extrabold text-xl text-unicauca-azul tracking-tight">{reg.nombre}</h3>
                  </div>
                  <span className="text-xs bg-unicauca-azul/10 text-unicauca-azul font-bold px-3 py-1 rounded-full">
                    {reg.muestra}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-700 text-justify"><span className="font-bold text-gray-950 block text-[11px] uppercase text-gray-500 tracking-wider">Contexto Arqueológico y Procedencia:</span> {reg.procedencia}</p>
                    <p className="text-gray-700 text-justify"><span className="font-bold text-gray-950 block text-[11px] uppercase text-gray-500 tracking-wider">Atributos Morfológicos y Estructura:</span> {reg.morfologia}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-700 text-justify"><span className="font-bold text-gray-950 block text-[11px] uppercase text-gray-500 tracking-wider">Tecnología de Superficie y Decoración:</span> {reg.tecnologia}</p>
                    <p className="text-gray-700 text-justify bg-unicauca-verde/5 p-2 rounded border border-unicauca-verde/10 italic"><span className="font-bold text-unicauca-verde block text-[11px] uppercase not-italic tracking-wider">Inferencia Socioeconómica:</span> {reg.interpretacion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metodología Avanzada y Control de Sesgos */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            <FaBalanceScale className="text-3xl text-unicauca-verde" />
            <h2 className="text-xl md:text-2xl font-bold text-unicauca-azul">Metodología Estadística y Control de Sesgos de Colección</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
            Un imperativo metodológico crucial radicó en evaluar la validez de la muestra. Al tratarse en gran medida de colecciones conformadas 
            por donaciones privadas de mediados del siglo XX, existía el riesgo latente del <span className="font-semibold text-gray-900">"sesgo del coleccionista"</span> 
            (la tendencia histórica a recolectar piezas grandes, enteras o vistosamente decoradas, desechando fragmentos o piezas llanas y sencillas).
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-inner flex flex-col md:flex-row gap-6 items-center">
            <div className="text-justify text-xs md:text-sm text-gray-600 flex flex-col gap-3">
              <p>
                Para mitigar este factor distorsionante, se implementó un <span className="font-semibold text-unicauca-azul">Análisis Exploratorio de Datos (AED)</span> multifactorial. 
                Se utilizaron diagramas de caja (*boxplots*) y gráficos de dispersión combinando peso/diámetro, contrastando los valores de las colecciones bajo sospecha 
                con conjuntos controlados provenientes de excavaciones estratigráficas modernas y proyectos recientes de arqueología preventiva de las respectivas cuencas.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-700 mt-2">
                <span className="flex items-center gap-1.5"><FaCheckCircle className="text-unicauca-verde" /> Gráficos de Caja (Boxplots)</span>
                <span className="flex items-center gap-1.5"><FaCheckCircle className="text-unicauca-verde" /> Gráficos de Dispersión Bivariada</span>
                <span className="flex items-center gap-1.5"><FaCheckCircle className="text-unicauca-verde" /> Diagramas de Tallos y Hojas</span>
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
            Este cruce estadístico demostró que, a pesar del origen heterogéneo de ciertas donaciones, las tendencias de masa e inercia se alinean 
            con los rangos funcionales de las excavaciones científicas, validando el uso de la colección del Museo para caracterizar la economía 
            textil del suroccidente colombiano.
          </p>
        </section>

        {/* Enlace de Acción Interactivo */}
        <section className="w-full mt-6 py-10 bg-unicauca-azul rounded-2xl text-white text-center px-6 flex flex-col items-center gap-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-unicauca-verde/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-extrabold mb-2 tracking-tight">¿Deseas contrastar estos datos con la Colección Física?</h3>
            <p className="text-xs md:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explora las métricas exactas, los pesos calculados y los acabados decorativos directamente sobre las reproducciones tridimensionales 
              e interactivas de los volantes de huso del Museo de Historia Natural.
            </p>
          </div>
          <Link
            to="/Volantes"
            className="px-8 py-3 bg-unicauca-verde hover:bg-opacity-90 text-white font-bold rounded-lg transition-all text-sm shadow-md uppercase tracking-wider relative z-10"
          >
            Abrir Catálogo 3D e Inventario
          </Link>
        </section>

      </main>
    </div>
  );
};

export default ArticuloVariabilidadV2;