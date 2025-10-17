import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

function ProductoCard({ producto }) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '10px',
    width: '200px',
    textAlign: 'center'
  };

  return (
    <div style={cardStyle}>
      <img src={producto.imagen} alt={producto.nombre} width="150" />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
      <div>
        <Link to={`/productos/${producto.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
}

export default ProductoCard;