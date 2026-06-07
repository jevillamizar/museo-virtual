import { TiThMenu } from "react-icons/ti";
import { MdExitToApp } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar1 = () => {
  const [click, setClick] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    window.scrollTo(0, 0); // Hacer scroll al inicio al cambiar de página
    setClick(false); // Cerrar el menú al cambiar de página
  }, [location]);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className='lg:hidden block absolute top-12 w-full left-0 right-0 bg-unicauca-azul opacity-95 transition'>
      <ul className='text-center text-2xl p-20'>
        <li className='my-4 py-4 hover:bg-unicauca-azulhover hover:rounded' onClick={handleClick}>
          <Link to='/Volantes'>
            <strong>Volantes de huso</strong>
          </Link>
        </li>
        <li className='my-4 py-4 hover:bg-unicauca-azulhover hover:rounded' onClick={handleClick}>
          <Link to='/About'>
            <strong>Historia</strong>
          </Link>
        </li>
        <li className='my-4 py-4 hover:bg-unicauca-azulhover hover:rounded' onClick={handleClick}>
          <Link to='/Contact'>
            <strong>Contacto</strong>
          </Link>
        </li>
        
      </ul>
    </div>
  );

  return (
    <nav className={`bg-unicauca-azul fixed w-full z-10 transition-transform duration-300 ${visible ? '' : '-translate-y-full'}`}>
      <div className='h-10vh flex justify-between text-white lg:py-3 px-20 py-2'>
        <div className='flex items-center flex-1'>
          <Link to='/' className='text-3xl font-bold'>Logo</Link>
        </div>

        <div className='md:flex sm:flex md:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 lg:mr-16 text-[22px]'>
              <li className='hover:bg-unicauca-azulhover hover:rounded transition cursor-pointer px-3 py-1' onClick={handleClick}>
                <Link to='/Volantes'>
                  <strong>Volantes</strong>
                </Link>
              </li>
              <li className='hover:bg-unicauca-azulhover hover:rounded transition cursor-pointer px-3 py-1' onClick={handleClick}>
                <Link to='/About'>
                  <strong>Historia</strong>
                </Link>
              </li>
              <li className='hover:bg-unicauca-azulhover hover:rounded transition cursor-pointer px-3 py-1' onClick={handleClick}>
                <Link to='/Contact'>
                  <strong>Contacto</strong>
                </Link>
              </li>              
            </ul>
          </div>
        </div>

        <div>
          {click && content}
        </div>

        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <MdExitToApp className='text-3xl'/> : <TiThMenu className='text-2xl'/>}
        </button>

      </div>
    </nav>
  );
};

export default Navbar1;
