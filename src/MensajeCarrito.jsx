import { useContext } from 'react';
import { CarritoContext } from './context/CarritoContext';

function MensajeCarrito() {
  const { mensaje } = useContext(CarritoContext);
  if (!mensaje) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: '#e26262ff',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        zIndex: 1000,
        animation: 'fadeInOut 2s forwards'
      }}
    >
      {mensaje}
    </div>
  );
}

export default MensajeCarrito;