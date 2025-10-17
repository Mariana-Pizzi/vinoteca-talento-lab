import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API = 'https://68f27fa0b36f9750deecd5f3.mockapi.io/vinos';

function ProductoDetalle() {
  const { id } = useParams();
  const [vino, setVino] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
        .then((res) => {
            if (!res.ok) throw new Eroe('Respuesta no OK');
            return res.json();
        })
        .then((data) => {
            setVino(data);
            setCargando(false);
            })
        .catch(() => {
            setError('Error al cargar el detalle');
            setCargando(false);
        });
  }, [id]);

  if (cargando) return <p style={{ textAlign: 'center' }}>Cargando detalle...</p>;
  if (error) return <p style={{ textAlign: 'center' }}>{error}</p>;
  if (!vino) return <p style={{ textAlign: 'center' }}>No se encontró el vino.</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{vino.nombre}</h2>
      {vino.imagen && <img src={vino.imagen} alt={vino.nombre} width="250" />}
      {vino.descripcion && <p style={{ maxWidth: 600, margin: '10px auto' }}>{vino.descripcion}</p>}
      {vino.precio != null && <p><strong>Precio:</strong> ${vino.precio}</p>}
    </div>
  );
}

export default ProductoDetalle;