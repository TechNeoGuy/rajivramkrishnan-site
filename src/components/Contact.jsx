import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const titleRef = useScrollReveal()
  const formRef = useScrollReveal()

  const handleChange = e => setFormState({ ...formState, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try reaching me on LinkedIn instead.')
      }
    } catch (err) {
      setError('Could not send your message. Please try again or reach me on LinkedIn.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(250,247,242,0.08)',
    border: '1px solid rgba(250,247,242,0.2)',
    borderRadius: '6px', fontFamily: "'Lora', Georgia, serif",
    fontSize: '1rem', color: '#FAF7F2', outline: 'none',
    transition: 'border-color 0.2s', lineHeight: 1.6,
  }

  return (
    <section id="contact" aria-label="Contact" style={{
      background: 'var(--bg-dark)', padding: '100px 40px',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '80px', alignItems: 'start',
      }} className="contact-grid">

        <div>
          <span style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent)', display: 'block', marginBottom: '16px',
          }}>
            Get in touch
          </span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 400,
            color: '#FAF7F2', lineHeight: 1.2, marginBottom: '24px',
          }}>
            An open door is always{' '}
            <em style={{ color: 'var(--accent)' }}>genuinely open.</em>
          </h2>
          <div style={{ width: '48px', height: '2px', background: 'var(--accent)', marginBottom: '28px' }} />
          <p style={{
            fontSize: '1.05rem', lineHeight: 1.85, color: '#A89880',
            marginBottom: '36px', maxWidth: '400px',
          }}>
            Whether you have a role in mind, a technology problem to think through, or simply want to connect - send a message using the form. I read everything and respond to every genuine inquiry.
          </p>

          <a href="https://linkedin.com/in/rajivramkrishnan" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem',
              color: '#E8C4B0', textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = '#E8C4B0'}
          >
            <span style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '1px solid rgba(250,247,242,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', fontWeight: 'bold', flexShrink: 0,
            }}>
              in
            </span>
            Connect on LinkedIn
          </a>
        </div>

        <div ref={formRef} className="reveal">
          {submitted ? (
            <div style={{
              background: 'rgba(196,112,75,0.12)',
              border: '1px solid rgba(196,112,75,0.35)',
              borderRadius: '8px', padding: '40px', textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic', fontSize: '1.4rem',
                color: '#FAF7F2', marginBottom: '12px',
              }}>
                Thank you.
              </p>
              <p style={{ color: '#A89880', fontSize: '1rem', lineHeight: 1.7 }}>
                Your message has been received. I will get back to you genuinely and promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {[
                { label: 'Your name', name: 'name', type: 'text' },
                { label: 'Email address', name: 'email', type: 'email' },
              ].map(field => (
                <div key={field.name}>
                  <label htmlFor={`contact-${field.name}`} style={{
                    display: 'block', fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.78rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: '#8A7A65', marginBottom: '8px',
                  }}>
                    {field.label}
                  </label>
                  <input
                    id={`contact-${field.name}`}
                    type={field.type}
                    name={field.name}
                    required
                    value={formState[field.name]}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(250,247,242,0.2)'}
                    aria-required="true"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" style={{
                  display: 'block', fontFamily: "'Lora', Georgia, serif",
                  fontSize: '0.78rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#8A7A65', marginBottom: '8px',
                }}>
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(250,247,242,0.2)'}
                  aria-required="true"
                />
              </div>

              {error && (
                <p style={{
                  fontFamily: "'Lora', Georgia, serif", fontSize: '0.88rem',
                  color: '#F0997B', margin: 0, lineHeight: 1.6,
                }}>
                  {error}
                </p>
              )}

              <button type="submit" disabled={submitting} style={{
                padding: '15px 36px', background: 'var(--accent)',
                color: '#FAF7F2', fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.85rem', fontWeight: 500,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                border: 'none', borderRadius: '6px',
                cursor: submitting ? 'not-allowed' : 'pointer',
                opacity: submitting ? 0.7 : 1,
                transition: 'background 0.2s, transform 0.2s',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = 'var(--accent-hover)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)' }}
              >
                {submitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact { padding: 70px 24px !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(250,247,242,0.25); }
      `}</style>
    </section>
  )
}
