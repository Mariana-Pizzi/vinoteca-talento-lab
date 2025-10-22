const CATS = [
  { title: 'Tintos',  emoji: '🍷', desc: 'Malbec, Cabernet, Merlot' },
  { title: 'Blancos', emoji: '🥂', desc: 'Chardonnay, Sauvignon Blanc' },
  { title: 'Rosados', emoji: '🌸', desc: 'Frescos y frutales' },
  { title: 'Espumantes', emoji: '✨', desc: 'Brut, Extra Brut' },
];

export default function CategoryGrid() {
  return (
    <section className="section">
      <h2 className="section-title">Categorías</h2>
      <div className="grid">
        {CATS.map((c) => (
          <div key={c.title} className="card cat">
            <div className="cat-emoji">{c.emoji}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}