export type ProficiencyLevel = 'Learning' | 'Comfortable' | 'Proficient'

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Languages I write and reason in regularly.',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Building and shipping things that run in a browser.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Vite'],
  },
  {
    id: 'security',
    title: 'Cybersecurity / Security Research',
    description: 'Concepts and methodology I study and practice.',
    skills: [
      'Web Security',
      'Web App Testing',
      'Reconnaissance',
      'Vulnerability Research',
      'Bug Bounty Methodology',
      'HTTP',
      'APIs',
      'Authentication Concepts',
      'OWASP Concepts',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Tools I have worked with or explored hands-on.',
    skills: [
      'Burp Suite',
      'Nmap',
      'FFUF',
      'Gobuster',
      'SQLmap',
      'Hydra',
      'Subfinder',
      'httpx',
      'Dalfox',
      'XSStrike',
      'Wayback Machine',
      'Docker',
      'Git',
      'GitHub',
    ],
  },
  {
    id: 'systems',
    title: 'Systems',
    description: 'Environments I build and operate in day to day.',
    skills: ['Linux', 'Windows', 'Networking', 'Command Line', 'Virtual Machines', 'WSL'],
  },
]
