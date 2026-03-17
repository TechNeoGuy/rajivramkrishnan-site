import { useState } from 'react'

export default function TelegramBubble() {
  const [hovered, setHovered] = useState(false)
  const telegramUrl = 'https://t.me/rajivramkrishnan_contact_bot'

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      zIndex: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px',
    }}>
      {hovered && (
        <div style={{
          background: 'var(--bg-dark)',
          color: '#FAF7F2',
          fontFamily: "'Lora', Georgia, serif",
          fontSize: '0.82rem',
          padding: '10px 16px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          animation: 'bubbleFadeIn 0.2s ease',
          lineHeight: 1.5,
        }}>
          Message me on Telegram
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            right: '22px',
            width: '12px',
            height: '12px',
            background: 'var(--bg-dark)',
            transform: 'rotate(45deg)',
          }} />
        </div>
      )}

      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Rajiv on Telegram"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#229ED9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(34, 158, 217, 0.45)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.94c-.12.56-.46.7-.92.44l-2.56-1.88-1.24 1.19c-.14.14-.26.26-.52.26l.18-2.62 4.74-4.28c.2-.18-.05-.28-.32-.1L7.46 14.5l-2.52-.78c-.55-.17-.56-.55.12-.82l9.84-3.8c.46-.16.86.12.74.7z" fill="white"/>
        </svg>
      </a>

      <style>{`
        @keyframes bubbleFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
