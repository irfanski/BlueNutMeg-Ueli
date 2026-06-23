import { useEffect, useState } from 'react'

const slides = [
  {
    img: '/images/yacht-hero.jpg',
    headline: 'Set Sail Into',
    headline2: 'The Extraordinary',
    sub: 'Private catamaran charters in the heart of paradise'
  },
  {
    img: '/images/yacht-sail.jpg',
    headline: 'Where Luxury',
    headline2: 'Meets the Open Sea',
    sub: 'Exclusive day trips, sunset cruises & overnight escapes'
  },
  {
    img: '/images/yacht-wide.jpg',
    headline: 'Your Own',
    headline2: 'Ocean Sanctuary',
    sub: 'Tailored experiences aboard Blue Nutmeg catamaran'
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length)
        setTransitioning(false)
      }, 700)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.img}
            alt="Blue Nutmeg catamaran"
            className="w-full h-full object-cover scale-[1.03] transition-transform duration-[8000ms] ease-linear"
            style={{ transform: i === current ? 'scale(1.08)' : 'scale(1)' }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className={`transition-all duration-700 ${transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold-400/60" />
            <span className="text-xs tracking-[0.4em] uppercase text-gold-400 font-medium">Luxury Catamaran Charter</span>
            <div className="h-px w-12 bg-gold-400/60" />
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-3 leading-[1.1]">
            {slide.headline}
          </h1>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-gold-400 mb-6 leading-[1.1] italic">
            {slide.headline2}
          </h1>

          {/* Sub */}
          <p className="text-white/70 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-12">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages" className="btn-gold min-w-[180px] text-center">
              View Packages
            </a>
            <a href="#booking" className="btn-outline min-w-[180px] text-center">
              Book a Charter
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? 'w-8 h-0.5 bg-gold-400'
                : 'w-3 h-0.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
