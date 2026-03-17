import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    name: 'Zentines',
    platform: 'iOS',
    status: 'In Review',
    statusColor: '#C4704B',
    description: 'A customisable routine timer app for focused daily habits. Built with SwiftUI, SwiftData, and CloudKit - designed for people who want their mornings to mean something.',
    tech: ['SwiftUI', 'SwiftData', 'CloudKit', 'App Intents', 'Siri'],
    link: null,
    comingSoon: true,
  },
  {
    name: 'Digital Presence Audit',
    platform: 'Web App',
    status: 'Beta',
    statusColor: '#7A9E6E',
    description: 'A 200+ point audit tool helping small businesses understand how they show up online - covering SEO, accessibility, performance, and digital compliance. Built for SVAHSV Inc.',
    tech: ['React', 'Vite', 'Supabase', 'Netlify'],
    link: 'https://svahsv.online',
    comingSoon: false,
  },
  {
    name: 'Zentines for Android',
    platform: 'Android',
    status: 'In Development',
    statusColor: '#7A9E6E',
    description: 'The Android companion to Zentines, built with Kotlin and Jetpack Compose. Bringing the same focused routine experience to the Google Play ecosystem.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Wear OS'],
    link: null,
    comingSoon: true,
  },
]

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal card-hover"
      style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        transitionDelay: `${index * 0.1}s`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '3px', background: project.statusColor,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)',
            marginBottom: '4px',
          }}>
            {project.name}
          </h3>
          <span style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-light)',
          }}>
            {project.platform}
          </span>
        </div>
        <span style={{
          fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: project.statusColor, background: `${project.statusColor}18`,
          padding: '5px 12px', borderRadius: '4px',
          border: `1px solid ${project.statusColor}40`,
          whiteSpace: 'nowrap',
        }}>
          {project.status}
        </span>
      </div>

      <p style={{
        fontSize: '0.97rem', lineHeight: 1.85,
        color: 'var(--text-secondary)', marginBottom: '24px', flex: 1,
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: 'var(--text-light)', background: 'var(--bg-secondary)',
            padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--border)',
          }}>
            {t}
          </span>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-link"
          style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.82rem',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          Visit project
        </a>
      ) : (
        <span style={{
          fontFamily: "'Lora', Georgia, serif", fontSize: '0.82rem',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'var(--text-muted)', fontStyle: 'italic',
        }}>
          {project.comingSoon ? 'Coming soon to app stores' : 'Link coming soon'}
        </span>
      )}
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()

  return (
    <section id="projects" style={{
      background: 'var(--bg-secondary)',
      padding: '100px 40px',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Projects</span>
          <h2 ref={titleRef} className="reveal" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            fontWeight: 400, color: 'var(--text-primary)', maxWidth: '520px',
          }}>
            Things I am <em style={{ color: 'var(--accent)' }}>building</em>
          </h2>
          <p style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '1rem',
            color: 'var(--text-light)', maxWidth: '500px', marginTop: '16px',
          }}>
            A small but growing collection of apps and tools built from genuine need - not to check a box.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { #projects { padding: 70px 24px !important; } }
      `}</style>
    </section>
  )
}
