export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  const linkStyle = {
    fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.78rem',
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#9A8878', textDecoration: 'none', transition: 'color 0.2s',
    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
  }

  return (
    <footer style={{ background: '#1C1410', borderTop: '3px solid #C4622E', padding: '32px 40px' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.82rem', color: '#C8B8A8', margin: 0,
        }}>
          © 2026 Rajiv Ramkrishnan
        </p>
        <p style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontStyle: 'italic', fontSize: '0.88rem',
          color: '#C8B8A8', margin: 0,
        }}>
          🍁 Made in Canada, with love for the humans on the other side of the screen
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/rajivramkrishnan' },
            { label: 'SVAHSV Inc.', href: 'https://svahsv.online' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#C4622E'}
              onMouseLeave={e => e.target.style.color = '#9A8878'}
            >
              {link.label}
            </a>
          ))}
          {[
            { label: 'Privacy', fn: onOpenPrivacy },
            { label: 'Terms', fn: onOpenTerms },
          ].map(item => (
            <button key={item.label} onClick={item.fn} style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#C4622E'}
              onMouseLeave={e => e.target.style.color = '#9A8878'}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer { padding: 28px 24px !important; }
          footer > div { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>
    </footer>
  )
}
