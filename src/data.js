// Contenido de ejemplo del prototipo. Cambia aquí textos, precios y contacto.

export const BRAND = 'Forestal Tío Jorge'

export const CONTACT = {
  phone: '+56 9 1234 5678',
  whatsapp: '56912345678',
  email: 'contacto@ejemplo.cl',
  instagram: '@tu_empresa',
}

// Videos de fondo del hero. Copia los archivos a public/videos/ (MP4, idealmente < 10 MB cada uno).
// BASE_URL antepone la ruta del sitio (/Landing_tj/) para que funcionen en GitHub Pages.
export const HERO_VIDEOS = ['limpieza-1.mp4', 'limpieza-2.mp4', 'limpieza-3.mp4'].map(
  (f) => `${import.meta.env.BASE_URL}videos/${f}`,
)
// Segundos que se muestra cada video antes de pasar al siguiente
export const HERO_CLIP_SECONDS = 8

export const SERVICES = [
  {
    id: 'roce',
    title: 'Roce Mecanizado',
    text: 'Limpieza de vegetación con minicargadores forestales. La biomasa triturada queda en el terreno y enriquece el suelo.',
    icon: '🌿',
  },
  {
    id: 'cortafuego',
    title: 'Corta Fuegos',
    text: 'Construcción de cortafuegos para prevenir y controlar el avance de incendios forestales.',
    icon: '🔥',
  },
  {
    id: 'tierra',
    title: 'Movimiento de Tierra',
    text: 'Excavación, nivelación y traslado de material con camiones y excavadoras.',
    icon: '🚜',
  },
  {
    id: 'podas',
    title: 'Podas en Altura',
    text: 'Poda mecanizada de árboles y ramas en altura, con seguridad y precisión.',
    icon: '🌲',
  },
]

export const MACHINES = [
  { brand: 'Bobcat', name: 'Minicargador con Triturador', price: 588765 },
  { brand: 'Bobcat', name: 'Minicargador con Horquilla', price: 39251 },
  { brand: 'Wacker Neuson', name: 'Miniexcavadora 3.5 Toneladas', price: 30616 },
  { brand: 'Doosan', name: 'Excavadora 21 Toneladas', price: 50634 },
  { brand: 'Mitsubishi', name: 'Camión Alza Hombre', price: 37288 },
]

export const VALUES = [
  { title: 'Rapidez Garantizada', text: 'Respondemos y comenzamos los trabajos en plazos cortos.', icon: '⚡' },
  { title: 'Versatilidad en Servicios', text: 'Limpieza, movimiento de tierra, podas y arriendo en un solo lugar.', icon: '🧰' },
  { title: 'Transparencia', text: 'Sin cargos ocultos ni sorpresas inesperadas.', icon: '🤝' },
  { title: 'Ajustes a Medida', text: 'Cada cotización se adapta a tu terreno y presupuesto.', icon: '📐' },
]

export const NAV = [
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios', children: SERVICES.map((s) => ({ label: s.title, href: '#servicios' })) },
  { label: 'Equipos', href: '#maquinaria' },
  { label: 'Contacto', href: '#contacto' },
]

export const formatCLP = (n) => '$' + n.toLocaleString('es-CL')
