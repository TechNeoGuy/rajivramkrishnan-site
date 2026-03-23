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
    'The best IT operations I have built over twenty years worked the same way. I have seen what happens when you let a system run unchecked - not dramatically, but quietly. Edge cases pile up. Relationships erode. The people on the other end of the process stop trusting it. The system handled what the system could handle reliably. The humans handled everything else - the edge cases, the relationships, the moments where the right answer was simply not in the playbook.',
    'I think that is just true of anything worth doing well. Tools serve people. People serve people. In that order, always.',
    'So yes - I use AI. Enthusiastically, deliberately, and with my eyes open. And every time it produces something that will reach a real person, I read it, question it, and take responsibility for it.',
    'Because that responsibility is not something I am willing to delegate to a model. Not yet. Probably not ever.',
  ],
}

const comingSoon = [
  {
    title: 'Value stream mapping in real IT operations',
    desc: 'Not the whiteboard version. What it actually looks like when you map a service delivery chain that has been running on tribal knowledge for a decade.',
  },
  {
    title: 'What good change management actually looks like',
    desc: 'From the inside. The gap between what the process says and what teams do under pressure - and why closing that gap is the only thing that prevents the 3 AM call.',
  },
  {
    title: 'The quiet skill of asking the right question first',
    desc: 'Most IT problems are solved by the person who asked the sharpest diagnostic question, not by the person who had the most tools. This is about that.',
  },
]

export default function Writing() {
  const [expanded, setExpanded] = useState(false)
  const titleRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

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

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span className="section-label">Writing</span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 400,
            color: 'var(--text-primary)', maxWidth: '620px',
          }}>
            Thinking out loud about <em style={{ color: 'var(--accent)' }}>technology and people</em>
          </h2>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem',
            color: 'var(--text-light)', maxWidth: '560px', marginTop: '16px', lineHeight: 1.7,
          }}>
            A mix of articles and creative work - ideas worth writing down, problems worth unpacking,
            and one fan-inspired series that turned twenty years of ITSM into something a little unexpected.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '32px',
          alignItems: 'start',
        }}>

          {/* LEFT: Article + Coming Soon */}
          <div ref={leftRef} className="reveal">

            {/* Published article */}
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '24px',
            }}>
              <div style={{ background: 'var(--bg-dark)', padding: '32px 40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.72rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)',
                  }}>{post.date}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>·</span>
                  <span style={{
                    fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.72rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)',
                  }}>{post.readTime}</span>
                </div>
                <h3 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.6rem',
                  fontWeight: 700, color: '#FAF7F2', lineHeight: 1.25, margin: 0,
                }}>{post.title}</h3>
              </div>

              <div style={{ padding: '32px 40px' }}>
                <p style={{
                  fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic',
                  fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-primary)',
                  marginBottom: '24px', paddingBottom: '24px',
                  borderBottom: '1px solid var(--border)',
                }}>{post.excerpt}</p>

                {expanded && (
                  <div style={{ marginBottom: '24px' }}>
                    {post.content.map((para, i) => (
                      <p key={i} style={{
                        fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-secondary)',
                        marginBottom: i < post.content.length - 1 ? '18px' : 0,
                      }}>{para}</p>
                    ))}
                  </div>
                )}

                <button onClick={() => setExpanded(!expanded)} style={{
                  fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.82rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--accent)', background: 'none', border: 'none',
                  cursor: 'pointer', padding: 0,
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                aria-expanded={expanded}>
                  {expanded ? 'Read less' : 'Read the full piece'}
                  <span style={{
                    display: 'inline-block',
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                  }}>↓</span>
                </button>
              </div>
            </div>

            {/* Coming soon cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {comingSoon.map((item, i) => (
                <div key={i} style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--border)',
                  borderRadius: '6px',
                  padding: '20px 24px',
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: '1.02rem', fontWeight: 600,
                      color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.35,
                    }}>{item.title}</p>
                    <p style={{
                      fontFamily: "'Source Serif 4', Georgia, serif",
                      fontSize: '0.88rem', color: 'var(--text-light)',
                      lineHeight: 1.6, margin: 0,
                    }}>{item.desc}</p>
                  </div>
                  <span style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--text-muted)', border: '1px solid var(--border)',
                    padding: '4px 10px', borderRadius: '3px', whiteSpace: 'nowrap',
                    flexShrink: 0, marginTop: '2px',
                  }}>Coming soon</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ITSM Chronicles callout */}
          <div ref={rightRef} className="reveal" style={{
            background: '#0e0806',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(200,169,110,0.2)',
            position: 'sticky',
            top: '100px',
          }}>
            {/* Orange top bar */}
            <div style={{ height: '3px', background: '#C4622E' }} />

            <div style={{ padding: '32px 28px' }}>
              {/* Eyebrow */}
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase',
                color: 'rgba(200,169,110,0.7)', marginBottom: '16px',
              }}>Fan-Inspired Creative Series</p>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700,
                color: '#edd89a', lineHeight: 1.2, marginBottom: '6px',
              }}>This is the Way</h3>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
                color: '#c8a96e', marginBottom: '20px',
              }}>ITSM Chronicles</p>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(200,169,110,0.4), transparent)',
                marginBottom: '20px',
              }} />

              {/* Description */}
              <p style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: '0.97rem', color: '#b8c8e0',
                lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic',
              }}>
                Where Star Wars fan fiction meets enterprise ITSM. Real problems.
                Real BMC Helix tools. Legendary characters.
              </p>

              {/* Season 1 tag */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
              }}>
                <span style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: '10px', fontWeight: 700,
                  background: '#c8a96e', color: '#0e0806',
                  padding: '4px 12px', borderRadius: '2px', letterSpacing: '0.1em',
                }}>Season One</span>
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(62,207,114,0.9)',
                }}>Now Streaming</span>
              </div>

              {/* Episode preview */}
              <div style={{
                background: 'rgba(200,169,110,0.05)',
                border: '1px solid rgba(200,169,110,0.15)',
                borderRadius: '4px',
                padding: '14px 16px',
                marginBottom: '24px',
              }}>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '8.5px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(62,207,114,0.8)', marginBottom: '6px',
                }}>S01 · E01 · Live</p>
                <p style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontSize: '0.9rem', color: '#e2e8f4',
                  lineHeight: 1.5, margin: 0, fontWeight: 600,
                }}>
                  A P1 Outage in a Galaxy Far, Far Away
                </p>
                <p style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontSize: '0.82rem', color: '#8a9ab8',
                  lineHeight: 1.5, marginTop: '4px', margin: '4px 0 0',
                }}>
                  3 AM. Payroll down. No rollback plan. IG-11 finds the root cause in 22 minutes.
                </p>
              </div>

              {/* CTA button */}
              <a
                href="https://itsm.rajivramkrishnan.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  background: '#c8a96e', color: '#0e0806',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontWeight: 700, padding: '12px 20px',
                  borderRadius: '2px', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#edd89a'}
                onMouseLeave={e => e.currentTarget.style.background = '#c8a96e'}
              >
                Read Season 1 →
              </a>

              {/* Disclaimer */}
              <p style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: '0.68rem', color: 'rgba(138,154,184,0.6)',
                textAlign: 'center', marginTop: '12px', lineHeight: 1.5,
              }}>
                Fan fiction · Star Wars &amp; The Mandalorian are trademarks of Lucasfilm Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #writing .writing-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          #writing { padding: 70px 24px !important; }
          #writing > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
