import { useMeta } from '../hooks/useMeta';
import { useAnalytics } from '../hooks/useAnalytics';
import SectionTitle from '../Componentes/UI/SectionTitle';
import Breadcrumb from '../Componentes/UI/Breadcrumb';
import Informacion from "../Componentes/2D/Informacion";
import Texto from "../Componentes/Text/Texto";
import LineaTiempo from "../Componentes/2D/LineaTiempo";
import RecursosEducativos from "../Componentes/2D/RecursosEducativos";
import { GiWool, GiVillage } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import MapI from "../Componentes/Map/MapI";

const Home = () => {
  useAnalytics('Sobre el Museo');
  useMeta({
    titulo: 'Acerca del Museo',
    descripcion: 'Conoce la historia y colección del Museo de Historia Natural de la Universidad del Cauca',
  });

  const cards = [
    { imagen: 'Volante', link: 'Popayan', titulo: 'Popayán', parrafo: 'Centro histórico y cultural del Cauca. Sus volantes de huso reflejan la rica tradición cerámica de la región andina caucana.' },
    { imagen: 'Volante2', link: 'Calima', titulo: 'Calima', parrafo: 'Reconocida por su extraordinaria orfebrería y cerámica finamente decorada con motivos geométricos.' },
    { imagen: 'Volante3', link: 'Tumaco', titulo: 'Tumaco', parrafo: 'Costa Pacífica nariñense. Produjo cerámica de notable calidad con representaciones humanas únicas.' },
  ];

  const datosDestacados = [
    { Icono: GiWool,        titulo: 'Técnica milenaria',   texto: 'El hilado con huso se practica en el suroccidente colombiano desde hace más de 3.000 años sin interrupción.' },
    { Icono: GiVillage,     titulo: 'Comunidades activas', texto: 'Pueblos Nasa, Misak y comunidades campesinas del Cauca mantienen viva la tradición del tejido artesanal.' },
    { Icono: AiOutlineHeart, titulo: 'Patrimonio compartido', texto: 'Cada volante de huso en nuestra colección es testimonio de una práctica que sigue transformando fibras en identidad.' },
  ];
  
  return (
    <div className="min-h-screen bg-unicauca-blancoRoto">
      <main>

        <div className="w-full px-4 pt-4 max-w-screen-lg mx-auto">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Sobre el Museo', path: '/Home' },
          ]} />
        </div>

        {/* Encabezado */}
        <section className="w-full bg-unicauca-azul py-12 px-6 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins">Una colección con historia</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Pequeñas piezas de cerámica usadas para hilar. Grandes testimonios de la identidad prehispánica del suroccidente colombiano.
          </p>
          
        </section>
          
        {/* Intro: imagen + texto */}
        <div className="max-w-screen-lg mx-auto px-4 pt-10 pb-4 flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/imagenes/ceramoteca.png"
            alt="Ceramoteca del Museo de Historia Natural"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover max-h-72"
          />
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl font-bold text-unicauca-azul font-poppins mb-3">El Museo y su Colección</h2>
            <p className="text-unicauca-grisMedio text-sm leading-relaxed">
              El Museo de Historia Natural de la Universidad del Cauca conserva una de las colecciones
              más importantes de cerámica prehispánica del suroccidente colombiano. Entre sus piezas
              destacan los volantes de huso —pequeños objetos de cerámica, piedra o hueso usados para
              hilar fibras— provenientes de cuatro zonas arqueológicas: Popayán, Corinto, Patía y Quimbaya.
            </p>
            <p className="text-unicauca-grisMedio text-sm leading-relaxed mt-3">
              Estas piezas no son solo herramientas: son testimonio de una tecnología textil que marcó
              la vida cotidiana, el comercio y la identidad de los pueblos del suroccidente durante
              más de mil años.
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-screen-lg mx-auto px-4 pt-6 pb-12">
          

          <div className="flex justify-center w-full mt-10">
            <MapI />
            <Texto
              titulo='Áreas Arqueológicas del Suroccidente Colombiano'
              parrafo='La colección del Museo de Historia Natural cuenta con piezas de cuatro zonas arqueológicas del suroccidente colombiano: Popayán, Corinto, Patía y Quimbaya. Cada zona tiene características únicas que se reflejan en la forma, decoración y materiales de sus volantes de huso.'
            />
          </div>
        </div>

        {/* Tarea 3.4 — Línea de tiempo */}
        <div className="section-gap w-full px-4 max-w-screen-lg mx-auto">
          <SectionTitle
            titulo="Cronología Cultural"
            subtitulo="El desarrollo de las culturas del suroccidente colombiano a través del tiempo"
          />
        </div>

        <LineaTiempo />

        {/* Tarea 3.5 — Tradición viva */}
        <section
          aria-label="El hilo que nos une — tradición viva del suroccidente colombiano"
          className="w-full bg-unicauca-verde py-16 px-4"
        >
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold text-white font-poppins">El Hilo que Nos Une</h2>
              <p className="text-white/80 text-sm font-medium">
                Tradición viva del suroccidente colombiano
              </p>
              <p className="text-white text-sm leading-relaxed">
                Las técnicas de hilado con huso y volante no desaparecieron con el paso del tiempo.
                Hoy, comunidades indígenas Nasa, Misak, Eperara Siapidara y campesinas del Cauca y
                Nariño siguen practicando el hilado artesanal como parte de su identidad cultural y
                su sustento económico.
              </p>
              <p className="text-white text-sm leading-relaxed">
                Esta plataforma es un puente entre el pasado arqueológico y el presente vivo.
                Las piezas del museo son el eco de manos que siguen hilando. Si eres artesano,
                tejedora o guardián de estas tradiciones, este espacio también es tuyo.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {datosDestacados.map(({ Icono, titulo, texto }) => (
                <div
                  key={titulo}
                  className="flex gap-4 bg-green-950 rounded-xl p-5 items-start"
                >
                  <Icono className="text-3xl text-unicauca-amarillo shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{titulo}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarea 3.6 — Recursos educativos */}
        <div className="section-gap w-full px-4 max-w-screen-lg mx-auto">
          <SectionTitle
            titulo="Recursos para Docentes"
            subtitulo="Materiales para incorporar el patrimonio textil en actividades educativas"
          />
        </div>

        <RecursosEducativos />

      </main>
    </div>
  );
}

export default Home;
