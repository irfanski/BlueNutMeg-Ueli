import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const photos = [
  { src: '/images/DJI_0530.jpg', alt: 'Blue Nutmeg sailing full sail', span: 'col-span-2 row-span-2', label: 'Under Full Sail' },
  { src: '/images/DJI_0542.jpg', alt: 'Catamaran at sea', span: 'col-span-1 row-span-1', label: 'Open Waters' },
  { src: '/images/DJI_0544.jpg', alt: 'Wide angle shot', span: 'col-span-1 row-span-1', label: 'Island Backdrop' },
  { src: '/images/DSC01986.jpg', alt: 'Luxurious saloon interior', span: 'col-span-1 row-span-2', label: 'Saloon Lounge' },
  { src: '/images/DSC02020.jpg', alt: 'Master cabin', span: 'col-span-1 row-span-1', label: 'Master Cabin' },
  { src: '/images/DSC02038.jpg', alt: 'Navigation area', span: 'col-span-1 row-span-1', label: 'Navigation Helm' },
  { src: '/images/DSC02049.jpg', alt: 'Galley kitchen', span: 'col-span-1 row-span-1', label: 'Galley Kitchen' },
  { src: '/images/DJI_0546.jpg', alt: 'Blue Nutmeg aerial view', span: 'col-span-1 row-span-1', label: 'Aerial View' },
  { src: '/images/DSC02059.jpg', alt: 'Blue Nutmeg on the water', span: 'col-span-1 row-span-1', label: 'On the Water' },
  { src: '/images/DSC02059-2.jpg', alt: 'Blue Nutmeg detail shot', span: 'col-span-1 row-span-1', label: 'Deck Details' },
  { src: '/images/DSC02104.jpg', alt: 'Blue Nutmeg guests onboard', span: 'col-span-2 row-span-1', label: 'Life Onboard' },
  { src: '/images/DSC02107.jpg', alt: 'Blue Nutmeg lifestyle shot', span: 'col-span-1 row-span-1', label: 'Sailing Moments' },
  { src: '/images/DSC02115.jpg', alt: 'Blue Nutmeg scenic shot', span: 'col-span-1 row-span-1', label: 'Ocean Views' },
  { src: '/images/DSC02194.jpg', alt: 'Blue Nutmeg sunset shot', span: 'col-span-1 row-span-2', label: 'Golden Hour' },
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
          className={`grid grid-cols-3 md:grid-cols-4 grid-flow-dense auto-rows-[160px] gap-2 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
          </div>
        </div>
      )}
    </section>
  )
}