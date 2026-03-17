import { useEffect, useState } from 'react'
import { useParallax } from '../hooks/useParallax'

const headline = "I proudly and lovingly serve humans."
const words = headline.split(' ')

export default function Hero() {
  const [wordsVisible, setWordsVisible] = useState(0)
  const imgRef = useParallax(0.1)

  useEffect(() => {
    const timer = setTimeout(() => {
      let count = 0
      const interval = setInterval(() => {
        count++
        setWordsVisible(count)
        if (count >= words.length) clearInterval(interval)
      }, 130)
      return () => clearInterval(interval)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="top" aria-label="Introduction" style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      display: 'flex', alignItems: 'center', paddingTop: '72px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/bg-hero.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.07,
      }} aria-hidden="true" />

      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '60px 40px',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr',
        gap: '80px', alignItems: 'center', width: '100%',
        position: 'relative', zIndex: 1,
      }} className="hero-grid">
        <div>
          <span style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)',
            display: 'block', marginBottom: '24px',
            opacity: wordsVisible > 0 ? 1 : 0, transition: 'opacity 0.6s ease',
          }}>
            IT Leader · Builder · Human · Ottawa, Canada
          </span>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', fontWeight: 700,
            lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '28px',
          }}>
            {words.map((word, i) => (
              <span key={i} style={{
                display: 'inline-block', marginRight: '0.28em',
                opacity: wordsVisible > i ? 1 : 0,
                transform: wordsVisible > i ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                fontStyle: word === 'lovingly' ? 'italic' : 'normal',
                color: word === 'lovingly' ? 'var(--accent)' : 'inherit',
              }}>
                {word}
              </span>
            ))}
          </h1>

          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.75,
            color: 'var(--text-light)', maxWidth: '460px', marginBottom: '44px',
            opacity: wordsVisible >= words.length ? 1 : 0,
            transform: wordsVisible >= words.length ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}>
            Technology is my portal to the universe. Serving the humans on the other side of it is my purpose.
          </p>

          <div style={{
            display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap',
            opacity: wordsVisible >= words.length ? 1 : 0,
            transform: wordsVisible >= words.length ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}>
            <a href="#about" className="btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Read my story
            </a>
            <a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--text-light)', textDecoration: 'none',
                borderBottom: '1px solid var(--border)', paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--text-light)'; e.currentTarget.style.borderColor='var(--border)'; }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div style={{
          position: 'relative',
          opacity: wordsVisible >= words.length ? 1 : 0,
          transform: wordsVisible >= words.length ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
        }}>
          <div style={{
            position: 'absolute', top: '-16px', left: '-16px',
            right: '16px', bottom: '16px',
            border: '2px solid var(--accent-light)', borderRadius: '8px', zIndex: 0,
          }} />
          <div className="parallax-container" style={{ position: 'relative', zIndex: 1 }}>
            <img ref={imgRef} src="/hero.jpg" loading="eager"
              alt="Rajiv Ramkrishnan outdoors with a rainbow in the sky behind him"
              className="parallax-img"
              style={{
                width: '100%', height: '560px',
                objectFit: 'cover', objectPosition: 'center top',
                borderRadius: '8px', boxShadow: 'var(--shadow-lg)',
              }}
            />
          </div>
          <div style={{
            position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2,
            background: 'var(--bg-primary)', border: '1px solid var(--border)',
            borderRadius: '6px', padding: '14px 20px', boxShadow: 'var(--shadow-md)',
          }}>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic',
              fontSize: '0.95rem', color: 'var(--accent)', margin: 0, lineHeight: 1.4,
            }}>Ottawa, Canada</p>
            <p style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem',
              color: 'var(--text-muted)', margin: 0, letterSpacing: '0.05em',
            }}>Open to the right opportunity</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  )
}
