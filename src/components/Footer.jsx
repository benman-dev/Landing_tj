import { BRAND, CONTACT, SERVICES } from '../data'

const HELP = ['Quiénes Somos', 'Preguntas Frecuentes', 'Política de privacidad', 'Política de reembolso', 'Términos y Condiciones']
const PAYMENTS = ['Webpay', 'Mercado Pago', 'Mastercard', 'Visa', 'Transferencia']

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer-grid">
        <div>
          <a href="#" className="logo logo-light">
            <span className="logo-mark">🌲</span> {BRAND}
          </a>
          <p className="footer-note">Limpieza de terrenos, movimiento de tierra y arriendo de maquinaria en el sur de Chile.</p>
        </div>

        <div>
          <h4>Servicios</h4>
          {SERVICES.map((s) => (
            <a key={s.id} href="#servicios">
              {s.title}
            </a>
          ))}
          <a href="#maquinaria">Arriendo de Maquinaria</a>
        </div>

        <div>
          <h4>Ayuda</h4>
          {HELP.map((h) => (
            <a key={h} href="#">
              {h}
            </a>
          ))}
        </div>

        <div>
          <h4>Contáctanos</h4>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="payments">
          {PAYMENTS.map((p) => (
            <span key={p} className="pay-chip">
              {p}
            </span>
          ))}
        </div>
        <p>
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
