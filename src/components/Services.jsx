import { SERVICES } from '../data'

export default function Services() {
  return (
    <section className="section section-alt" id="servicios">
      <div className="container">
        <h2 className="section-title">Limpieza de terrenos</h2>
        <div className="grid-4">
          {SERVICES.map((s) => (
            <article key={s.id} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contacto" className="link">
                Saber más →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
