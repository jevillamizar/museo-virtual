import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      role="navigation"
      aria-label="Ruta de navegación"
      className="w-full flex items-center gap-1 text-sm py-2 px-1 flex-wrap"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && (
              <span className="text-gray-400 select-none" aria-hidden="true">›</span>
            )}
            {isLast ? (
              <span
                aria-current="page"
                className="text-green-800 font-medium"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-gray-500 hover:text-green-800 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path:  PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
