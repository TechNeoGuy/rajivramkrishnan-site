import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'How I Help', href: '#help' },
  { label: 'The Person', href: '#person' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

function RRLogo() {
  return (
    <svg viewBox="0 0 200 48" width="160" height="38" xmlns="http://www.w3.org/2000/svg" aria-label="Rajiv Ramkrishnan logo">
      <text x="0" y="36" fontFamily="'Playfair Display', Georgia, serif" fontWeight="700" fontSize="38" fill="currentColor" letterSpacing="-1">R</text>
      <text x="22" y="36" fontFamily="'Playfair Display', Georgia, serif" fontWeight="700" fontSize="38" fill="#B85E38" letterSpacing="-1">R</text>
      <line x1="46" y1="28" x2="46" y2="38" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1"/>
      <text x="51" y="31" fontFamily="'Lora', Georgia, serif" fontWeight="500" fontSize="10" fill="currentColor">Rajiv Ramkrishnan</text>
      <text x="51" y="43" fontFamily="'Lora', Georgia, serif" fontWeight="400" fontSize="8" fill="#B85E38" letterSpacing="1.8">RESOURCEFUL. RELIABLE.</text>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav role="navigation" aria-label="Main navigation" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backdropFilter: 'blur(10px)',
      backgroundColor: theme === 'dark' ? 'rgba(28,19,10,0.96)' : 'rgba(250,247,242,0.96)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px',
      }}>
        <a href="#top" onClick={(e) => handleLinkClick(e, '#top')}
          style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          aria-label="Home">
          <RRLogo />
        </a>

        <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} style={{
                fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-light)'}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={toggle}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="nav-mobile-controls">
          <button className="theme-toggle" onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'flex', flexDirection: 'column', gap: '5px',
            padding: '8px', background: 'none', border: 'none', cursor: 'pointer',
          }} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '1.5px',
                background: menuOpen ? 'var(--accent)' : 'var(--text-primary)',
                transition: 'all 0.3s ease',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(4.5px,4.5px)' : i === 2 ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'scaleX(0)') : 'none',
              }} />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)', padding: '24px 40px 32px' }}>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} style={{
              display: 'block', padding: '12px 0',
              fontFamily: "'Lora', Georgia, serif", fontSize: '1rem',
              color: 'var(--text-primary)', textDecoration: 'none',
              borderBottom: '1px solid var(--border)',
            }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .nav-mobile-controls { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
      `}</style>
    </nav>
  )
}
