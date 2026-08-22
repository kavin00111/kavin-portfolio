import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Cybersecurity from './sections/Cybersecurity'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Education from './sections/Education'
import CodeOpenSource from './sections/CodeOpenSource'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isTerminalShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'
      if (isTerminalShortcut) {
        e.preventDefault()
        setTerminalOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-cyan-glow focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-void"
      >
        Skip to content
      </a>

      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Cybersecurity />
        <Projects />
        <Journey />
        <Education />
        <CodeOpenSource />
        <Resume />
        <Contact />
      </main>

      <Footer />

      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  )
}
