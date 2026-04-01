import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const links = [
  { link: '/', text: 'PRINCIPAL', id: '1' },
  { link: '/page', text: 'PAGE', id: '2' },
  { link: '/contact', text: 'CONTACT', id: '3' },
  { link: '/home', text: 'HOME', id: '4' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  return (
    <div
      className={
        !isMenuOpen
          ? 'flex fixed items-center w-full px-4 justify-between bg-green-600'
          : 'flex fixed flex-col h-full items-center w-full px-4 justify-around bg-green-700'
      }
    >
      <Link to={'/'} className='text-white font-semibold text-xl p-2 ml-6'>
        Logo
      </Link>
      {windowDimension.innerWidth > 768 ? (
        <div className="flex">
          {links.map((l, index) => (
            <Link
              className={`text-white font-semibold text-xl ${index === 0 ? 'ml-0' : 'ml-10'} ${index === links.length - 1 ? 'mr-10' : 'mr-10'} my-3`}
              to={l.link}
              key={l.id}
            >
              {l.text}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center">
          {!isMenuOpen && (
            <AiOutlineMenu
              cursor='pointer'
              size={24}
              color='#f2f2f2'
              onClick={() => setIsMenuOpen(true)}
            />
          )}
          {isMenuOpen && (
            <div className="flex flex-col items-center">
              {links.map((l) => (
                <Link
                  className="text-white font-semibold text-xl my-3"
                  to={l.link}
                  key={l.id}
                >
                  {l.text}
                </Link>
              ))}
              <AiOutlineClose
                cursor='pointer'
                size={24}
                color='#f2f2f2'
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
