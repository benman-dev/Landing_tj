import { MACHINES, CONTACT, formatCLP } from '../data'

function MachineCard({ machine, ...props }) {
  const msg = encodeURIComponent(`Hola, quiero consultar disponibilidad de: ${machine.name}`)
  return (
    <article className="machine-card" {...props}>
      <div className="placeholder placeholder-tall" />
      <div className="machine-body">
        <span className="machine-brand">{machine.brand}</span>
        <h3>{machine.name}</h3>
        <p className="price">
          {formatCLP(machine.price)} <small>+ IVA / día</small>
        </p>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${msg}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-block"
        >
          Consultar disponibilidad
        </a>
        <a href="#contacto" className="link">
          Más información
        </a>
      </div>
    </article>
  )
}

export default function Machinery() {
  return (
    <section className="section" id="maquinaria">
      <div className="container">
        <h2 className="section-title">Arriendo de maquinaria</h2>
        <div className="machine-grid">
          {MACHINES.map((m, i) => (
            <MachineCard key={m.name} machine={m} style={{ animationDelay: `${i * 60}ms` }} />
          ))}
        </div>
      </div>
    </section>
  )
}
