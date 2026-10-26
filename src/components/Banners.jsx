const PROMOS = [
  { title: 'Estamos donde nos necesitas', text: 'Operamos en el sur de Chile.', cta: 'Más información', href: '#nosotros', tone: 'forest' },
  { title: 'Maquinaria confiable para tus proyectos', text: 'Arriendo y venta de equipos especializados.', cta: 'Ver maquinarias', href: '#maquinaria', tone: 'earth' },
]

const CARDS = [
  { title: 'Limpieza de Terrenos', href: '#servicios' },
  { title: 'Arriendo de Maquinaria', href: '#maquinaria' },
  { title: 'Venta de Importación', href: '#contacto' },
]

export default function Banners() {
  return (
    <section className="section" id="nosotros">
      <div className="container">
        <div className="promo-grid">
          {PROMOS.map((p) => (
            <article key={p.title} className={`promo promo-${p.tone}`}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href={p.href} className="btn btn-light">
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="card-row">
          {CARDS.map((c) => (
            <a key={c.title} href={c.href} className="mini-card">
              <div className="placeholder" />
              <div className="mini-card-body">
                <h4>{c.title}</h4>
                <span className="link">Leer más →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
