import React, { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';

function Productos() {
  const [vinos, setVinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://64eb5a63219b3e2873c38c4e.mockapi.io/vinos')
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

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
      {vinos.map(vino => (
        <ProductoCard key={vino.id} producto={vino} />
      ))}
    </div>
  );
}

export default Productos;