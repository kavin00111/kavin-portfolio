export interface JourneyStep {
  id: string
  title: string
  description: string
  current?: boolean
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'programming',
    title: 'Started Programming',
    description: 'Began learning programming and core computer science concepts.',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Started building websites and picking up modern web technologies.',
  },
  {
    id: 'linux-systems',
    title: 'Linux & Systems',
    description: 'Began working with Linux, the command line, networking, and virtual machines.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Started learning web security, reconnaissance, vulnerability research, and bug bounty methodology.',
  },
  {
    id: 'building-projects',
    title: 'Building Projects',
    description: 'Started creating real projects to apply what I was learning.',
  },
  {
    id: 'currently',
    title: 'Currently',
    description:
      'Continuously improving my programming, development, cybersecurity, and problem-solving skills.',
    current: true,
  },
]
