import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaAws, FaDocker, FaPython, FaGitAlt } from "react-icons/fa"
import { SiKubernetes, SiTerraform, SiJenkins, SiAnsible, SiGrafana, SiPrometheus, SiHelm, SiArgocd, SiVault, SiDatadog, SiGithubactions, SiAzuredevops, SiMicrosoftazure } from "react-icons/si"
import { BsCloudFill, BsGearFill, BsShieldLockFill, BsGraphUp, BsTerminalFill } from "react-icons/bs"
import { MdSecurity, MdArchitecture } from "react-icons/md"
import { FiTarget, FiUsers, FiRefreshCw, FiTrendingDown } from "react-icons/fi"

const categories = [
  { title: "Cloud Platforms", Icon: BsCloudFill, color: "#00d4b8", skills: [
    { name: "Microsoft Azure", level: 92 }, { name: "Amazon Web Services", level: 88 },
    { name: "Azure Kubernetes Service", level: 90 }, { name: "Amazon EKS", level: 85 },
    { name: "Azure DevOps", level: 92 }, { name: "AWS Lambda / Serverless", level: 78 },
  ]},
  { title: "Containers & Orchestration", Icon: FaDocker, color: "#2496ed", skills: [
    { name: "Kubernetes", level: 90 }, { name: "Docker", level: 95 },
    { name: "Helm Charts", level: 85 }, { name: "ArgoCD", level: 80 },
    { name: "Istio Service Mesh", level: 72 }, { name: "Docker Compose", level: 92 },
  ]},
  { title: "Infrastructure as Code", Icon: SiTerraform, color: "#7b42bc", skills: [
    { name: "Terraform", level: 92 }, { name: "Ansible", level: 88 },
    { name: "Azure Bicep / ARM", level: 82 }, { name: "Pulumi", level: 68 },
    { name: "AWS CloudFormation", level: 78 }, { name: "Chef", level: 72 },
  ]},
  { title: "CI/CD & Automation", Icon: BsGearFill, color: "#f59e0b", skills: [
    { name: "Jenkins", level: 90 }, { name: "GitHub Actions", level: 88 },
    { name: "Azure Pipelines", level: 90 }, { name: "GitLab CI", level: 80 },
    { name: "ArgoCD / GitOps", level: 78 }, { name: "Bitbucket Pipelines", level: 82 },
  ]},
  { title: "Monitoring & Observability", Icon: BsGraphUp, color: "#e11d48", skills: [
    { name: "Datadog", level: 88 }, { name: "Grafana", level: 85 },
    { name: "Prometheus", level: 82 }, { name: "Azure Monitor", level: 86 },
    { name: "ELK Stack", level: 78 }, { name: "PagerDuty", level: 80 },
  ]},
  { title: "Languages & Scripting", Icon: BsTerminalFill, color: "#22c55e", skills: [
    { name: "Bash / Shell", level: 92 }, { name: "Python", level: 82 },
    { name: "SQL", level: 88 }, { name: "YAML / JSON", level: 95 },
    { name: "PowerShell", level: 80 }, { name: "HCL (Terraform)", level: 90 },
  ]},
]

const softSkills = [
  { Icon: FiTarget, title: "Problem-First Thinking", desc: "Root cause analysis before jumping to solutions." },
  { Icon: FiUsers, title: "Cross-Functional Collaboration", desc: "Bridging Dev, Ops, Security, and Business teams." },
  { Icon: MdArchitecture, title: "Architecture Mindset", desc: "Designing for scale, resilience, and maintainability." },
  { Icon: FiUsers, title: "Mentorship", desc: "Growing junior engineers through knowledge sharing." },
  { Icon: FiRefreshCw, title: "Agile / SAFe", desc: "Certified SAFe Scrum Master — iterative delivery." },
  { Icon: FiTrendingDown, title: "Cost Optimization", desc: "Cloud FinOps — reducing waste and rightsizing." },
]

const tools = ["Docker","Kubernetes","Terraform","AWS","Azure","Jenkins","GitHub Actions","Ansible","Datadog","Grafana","Prometheus","Helm","ArgoCD","Python","Bash","Vault","NGINX","PostgreSQL","MongoDB","Redis"]

export default function Skills() {
  return (
    <>
      <Head><title>Skills | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: "140px 0 60px", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,184,0.1) 0%, transparent 70%)", top: -100, left: "30%" }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">Tech Stack</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 16 }}>
            Skills &<br /><span style={{ color: "var(--teal)" }}>Technologies</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: "var(--text-dim)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", maxWidth: 580, lineHeight: 1.8 }}>
            11+ years of hands-on experience across the full DevOps toolchain.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 60px" }}>
        <div className="container-custom">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {tools.map(t => <span key={t} className="tag" style={{ fontSize: "0.78rem", padding: "8px 16px" }}>{t}</span>)}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {categories.map(cat => (
              <div key={cat.title} className="card" style={{ padding: "clamp(20px, 4vw, 32px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 44, height: 44, background: `${cat.color}18`, border: `1px solid ${cat.color}40`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <cat.Icon size={22} color={cat.color} />
                  </div>
                  <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>{cat.title}</h2>
                </div>
                <div style={{ display: "grid", gap: 18 }}>
                  {cat.skills.map(skill => (
                    <div key={skill.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontSize: "0.88rem", color: "var(--text-dim)" }}>{skill.name}</span>
                        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: "var(--teal)" }}>{skill.level}%</span>
                      </div>
                      <div style={{ height: 5, background: "var(--surface2)", borderRadius: 0, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${skill.level}%`, background: "linear-gradient(90deg, var(--teal), var(--teal-dim))" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0" }}>
        <div className="container-custom">
          <div className="section-label">Soft Skills</div>
          <h2 className="section-title" style={{ marginBottom: 36 }}>Beyond the <span style={{ color: "var(--teal)" }}>Terminal</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {softSkills.map(s => (
              <div key={s.title} className="card" style={{ padding: "24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, background: "rgba(0,212,184,0.1)", border: "1px solid rgba(0,212,184,0.3)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <s.Icon size={18} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem", marginBottom: 6 }}>{s.title}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px" }}>
        <div className="container-custom">
          <div className="section-label">Credentials</div>
          <h2 className="section-title" style={{ marginBottom: 36 }}>Certifications</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { name: "SAFe 5 Scrum Master", org: "Scaled Agile, Inc." },
              { name: "Scrum Fundamentals Certified", org: "SCRUMstudy" },
              { name: "Google Tag Manager", org: "Google" },
            ].map(c => (
              <div key={c.name} className="card" style={{ padding: "20px 24px", display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, background: "rgba(0,212,184,0.1)", border: "1px solid rgba(0,212,184,0.3)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MdSecurity size={20} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem", marginBottom: 4 }}>{c.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontFamily: "JetBrains Mono, monospace" }}>{c.org}</div>
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