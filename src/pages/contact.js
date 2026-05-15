import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:Alagbeyusuf21@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inp = { width: '100%', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', outline: 'none', borderRadius: 0, transition: 'border-color 0.2s' }

  return (
    <>
      <Head><title>Contact | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: '140px 0 60px', position: 'relative' }}>
        <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,184,0.1) 0%, transparent 70%)', bottom: 0, right: '10%' }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">Get In Touch</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 16 }}>Let's <span style={{ color: 'var(--teal)' }}>Connect</span></h1>
          <p style={{ color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.8, marginBottom: 60, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
            Whether you have a project in mind, an opportunity, or just want to talk DevOps — my inbox is always open.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }} className="contact-grid">
            {/* Info */}
            <div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', marginBottom: 28 }}>Contact Information</h2>
              <div style={{ display: 'grid', gap: 20, marginBottom: 40 }}>
                {[
                  { icon: '📧', label: 'Email', value: 'Alagbeyusuf21@gmail.com', href: 'mailto:Alagbeyusuf21@gmail.com' },
                  { icon: '📱', label: 'Phone', value: '+1 (602) 829-0385', href: 'tel:+16028290385' },
                  { icon: '📍', label: 'Location', value: 'Plano, TX (Open to Remote)' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 44, height: 44, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: 2, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.88rem', wordBreak: 'break-all' }}>{c.value}</a>
                        : <span style={{ fontSize: '0.88rem' }}>{c.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  { name: 'LinkedIn', handle: '/in/yusuf-alagbe-olatunji', href: 'https://www.linkedin.com/in/yusuf-alagbe-olatunji', color: '#0077b5' },
                  { name: 'GitHub', handle: 'YusufAlagbe', href: 'https://github.com/YusufAlagbe', color: '#6e40c9' },
                  { name: 'Docker Hub', handle: 'yoalagbe1', href: 'https://hub.docker.com/u/yoalagbe1', color: '#2496ed' },
                ].map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}10` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)' }}>
                    <div style={{ width: 5, height: 32, background: s.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text)' }}>{s.name}</div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)' }}>{s.handle}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="card" style={{ padding: 40, textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-dim)' }}>Your email client should have opened. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-outline" style={{ marginTop: 24, cursor: 'pointer' }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row-2">
                    <div>
                      <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Your Name *</label>
                      <input required style={inp} placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => e.target.style.borderColor = 'var(--teal)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email *</label>
                      <input required type="email" style={inp} placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => e.target.style.borderColor = 'var(--teal)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Subject *</label>
                    <input required style={inp} placeholder="Project Inquiry / Job Opportunity" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={e => e.target.style.borderColor = 'var(--teal)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Message *</label>
                    <textarea required rows={7} style={{ ...inp, resize: 'vertical' }} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => e.target.style.borderColor = 'var(--teal)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.95rem', padding: '14px 28px', cursor: 'pointer' }}>
                    Send Message →
                  </button>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    This will open your email client.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
