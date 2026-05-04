import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const experience = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Andrews Distributing',
    period: 'Feb 2023 – Present',
    location: 'Dallas, TX',
    highlights: [
      'Architected highly available cloud infra across Azure and AWS',
      'Led cloud migration to AKS — 25% cost reduction',
      'Reduced environment provisioning time by 70% via Terraform/Ansible',
      'Implemented Datadog + Grafana observability — 45% MTTR reduction',
      'Built CI/CD pipelines with Azure DevOps and Jenkins',
      'Enforced DevSecOps: SAST/DAST, container scanning, RBAC',
    ],
  },
  {
    role: 'DevOps Consultant',
    company: 'Pearson Education',
    period: 'Jul 2020 – Jun 2023',
    location: 'Chandler, AZ',
    highlights: [
      'Modernized legacy deployments with Docker + Kubernetes',
      'Built CI/CD pipelines via Bitbucket, Jenkins, and Ansible',
      'Managed hybrid AWS infra: EC2, S3, RDS, Route53',
      'Implemented PRTG, Grafana, Nagios monitoring',
      'Drove shift from quarterly to weekly releases',
      'Mentored junior engineers on DevOps best practices',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'Wells Fargo',
    period: 'Jan 2015 – Jul 2022',
    location: 'Phoenix, AZ',
    highlights: [
      'Designed enterprise data warehouse solutions for BI and analytics',
      'Built ETL pipelines using SSIS and SQL Server',
      'Implemented star/snowflake schema data modeling',
      'Automated workflows using SQL Server Agent',
      'Ensured data quality, governance, and compliance',
    ],
  },
]

export default function About() {
  return (
    <>
      <Head><title>About | Yusuf Alagbe</title></Head>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,184,0.1) 0%, transparent 70%)', top: 0, right: 0 }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">About Me</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 24 }}>
            The Engineer<br /><span style={{ color: 'var(--teal)' }}>Behind the Infra</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: 680, lineHeight: 1.8 }}>
            11+ years of turning complex infrastructure challenges into elegant, automated solutions — from financial data pipelines at Wells Fargo to cloud-native Kubernetes platforms at scale.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Photo card */}
          <div>
            <div style={{ position: 'relative', width: '100%', height: 440, marginBottom: 24 }}>
              <div style={{ position: 'absolute', top: -8, right: -8, width: '100%', height: '100%', border: '2px solid var(--teal)', opacity: 0.25 }} />
              <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                <Image src="/yusuf.jpg" alt="Yusuf Alagbe" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            </div>
            {/* Info card */}
            <div className="card" style={{ padding: 24 }}>
              {[
                ['📍 Location', 'Plano, TX'],
                ['📧 Email', 'Alagbeyusuf21@gmail.com'],
                ['📱 Phone', '+1 (602) 829-0385'],
                ['🎓 Education', 'MS Data Analytics, SNHU'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text-muted)', paddingTop: 2 }}>{k}</span>
                  <span style={{ fontSize: '0.85rem', textAlign: 'right', maxWidth: '55%', wordBreak: 'break-word' }}>{v}</span>
                </div>
              ))}
              <div style={{ paddingTop: 20, display: 'flex', gap: 12 }}>
                <a href="https://www.linkedin.com/in/yusuf-alagbe-olatunji" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '10px 0' }}>LinkedIn</a>
                <a href="https://github.com/YusufAlagbe" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '10px 0' }}>GitHub</a>
              </div>
            </div>
          </div>

          {/* Bio + Timeline */}
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', marginBottom: 20 }}>My Journey</h2>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 16 }}>
              I started my career as a Data Engineer at Wells Fargo, where I developed a deep understanding of data infrastructure, SQL systems, and ETL automation. That foundation proved invaluable as I transitioned into DevOps — seeing both the data and the platform layers gave me a unique perspective.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 16 }}>
              At Pearson Education, I embraced modern DevOps practices — leading Docker containerization initiatives, building CI/CD pipelines, and managing hybrid AWS infrastructure for one of the world's largest education technology companies.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 36 }}>
              Today at Andrews Distributing, I architect enterprise-grade cloud infrastructure across Azure and AWS, driving cloud-native adoption, enforcing DevSecOps practices, and mentoring the next generation of engineers.
            </p>

            {/* Education */}
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20, color: 'var(--teal)' }}>Education</h3>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { degree: 'MS in Data Analytics', school: 'Southern New Hampshire University', year: '2024' },
                  { degree: 'BS in IT Management', school: 'Western International University', year: '2018' },
                ].map(e => (
                  <div key={e.degree} className="card" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>{e.degree}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: 4 }}>{e.school}</div>
                    </div>
                    <span className="tag">{e.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20, color: 'var(--teal)' }}>Certifications</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {['SAFe® 5 Scrum Master (SSM)', 'Scrum Fundamentals Certified', 'Google Tag Manager Fundamentals'].map(c => (
                  <span key={c} className="tag" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>✓ {c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div className="section-label">Career</div>
          <h2 className="section-title" style={{ marginBottom: 60 }}>Work <span style={{ color: 'var(--teal)' }}>Experience</span></h2>
          <div style={{ display: 'grid', gap: 40 }}>
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="card" style={{ padding: 32 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                    <div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', marginBottom: 4 }}>{exp.role}</h3>
                      <div style={{ color: 'var(--teal)', fontWeight: 600, marginBottom: 4 }}>{exp.company}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'JetBrains Mono, monospace' }}>{exp.location}</div>
                    </div>
                    <span className="tag" style={{ fontSize: '0.8rem', padding: '6px 14px', whiteSpace: 'nowrap' }}>{exp.period}</span>
                  </div>
                  <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 8 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, color: 'var(--text-dim)', fontSize: '0.88rem', lineHeight: 1.6, listStyle: 'none' }}>
                        <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', marginBottom: 16 }}>Want the Full Picture?</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: 32 }}>Download my resume for the complete details of my experience and accomplishments.</p>
          <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
            Download Resume PDF ↓
          </a>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media (max-width: 900px) {
          div[style*='grid-template-columns: 380px'] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
