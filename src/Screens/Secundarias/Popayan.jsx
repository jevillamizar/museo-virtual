import Infotext from "../../Componentes/Text/Infotext";
import Texto from "../../Componentes/Text/Texto";
import Boxtext from "../../Componentes/Text/Boxtext";
import Datos from "../../Componentes/3D/Datos";
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const Popayan = () => {
  const [data, setData] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: dataArray, error } = await supabase.from('InfoVolante').select('*');
        if (error) {
          throw error;
        }
        setData(dataArray);
        if (dataArray.length > 0) {
          setSelectedDoc(dataArray[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los documentos: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedDocument = data.find(doc => doc.id === selectedId);
    setSelectedDoc(selectedDocument);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center p-4'>
      <div className='min-h-600 flex flex-wrap items-center justify-center'>
        
        <div className="mt-12 lg:mt-16 flex justify-center items-center w-full">
          <Infotext
            titulo='Popayán'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos 
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos'
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
              parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos 
              Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
              sobre los pingüinos, los Curiosidades sobre los pingüinos
              Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
              sobre los pingüinos, los Curiosidades sobre los pingüinos'
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
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos 
            Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades 
            sobre los pingüinos, los Curiosidades sobre los pingüinos'
          />
        </div>

        <div className='flex justify-center w-full pt-16'>
          <select onChange={handleSelectChange} className='mb-4 p-2 border border-gray-400'>
            <option value="" disabled>Seleccione un documento</option>
            {data.map((item) => (
              <option key={item.id} value={item.id}>{item.nombre}</option>
            ))}
          </select>
        </div>
        
        {selectedDoc && (
          <Datos
            nombre={selectedDoc.nombre}
            obtencion={selectedDoc.obtencion}
            origen={selectedDoc.origen}
            temporalidad={selectedDoc.temporalidad}
            tipo={selectedDoc.tipo}
          />
        )}
      </div>
    </div>
  );
}

export default Popayan;


