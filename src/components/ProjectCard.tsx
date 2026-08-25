import { ExternalLink, CircleDot } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '../data/projects'
import { isPlaceholder } from '../lib/placeholder'

const statusStyles: Record<Project['status'], string> = {
  Shipped: 'text-signal border-signal/30 bg-signal/10',
  'In Development': 'text-amber-300 border-amber-300/30 bg-amber-300/10',
  'Personal Learning Project': 'text-cyan-glow border-cyan-glow/30 bg-cyan-glow/10',
}

export default function ProjectCard({ project }: { project: Project }) {
  const hasGithub = project.githubUrl && !isPlaceholder(project.githubUrl)
  const hasLive = project.liveUrl && !isPlaceholder(project.liveUrl)

  return (
    <article className="reticle group flex h-full flex-col p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-mist">{project.name}</h3>
        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[11px] ${statusStyles[project.status]}`}
        >
          <CircleDot size={10} />
          {project.status}
        </span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-mist-dim">{project.description}</p>

      <ul className="mb-5 space-y-1.5">
        {project.built.map((item) => (
          <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-mist-dim">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-glow/60" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-2">
        <a
          href={hasGithub ? project.githubUrl : undefined}
          target={hasGithub ? '_blank' : undefined}
          rel={hasGithub ? 'noreferrer' : undefined}
          aria-disabled={!hasGithub}
          className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors ${
            hasGithub
              ? 'text-mist-dim hover:text-cyan-glow'
              : 'cursor-not-allowed text-mist-faint'
          }`}
          title={hasGithub ? 'View source on GitHub' : 'Add your GitHub link in config/site.ts'}
        >
          <FaGithub size={14} /> Source
        </a>
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-mist-dim transition-colors hover:text-cyan-glow"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </article>
  )
}
