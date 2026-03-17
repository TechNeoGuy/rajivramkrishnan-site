export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(250,247,242,0.08)', padding: '32px 40px' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.82rem', color: '#5A4A38', margin: 0 }}>
          © 2026 Rajiv Ramkrishnan
        </p>
        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.82rem', color: '#5A4A38', margin: 0 }}>
          🍁 Made in Canada, with love for the humans on the other side of the screen
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/rajivramkrishnan', external: true },
            { label: 'SVAHSV Inc.', href: 'https://svahsv.online', external: true },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#5A4A38', textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#C4704B'}
            onMouseLeave={e => e.target.style.color = '#5A4A38'}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenPrivacy}
            style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#5A4A38', background: 'none', border: 'none',
              cursor: 'pointer', padding: 0, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#C4704B'}
            onMouseLeave={e => e.target.style.color = '#5A4A38'}
          >
            Privacy
          </button>
          <button
            onClick={onOpenTerms}
            style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: '0.78rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#5A4A38', background: 'none', border: 'none',
              cursor: 'pointer', padding: 0, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#C4704B'}
            onMouseLeave={e => e.target.style.color = '#5A4A38'}
          >
            Terms
          </button>
        </div>
      </div>
    </footer>
  )
}
