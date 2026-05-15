import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [router.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none' }}>
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, background: 'var(--teal)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.75rem', color: '#080c10' }}>YA</span>
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Yusuf<span style={{ color: 'var(--teal)' }}>.</span>
              </span>
            </div>
          </Link>

          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`nav-link ${router.pathname === l.href ? 'active' : ''}`}>{l.label}</Link>
            ))}
            <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.75rem' }}>Resume ↓</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="hamburger"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5, zIndex: 201 }}>
            <div style={{ width: 24, height: 2, background: menuOpen ? 'var(--teal)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 7px)' : 'none' }} />
            <div style={{ width: 24, height: 2, background: menuOpen ? 'transparent' : 'var(--text)', transition: 'all 0.3s' }} />
            <div style={{ width: 24, height: 2, background: menuOpen ? 'var(--teal)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '80px 24px 40px' }}>
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text)' }}>Yusuf<span style={{ color: 'var(--teal)' }}>.</span></div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.15em', marginTop: 4 }}>SENIOR DEVOPS ENGINEER</div>
          </div>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: router.pathname === l.href ? 'var(--teal)' : 'var(--text-dim)', textDecoration: 'none', padding: '14px 24px', width: '100%', textAlign: 'center', borderBottom: '1px solid var(--border)', transition: 'color 0.2s' }}>
              {l.label}
            </Link>
          ))}
          <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-primary" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 28, width: '100%', maxWidth: 280, justifyContent: 'center', fontSize: '0.9rem', padding: '14px 28px' }}>
            Download Resume ↓
          </a>
          <div style={{ display: 'flex', gap: 20, marginTop: 24 }}>
            <a href="https://www.linkedin.com/in/yusuf-alagbe-olatunji" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', textDecoration: 'none' }}>LinkedIn</a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a href="https://github.com/YusufAlagbe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', textDecoration: 'none' }}>GitHub</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
