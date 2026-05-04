import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const skillGroups = [
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    skills: [
      { name: 'Microsoft Azure (AKS, DevOps, Monitor)', level: 95 },
      { name: 'Amazon Web Services (EKS, EC2, S3, RDS)', level: 90 },
      { name: 'Multi-Cloud Architecture', level: 85 },
    ],
  },
  {
    category: 'Container & Orchestration',
    icon: '🐳',
    skills: [
      { name: 'Docker', level: 98 },
      { name: 'Kubernetes (AKS / EKS)', level: 92 },
      { name: 'Helm Charts', level: 85 },
      { name: 'ArgoCD / GitOps', level: 80 },
    ],
  },
  {
    category: 'Infrastructure as Code',
    icon: '🏗️',
    skills: [
      { name: 'Terraform', level: 93 },
      { name: 'Ansible', level: 88 },
      { name: 'ARM Templates', level: 82 },
    ],
  },
  {
    category: 'CI/CD & DevOps',
    icon: '⚙️',
    skills: [
      { name: 'Azure DevOps', level: 94 },
      { name: 'Jenkins', level: 90 },
      { name: 'GitHub Actions', level: 88 },
      { name: 'GitLab CI / Bitbucket Pipelines', level: 82 },
    ],
  },
  {
    category: 'Monitoring & Observability',
    icon: '📊',
    skills: [
      { name: 'Datadog', level: 90 },
      { name: 'Grafana + Prometheus', level: 88 },
      { name: 'ELK Stack', level: 82 },
      { name: 'AWS CloudWatch / Azure Monitor', level: 85 },
    ],
  },
  {
    category: 'Programming & Scripting',
    icon: '💻',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Bash / Shell Scripting', level: 90 },
      { name: 'PowerShell', level: 78 },
      { name: 'SQL', level: 88 },
    ],
  },
]

const allTech = [
  { name: 'Docker', cat: 'Container' },
  { name: 'Kubernetes', cat: 'Orchestration' },
  { name: 'Terraform', cat: 'IaC' },
  { name: 'AWS', cat: 'Cloud' },
  { name: 'Azure', cat: 'Cloud' },
  { name: 'Jenkins', cat: 'CI/CD' },
  { name: 'GitHub Actions', cat: 'CI/CD' },
  { name: 'Ansible', cat: 'Config Mgmt' },
  { name: 'Datadog', cat: 'Monitoring' },
  { name: 'Grafana', cat: 'Monitoring' },
  { name: 'Prometheus', cat: 'Monitoring' },
  { name: 'Python', cat: 'Scripting' },
  { name: 'Bash', cat: 'Scripting' },
  { name: 'Helm', cat: 'Kubernetes' },
  { name: 'EKS', cat: 'Cloud' },
  { name: 'AKS', cat: 'Cloud' },
  { name: 'GitLab CI', cat: 'CI/CD' },
  { name: 'Azure DevOps', cat: 'CI/CD' },
  { name: 'ELK Stack', cat: 'Monitoring' },
  { name: 'Vault', cat: 'Security' },
  { name: 'ArgoCD', cat: 'GitOps' },
  { name: 'New Relic', cat: 'Monitoring' },
  { name: 'Nagios', cat: 'Monitoring' },
  { name: 'PowerShell', cat: 'Scripting' },
  { name: 'Route 53', cat: 'Networking' },
  { name: 'IAM', cat: 'Security' },
  { name: 'RBAC', cat: 'Security' },
  { name: 'SSIS', cat: 'Data' },
]

export default function Skills() {
  return (
    <>
      <Head><title>Skills | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: '140px 0 80px', position: 'relative' }}>
        <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,184,0.08) 0%, transparent 70%)', top: 0, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">Expertise</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 16 }}>
            Skills &<span style={{ color: 'var(--teal)' }}> Technologies</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.8, marginBottom: 80 }}>
            11+ years of hands-on experience across the full DevOps and cloud engineering stack.
          </p>

          {/* Skill bars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {skillGroups.map(group => (
              <div key={group.category} className="card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <span style={{ fontSize: '1.5rem' }}>{group.icon}</span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem' }}>{group.category}</h3>
                </div>
                <div style={{ display: 'grid', gap: 20 }}>
                  {group.skills.map(skill => (
                    <div key={skill.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{skill.name}</span>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--teal)' }}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All tools grid */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div className="section-label">Full Stack</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Complete <span style={{ color: 'var(--teal)' }}>Toolkit</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {allTech.map(t => (
              <div key={t.name} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 2, transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.background = 'rgba(0,212,184,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}
              >
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--teal)', opacity: 0.7 }}>{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft skills */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          <div className="section-label">Beyond the Tools</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Professional <span style={{ color: 'var(--teal)' }}>Strengths</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🎯', title: 'Problem-First Thinking', desc: 'I start with the business problem, then choose the right tool — not the other way around.' },
              { icon: '🤝', title: 'Cross-Functional Collaboration', desc: 'Comfortable bridging Dev, Ops, Security, and Business stakeholders.' },
              { icon: '📐', title: 'Architecture Mindset', desc: 'Designing for resilience, scalability, and observability from day one.' },
              { icon: '🧑‍🏫', title: 'Mentorship', desc: 'Proven record of growing junior engineers into confident practitioners.' },
              { icon: '🔄', title: 'Agile / SAFe', desc: 'Certified SAFe Scrum Master with hands-on Agile delivery experience.' },
              { icon: '📉', title: 'Cost Optimization', desc: 'Track record of meaningful cloud spend reductions through engineering, not just purchasing.' },
            ].map(s => (
              <div key={s.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
