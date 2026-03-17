import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()

  return (
    <section id="about" style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '100px 40px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/bg-about.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.05,
      }} aria-hidden="true" />

      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 360px',
        gap: '80px', alignItems: 'start',
        position: 'relative', zIndex: 1,
      }} className="about-grid">
        <div>
          <span className="section-label">About</span>
          <h2 ref={ref1} className="reveal" style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 400,
            lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '16px',
          }}>
            What do you actually get<br />
            <em style={{ color: 'var(--accent)' }}>when you work with me?</em>
          </h2>

          <div style={{ width: '48px', height: '2px', background: 'var(--accent)', margin: '24px 0 36px' }} />

          <div ref={ref2} className="reveal">
            <p style={{ marginBottom: '24px', fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              You get someone who shows up fully. Not partially, not when it is convenient - fully. I do not distribute my attention across twenty priorities and hope for the best. When I am committed to you, you have my undivided focus, my honest thinking, and my genuine investment in your success.
            </p>
          </div>

          <div ref={ref3} className="reveal reveal-delay-1">
            <p style={{ marginBottom: '24px', fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              I bring what I call resourcefulness with reliability - the ability to find a way through problems that do not have obvious answers, combined with the consistency to still be there when the next one appears. I ask uncomfortable questions, I tell you what I actually think when you ask for it, and I will always keep you informed of where things stand - especially when the news is not what we hoped for.
            </p>
          </div>

          <div ref={ref4} className="reveal reveal-delay-2">
            <p style={{ marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              What I ask for in return is simple. Honesty. Direct feedback. The generosity to tell me when something is not working so we can fix it together. Mutual accountability. If we ever need to part ways, let us do it with the same respect we started with.
            </p>
            <p style={{
              margin: 0, fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-secondary)',
              fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '24px',
              borderRadius: 0,
            }}>
              I am not the right fit for everyone and I know that. But for the people I work with - the ones who value integrity over politics, genuine contribution over visibility, and a long-term relationship over a transactional one - I tend to become the person they call first.
            </p>
          </div>
        </div>

        <div style={{ position: 'sticky', top: '100px' }}>
          <div style={{ position: 'relative' }}>
            <img src="/professional.jpg" loading="lazy" alt="Rajiv Ramkrishnan"
              style={{
                width: '100%', height: '420px', objectFit: 'cover',
                objectPosition: 'center top', borderRadius: '8px',
                boxShadow: 'var(--shadow-lg)',
              }}
            />
            <div style={{
              position: 'absolute', top: '20px', right: '-12px',
              background: 'var(--accent)', color: 'var(--bg-primary)',
              padding: '10px 18px', borderRadius: '4px',
              fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.75rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              writingMode: 'vertical-rl', textOrientation: 'mixed',
            }}>
              ITIL Expert
            </div>
          </div>
          <div style={{
            marginTop: '24px', padding: '20px 24px',
            background: 'var(--bg-secondary)',
            borderLeft: '3px solid var(--accent)',
          }}>
            <p style={{
              fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic',
              fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6,
            }}>
              "Accountability, Integrity, Resourcefulness, Reliability - these are not values I aspire to. They are how I actually work."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 768px) { #about { padding: 70px 24px !important; } }
      `}</style>
    </section>
  )
}
