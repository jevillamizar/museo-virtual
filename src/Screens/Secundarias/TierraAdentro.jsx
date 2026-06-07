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

const TierraAdentro = () => {
  useAnalytics('Cultura - Tierradentro');
  useMeta({
    titulo: 'Volantes de Huso — Tierradentro',
    descripcion: 'Piezas arqueológicas de la cultura Tierradentro en el Museo de Historia Natural Unicauca',
  });
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    const { data: piezas, error } = await getPiezasPorCultura('Tierradentro');
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
      <section aria-label="Cultura Tierradentro — información y piezas arqueológicas" className="w-full flex flex-wrap items-center justify-center">
        <div className="w-full px-4 pt-4">
          <Breadcrumb items={[
            { label: 'Inicio', path: '/' },
            { label: 'Áreas Arqueológicas', path: '/' },
            { label: 'Tierradentro', path: '/TierraAdentro' },
          ]} />
        </div>
        
        <div className="section-gap flex justify-center items-center w-full">
          <Infotext
            titulo='Tierradentro: Espiritualidad y Producción Textil'
            parrafo='Tierradentro, famosa por sus monumentales hipogeos declarados Patrimonio de la Humanidad, también nos legó una rica tradición de producción textil. Los volantes de huso encontrados en esta región, frecuentemente asociados a contextos funerarios, sugieren que el hilado y el tejido tenían un profundo significado espiritual para sus habitantes, más allá de su función práctica cotidiana.'
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
              parrafo='Los volantes de Tierradentro hallados en contextos funerarios evidencian que el tejido acompañaba a los difuntos en su traspaso al otro mundo. Esta práctica indica que los textiles eran bienes de alto valor simbólico, ligados a la identidad y al ciclo vital de las personas.'
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
            parrafo='La arquitectura subterránea de los hipogeos de Tierradentro es uno de los testimonios más impresionantes de las culturas prehispánicas colombianas. En estos espacios, junto con las ofrendas cerámicas, los volantes de huso representaban la vida productiva y espiritual de sus constructores.'
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
              <label htmlFor="selector-pieza-tierraadentro" className="sr-only">
                Seleccionar pieza arqueológica
              </label>
              <select
                id="selector-pieza-tierraadentro"
                onChange={handleSelectChange}
                aria-describedby="nombre-pieza-tierraadentro"
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

export default TierraAdentro;