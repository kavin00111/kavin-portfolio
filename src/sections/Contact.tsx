import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { siteConfig } from '../config/site'
import { isPlaceholder } from '../lib/placeholder'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

const socialLinks = [
  { icon: FaEnvelope, label: 'Email', value: siteConfig.links.email, href: (v: string) => `mailto:${v}` },
  { icon: FaGithub, label: 'GitHub', value: siteConfig.links.github, href: (v: string) => v },
  { icon: FaLinkedin, label: 'LinkedIn', value: siteConfig.links.linkedin, href: (v: string) => v },
  { icon: FaInstagram, label: 'Instagram', value: siteConfig.links.instagram, href: (v: string) => v },
]

export default function Contact() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newErrors = validate(values)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    // NOTE: No email backend is connected yet. Wire this up to a service
    // like Formspree, EmailJS, or your own API route, then replace this
    // block with the real submit call.
    console.info('Contact form submitted (no backend connected yet):', values)
    setSubmitted(true)
    setValues({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="09"
          eyebrow="contact"
          title="Let's Build Something Together"
          description="Have a project, an internship opportunity, or just want to talk shop? Reach out."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="reticle h-full space-y-5 p-7">
              {socialLinks.map(({ icon: Icon, label, value, href }) => {
                const configured = !isPlaceholder(value)
                return (
                  <a
                    key={label}
                    href={configured ? href(value) : undefined}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noreferrer' : undefined}
                    aria-disabled={!configured}
                    className={`flex items-center gap-3 rounded-lg border border-white/[0.06] px-4 py-3 transition-colors ${
                      configured
                        ? 'hover:border-cyan-glow/30 hover:bg-cyan-glow/[0.04]'
                        : 'opacity-50'
                    }`}
                  >
                    <Icon size={18} className="text-cyan-glow" />
                    <div>
                      <p className="font-mono text-xs text-mist-faint">{label}</p>
                      <p className="text-sm text-mist">
                        {configured ? value : `Add your ${label.toLowerCase()} in config/site.ts`}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            {submitted ? (
              <div className="reticle flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
                <CheckCircle2 className="text-signal" size={32} />
                <p className="font-display text-lg font-semibold text-mist">Message ready to send</p>
                <p className="max-w-sm text-sm text-mist-dim">
                  Your message passed validation. Connect a backend (Formspree, EmailJS, or your own
                  API route) to actually deliver it.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-ghost mt-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="reticle space-y-5 p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-mist-dim">
                      Name
                    </label>
                    <input
                      id="name"
                      value={values.name}
                      onChange={handleChange('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-mist outline-none transition-colors focus:border-cyan-glow/50"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-mist-dim">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-mist outline-none transition-colors focus:border-cyan-glow/50"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-mist-dim">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={values.subject}
                    onChange={handleChange('subject')}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-mist outline-none transition-colors focus:border-cyan-glow/50"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-mist-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={values.message}
                    onChange={handleChange('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-mist outline-none transition-colors focus:border-cyan-glow/50"
                    placeholder="Tell me a bit about the opportunity or project…"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
