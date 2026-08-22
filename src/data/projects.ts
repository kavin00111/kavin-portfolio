export type ProjectStatus = 'Shipped' | 'In Development' | 'Personal Learning Project'

export interface Project {
  id: string
  name: string
  status: ProjectStatus
  description: string
  built: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'navneet-foundation',
    name: 'Navneet Foundation Website',
    status: 'Shipped',
    description:
      'A responsive website built for a social organization, from layout to deployment.',
    built: [
      'A fully responsive multi-section layout for desktop, tablet, and mobile',
      'A photo gallery and structured content sections',
      'A contact/information section for the organization',
      'Deployment on Cloudflare with a GitHub-based workflow',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'GitHub'],
    githubUrl: 'YOUR_GITHUB_URL',
  },
  {
    id: 'ai-virtual-assistant',
    name: 'AI Virtual Assistant',
    status: 'Personal Learning Project',
    description:
      'A Python-based virtual assistant concept that responds to voice commands to perform basic computer tasks.',
    built: [
      'Voice command capture and speech recognition pipeline',
      'A command-handling layer that maps recognized speech to actions',
      'Basic system-level automation triggered by voice input',
    ],
    technologies: ['Python', 'Speech Recognition', 'Automation', 'System Commands'],
    githubUrl: 'YOUR_GITHUB_URL',
  },
  {
    id: 'seo-automation-platform',
    name: 'SEO Automation Platform',
    status: 'In Development',
    description:
      'A tool for automating website SEO checks — scanning URLs and surfacing issues without manual auditing.',
    built: [
      'URL scanning and metadata checking',
      'Broken link detection across a site',
      'Planned: multi-URL support, a results dashboard, and automated reports',
    ],
    technologies: ['Python', 'Automation', 'Web Scraping'],
    githubUrl: 'YOUR_GITHUB_URL',
  },
  {
    id: 'recon-toolkit',
    name: 'Cybersecurity Recon Toolkit',
    status: 'Personal Learning Project',
    description:
      'A personal automation toolkit that chains and organizes common reconnaissance tools instead of running each one by hand.',
    built: [
      'Automated chaining of recon steps across multiple tools',
      'A consistent way to organize and read scan output',
      'A learning-focused setup — not a production security platform',
    ],
    technologies: ['Python', 'Bash', 'Subfinder', 'httpx', 'Nmap'],
    githubUrl: 'YOUR_GITHUB_URL',
  },
]
