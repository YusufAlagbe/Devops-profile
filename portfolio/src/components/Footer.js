import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '48px 0 32px' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: 12 }}>
              Yusuf<span style={{ color: 'var(--teal)' }}>.</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              Senior DevOps Engineer building scalable cloud infrastructure and automation solutions.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: 16, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Navigation</div>
            {[['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([href, label]) => (
              <div key={href} style={{ marginBottom: 8 }}>
                <Link href={href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--teal)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >{label}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: 16, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Contact</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 8 }}>Alagbeyusuf21@gmail.com</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 8 }}>+1 (602) 829-0385</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Plano, TX</div>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {[
                { href: 'https://www.linkedin.com/in/yusuf-alagbe-olatunji', label: 'in', title: 'LinkedIn' },
                { href: 'https://github.com/YusufAlagbe', label: 'gh', title: 'GitHub' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  style={{ width: 36, height: 36, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>© {new Date().getFullYear()} Yusuf Alagbe. All rights reserved.</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Built with Next.js & deployed on Vercel</span>
        </div>
      </div>
    </footer>
  )
}
