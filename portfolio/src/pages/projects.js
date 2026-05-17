import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import { FaDocker, FaAws, FaGithub } from "react-icons/fa"
import { SiKubernetes, SiTerraform, SiJenkins, SiGrafana, SiDatadog, SiVercel, SiSupabase, SiNextdotjs, SiGithubactions } from "react-icons/si"
import { BsCloudFill, BsGearFill, BsShieldLockFill, BsGraphUp } from "react-icons/bs"

const projects = [
  {
    title: "Multi-App CI/CD Pipeline",
    subtitle: "Jenkins + Docker + Terraform + AWS EC2",
    desc: "End-to-end DevOps pipeline deploying 5 web applications to AWS EC2 via Docker containers. Features multi-stage Jenkins pipeline with automated build, push, and deploy stages.",
    tags: ["Jenkins", "Docker", "Terraform", "AWS EC2", "GitHub"],
    highlights: ["5 apps containerized & deployed", "Terraform-provisioned EC2 infra", "Docker Hub image registry", "SSH-based remote deployment"],
    Icon: BsGearFill, color: "#f59e0b", status: "Live",
    github: "https://github.com/YusufAlagbe",
  },
  {
    title: "Egushi, Otta Community Website",
    subtitle: "Next.js + Supabase + Vercel",
    desc: "Full-stack community platform for Egushi, Otta in Nigeria. Includes a public-facing cultural website and a separate admin panel with photo gallery management, business directory, and advertisement revenue tracking.",
    tags: ["Next.js", "Supabase", "Vercel", "GitHub Actions", "PostgreSQL"],
    highlights: ["Public site + admin panel", "Supabase auth & storage", "Photo gallery with lightbox", "Ad revenue tracking"],
    Icon: SiNextdotjs, color: "#00d4b8", status: "Live",
    live: "https://egushi-otta.vercel.app",
    github: "https://github.com/YusufAlagbe",
  },
  {
    title: "DevOps Portfolio Website",
    subtitle: "Next.js + Tailwind + Vercel",
    desc: "This portfolio site — built with Next.js, featuring dark theme with teal accents, react-icons, skill bars, and full mobile responsiveness. Deployed automatically via GitHub to Vercel.",
    tags: ["Next.js", "Tailwind CSS", "GitHub", "Vercel", "react-icons"],
    highlights: ["Custom domain alagbeyusuf.com", "Dark theme with teal accents", "Fully mobile responsive", "React Icons throughout"],
    Icon: SiVercel, color: "#6e40c9", status: "Live",
    live: "https://alagbeyusuf.com",
    github: "https://github.com/YusufAlagbe",
  },
  {
    title: "Azure AKS Migration",
    subtitle: "Kubernetes + Terraform + Azure DevOps",
    desc: "Led enterprise migration of legacy workloads to Azure Kubernetes Service at Andrews Distributing. Achieved 25% cost reduction and 70% faster provisioning through Terraform automation.",
    tags: ["Azure AKS", "Kubernetes", "Terraform", "Helm", "ArgoCD"],
    highlights: ["25% infrastructure cost reduction", "70% faster provisioning", "GitOps with ArgoCD", "Helm chart templating"],
    Icon: SiKubernetes, color: "#326ce5", status: "Enterprise",
  },
  {
    title: "Observability Platform",
    subtitle: "Datadog + Grafana + Prometheus",
    desc: "Built comprehensive monitoring and alerting infrastructure at Andrews Distributing. Custom Grafana dashboards and Datadog APM integration reduced MTTR by 45%.",
    tags: ["Datadog", "Grafana", "Prometheus", "PagerDuty", "Python"],
    highlights: ["45% MTTR reduction", "Custom Grafana dashboards", "Auto-scaling triggers", "On-call alert routing"],
    Icon: BsGraphUp, color: "#e11d48", status: "Enterprise",
  },
  {
    title: "Pearson K8s Modernization",
    subtitle: "Docker + Kubernetes + Jenkins",
    desc: "Modernized legacy deployment pipelines at Pearson Education from quarterly releases to weekly deployments. Containerized 12+ applications using Docker and Kubernetes on AWS EKS.",
    tags: ["Docker", "Kubernetes", "EKS", "Jenkins", "Ansible"],
    highlights: ["Quarterly to weekly releases", "12+ apps containerized", "Jenkins pipeline automation", "AWS EKS orchestration"],
    Icon: FaDocker, color: "#2496ed", status: "Enterprise",
  },
]

export default function Projects() {
  return (
    <>
      <Head><title>Projects | Yusuf Alagbe</title></Head>
      <Navbar />

      <section style={{ padding: "140px 0 60px", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,184,0.08) 0%, transparent 70%)", top: -100, right: 0 }} />
        <div className="container-custom">
          <div className="section-label animate-fadeUp delay-1">My Work</div>
          <h1 className="section-title animate-fadeUp delay-2" style={{ marginBottom: 16 }}>
            Featured<br /><span style={{ color: "var(--teal)" }}>Projects</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: "var(--text-dim)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", maxWidth: 580, lineHeight: 1.8 }}>
            Personal and enterprise projects spanning CI/CD, cloud infrastructure, containerization, and full-stack development.
          </p>
        </div>
      </section>

      <section style={{ padding: "20px 0 80px" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {projects.map(p => (
              <div key={p.title} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ height: 160, background: `linear-gradient(135deg, ${p.color}22 0%, ${p.color}08 100%)`, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: p.color }} />
                  <div style={{ width: 64, height: 64, background: `${p.color}18`, border: `1px solid ${p.color}40`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p.Icon size={32} color={p.color} />
                  </div>
                  <div style={{ position: "absolute", top: 16, right: 16 }}>
                    <span style={{ background: p.status === "Live" ? "rgba(34,197,94,0.15)" : "rgba(0,212,184,0.1)", color: p.status === "Live" ? "#22c55e" : "var(--teal)", border: `1px solid ${p.status === "Live" ? "#22c55e" : "var(--teal)"}40`, fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", padding: "4px 10px", letterSpacing: "0.1em" }}>
                      {p.status === "Live" ? "● " : "◆ "}{p.status}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "clamp(18px, 4vw, 28px)", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: p.color, marginBottom: 8 }}>{p.subtitle}</div>
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(1rem, 2.5vw, 1.2rem)", marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: "var(--text-dim)", fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{p.desc}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 20 }}>
                    {p.highlights.map(h => (
                      <div key={h} style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        <span style={{ color: p.color, flexShrink: 0, marginTop: 1 }}>▸</span>{h}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.65rem", padding: "4px 10px" }}>{t}</span>)}
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: "0.75rem", padding: "9px 16px" }}>Live Site →</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: "center", fontSize: "0.75rem", padding: "9px 16px", display: "flex", alignItems: "center", gap: 6 }}><FaGithub size={14} />GitHub</a>}
                    {!p.live && !p.github && <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "var(--text-muted)", padding: "9px 0" }}>Enterprise / NDA Project</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 4vw, 2rem)", marginBottom: 16 }}>
            Interested in <span style={{ color: "var(--teal)" }}>Working Together?</span>
          </h2>
          <p style={{ color: "var(--text-dim)", marginBottom: 32 }}>I am always open to new opportunities and exciting projects.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>Get In Touch →</Link>
            <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-outline" style={{ fontSize: "1rem", padding: "14px 36px" }}>Download Resume</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}