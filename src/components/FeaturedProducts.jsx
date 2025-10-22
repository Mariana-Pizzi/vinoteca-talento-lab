import { useEffect, useState } from 'react';
import ProductoCard from './ProductoCard';
const API = 'https://68f27fa0b36f9750deecd5f3.mockapi.io/vinos';

export default function FeaturedProducts() {
  const [vinos, setVinos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        setVinos(data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Destacados</h2>
      {loading ? (
        <p className="center">Cargando vinos...</p>
      ) : (
        <div className="grid">
          {vinos.map(v => (
            <ProductoCard key={v.id} producto={v} />
          ))}
        </div>
      )}
      <div className="center" style={{ marginTop: 14 }}>
        <a className="btn-secondary" href="/productos">Ver todos los productos</a>
      </div>
    </section>
  );
}
