import React, { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';

const API = 'https://68f27fa0b36f9750deecd5f3.mockapi.io/vinos';

function Productos() {
  const [vinos, setVinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setVinos(data);
        setCargando(false);
      })
      .catch(() => {
        setError('Error al cargar los vinos');
        setCargando(false);
      });
  }, []);

  if (cargando) return <p style={{ textAlign: 'center' }}>Cargando vinos...</p>;
  if (error) return <p style={{ textAlign: 'center' }}>{error}</p>;
  if (!vinos.length) return <p style={{ textAlign: 'center' }}>No hay vinos disponibles.</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
      {vinos.map(vino => (
        <ProductoCard key={vino.id} producto={vino} />
      ))}
    </div>
  );
}

export default Productos;