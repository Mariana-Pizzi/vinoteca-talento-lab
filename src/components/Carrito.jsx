import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Carrito() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h2>🛒 Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none' }}>
            {carrito.map((p, i) => (
              <li key={i}>{p.nombre} — ${p.precio}</li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </>
      )}
    </section>
  );
}

export default Carrito;