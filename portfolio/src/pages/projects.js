import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: '5-App CI/CD Pipeline on AWS EC2',
    subtitle: 'Docker · Jenkins · Terraform · Nginx',
    description: 'Built an end-to-end CI/CD pipeline deploying 5 containerized web applications (Node.js, Python, Java, Go, PHP) to AWS EC2. Includes Docker Hub image registry, Nginx reverse proxy routing, automated builds triggered by GitHub commits, and health checks.',
    highlights: [
      'Jenkins 9-stage pipeline (clone → build → push → deploy)',
      'All 5 Docker images pushed to Docker Hub',
      'Nginx reverse proxy routing /node, /python, /java, /go, /php',
      'EC2 infrastructure provisioned with Terraform',
      'Fully automated: zero manual steps after git push',
    ],
    tags: ['Docker', 'Jenkins', 'Terraform', 'AWS EC2', 'Nginx', 'CI/CD'],
    github: 'https://github.com/YusufAlagbe/devops-project',
    status: 'Live',
    color: '#00d4b8',
    icon: '🚀',
  },
  {
    title: 'Kubernetes Migration — AKS',
    subtitle: 'Azure · AKS · Terraform · Helm',
    description: 'Led enterprise migration to Azure Kubernetes Service at Andrews Distributing, cutting infrastructure costs by 25%. Designed multi-zone cluster architecture, implemented RBAC and network policies, and automated deployment via Helm charts with GitOps workflows.',
    highlights: [
      '25% infrastructure cost reduction',
      'Multi-zone AKS cluster with auto-scaling',
      'Helm charts for all application deployments',
      'Azure AD integration + RBAC policies',
      'Zero-downtime blue-green deployments',
    ],
    tags: ['AKS', 'Azure', 'Helm', 'Terraform', 'RBAC', 'GitOps'],
    status: 'Production',
    color: '#3b82f6',
    icon: '☸️',
  },
  {
    title: 'Infrastructure Automation Platform',
    subtitle: 'Terraform · Ansible · Python · Bash',
    description: 'Designed and implemented organization-wide IaC standards at Andrews Distributing, reducing provisioning time by 70%. Created reusable Terraform modules for multi-environment deployments and Ansible playbooks for configuration management.',
    highlights: [
      '70% reduction in provisioning time',
      'Reusable Terraform module library',
      'Ansible playbooks for config management',
      'Eliminated manual configuration drift',
      'Multi-env: dev, staging, prod parity',
    ],
    tags: ['Terraform', 'Ansible', 'Python', 'Bash', 'IaC'],
    status: 'Production',
    color: '#8b5cf6',
    icon: '🏗️',
  },
  {
    title: 'Observability & Monitoring Stack',
    subtitle: 'Datadog · Grafana · Prometheus · ELK',
    description: 'Implemented comprehensive monitoring, alerting, and logging platform across cloud infrastructure. Custom dashboards, SLA/SLO tracking, and automated incident response reduced MTTR by 45%.',
    highlights: [
      '45% reduction in Mean Time to Resolution',
      'Datadog APM + infrastructure monitoring',
      'Grafana dashboards for all services',
      'PagerDuty alert routing integration',
      'SLA/SLO tracking and reporting',
    ],
    tags: ['Datadog', 'Grafana', 'Prometheus', 'ELK', 'PagerDuty'],
    status: 'Production',
    color: '#f59e0b',
    icon: '📊',
  },
  {
    title: 'DevSecOps Pipeline Integration',
    subtitle: 'SAST · DAST · Container Scanning · IAM',
    description: 'Embedded security scanning directly into CI/CD pipelines at Andrews Distributing. Automated vulnerability scanning, container image analysis, and secrets detection running on every pull request.',
    highlights: [
      'SAST/DAST scanning in every PR build',
      'Trivy container image scanning',
      'Secrets detection with GitGuardian',
      'IAM policy enforcement with OPA',
      'Compliance audit reporting automated',
    ],
    tags: ['DevSecOps', 'SAST', 'DAST', 'IAM', 'OPA', 'Trivy'],
    status: 'Production',
    color: '#ef4444',
    icon: '🔐',
  },
  {
    title: 'Enterprise Data Warehouse',
    subtitle: 'SQL Server · SSIS · ETL · Data Modeling',
    description: 'Designed enterprise-scale data warehouse at Wells Fargo supporting BI, reporting, and analytics across multiple business units. Built ETL pipelines, star/snowflake schema models, and automated data quality validation.',
    highlights: [
      'Multi-TB data warehouse design',
      'SSIS ETL pipelines for 10+ source systems',
      'Star/snowflake schema modeling',
      'SQL Server Agent automation',
      'Data governance and lineage tracking',
    ],
    tags: ['SQL Server', 'SSIS', 'ETL', 'Data Warehousing', 'BI'],
    status: 'Delivered',
    color: '#06b6d4',
    icon: '🗄️',
  },
]

const statusColors = { Live: '#22c55e', Production: '#3b82f6', Delivered: '#6366f1' }

export default function Projects() {
  return (
    <>
      <Head><title>Projects | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: '140px 0 80px', position: 'relative' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,212,184,0.07) 0%, transparent 70%)', top: 0, right: 0 }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">Portfolio</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 16 }}>
            Featured<span style={{ color: 'var(--teal)' }}> Projects</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--text-dim)', maxWidth: 580, lineHeight: 1.8, marginBottom: 80 }}>
            A selection of DevOps engineering work spanning cloud migrations, automation platforms, CI/CD pipelines, and infrastructure design.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 28 }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div className="project-card-header" style={{ background: `linear-gradient(135deg, var(--surface2) 0%, ${p.color}15 100%)` }}>
                  <div style={{ fontSize: '4rem', opacity: 0.9 }}>{p.icon}</div>
                  {/* Status badge */}
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    background: `${statusColors[p.status]}20`,
                    border: `1px solid ${statusColors[p.status]}50`,
                    color: statusColors[p.status],
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem', padding: '4px 10px', letterSpacing: '0.1em',
                  }}>● {p.status}</div>
                  {/* Number */}
                  <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '4rem', opacity: 0.04, color: p.color, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: p.color, marginBottom: 8, opacity: 0.8 }}>{p.subtitle}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>

                  <ul style={{ marginBottom: 24, display: 'grid', gap: 6 }}>
                    {p.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 8, color: 'var(--text-dim)', fontSize: '0.82rem', listStyle: 'none' }}>
                        <span style={{ color: p.color, flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.tags.map(t => (
                      <span key={t} className="tag" style={{ borderColor: `${p.color}30`, color: p.color }}>{t}</span>
                    ))}
                  </div>

                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: 'auto', justifyContent: 'center', borderColor: p.color, color: p.color }}>
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, textAlign: 'center' }}>
            {[
              ['11+', 'Years Experience'],
              ['3', 'Enterprise Companies'],
              ['25%', 'Cost Reduction'],
              ['70%', 'Faster Provisioning'],
              ['45%', 'MTTR Improvement'],
              ['6', 'Featured Projects'],
            ].map(([num, label]) => (
              <div key={num}>
                <div className="stat-num" style={{ fontSize: '2.5rem' }}>{num}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: 4, fontFamily: 'JetBrains Mono, monospace' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
