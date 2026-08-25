/**
 * SITE CONFIGURATION
 * -------------------
 * This is the single file you need to edit to update your personal info,
 * contact links, and resume path. Nothing else in the codebase should need
 * to change for basic content updates.
 *
 * Replace every PLACEHOLDER value (things like "YOUR_GITHUB_URL") with your
 * real information. Nothing here is invented — nothing is used until you
 * fill it in.
 */

export const siteConfig = {
  name: 'Kavin Chaudhary',
  username: 'devKavin',
  role: 'Computer Science Student • Developer • Cybersecurity Enthusiast',
  location: 'Ghaziabad, Uttar Pradesh, India',

  tagline:
    'I build software, explore web technologies, automate workflows, and continuously learn about cybersecurity and systems.',

  about: `I'm a Computer Science / AI student who enjoys building things and understanding how technology
  actually works under the hood — from the request a browser sends, to the server that answers it, to the
  ways that exchange can go wrong. Most of my time goes into writing code, breaking things on purpose in a
  controlled way, and picking apart how the web is put together.

  I'm still early in this path. I'm not claiming to be an expert — I'm actively learning, experimenting,
  building projects, and getting a little better at programming, web development, and cybersecurity every
  week.`,

  interests: [
    'Programming',
    'Web Development',
    'Cybersecurity',
    'Bug Bounty',
    'Linux',
    'Networking',
    'Automation',
    'AI',
  ],

  // SEO
  seo: {
    title: 'Kavin Chaudhary | Developer & Cybersecurity Enthusiast',
    description:
      'Personal portfolio of Kavin Chaudhary — Computer Science student, developer, cybersecurity enthusiast, and technology explorer.',
  },

  // ---- Replace these placeholders with your real links ----
  links: {
    email: 'Developerkavinxx@gmail.com',
    github: 'https://github.com/kavin00111',
    linkedin: 'https://www.linkedin.com/in/kavin-chaudhary-7b7392306?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram: 'https://www.instagram.com/kvinkx7.npc?igsi=MWgyMHJjam56ZG5tcg==',
  },

  // GitHub API username used to pull live repo/activity data in the
  // "Code & Open Source" section. Leave as-is and it'll show instructions
  // to configure it instead of guessing a username.
  githubUsername: 'kavin00111',

  // Path to your resume file. Drop a PDF at public/resume.pdf and this
  // will just work — no code changes needed.
  resumePath: '/resume.pdf',

  education: {
    degree: 'B.Tech — Computer Science / Artificial Intelligence',
    institution: 'ABES Institute of Technology (ABESIT)',
    location: 'Ghaziabad, Uttar Pradesh, India',
  },
} as const

export type SiteConfig = typeof siteConfig
