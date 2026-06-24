import './index.css'; 

import Navbar1 from './Componentes/Navbar1';
import Home from './Screens/Home';
import Principal from './Screens/Principal';
import Contact from './Screens/Contact';
import Volantes from './Screens/Volantes';
import Ceramoteca from './Screens/Ceramoteca';
import Textiles from './Screens/Textiles';
import Popayan from './Screens/Secundarias/Popayan';
import Calima from './Screens/Secundarias/Calima';
import Corinto from './Screens/Secundarias/Corinto';
import Nariño from './Screens/Secundarias/Nariño';
import Patia from './Screens/Secundarias/Patia';
import Tumaco from './Screens/Secundarias/Tumaco';
import TierraAdentro from './Screens/Secundarias/TierraAdentro';
import Quimbaya from './Screens/Secundarias/Quimbaya';
import NotFound from './Screens/NotFound';
import Retroalimentacion from './Screens/Retroalimentacion';
import Tejidos from './Screens/Tejidos';
import ArticuloVariabilidad from './Screens/ArticuloVariabilidad';
import ArticuloVariabilidadV2 from './Screens/ArticuloVariabilidadV2';
import Footer from './Componentes/UI/Footer';
import CookieBanner from './Componentes/UI/CookieBanner';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className='App bg-gray150'>
      <Router>
        <div className='flex flex-col'>
          <div>
            <Navbar1 />
          </div>
          
          {/* Vinculación de las páginas */}
          <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='/Volantes' element={<Volantes />} />
            <Route path='/Ceramoteca' element={<Ceramoteca />} />
            <Route path='/Textiles' element={<Textiles />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<Home />} />
            <Route path='/Popayan' element={<Popayan />} />
            {/* Calima, Nariño, Tumaco, TierraAdentro desactivadas — colección insuficiente (<20 piezas) */}
            <Route path='/Calima' element={<NotFound />} />
            <Route path='/Corinto' element={<Corinto />} />
            <Route path='/Nariño' element={<NotFound />} />
            <Route path='/Patia' element={<Patia />} />
            <Route path='/Tumaco' element={<NotFound />} />
            <Route path='/TierraAdentro' element={<NotFound />} />
            <Route path='/Quimbaya' element={<Quimbaya />} />
            <Route path='/Retroalimentacion' element={<Retroalimentacion />} />
            <Route path='/Tejidos' element={<Tejidos />} />
            <Route path='/Articulo' element={<ArticuloVariabilidad />} />
            <Route path='/Articulo2' element={<ArticuloVariabilidadV2 />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <CookieBanner />
        </div>
      </Router>

    </div>
  );
}

export default App;