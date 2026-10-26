// Íconos de línea. Toman el color del texto (currentColor), así que se tiñen con CSS.

function Icon({ children, size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const TractorIcon = (props) => (
  <Icon {...props}>
    <circle cx="7" cy="15" r="4" />
    <circle cx="7" cy="15" r="1" />
    <circle cx="19" cy="17" r="2" />
    <path d="M4 11.5V4h7l1.5 7" />
    <path d="M12.5 11H20a1 1 0 0 1 1 1v3.3" />
    <path d="M11 17h6" />
    <path d="M16 11V7.5" />
  </Icon>
)

export const LeafIcon = (props) => (
  <Icon {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Icon>
)

export const ShieldIcon = (props) => (
  <Icon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
)

export const BoltIcon = (props) => (
  <Icon {...props}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </Icon>
)
