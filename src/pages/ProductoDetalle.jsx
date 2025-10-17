import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductoDetalle() {
  const { id } = useParams();
  const [vino, setVino] = useState(null);

  useEffect(() => {
    fetch(`https://64eb5a63219b3e2873c38c4e.mockapi.io/vinos/${id}`)
      .then(res => res.json())
      .then(data => setVino(data));
  }, [id]);

  if (!vino) return <p style={{ textAlign: 'center' }}>Cargando detalle...</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{vino.nombre}</h2>
      <img src={vino.imagen} alt={vino.nombre} width="250" />
      <p>{vino.descripcion}</p>
      <p><strong>Precio:</strong> ${vino.precio}</p>
    </div>
  );
}

export default ProductoDetalle;