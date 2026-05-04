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
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36,
                background: 'var(--teal)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.85rem', color: '#080c10' }}>YA</span>
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Yusuf<span style={{ color: 'var(--teal)' }}>.</span>
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`nav-link ${router.pathname === l.href ? 'active' : ''}`}>
                {l.label}
              </Link>
            ))}
            <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.75rem' }}>
              Resume ↓
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: 4 }}
            className="hamburger"
          >
            <div style={{ width: 24, height: 2, background: menuOpen ? 'var(--teal)' : 'var(--text)', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 24, height: 2, background: menuOpen ? 'transparent' : 'var(--text)', marginBottom: 5, transition: 'all 0.3s' }} />
            <div style={{ width: 24, height: 2, background: menuOpen ? 'var(--teal)' : 'var(--text)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '1.5rem' }}>✕</button>
        {links.map(l => (
          <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href="/Yusuf_Alagbe_Resume.pdf" download className="btn-primary" onClick={() => setMenuOpen(false)}>
          Download Resume
        </a>
      </div>

      <style jsx>{`
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .hamburger { display: block; }
        }
      `}</style>
    </>
  )
}
