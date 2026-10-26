import VideoBackground from './VideoBackground'
import { TractorIcon, LeafIcon, ShieldIcon, BoltIcon } from './Icons'
import { HERO_VIDEOS, HERO_CLIP_SECONDS, CONTACT } from '../data'

const POINTS = [
  { Icon: TractorIcon, text: 'Limpieza mecanizada de terrenos y parcelas.' },
  { Icon: LeafIcon, text: 'Reducción de biomasa combustible.' },
  { Icon: ShieldIcon, text: 'Construcción y mantención de cortafuegos.' },
]

export default function Hero() {
  const msg = encodeURIComponent('Hola, quiero preparar mi terreno para la temporada de incendios')

  return (
    <section className="hero">
      <VideoBackground videos={HERO_VIDEOS} clipSeconds={HERO_CLIP_SECONDS} />
      <div className="container hero-content">
        <p className="eyebrow">Se viene la temporada de incendios</p>
        <h1>¡Mejor prevenir que lamentar!</h1>

        <ul className="hero-points">
          {POINTS.map(({ Icon, text }) => (
            <li key={text}>
              <span className="hero-point-icon">
                <Icon />
              </span>
              {text}
            </li>
          ))}
        </ul>

        <p className="hero-sub">Protege tu propiedad y a tu familia.</p>

        <div className="hero-actions">
          <a href={`https://wa.me/${CONTACT.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer" className="btn btn-primary">
            <BoltIcon size={18} /> ¡Solución inmediata!
          </a>
          <a href="#servicios" className="btn btn-ghost">
            Conoce nuestros servicios
          </a>
        </div>
      </div>
    </section>
  )
}
