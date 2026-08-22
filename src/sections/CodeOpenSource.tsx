import { Github, Star, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { siteConfig } from '../config/site'
import { isPlaceholder } from '../lib/placeholder'
import { useGitHubData } from '../hooks/useGitHubData'

export default function CodeOpenSource() {
  const { profile, repos, status } = useGitHubData(siteConfig.githubUsername)
  const githubConfigured = !isPlaceholder(siteConfig.githubUsername)
  const githubLinkConfigured = !isPlaceholder(siteConfig.links.github)

  return (
    <section id="code" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="07"
          eyebrow="code_and_open_source"
          title="Code & Open Source"
          description="Repositories and activity pulled directly from GitHub."
        />

        <Reveal className="mb-8 flex flex-wrap items-center gap-4">
          <a
            href={githubLinkConfigured ? siteConfig.links.github : undefined}
            target={githubLinkConfigured ? '_blank' : undefined}
            rel={githubLinkConfigured ? 'noreferrer' : undefined}
            className={`btn-secondary ${!githubLinkConfigured ? 'pointer-events-none opacity-50' : ''}`}
            aria-disabled={!githubLinkConfigured}
          >
            <Github size={16} />
            {githubLinkConfigured ? 'View GitHub Profile' : 'Add your GitHub URL'}
          </a>

          {profile && (
            <div className="flex gap-5 font-mono text-xs text-mist-dim">
              <span>{profile.public_repos} public repos</span>
              <span>{profile.followers} followers</span>
            </div>
          )}
        </Reveal>

        {!githubConfigured && (
          <div className="reticle p-6 text-sm text-mist-dim">
            Set <code className="rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-cyan-glow">githubUsername</code>{' '}
            in <code className="rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-cyan-glow">src/config/site.ts</code>{' '}
            to automatically pull in your latest repositories here.
          </div>
        )}

        {githubConfigured && status === 'loading' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="reticle h-36 animate-pulse p-6" />
            ))}
          </div>
        )}

        {githubConfigured && status === 'error' && (
          <div className="reticle p-6 text-sm text-mist-dim">
            Could not load live repository data right now — the GitHub button above still works.
          </div>
        )}

        {githubConfigured && status === 'success' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 70}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="reticle group flex h-full flex-col p-6"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="truncate font-display text-sm font-semibold text-mist">
                      {repo.name}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-mist-faint transition-colors group-hover:text-cyan-glow"
                    />
                  </div>
                  <p className="mb-4 line-clamp-2 flex-1 text-[13px] leading-relaxed text-mist-dim">
                    {repo.description ?? 'No description provided.'}
                  </p>
                  <div className="flex items-center gap-4 font-mono text-xs text-mist-faint">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
