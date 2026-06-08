import { useEffect, useState, useCallback } from 'react';
import { useMeta } from '../../hooks/useMeta';
import { useAnalytics } from '../../hooks/useAnalytics';
import { getPiezasPorCultura } from '../../supabaseClient';
import Texto from "../../Componentes/Text/Texto";
import Boxtext from "../../Componentes/Text/Boxtext";
import Datos from "../../Componentes/3D/Datos";
import LoadingPage from "../../Componentes/UI/LoadingPage";
import PageHeader from "../../Componentes/UI/PageHeader";
import SeccionInfo from "../../Componentes/2D/SeccionInfo";

const Patia = () => {
  useAnalytics('Cultura - Patía');
  useMeta({
    titulo: 'Volantes de Huso — Patía',
    descripcion: 'Piezas arqueológicas de la cultura Patía en el Museo de Historia Natural Unicauca',
  });
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    const { data: piezas, error } = await getPiezasPorCultura('Patía');
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
      <section aria-label="Cultura Patía — información y piezas arqueológicas" className="w-full flex flex-wrap items-center justify-center">
        <PageHeader
          titulo="Patía"
          imagen="/imagenArea/patia.png"
          breadcrumbItems={[
            { label: 'Inicio', path: '/' },
            { label: 'Áreas Arqueológicas', path: '/' },
            { label: 'Patía', path: '/Patia' },
          ]}
        />

        <SeccionInfo
          imagen="/imagenArea/patia.png"
          titulo="El Valle del Patía: Tradición e Identidad"
          parrafos={[
            'El valle del río Patía, enclavado entre la cordillera Occidental y Central del Cauca, fue hogar de comunidades que desarrollaron sus propias tradiciones textiles.',
            'Los volantes de huso de esta región reflejan la identidad cultural de sus habitantes y su adaptación a las condiciones particulares de este territorio interandino cálido y biodiverso.',
          ]}
          invertido={true}
        />

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
              parrafo='Las piezas del valle del Patía muestran una cerámica de tradición local con formas adaptadas a las fibras disponibles en este ecosistema interandino. El algodón y la cabuya fueron las principales materias primas para los tejidos de esta región.'
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
            parrafo='El territorio cálido del valle del Patía favorecía el cultivo de algodón, convirtiendo a estas comunidades en productoras textiles de importancia regional. Sus volantes de huso son parte de ese legado de trabajo artésanal que aún persiste en la memoria colectiva del Cauca.'
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
              <label htmlFor="selector-pieza-patia" className="sr-only">
                Seleccionar pieza arqueológica
              </label>
              <select
                id="selector-pieza-patia"
                onChange={handleSelectChange}
                aria-describedby="nombre-pieza-patia"
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

export default Patia;