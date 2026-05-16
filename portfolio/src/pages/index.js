import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const tools = ["Docker","Kubernetes","Terraform","AWS","Azure","Jenkins","GitHub Actions","Ansible","Datadog","Grafana","Prometheus","Python","Bash","Helm","EKS","AKS","ArgoCD","Vault"]

export default function Home() {
  const [idx, setIdx] = useState(0)
  const titles = ["Senior DevOps Engineer", "Cloud Architect", "SRE Practitioner", "Automation Expert"]
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % titles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Head><title>Yusuf Alagbe | Senior DevOps Engineer</title></Head>
      <Navbar />

      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,184,0.12) 0%, transparent 70%)", top: -100, right: -100 }} />
        <div className="orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", bottom: 100, left: -50 }} />
        <div className="container-custom hero-outer">
          <div>
            <div className="section-label animate-fadeUp delay-1">
              Available for opportunities
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", marginLeft: 8 }} />
            </div>
            <h1 className="display animate-fadeUp delay-2" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: 8 }}>
              Yusuf<br /><span style={{ color: "var(--teal)" }}>Alagbe</span>
            </h1>
            <div className="animate-fadeUp delay-3" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "1rem", color: "var(--text-dim)", marginBottom: 24, minHeight: 28 }}>
              <span style={{ color: "var(--teal)" }}>$ </span>
              <span key={idx}>{titles[idx]}</span>
              <span style={{ borderRight: "2px solid var(--teal)", marginLeft: 2 }}>&nbsp;</span>
            </div>
            <p className="animate-fadeUp delay-4" style={{ color: "var(--text-dim)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              11+ years designing and operating cloud-native infrastructure at scale. Specializing in Kubernetes, Terraform, and CI/CD automation across Azure and AWS.
            </p>
            <div className="animate-fadeUp delay-5" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/projects" className="btn-primary">View My Work</Link>
              <Link href="/contact" className="btn-outline">Get In Touch</Link>
            </div>
            <div className="animate-fadeUp delay-5 stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
              {[["11+", "Years Experience"], ["25%", "Cost Reduction"], ["70%", "Faster Provisioning"]].map(([num, label]) => (
                <div key={num}>
                  <div className="stat-num">{num}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 4, fontFamily: "JetBrains Mono, monospace" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap animate-fadeIn delay-3">
            <div className="hero-photo-inner">
              <div style={{ position: "absolute", top: -12, right: -12, width: "100%", height: "100%", border: "2px solid var(--teal)", opacity: 0.3, zIndex: 0 }} />
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", zIndex: 1 }}>
                <Image src="/yusuf.jpg" alt="Yusuf Alagbe" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(transparent, rgba(8,12,16,0.8))" }} />
              </div>
              <div style={{ position: "absolute", bottom: 24, left: -24, zIndex: 2, background: "var(--surface)", border: "1px solid var(--teal)", padding: "12px 20px" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--teal)", marginBottom: 2 }}>CURRENTLY AT</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>Andrews Distributing</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>Dallas, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "16px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 25s linear infinite", width: "max-content" }}>
          {[...tools, ...tools].map((t, i) => (
            <span key={i} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", color: "var(--text-muted)", padding: "0 32px", borderRight: "1px solid var(--border)", whiteSpace: "nowrap", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t}</span>
          ))}
        </div>
      </div>

      <section style={{ padding: "100px 0" }}>
        <div className="container-custom about-outer">
          <div>
            <div className="section-label">Who I Am</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Building Infra That<br /><span style={{ color: "var(--teal)" }}>Never Sleeps</span>
            </h2>
            <p style={{ color: "var(--text-dim)", marginBottom: 20, lineHeight: 1.8 }}>
              Based in Plano, TX, I am a Senior DevOps Engineer who bridges the gap between development velocity and operational reliability. My work spans cloud architecture, container orchestration, and automation systems.
            </p>
            <p style={{ color: "var(--text-dim)", marginBottom: 36, lineHeight: 1.8 }}>
              From cutting infrastructure costs by 25% at Andrews Distributing to leading Kubernetes migrations at Pearson Education, I build systems that scale, observe, and heal themselves.
            </p>
            <Link href="/about" className="btn-outline">Learn More About Me</Link>
          </div>
          <div className="cards-grid">
            {[
              { icon: "☁️", title: "Cloud Architecture", desc: "Azure & AWS multi-region infrastructure design and cost optimization" },
              { icon: "⚙️", title: "CI/CD Automation", desc: "End-to-end pipelines with Jenkins, GitHub Actions, and Azure DevOps" },
              { icon: "🐳", title: "Containerization", desc: "Docker & Kubernetes deployments with AKS/EKS orchestration" },
              { icon: "🔐", title: "DevSecOps", desc: "SAST/DAST integration, IAM policies, secrets management" },
            ].map(s => (
              <div key={s.title} className="card" style={{ padding: "24px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0" }}>
        <div className="container-custom">
          <div className="cta-box">
            <div>
              <div className="section-label" style={{ marginBottom: 8 }}>Open to Opportunities</div>
              <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>
                Lets Build Something <span style={{ color: "var(--teal)" }}>Great Together</span>
              </h2>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Me</Link>
              <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-outline">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .hero-outer { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .hero-photo-wrap { display: flex; justify-content: center; }
        .hero-photo-inner { position: relative; width: 380px; height: 460px; }
        .about-outer { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cta-box { background: linear-gradient(135deg, var(--surface) 0%, rgba(0,212,184,0.05) 100%); border: 1px solid var(--teal); padding: clamp(32px, 5vw, 60px); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 768px) {
          .hero-outer { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-photo-wrap { justify-content: center !important; padding: 0 20px; }
          .hero-photo-inner { width: 100% !important; max-width: 300px !important; height: 360px !important; left: 0 !important; }
          .about-outer { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-box { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}
