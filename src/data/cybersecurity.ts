export interface CyberTopic {
  id: string
  label: string
  group: 'foundations' | 'vulnerabilities' | 'practice'
}

export const cyberTopics: CyberTopic[] = [
  { id: 'web-app-security', label: 'Web Application Security', group: 'foundations' },
  { id: 'recon', label: 'Reconnaissance', group: 'foundations' },
  { id: 'http', label: 'HTTP Requests & Responses', group: 'foundations' },
  { id: 'authn-authz', label: 'Authentication & Authorization', group: 'foundations' },
  { id: 'session-security', label: 'Session Security', group: 'foundations' },
  { id: 'access-control', label: 'Access Control', group: 'foundations' },
  { id: 'api-security', label: 'API Security', group: 'foundations' },

  { id: 'xss', label: 'XSS', group: 'vulnerabilities' },
  { id: 'csrf', label: 'CSRF', group: 'vulnerabilities' },
  { id: 'ssrf', label: 'SSRF', group: 'vulnerabilities' },
  { id: 'sqli', label: 'SQL Injection', group: 'vulnerabilities' },
  { id: 'nosqli', label: 'NoSQL Injection', group: 'vulnerabilities' },
  { id: 'open-redirect', label: 'Open Redirects', group: 'vulnerabilities' },

  { id: 'vuln-discovery', label: 'Vulnerability Discovery', group: 'practice' },
  { id: 'bug-bounty', label: 'Bug Bounty Methodology', group: 'practice' },
]

export const cyberGroupLabels: Record<CyberTopic['group'], string> = {
  foundations: 'Foundations',
  vulnerabilities: 'Vulnerability Classes',
  practice: 'Practice & Methodology',
}
