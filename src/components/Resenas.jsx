const REVIEWS = [
  { name: 'Lucía', text: 'Excelente selección y entrega rapidísima.' },
  { name: 'Julián', text: 'Los Malbec están increíbles. Repetiré compra.' },
  { name: 'María', text: 'Atención de 10 y buenos precios.' },
];

export default function Resena() {
  return (
    <section className="section">
      <h2 className="section-title">Reseñas</h2>
      <div className="grid">
        {REVIEWS.map((r, i) => (
          <div key={i} className="card">
            <p>“{r.text}”</p>
            <span className="muted">— {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
