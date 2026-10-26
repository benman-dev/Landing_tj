import { VALUES, CONTACT } from '../data'

export default function Values() {
  return (
    <>
      <section className="section section-alt">
        <div className="container grid-4">
          {VALUES.map((v) => (
            <div key={v.title} className="value">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tagline">
        <div className="container">
          <p className="tagline-handle">{CONTACT.instagram}</p>
          <h2>Servicio de limpieza de terrenos con maquinaria de trituración</h2>
        </div>
      </section>
    </>
  )
}
