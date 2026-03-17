import { useScrollReveal } from '../hooks/useScrollReveal'

const beliefs = [
  {
    title: 'Curiosity as a way of life',
    text: 'I read randomly. About anything. Physics, philosophy, cooking traditions, ancient history, how bees navigate. I watch humans and animals and nature the way some people watch films - without wanting to change anything, just genuinely interested in how things are.',
  },
  {
    title: 'I do not know how to lie',
    text: 'Not because I am particularly virtuous - more because I know I would be caught immediately. I can be diplomatic. I can choose when to share a difficult opinion. But I cannot fabricate. It is simply not in me. What you see is genuinely what is there.',
  },
  {
    title: 'Everything is already perfect',
    text: 'I used to think I was a perfectionist. Then I realised what I actually seek is not perfection - it is order. Arrangement. The right thing in the right place for the right reason. When that comes together, something in me feels genuinely settled and grateful.',
  },
  {
    title: 'Technology has been my portal since age eight',
    text: 'That has never stopped being true. The specific tools have changed beyond recognition. The feeling of possibility has not moved an inch. A screen is still a window to everything beyond this immediate moment.',
  },
]

function BeliefCard({ belief, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{
      background: 'var(--bg-primary)', border: '1px solid var(--border)',
      borderRadius: '8px', padding: '32px 28px',
      transitionDelay: `${index * 0.1}s`,
    }}>
      <span style={{ display: 'block', color: 'var(--accent)', fontSize: '1rem', marginBottom: '14px' }}>✦</span>
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem',
        fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px',
      }}>
        {belief.title}
      </h3>
      <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--text-secondary)', margin: 0 }}>
        {belief.text}
      </p>
    </div>
  )
}

export default function ThePerson() {
  const titleRef = useScrollReveal()
  const photoRef = useScrollReveal()
  const textRef = useScrollReveal()

  return (
    <section id="person" style={{
      background: 'var(--bg-secondary)', padding: '100px 40px',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="section-label">The Person</span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            fontWeight: 400, color: 'var(--text-primary)',
          }}>
            Beyond the resume, <em style={{ color: 'var(--accent)' }}>the human</em>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 400px',
          gap: '72px', alignItems: 'start', marginBottom: '72px',
        }} className="person-grid">
          <div ref={textRef} className="reveal">
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic',
              fontSize: '1.35rem', lineHeight: 1.6, color: 'var(--text-primary)',
              marginBottom: '28px', borderLeft: '3px solid var(--accent)', paddingLeft: '24px',
            }}>
              "I am a simple, curious person who is always seeking new adventures and challenges - and most importantly someone who has immense trust and faith in humanity, nature, and this whole universe we find ourselves in."
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.02rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              My purpose is to serve whoever asks for assistance to the best of my abilities. Not out of altruism or a need to please - but because I genuinely care about solving the problems of people who come to me. At the same time, I have a family I love deeply and everything I do, I do so that we can thrive together. That is not a contradiction. That is just honesty.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.02rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              I am a 100% vegetarian - with a well-known weakness for sweets that I am slowly but earnestly working on. I get easily disappointed when people judge others without understanding the full picture. I believe in directness but I choose my moments carefully, because feedback only lands when the person receiving it is genuinely ready to hear it.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              I care deeply about this planet, the creatures on it, and the extraordinary strangeness of being here at all. That is not background noise in my life. It shapes how I show up for work, for people, for everything.
            </p>
          </div>

          <div ref={photoRef} className="reveal reveal-delay-1" style={{ position: 'sticky', top: '100px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', bottom: '-14px', right: '-14px',
                width: '60%', height: '60%',
                background: 'var(--accent-light)', borderRadius: '6px', zIndex: 0,
              }} />
              <img src="/personal.jpg" alt="Rajiv Ramkrishnan in the mountains" loading="lazy" style={{
                width: '100%', height: '480px', objectFit: 'cover',
                objectPosition: 'center', borderRadius: '8px', position: 'relative',
                zIndex: 1, boxShadow: 'var(--shadow-lg)',
              }} />
            </div>
            <p style={{
              fontFamily: "'Lora', Georgia, serif", fontStyle: 'italic',
              fontSize: '0.85rem', color: 'var(--text-muted)',
              textAlign: 'center', marginTop: '28px',
            }}>
              Somewhere in the mountains. Thinking, as usual.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="beliefs-grid">
          {beliefs.map((belief, i) => (
            <BeliefCard key={i} belief={belief} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .person-grid { grid-template-columns: 1fr !important; }
          .beliefs-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) { #person { padding: 70px 24px !important; } }
      `}</style>
    </section>
  )
}
