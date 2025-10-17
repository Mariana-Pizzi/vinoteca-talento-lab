import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const fmt = (n) => new Intl.NumberFormat('es-AR').format(n || 0);

function Carrito() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, p) => acc + Number(p.precio || 0), 0);

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

          <p style={{ fontSize: 18, marginTop: 10 }}>
            <strong>Total:</strong> ${fmt(total)}
          </p>

          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </>
      )}
    </section>
  );
}

export default Carrito;