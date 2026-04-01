import './index.css'; 

import Navbar1 from './Componentes/Navbar1';
import Home from './Screens/Home';
import Principal from './Screens/Principal';
import Contact from './Screens/Contact';
import Page from './Screens/Page';
import Popayan from './Screens/Secundarias/Popayan';
import Calima from './Screens/Secundarias/Calima';
import Corinto from './Screens/Secundarias/Corinto';
import Nariño from './Screens/Secundarias/Nariño';
import Patia from './Screens/Secundarias/Patia';
import Tumaco from './Screens/Secundarias/Tumaco';
import TierraAdentro from './Screens/Secundarias/TierraAdentro';
import Quimbaya from './Screens/Secundarias/Quimbaya';

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
            <Route path='/Page' element={<Page />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Popayan' element={<Popayan />} />
            <Route path='/Calima' element={<Calima />} />
            <Route path='/Corinto' element={<Corinto />} />
            <Route path='/Nariño' element={<Nariño />} />
            <Route path='/Patia' element={<Patia />} />
            <Route path='/Tumaco' element={<Tumaco />} />
            <Route path='/TierraAdentro' element={<TierraAdentro />} />
            <Route path='/Quimbaya' element={<Quimbaya />} />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;