import { useEffect, useState } from 'react'
import { isPlaceholder } from '../lib/placeholder'

export interface GitHubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  updated_at: string
}

export interface GitHubProfile {
  public_repos: number
  followers: number
  html_url: string
}

interface GitHubDataState {
  profile: GitHubProfile | null
  repos: GitHubRepo[]
  status: 'idle' | 'loading' | 'success' | 'error'
  errorMessage: string | null
}

export function useGitHubData(username: string) {
  const [state, setState] = useState<GitHubDataState>({
    profile: null,
    repos: [],
    status: 'idle',
    errorMessage: null,
  })

  useEffect(() => {
    if (isPlaceholder(username)) {
      return
    }

    let cancelled = false
    setState((s) => ({ ...s, status: 'loading', errorMessage: null }))

    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ])

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('GitHub profile not found')
        }

        const profile = await profileRes.json()
        const repos = await reposRes.json()

        if (!cancelled) {
          setState({
            profile: {
              public_repos: profile.public_repos,
              followers: profile.followers,
              html_url: profile.html_url,
            },
            repos,
            status: 'success',
            errorMessage: null,
          })
        }
      } catch {
        if (!cancelled) {
          setState((s) => ({
            ...s,
            status: 'error',
            errorMessage: 'Could not load live GitHub data right now.',
          }))
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  return state
}
