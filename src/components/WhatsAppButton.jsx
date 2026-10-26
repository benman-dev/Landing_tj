import { CONTACT } from '../data'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola, quiero cotizar un servicio')}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >
      💬 Cotiza aquí
    </a>
  )
}
