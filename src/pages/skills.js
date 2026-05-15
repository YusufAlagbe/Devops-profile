import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = [
  { title: 'Cloud Platforms', icon: '☁️', skills: [
    { name: 'Microsoft Azure', level: 92 }, { name: 'Amazon Web Services', level: 88 },
    { name: 'Azure Kubernetes Service', level: 90 }, { name: 'Amazon EKS', level: 85 },
    { name: 'Azure DevOps', level: 92 }, { name: 'AWS Lambda / Serverless', level: 78 },
  ]},
  { title: 'Containers & Orchestration', icon: '🐳', skills: [
    { name: 'Kubernetes', level: 90 }, { name: 'Docker', level: 95 },
    { name: 'Helm Charts', level: 85 }, { name: 'ArgoCD', level: 80 },
    { name: 'Istio Service Mesh', level: 72 }, { name: 'Docker Compose', level: 92 },
  ]},
  { title: 'Infrastructure as Code', icon: '⚙️', skills: [
    { name: 'Terraform', level: 92 }, { name: 'Ansible', level: 88 },
    { name: 'Azure Bicep / ARM', level: 82 }, { name: 'Pulumi', level: 68 },
    { name: 'AWS CloudFormation', level: 78 }, { name: 'Chef', level: 72 },
  ]},
  { title: 'CI/CD & Automation', icon: '🚀', skills: [
    { name: 'Jenkins', level: 90 }, { name: 'GitHub Actions', level: 88 },
    { name: 'Azure Pipelines', level: 90 }, { name: 'GitLab CI', level: 80 },
    { name: 'ArgoCD / GitOps', level: 78 }, { name: 'Bitbucket Pipelines', level: 82 },
  ]},
  { title: 'Monitoring & Observability', icon: '📊', skills: [
    { name: 'Datadog', level: 88 }, { name: 'Grafana', level: 85 },
    { name: 'Prometheus', level: 82 }, { name: 'Azure Monitor', level: 86 },
    { name: 'ELK Stack', level: 78 }, { name: 'PagerDuty', level: 80 },
  ]},
  { title: 'Languages & Scripting', icon: '💻', skills: [
    { name: 'Bash / Shell', level: 92 }, { name: 'Python', level: 82 },
    { name: 'SQL', level: 88 }, { name: 'YAML / JSON', level: 95 },
    { name: 'PowerShell', level: 80 }, { name: 'HCL (Terraform)', level: 90 },
  ]},
]

const tools = ['Docker','Kubernetes','Terraform','Ansible','Jenkins','GitHub Actions','Azure','AWS','Datadog','Grafana','Prometheus','Helm','ArgoCD','Python','Bash','Vault','NGINX','PostgreSQL','MongoDB','Redis']

export default function Skills() {
  return (
    <>
      <Head><title>Skills | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: '140px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,212,184,0.1) 0%, transparent 70%)', top: -100, left: '30%' }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">Tech Stack</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 16 }}>
            Skills &<br /><span style={{ color: 'var(--teal)' }}>Technologies</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: 580, lineHeight: 1.8 }}>
            11+ years of hands-on experience across the full DevOps toolchain — from infrastructure provisioning to observability.
          </p>
        </div>
      </section>

      {/* Tools pills */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {tools.map(t => (
              <span key={t} className="tag" style={{ fontSize: '0.78rem', padding: '8px 16px' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Skill categories */}
      <section style={{ padding: '40px 0 80px', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }} className="skills-grid">
            {categories.map(cat => (
              <div key={cat.title} className="card" style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 42, height: 42, background: 'var(--teal-glow)', border: '1px solid rgba(0,212,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{cat.icon}</div>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>{cat.title}</h2>
                </div>
                <div style={{ display: 'grid', gap: 18 }}>
                  {cat.skills.map(skill => (
                    <div key={skill.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: 'clamp(0.78rem, 2vw, 0.88rem)', color: 'var(--text-dim)' }}>{skill.name}</span>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--teal)' }}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg" style={{ height: 5, background: 'var(--surface2)', borderRadius: 0, overflow: 'hidden' }}>
                        <div className="skill-bar-fill" style={{ height: '100%', width: `${skill.level}%`, background: `linear-gradient(90deg, var(--teal), var(--teal-dim))`, transition: 'width 1s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '60px 0' }}>
        <div className="container-custom">
          <div className="section-label">Credentials</div>
          <h2 className="section-title" style={{ marginBottom: 36 }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { name: 'SAFe® 5 Scrum Master', org: 'Scaled Agile, Inc.', icon: '🏅' },
              { name: 'Scrum Fundamentals Certified', org: 'SCRUMstudy', icon: '🏅' },
              { name: 'Google Tag Manager', org: 'Google', icon: '🏅' },
            ].map(c => (
              <div key={c.name} className="card" style={{ padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{c.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace' }}>{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
