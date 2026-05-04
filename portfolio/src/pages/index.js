import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const tools = ['Docker','Kubernetes','Terraform','AWS','Azure','Jenkins','GitHub Actions','Ansible','Datadog','Grafana','Prometheus','Python','Bash','Helm','EKS','AKS','ArgoCD','Vault']

export default function Home() {
  const [idx, setIdx] = useState(0)
  const titles = ['Senior DevOps Engineer', 'Cloud Architect', 'SRE Practitioner', 'Automation Expert']

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % titles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Head><title>Yusuf Alagbe | Senior DevOps Engineer</title></Head>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Orbs */}
        <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,212,184,0.12) 0%, transparent 70%)', top: -100, right: -100 }} />
        <div className="orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', bottom: 100, left: -50 }} />

        <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="section-label animate-fadeUp delay-1">
              Available for opportunities
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-teal 2s infinite' }} />
            </div>

            <h1 className="display animate-fadeUp delay-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: 8 }}>
              Yusuf<br />
              <span style={{ color: 'var(--teal)' }}>Alagbe</span>
            </h1>

            <div className="animate-fadeUp delay-3" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', color: 'var(--text-dim)', marginBottom: 24, minHeight: 28 }}>
              <span style={{ color: 'var(--teal)' }}>$ </span>
              <span key={idx} style={{ animation: 'fadeIn 0.5s ease' }}>{titles[idx]}</span>
              <span style={{ borderRight: '2px solid var(--teal)', marginLeft: 2, animation: 'blink 0.8s infinite' }}>&nbsp;</span>
            </div>

            <p className="animate-fadeUp delay-4" style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              11+ years designing and operating cloud-native infrastructure at scale. Specializing in Kubernetes, Terraform, and CI/CD automation across Azure and AWS — shipping faster, failing safer.
            </p>

            <div className="animate-fadeUp delay-5" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/projects" className="btn-primary">View My Work →</Link>
              <Link href="/contact" className="btn-outline">Get In Touch</Link>
            </div>

            {/* Stats */}
            <div className="animate-fadeUp delay-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
              {[['11+', 'Years Experience'], ['25%', 'Cost Reduction'], ['70%', 'Faster Provisioning']].map(([num, label]) => (
                <div key={num}>
                  <div className="stat-num">{num}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: 4, fontFamily: 'JetBrains Mono, monospace' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="animate-fadeIn delay-3" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 380, height: 460 }}>
              {/* Frame deco */}
              <div style={{ position: 'absolute', top: -12, right: -12, width: '100%', height: '100%', border: '2px solid var(--teal)', opacity: 0.3, zIndex: 0 }} />
              <div style={{ position: 'absolute', top: -6, right: -6, width: '100%', height: '100%', border: '1px solid var(--teal)', opacity: 0.15, zIndex: 0 }} />
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
                <Image src="/yusuf.jpg" alt="Yusuf Alagbe" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
                {/* Overlay gradient */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent, rgba(8,12,16,0.8))' }} />
              </div>
              {/* Badge */}
              <div style={{ position: 'absolute', bottom: 24, left: -24, zIndex: 2, background: 'var(--surface)', border: '1px solid var(--teal)', padding: '12px 20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--teal)', marginBottom: 2 }}>CURRENTLY AT</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>Andrews Distributing</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Dallas, TX</div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            div.container-custom > div { grid-template-columns: 1fr !important; }
            div[style*='width: 380px'] { display: none; }
          }
        `}</style>
      </section>

      {/* ── Tools marquee ── */}
      <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 0, animation: 'marquee 25s linear infinite', width: 'max-content' }}>
          {[...tools, ...tools].map((t, i) => (
            <span key={i} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-muted)', padding: '0 32px', borderRight: '1px solid var(--border)', whiteSpace: 'nowrap', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {t}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── Quick About ── */}
      <section style={{ padding: '100px 0' }}>
        <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="section-label">Who I Am</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Building Infra That<br /><span style={{ color: 'var(--teal)' }}>Never Sleeps</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: 20, lineHeight: 1.8 }}>
              Based in Plano, TX, I'm a Senior DevOps Engineer who bridges the gap between development velocity and operational reliability. My work spans cloud architecture, container orchestration, and the automation systems that power modern software delivery.
            </p>
            <p style={{ color: 'var(--text-dim)', marginBottom: 36, lineHeight: 1.8 }}>
              From cutting infrastructure costs by 25% at Andrews Distributing to leading Kubernetes migrations at Pearson Education — I build systems that scale, observe, and heal themselves.
            </p>
            <Link href="/about" className="btn-outline">Learn More About Me →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '☁️', title: 'Cloud Architecture', desc: 'Azure & AWS multi-region infrastructure design and cost optimization' },
              { icon: '⚙️', title: 'CI/CD Automation', desc: 'End-to-end pipelines with Jenkins, GitHub Actions, and Azure DevOps' },
              { icon: '🐳', title: 'Containerization', desc: 'Docker & Kubernetes deployments with AKS/EKS orchestration' },
              { icon: '🔐', title: 'DevSecOps', desc: 'SAST/DAST integration, IAM policies, secrets management' },
            ].map(s => (
              <div key={s.title} className="card">
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{s.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <div style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0,212,184,0.05) 100%)', border: '1px solid var(--teal)', padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 8 }}>Open to Opportunities</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem' }}>Let's Build Something <span style={{ color: 'var(--teal)' }}>Great Together</span></h2>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link href="/contact" className="btn-primary">Contact Me</Link>
              <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-outline">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
