import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { skillCategories } from '../data/skills'
import { projects } from '../data/projects'

interface TerminalProps {
  isOpen: boolean
  onClose: () => void
}

type Line = { type: 'input' | 'output'; text: string }

const HELP_TEXT = [
  'Available commands:',
  '  whoami     — who this site belongs to',
  '  skills     — list skill categories',
  '  projects   — list featured projects',
  '  contact    — how to reach out',
  '  clear      — clear the terminal',
  '  help       — show this list again',
].join('\n')

function runCommand(raw: string): string {
  const cmd = raw.trim().toLowerCase()

  switch (cmd) {
    case 'whoami':
      return `${siteConfig.name} (${siteConfig.username}) — ${siteConfig.role}\nBased in ${siteConfig.location}.`
    case 'skills':
      return skillCategories
        .map((cat) => `${cat.title}: ${cat.skills.join(', ')}`)
        .join('\n')
    case 'projects':
      return projects
        .map((p) => `${p.name} [${p.status}] — ${p.description}`)
        .join('\n')
    case 'contact':
      return `Use the contact form in the "Contact" section, or reach out via the links there.`
    case 'help':
      return HELP_TEXT
    case '':
      return ''
    default:
      return `command not found: ${cmd}\ntype 'help' to see available commands`
  }
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: `Welcome. Type 'help' to see available commands.` },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = input

    if (command.trim().toLowerCase() === 'clear') {
      setLines([])
      setInput('')
      return
    }

    const output = runCommand(command)
    setLines((prev) => [
      ...prev,
      { type: 'input', text: command },
      ...(output ? [{ type: 'output' as const, text: output }] : []),
    ])
    setInput('')
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm sm:pt-32"
      role="dialog"
      aria-modal="true"
      aria-label="Developer terminal"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-xl border border-cyan-glow/20 bg-void-100 shadow-glow-lg"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="ml-2 font-mono text-xs text-mist-dim">
              guest@{siteConfig.username}:~
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="rounded p-1 text-mist-dim hover:text-cyan-glow"
          >
            <X size={16} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="h-72 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed"
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap">
              {line.type === 'input' ? (
                <span>
                  <span className="text-cyan-glow">$ </span>
                  <span className="text-mist">{line.text}</span>
                </span>
              ) : (
                <span className="text-mist-dim">{line.text}</span>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-3">
          <span className="font-mono text-sm text-cyan-glow">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent font-mono text-sm text-mist outline-none placeholder:text-mist-faint"
            placeholder="type a command…"
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  )
}
