import { useEffect, useRef, useState } from 'react'

// Alterna los videos en bucle con un fundido, mostrando cada uno `clipSeconds` segundos.
// Cada video se pausa al salir y sigue desde ese punto cuando vuelve, así se ven tramos distintos.
// Si un video no carga se salta; si no carga ninguno, se queda el degradado de fondo de la sección.
export default function VideoBackground({ videos, clipSeconds }) {
  const [active, setActive] = useState(0)
  const [failed, setFailed] = useState([])
  const refs = useRef([])

  const playable = videos.map((_, i) => i).filter((i) => !failed.includes(i))
  const nextAfter = (i) => playable.find((j) => j > i) ?? playable[0]

  useEffect(() => {
    refs.current.forEach((video, i) => {
      if (!video) return
      if (i === active) video.play().catch(() => {})
      else video.pause()
    })
    if (playable.length <= 1) return
    const id = setTimeout(() => setActive(nextAfter(active)), clipSeconds * 1000)
    return () => clearTimeout(id)
  }, [active, failed.length])

  const onError = (i) => {
    setFailed((f) => [...f, i])
    if (i === active) setActive(nextAfter(i))
  }

  if (!playable.length) return null

  return (
    <div className="video-bg" aria-hidden="true">
      {videos.map((src, i) =>
        failed.includes(i) ? null : (
          <video
            key={src}
            ref={(el) => (refs.current[i] = el)}
            src={src}
            className={i === active ? 'active' : undefined}
            muted
            loop
            playsInline
            preload={i === active ? 'auto' : 'metadata'}
            onError={() => onError(i)}
          />
        ),
      )}
      <div className="video-overlay" />
    </div>
  )
}
