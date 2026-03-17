import { useScrollReveal } from '../hooks/useScrollReveal'

const lanes = [
  {
    number: '01',
    title: 'IT Leadership',
    subtitle: 'For organisations that need someone who genuinely cares',
    body: 'I bring over two decades of IT Service Management, operations, governance, and team leadership to organisations that need things to actually work - not just look good on a dashboard. Whether it is a full-time role, a contract engagement, or a specific project that needs someone with the depth to see it through, I show up prepared and fully committed.',
    tags: ['IT Service Management', 'Governance', 'Compliance', 'Team Leadership', 'Remote'],
    cta: null,
    ctaLabel: null,
  },
  {
    number: '02',
    title: 'Technology Consulting',
    subtitle: 'For small businesses and solopreneurs',
    body: 'Running your own business is hard enough without technology getting in the way. I work with a small number of clients - entrepreneurs, solopreneurs, and small business owners - to help them understand their digital options, close the gaps that are costing them time and money, and make technology decisions that actually fit their reality. Through my consultancy, I also build custom apps and digital tools for people who need something that does not exist off the shelf.',
    cta: 'https://svahsv.online',
    ctaLabel: 'Visit SVAHSV Inc.',
  },
  {
    number: '03',
    title: 'Building and Thinking',
    subtitle: 'Apps, tools, and honest writing about technology',
    body: 'I build things. A digital presence audit tool for businesses. A routine timer app for iOS. Websites. Workflows. I also write about what I am learning - about AI used deliberately, about value stream mapping, about what good IT management actually looks like from the inside. If you find any of it useful, that is the whole point.',
    cta: '#writing',
    ctaLabel: 'Read my writing',
    ctaInternal: true,
  },
]

function Lane({ lane, index }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: '#FAF7F2',
        border: '1px solid #E0D5C8',
        borderRadius: '8px',
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        transitionDelay: `${index * 0.1}s`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(44, 31, 14, 0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <span style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '3rem',
        fontWeight: 700,
        color: '#E8C4B0',
        lineHeight: 1,
        marginBottom: '20px',
        display: 'block',
      }}>
        {lane.number}
      </span>

      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.4rem',
        fontWeight: 700,
        color: '#1A0E04',
        marginBottom: '8px',
      }}>
        {lane.title}
      </h3>

      <p style={{
        fontFamily: "'Lora', Georgia, serif",
        fontStyle: 'italic',
        fontSize: '0.9rem',
        color: '#C4704B',
        marginBottom: '20px',
      }}>
        {lane.subtitle}
      </p>

      <div style={{ width: '32px', height: '1.5px', background: '#E0D5C8', marginBottom: '20px' }} />

      <p style={{
        fontSize: '0.97rem',
        lineHeight: 1.85,
        color: '#7A6A55',
        flex: 1,
        marginBottom: '28px',
      }}>
        {lane.body}
      </p>

      {lane.tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {lane.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#7A6A55',
              background: '#F3EDE4',
              padding: '5px 12px',
              borderRadius: '4px',
              border: '1px solid #E0D5C8',
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {lane.cta && (
        lane.ctaInternal ? (
          <a
            href={lane.cta}
            onClick={e => {
              e.preventDefault()
              document.querySelector(lane.cta)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="underline-link"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '0.82rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#C4704B',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {lane.ctaLabel}
            <span style={{ fontSize: '1rem' }}>-</span>
          </a>
        ) : (
          <a
            href={lane.cta}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '0.82rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#C4704B',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {lane.ctaLabel}
          </a>
        )
      )}
    </div>
  )
}

export default function HowIHelp() {
  const titleRef = useScrollReveal()

  return (
    <section id="help" style={{
      background: '#FAF7F2',
      padding: '100px 40px',
      borderTop: '1px solid #E0D5C8',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">How I Can Help</span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: '#1A0E04',
            maxWidth: '520px',
          }}>
            Three ways I contribute - <em style={{ color: '#C4704B' }}>each one genuinely</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="help-grid">
          {lanes.map((lane, i) => (
            <Lane key={i} lane={lane} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .help-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          #help { padding: 70px 24px !important; }
        }
      `}</style>
    </section>
  )
}
