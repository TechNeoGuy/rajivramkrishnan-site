import { useScrollReveal } from '../hooks/useScrollReveal'

const moments = [
  {
    period: 'Bangalore, mid-1990s',
    title: 'The portal opens',
    story: 'At eight or nine years old, I saw my first computer. That was it. Not a gadget - a portal. Everything I had ever been curious about suddenly felt within reach. I did not fully understand why, but I knew from that moment that computers and I were going to have a very long relationship.',
  },
  {
    period: 'Early career, 2003',
    title: 'Learning what IT really means',
    story: 'My first IT role taught me something that nobody puts in a job description: the person on the other end of a ticket is not a problem to be closed. They are a person trying to do their work, and something in their day has gone wrong. How you treat that moment - whether you genuinely care or just process it - shapes everything about the service you deliver. I learned that early and it stuck.',
  },
  {
    period: 'Operations leadership, 2006-2010',
    title: 'When scale teaches humility',
    story: 'Managing operations across multiple countries with a large team taught me something I did not expect: most technology failures are not really technology failures. The technology breaks, yes - that will always happen. What determines whether people lose faith is what comes after. Did they know what was happening? Were they kept informed? Was someone being transparent with them, even when the news was difficult? Communication and coordination are what hold an operation together under pressure. I learned to ask not just "what broke?" but "who needed to know, and did they?"',
  },
  {
    period: 'Governance and compliance, 2014-2018',
    title: 'The discipline of getting it right',
    story: 'Four years of running compliance programs taught me that integrity is a daily practice, not a policy document. Either you do things properly or you do not. There is no version of "mostly compliant" that holds up when someone looks closely. Where findings did arise, they became lessons - and not a single one repeated. The discipline required to sustain that across multiple sites, multiple auditors, and multiple years is something I am genuinely proud of. Not because it looked good on a report. Because we contributed to clean outcomes for our centres, and we earned them.',
  },
  {
    period: 'Healthcare IT, 2021-2023',
    title: 'Building for people, not systems',
    story: 'At LifeLabs I was brought in at exactly the right moment - a transition from an outdated platform to something new, and I was entrusted to make it work. I cherished that responsibility. So I learned BMC Helix from the ground up - requirements from the teams, configuration, testing, documentation, training - not because it was in a job description but because that is the only way I know how to do something properly. By the time we were done, the platform worked for the people using it every day. That kind of outcome - where you can see the difference it makes - is what I find most satisfying about this work.',
  },
  {
    period: 'Ottawa, today',
    title: 'Still curious. Still building.',
    story: 'I run my own consultancy now. I build apps. I journal and research what I am learning - about technology, about people, about how the two fit together. I am also doing something genuinely new for me: learning how to sell. Not in a transactional way - in a human way. I have always been a service person. But I am beginning to understand that if people do not know I exist, I cannot serve them. So this - the website, the writing, the visibility - is the beginning of that. Still curious. Still building. Just doing it a little more openly than before.',
  },
]

function Moment({ moment, index }) {
  const ref = useScrollReveal()
  const isEven = index % 2 === 0

  const dot = (
    <div style={{
      width: '14px', height: '14px', borderRadius: '50%',
      background: 'var(--accent)', border: '3px solid var(--bg-secondary)',
      boxShadow: '0 0 0 2px var(--accent)', flexShrink: 0, margin: '4px 0',
    }} />
  )

  const line = <div style={{ width: '1px', flex: 1, background: 'var(--border)' }} />

  const content = (
    <div style={{ padding: isEven ? '0 40px 60px 0' : '0 0 60px 40px', textAlign: isEven ? 'right' : 'left' }}>
      <span style={{
        fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.72rem',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--accent)', display: 'block', marginBottom: '10px',
      }}>
        {moment.period}
      </span>
      <h3 style={{
        fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.3rem',
        fontWeight: 600, color: 'var(--text-primary)', marginBottom: '14px',
      }}>
        {moment.title}
      </h3>
      <p style={{ fontSize: '0.97rem', lineHeight: 1.85, color: 'var(--text-secondary)' }}>
        {moment.story}
      </p>
    </div>
  )

  const spacer = <div style={{ padding: '0 40px 60px' }} />

  return (
    <div ref={ref} className="reveal" style={{
      display: 'grid', gridTemplateColumns: '1fr 48px 1fr',
      transitionDelay: `${index * 0.05}s`,
    }}>
      {isEven ? content : spacer}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {line}{dot}{line}
      </div>
      {isEven ? spacer : content}
    </div>
  )
}

export default function Journey() {
  const titleRef = useScrollReveal()

  return (
    <section id="journey" style={{
      background: 'var(--bg-secondary)',
      padding: '100px 40px',
      borderTop: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/bg-journey.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.08,
      }} aria-hidden="true" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">The Journey</span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 400,
            color: 'var(--text-primary)', marginBottom: '16px',
          }}>
            A story told in <em style={{ color: 'var(--accent)' }}>moments</em>
          </h2>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem',
            color: 'var(--text-light)', maxWidth: '480px', margin: '0 auto',
          }}>
            Not a timeline of titles and companies - a thread of experiences that shaped how I think and work.
          </p>
        </div>

        <div className="journey-timeline">
          {moments.map((moment, i) => <Moment key={i} moment={moment} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #journey { padding: 70px 24px !important; }
          .journey-timeline > div { grid-template-columns: 24px 1fr !important; }
        }
      `}</style>
    </section>
  )
}
