import { useState } from 'react';

function Map() {
  const [highlightedArea, setHighlightedArea] = useState(null);

  const handleMouseEnter = (event) => {
    const areaId = event.target.getAttribute('id');
    setHighlightedArea(areaId);
  };

  const handleMouseLeave = () => {
    setHighlightedArea(null);
  };

  const handleClick = (event) => {
    const areaId = event.target.getAttribute('id');
    if (areaId === 'area1') {
      window.location.href = 'http://localhost:5173/Popayan';
    } else if (areaId === 'area2') {
      window.location.href = 'http://localhost:5173/Timbiqui';
    } else if (areaId === 'area3') {
      window.location.href = 'http://localhost:5173/Suarez';
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/imagenes/cauca.png"
        alt="Descripción de la imagen"
        useMap="#mapa-de-imagen"
        style={{ cursor: 'pointer' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '127px',  // Es y1, posición vertical
          left: highlightedArea === 'area1' ? '225px' : '150px', // El primero es el valor de x1
          width: '50px',
          height: '50px',
          border: '2px solid red',
          pointerEvents: 'none',
          display: highlightedArea === 'area1' ? 'block' : 'none',
        }}
      ></div>
      <div
       style={{
          position: 'absolute',
          top: highlightedArea === 'area2' ? '82px' : '150px', // Ajusta la posición vertical según el área resaltada
          left: highlightedArea === 'area2' ? '60px' : '150px', // Ajusta la posición horizontal según el área resaltada
          width: '50px',
          height: '50px',
          border: '2px solid red',
          pointerEvents: 'none',
          display: highlightedArea === 'area2' ? 'block' : 'none',
        }}
      ></div>
      <div
       style={{
          position: 'absolute',
          top: highlightedArea === 'area3' ? '51px' : '150px', // Ajusta la posición vertical según el área resaltada
          left: highlightedArea === 'area3' ? '195px' : '150px', // Ajusta la posición horizontal según el área resaltada
          width: '50px',
          height: '50px',
          border: '2px solid red',
          pointerEvents: 'none',
          display: highlightedArea === 'area3' ? 'block' : 'none',
        }}
      ></div>
      <map name="mapa-de-imagen">
        <area
          id="area1"
          shape="rect"
          coords="225,127,275,177" //x1, y1, x2, y2. x1 y x2 definen de donde hira en el rango de x
          alt="Área 1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
        <area
          id="area2"
          shape="rect"
          coords="60,82,110,132"
          alt="Área 2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
        <area
          id="area3"
          shape="rect"
          coords="195,51,245,101"
          alt="Área 3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
        
      </map>
    </div>
  );
}

export default Map;




