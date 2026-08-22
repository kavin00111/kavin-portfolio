import { useEffect, useState } from 'react'
import { Menu, X, TerminalSquare } from 'lucide-react'
import { navItems } from '../data/nav'
import { siteConfig } from '../config/site'
import { useScrollSpy } from '../hooks/useScrollSpy'

interface NavbarProps {
  onOpenTerminal: () => void
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(navItems.map((item) => item.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavigate = (id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-void/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNavigate('home')}
          className="font-display text-lg font-semibold tracking-tight text-mist transition-colors hover:text-cyan-glow"
        >
          <span className="text-cyan-glow">~/</span>
          {siteConfig.username}
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className={`relative rounded-md px-3 py-2 font-mono text-[13px] transition-colors duration-200 ${
                  activeId === item.id
                    ? 'text-cyan-glow'
                    : 'text-mist-dim hover:text-mist'
                }`}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-px bg-cyan-glow" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={onOpenTerminal}
            className="btn-ghost"
            aria-label="Open terminal easter egg"
            title="Open terminal (Ctrl / Cmd + K)"
          >
            <TerminalSquare size={16} />
          </button>
          <button onClick={() => handleNavigate('contact')} className="btn-secondary !px-4 !py-2 text-xs">
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-mist md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/[0.06] bg-void/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className={`block w-full rounded-md px-3 py-3 text-left font-mono text-sm ${
                  activeId === item.id ? 'text-cyan-glow' : 'text-mist-dim'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={onOpenTerminal}
              className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-left font-mono text-sm text-mist-dim"
            >
              <TerminalSquare size={16} /> Open terminal
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
