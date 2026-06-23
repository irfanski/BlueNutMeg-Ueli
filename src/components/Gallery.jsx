import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const photos = [
  { src: '/images/yacht-hero.jpg', alt: 'Blue Nutmeg sailing full sail', span: 'col-span-2 row-span-2', label: 'Under Full Sail' },
  { src: '/images/yacht-sail.jpg', alt: 'Catamaran at sea', span: 'col-span-1 row-span-1', label: 'Open Waters' },
  { src: '/images/yacht-wide.jpg', alt: 'Wide angle shot', span: 'col-span-1 row-span-1', label: 'Island Backdrop' },
  { src: '/images/yacht-salon.jpg', alt: 'Luxurious saloon interior', span: 'col-span-1 row-span-2', label: 'Saloon Lounge' },
  { src: '/images/yacht-cabin.jpg', alt: 'Master cabin', span: 'col-span-1 row-span-1', label: 'Master Cabin' },
  { src: '/images/yacht-nav.jpg', alt: 'Navigation area', span: 'col-span-1 row-span-1', label: 'Navigation Helm' },
  { src: '/images/yacht-galley.jpg', alt: 'Galley kitchen', span: 'col-span-1 row-span-1', label: 'Galley Kitchen' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="gallery" className="relative py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-400/50" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold-400">Visual Journey</span>
            <div className="h-px w-12 bg-gold-400/50" />
          </div>
          <h2 className="section-title text-white mb-4">
            <span className="italic text-gold-400">Gallery</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-light">
            A glimpse into life aboard Blue Nutmeg — captured from the water, the sky, and within.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div
          ref={ref}
          className={`grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-2 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ height: '640px' }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden gallery-item cursor-zoom-in group ${photo.span}`}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/0 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-950/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400">{photo.label}</span>
              </div>
              {/* Corner accent on hover */}
              <div className="absolute top-2 right-2 w-0 h-0 border-t border-r border-gold-400 group-hover:w-6 group-hover:h-6 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Drone shot note */}
        <div className="mt-8 text-center flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-24 bg-white/10" />
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase">
            Aerial · On-Board · Lifestyle Photography
          </p>
          <div className="h-px flex-1 max-w-24 bg-white/10" />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-gold-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain" />
            <p className="text-center text-gold-400/70 text-xs tracking-[0.3em] uppercase mt-4">{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  )
}
