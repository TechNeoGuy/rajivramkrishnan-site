import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import HowIHelp from './components/HowIHelp'
import ThePerson from './components/ThePerson'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyModal from './components/PrivacyModal'
import TermsModal from './components/TermsModal'
import TelegramBubble from './components/TelegramBubble'
import './index.css'

function AppInner() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Journey />
        <HowIHelp />
        <ThePerson />
        <Writing />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTerms={() => setTermsOpen(true)} />
      {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
      {termsOpen && <TermsModal onClose={() => setTermsOpen(false)} />}
      <TelegramBubble />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
