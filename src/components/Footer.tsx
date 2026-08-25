import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../config/site'
import { isPlaceholder } from '../lib/placeholder'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { icon: FaGithub, href: siteConfig.links.github, label: 'GitHub' },
    { icon: FaLinkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: siteConfig.links.instagram, label: 'Instagram' },
    {
      icon: FaEnvelope,
      href: isPlaceholder(siteConfig.links.email) ? undefined : `mailto:${siteConfig.links.email}`,
      label: 'Email',
    },
  ].filter((s) => !isPlaceholder(s.href))

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-mist-faint">
          © {year} {siteConfig.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>

        {socials.length > 0 && (
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-mist-faint transition-colors hover:text-cyan-glow"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
