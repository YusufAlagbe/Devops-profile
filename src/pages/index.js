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
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ width: '100%' }}>
          <div className="section-label">Available for opportunities</div>
          <h1 className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', marginBottom: 8 }}>
            Yusuf<br /><span style={{ color: 'var(--teal)' }}>Alagbe</span>
          </h1>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(0.75rem, 2vw, 1rem)', color: 'var(--text-dim)', marginBottom: 24 }}>
            <span style={{ color: 'var(--teal)' }}>$ </span>{titles[idx]}
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8, marginBottom: 36, maxWidth: 580 }}>
            11+ years designing and operating cloud-native infrastructure at scale. Specializing in Kubernetes, Terraform, and CI/CD automation across Azure and AWS.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            <Link href="/projects" className="btn-primary">View My Work →</Link>
            <Link href="/contact" className="btn-outline">Get In Touch</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 40, borderTop: '1px solid var(--border)', maxWidth: 480 }}>
            {[['11+', 'Years Experience'], ['25%', 'Cost Reduction'], ['70%', 'Faster Provisioning']].map(([num, label]) => (
              <div key={num}>
                <div className="stat-num" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>{num}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: 4, fontFamily: 'JetBrains Mono, monospace' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'marquee 25s linear infinite', width: 'max-content' }}>
          {[...tools, ...tools].map((t, i) => (
            <span key={i} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text-muted)', padding: '0 24px', borderRight: '1px solid var(--border)', whiteSpace: 'nowrap', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t}</span>
          ))}
        </div>
      </div>

      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <div className="section-label">Who I Am</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>Building Infra That <span style={{ color: 'var(--teal)' }}>Never Sleeps</span></h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: 20, lineHeight: 1.8, maxWidth: 720 }}>
            Based in Plano, TX, I am a Senior DevOps Engineer who bridges the gap between development velocity and operational reliability. My work spans cloud architecture, container orchestration, and automation systems.
          </p>
          <p style={{ color: 'var(--text-dim)', marginBottom: 32, lineHeight: 1.8, maxWidth: 720 }}>
            From cutting infrastructure costs by 25% at Andrews Distributing to leading Kubernetes migrations at Pearson Education - I build systems that scale, observe, and heal themselves.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
            {['Cloud Architecture', 'CI/CD Automation', 'Containerization', 'DevSecOps'].map(t => (
              <span key={t} className="tag" style={{ fontSize: '0.88rem', padding: '10px 18px' }}>{t}</span>
            ))}
          </div>
          <Link href="/about" className="btn-outline">Learn More</Link>
        </div>
      </section>

      <section style={{ padding: '60px 0' }}>
        <div className="container-custom">
          <div style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0,212,184,0.05) 100%)', border: '1px solid var(--teal)', padding: 'clamp(32px, 5vw, 60px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 8 }}>Open to Opportunities</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem, 4vw, 2rem)' }}>
                Let us Build Something <span style={{ color: 'var(--teal)' }}>Great Together</span>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
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

