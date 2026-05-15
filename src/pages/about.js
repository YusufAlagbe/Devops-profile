import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const experience = [
  { role: 'Senior DevOps Engineer', company: 'Andrews Distributing', period: 'Feb 2023 – Present', location: 'Dallas, TX', highlights: ['Architected highly available cloud infra across Azure and AWS', 'Led cloud migration to AKS — 25% cost reduction', 'Reduced provisioning time by 70% via Terraform/Ansible', 'Implemented Datadog + Grafana — 45% MTTR reduction', 'Built CI/CD pipelines with Azure DevOps and Jenkins'] },
  { role: 'DevOps Consultant', company: 'Pearson Education', period: 'Jul 2020 – Jun 2023', location: 'Chandler, AZ', highlights: ['Modernized legacy deployments with Docker + Kubernetes', 'Built CI/CD pipelines via Bitbucket, Jenkins, and Ansible', 'Managed hybrid AWS infra: EC2, S3, RDS, Route53', 'Drove shift from quarterly to weekly releases'] },
  { role: 'Data Engineer', company: 'Wells Fargo', period: 'Jan 2015 – Jul 2022', location: 'Phoenix, AZ', highlights: ['Designed enterprise data warehouse for BI and analytics', 'Built ETL pipelines using SSIS and SQL Server', 'Implemented star/snowflake schema data modeling', 'Ensured data quality, governance, and compliance'] },
]

export default function About() {
  return (
    <>
      <Head><title>About | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: '140px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,184,0.1) 0%, transparent 70%)', top: 0, right: 0 }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">About Me</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 24 }}>The Engineer<br /><span style={{ color: 'var(--teal)' }}>Behind the Infra</span></h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: 680, lineHeight: 1.8 }}>
            11+ years of turning complex infrastructure challenges into elegant, automated solutions.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 56, alignItems: 'start' }} className="about-grid">
            {/* Photo + info */}
            <div>
              <div style={{ position: 'relative', width: '100%', maxWidth: 340, height: 400, marginBottom: 24 }}>
                <div style={{ position: 'absolute', top: -8, right: -8, width: '100%', height: '100%', border: '2px solid var(--teal)', opacity: 0.25 }} />
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <Image src="/yusuf.jpg" alt="Yusuf Alagbe" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
              </div>
              <div className="card" style={{ padding: 20 }}>
                {[['📍 Location', 'Plano, TX'], ['📧 Email', 'Alagbeyusuf21@gmail.com'], ['📱 Phone', '+1 (602) 829-0385'], ['🎓 Education', 'MS Data Analytics, SNHU']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--border)', gap: 8 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', paddingTop: 2, flexShrink: 0 }}>{k}</span>
                    <span style={{ fontSize: '0.82rem', textAlign: 'right', wordBreak: 'break-word' }}>{v}</span>
                  </div>
                ))}
                <div style={{ paddingTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="https://www.linkedin.com/in/yusuf-alagbe-olatunji" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.72rem', padding: '10px 8px' }}>LinkedIn</a>
                  <a href="https://github.com/YusufAlagbe" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.72rem', padding: '10px 8px' }}>GitHub</a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: 20 }}>My Journey</h2>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 16, fontSize: 'clamp(0.875rem, 2vw, 0.95rem)' }}>
                I started my career as a Data Engineer at Wells Fargo, developing deep expertise in data infrastructure and ETL automation. That foundation proved invaluable as I transitioned into DevOps — seeing both data and platform layers gave me a unique perspective.
              </p>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 32, fontSize: 'clamp(0.875rem, 2vw, 0.95rem)' }}>
                Today at Andrews Distributing, I architect enterprise-grade cloud infrastructure across Azure and AWS, driving cloud-native adoption and enforcing DevSecOps practices.
              </p>

              {/* Education */}
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 16, color: 'var(--teal)' }}>Education</h3>
              <div style={{ display: 'grid', gap: 12, marginBottom: 32 }}>
                {[{ degree: 'MS in Data Analytics', school: 'Southern New Hampshire University', year: '2024' }, { degree: 'BS in IT Management', school: 'Western International University', year: '2018' }].map(e => (
                  <div key={e.degree} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>{e.degree}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: 2 }}>{e.school}</div>
                    </div>
                    <span className="tag">{e.year}</span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 16, color: 'var(--teal)' }}>Certifications</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['SAFe® 5 Scrum Master', 'Scrum Fundamentals Certified', 'Google Tag Manager'].map(c => (
                  <span key={c} className="tag" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>✓ {c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: '60px 0 80px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div className="section-label">Career</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Work <span style={{ color: 'var(--teal)' }}>Experience</span></h2>
          <div style={{ display: 'grid', gap: 32 }}>
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="card" style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: 4 }}>{exp.role}</h3>
                      <div style={{ color: 'var(--teal)', fontWeight: 600, marginBottom: 4, fontSize: '0.9rem' }}>{exp.company}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace' }}>{exp.location}</div>
                    </div>
                    <span className="tag" style={{ fontSize: '0.72rem', padding: '5px 12px', whiteSpace: 'nowrap' }}>{exp.period}</span>
                  </div>
                  <ul style={{ display: 'grid', gap: 8 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, color: 'var(--text-dim)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', lineHeight: 1.6, listStyle: 'none' }}>
                        <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>▸</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.4rem, 4vw, 2rem)', marginBottom: 16 }}>Want the Full Picture?</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: 32 }}>Download my resume for complete details.</p>
          <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>Download Resume PDF ↓</a>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 900px) {
          div[style*='grid-template-columns: 340px'] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
