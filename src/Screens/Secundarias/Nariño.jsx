import { useEffect, useState, useCallback } from 'react';
import { useMeta } from '../../hooks/useMeta';
import { useAnalytics } from '../../hooks/useAnalytics';
import { getPiezasPorCultura } from '../../supabaseClient';
import Infotext from "../../Componentes/Text/Infotext";
import Texto from "../../Componentes/Text/Texto";
import Boxtext from "../../Componentes/Text/Boxtext";
import Datos from "../../Componentes/3D/Datos";
import LoadingPage from "../../Componentes/UI/LoadingPage";
import Breadcrumb from "../../Componentes/UI/Breadcrumb";

const Narino = () => {
  useAnalytics('Cultura - Nariño');
  useMeta({
    titulo: 'Volantes de Huso — Nariño',
    descripcion: 'Piezas arqueológicas de la cultura Nariño en el Museo de Historia Natural Unicauca',
  });
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    const { data: piezas, error } = await getPiezasPorCultura('Nariño');
    if (error) {
      setFetchError('No se pudieron cargar las piezas. Intenta de nuevo más tarde.');
      setLoading(false);
      return;
    }
    setData(piezas || []);
    if (piezas && piezas.length > 0) {
      setSelectedDoc(piezas[0]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedDocument = data.find(doc => String(doc.id) === selectedId);
    setSelectedDoc(selectedDocument);
  };

  if (loading) return <LoadingPage />;

  if (fetchError) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-unicauca-blancoRoto'>
        <div className='text-center p-8 bg-white rounded-lg shadow-md border border-red-200 max-w-md'>
          <p className='text-unicauca-rojo font-semibold text-lg mb-2'>No se pudieron cargar las piezas</p>
          <p className='text-unicauca-grisMedio text-sm mb-6'>{fetchError}</p>
          <button
            onClick={loadData}
            className='px-5 py-2 bg-unicauca-azul hover:bg-unicauca-azulhover text-white text-sm font-semibold rounded-md transition-colors'
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center p-4 bg-unicauca-blancoRoto'>
      <main className='min-h-600 flex flex-wrap items-center justify-center w-full'>
      <section aria-label="Cultura Nariño — información y piezas arqueológicas" className="w-full flex flex-wrap items-center justify-center">
        <div className="w-full px-4 pt-4">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Áreas Arqueológicas', path: '/' },
            { label: 'Nariño', path: '/Nariño' },
          ]} />
        </div>
        
        <div className="section-gap flex justify-center items-center w-full">
          <Infotext
            titulo='El Altiplano Nariñense y sus Volantes'
            parrafo='Las culturas del altiplano nariñense desarrollaron una notable tradición cerámica con fuertes vínculos con las culturas andinas del sur. Sus volantes de huso presentan formas y decoraciones particulares que reflejan influencias tanto locales como de grupos del actual Ecuador, evidenciando redes de intercambio cultural y comercial de larga distancia.'
          />
        </div>

        <Boxtext
          parrafo='Variabilidad morfológica y estilística'
        />

        <div className='flex flex-col md:flex-row justify-center w-full items-center justify-center'>
          <div className='w-3/4 md:w-1/4 flex items-center justify-center p-2'>
            <img 
              className='max-w-full max-h-full object-contain'
              src="/imagenes/volantetra.png" alt="Imagen"
            />
          </div>

            <Texto
              titulo=''
              parrafo='Los volantes nariñenses son especialmente conocidos por sus diseños policromos con base negativa, técnica en la que el diseño se obtiene cubriendo partes de la pieza durante el proceso de cocción, creando contrastes visuales de gran belleza.'
            />
        </div>

        <div className='flex flex-col md:flex-row justify-center w-full items-center pt-10 md:pt-0'>
          <div className='w-3/4 md:w-1/4 flex items-center justify-center p-2'>
            <img 
              className='max-w-full max-h-full object-contain'
              src="/imagenes/volantefron.png" alt="Imagen"
            />
          </div>
          
          <Texto
            titulo=''
            parrafo='La conexión de las culturas nariñenses con el mundo andino del sur se refleja no solo en sus cerámicas sino también en sus prácticas textiles, compartidas con comunidades del actual Ecuador y Perú a lo largo de extensas rutas de comercio e intercambio.'
          />
        </div>

        {data.length === 0 ? (
          <div className='flex justify-center w-full pt-16'>
            <p className='text-unicauca-grisOscuro text-lg'>
              No hay piezas registradas para esta área todavía.
            </p>
          </div>
        ) : (
          <>
            <div className='flex flex-col items-center w-full pt-16 gap-1'>
              <label htmlFor="selector-pieza-narino" className="sr-only">
                Seleccionar pieza arqueológica
              </label>
              <select
                id="selector-pieza-narino"
                onChange={handleSelectChange}
                aria-describedby="nombre-pieza-narino"
                className='mb-4 p-2 border-2 border-unicauca-azul rounded-md text-unicauca-grisOscuro focus:outline-none focus:ring-2 focus:ring-unicauca-azul'
              >
                <option value="" disabled>Seleccione un documento</option>
                {data.map((item) => (
                  <option key={item.id} value={String(item.id)}>{item.nombre}</option>
                ))}
              </select>
            </div>

            {selectedDoc && (
              <Datos pieza={selectedDoc} />
            )}
          </>
        )}
      </section>
      </main>
    </div>
  );
}

export default Narino;