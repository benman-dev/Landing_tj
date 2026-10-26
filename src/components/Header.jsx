import { useState } from 'react'
import { BRAND, NAV } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark">🌲</span> {BRAND}
        </a>

        <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          {NAV.map((item) => (
            <div key={item.label} className={item.children ? 'nav-item has-children' : 'nav-item'}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
              {item.children && (
                <div className="dropdown">
                  {item.children.map((c) => (
                    <a key={c.label} href={c.href} onClick={() => setOpen(false)}>
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contacto" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  )
}
