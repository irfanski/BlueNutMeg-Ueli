import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/20 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center border border-gold-400/60 rounded-full group-hover:border-gold-400 transition-colors">
            <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L8 8H3l4 3.5L5.5 18 12 14l6.5 4L17 11.5 21 8h-5L12 2z" strokeLinejoin="round"/>
              <path d="M12 14v6" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="font-serif text-lg font-medium text-white leading-none tracking-wide">Blue Nutmeg</div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-gold-400/80 font-light">Luxury Catamaran</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link animated-underline">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#booking" className="hidden md:block btn-gold text-xs py-3 px-6">
          Book Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-gold-400 mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gold-400 mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-950/98 backdrop-blur-md border-t border-gold-500/20 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
               className="nav-link text-base">{l.label}</a>
          ))}
          <a href="#booking" onClick={() => setMenuOpen(false)} className="btn-gold text-center mt-2">
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
