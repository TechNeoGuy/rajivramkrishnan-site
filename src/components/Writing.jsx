import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const post = {
  title: 'Why I never let AI have the last word',
  date: 'March 2026',
  readTime: '4 min read',
  excerpt: 'I use AI every day - Claude, ChatGPT, various APIs that would have seemed like science fiction to the eight-year-old version of me staring at his first computer screen. But I never let it have the last word on anything that matters to a real person.',
  content: [
    'Why do I still review every output before it goes anywhere? You might find yourself wondering. You might even ask me directly: "Do you not trust the system?" I will always say the same thing: I trust it the way I trust a very fast, very confident colleague who sometimes gets things completely wrong without knowing it.',
    'That is how I think about AI. I use it actively - to cut through repetitive work, to explore possibilities faster, to think alongside. The tools available today would have seemed like genuine magic to the curious eight-year-old in Bangalore who stared at his first computer screen and felt the universe open up. I have deep respect for what these systems can do.',
    'But I never let AI have the last word on anything that matters to a real person.',
    'This is not resistance to technology. I have more hours of hands-on AI experimentation than most people I know. It is something else entirely - a belief that the human in the loop is not a bottleneck, not a legacy habit, not something to be engineered out. It is the actual point.',
    'The judgment. The empathy. The awareness of what someone actually needs versus what they asked for. The understanding of context that is not in any document. None of that lives in a model. It lives in the person.',
    'The best IT operations I have built over twenty years worked the same way. The system handled what the system could handle reliably. The humans handled everything else - the edge cases, the relationships, the moments where the right answer was simply not in the playbook.',
    'I think that is just true of anything worth doing well. Tools serve people. People serve people. In that order, always.',
    'So yes - I use AI. Enthusiastically, deliberately, and with my eyes open. And every time it produces something that will reach a real person, I read it, question it, and take responsibility for it.',
    'Because that responsibility is not something I am willing to delegate to a model. Not yet. Probably not ever.',
  ],
}

export default function Writing() {
  const [expanded, setExpanded] = useState(false)
  const titleRef = useScrollReveal()
  const cardRef = useScrollReveal()

  return (
    <section id="writing" style={{
      background: 'var(--bg-primary)',
      padding: '100px 40px',
      borderTop: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/bg-writing.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.07,
      }} aria-hidden="true" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Writing</span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 400,
            color: 'var(--text-primary)', maxWidth: '560px',
          }}>
            Thinking out loud about <em style={{ color: 'var(--accent)' }}>technology and people</em>
          </h2>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem',
            color: 'var(--text-light)', maxWidth: '500px', marginTop: '16px',
          }}>
            More pieces coming. For now, one that captures something I think about a lot.
          </p>
        </div>

        <div ref={cardRef} className="reveal" style={{
          maxWidth: '720px', background: 'var(--bg-secondary)',
          border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden',
        }}>
          <div style={{ background: 'var(--bg-dark)', padding: '40px 48px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.72rem',
                letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)',
              }}>
                {post.date}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>·</span>
              <span style={{
                fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.72rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)',
              }}>
                {post.readTime}
              </span>
            </div>
            <h3 style={{
              fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.7rem',
              fontWeight: 700, color: '#FAF7F2', lineHeight: 1.25, margin: 0,
            }}>
              {post.title}
            </h3>
          </div>

          <div style={{ padding: '36px 48px' }}>
            <p style={{
              fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic',
              fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-primary)',
              marginBottom: '28px', paddingBottom: '28px',
              borderBottom: '1px solid var(--border)',
            }}>
              {post.excerpt}
            </p>

            {expanded && (
              <div>
                {post.content.map((para, i) => (
                  <p key={i} style={{
                    fontSize: '1.02rem', lineHeight: 1.9, color: 'var(--text-secondary)',
                    marginBottom: i < post.content.length - 1 ? '20px' : '28px',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            <button onClick={() => setExpanded(!expanded)} style={{
              fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.82rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--accent)', background: 'none', border: 'none',
              cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', gap: '8px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            aria-expanded={expanded}
            >
              {expanded ? 'Read less' : 'Read the full piece'}
              <span style={{
                display: 'inline-block',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease', fontSize: '0.9rem',
              }}>
                ↓
              </span>
            </button>
          </div>
        </div>

        <p style={{
          fontFamily: "'Source Serif 4', Georgia, serif", fontStyle: 'italic',
          fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '32px',
        }}>
          More writing coming. Topics on the list: value stream mapping in real IT operations, what good change management actually looks like, and the quiet skill of asking the right question first.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) { #writing { padding: 70px 24px !important; } }
      `}</style>
    </section>
  )
}
