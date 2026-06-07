import { useNavigate } from 'react-router-dom';
import { AiOutlineCompass } from 'react-icons/ai';
import { useMeta } from '../hooks/useMeta';

const NotFound = () => {
  useMeta({ titulo: 'Página no encontrada' });
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-unicauca-blancoRoto px-6 text-center">
      <AiOutlineCompass className="text-green-800 text-8xl mb-6" aria-hidden="true" />

      <h1 className="text-8xl font-bold text-green-800 leading-none mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-unicauca-grisOscuro mb-2 font-poppins">
        Página no encontrada
      </h2>

      <p className="text-unicauca-grisMedio text-base mb-8 max-w-md">
        La página que buscas no existe o fue movida.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-md transition-colors text-sm"
        >
          Volver al inicio
        </button>
        <button
          onClick={() => navigate('/Popayan')}
          className="px-6 py-2.5 border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-semibold rounded-md transition-colors text-sm"
        >
          Ver colección
        </button>
      </div>
    </main>
  );
};

export default NotFound;
