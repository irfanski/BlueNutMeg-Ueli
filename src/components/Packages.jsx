import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const packages = [
  {
    tier: 'Sunrise',
    duration: '3 Hours',
    price: 'IDR 1,400,000',
    priceNote: 'per person',
    image: '/images/yacht-wide.jpg',
    badge: null,
    color: 'from-orange-900/30',
    includes: [
      'Professional skipper & crew',
      'Welcome drinks & light breakfast',
      'Stunning sunrise views',
      'Towels provided',
      'Life jackets provided',
      'Fuel included',
    ],
    desc: 'Start your day on the water as the sun rises over Bali — a serene and breathtaking way to experience the catamaran.'
  },
  {
    tier: 'Half Day',
    duration: '4 Hours',
    price: 'IDR 1,600,000',
    priceNote: 'per person',
    image: '/images/yacht-hero.jpg',
    badge: 'Most Popular',
    color: 'from-gold-500/20',
    includes: [
      'Professional skipper & crew',
      'Welcome drinks & snacks',
      'Snorkeling equipment',
      'Towels & sunscreen',
      'Life jackets provided',
      'Fuel included',
    ],
    desc: 'A perfect taste of sailing life — glide through calm waters, snorkel a pristine reef, and soak up the Bali sun.'
  },
  {
    tier: 'Sunset',
    duration: '3 Hours',
    price: 'IDR 1,400,000',
    priceNote: 'per person',
    image: '/images/yacht-sail.jpg',
    badge: null,
    color: 'from-orange-900/20',
    includes: [
      'Professional skipper & crew',
      'Champagne & canapés',
      'Curated sunset playlist',
      'Photography spots',
      'Life jackets provided',
      'Fuel included',
    ],
    desc: 'The most romantic experience on the water — sip champagne as the sky ignites in amber and rose around you.'
  },
]

export default function Packages() {
  const [active, setActive] = useState(1)
  const [ref, inView] = useInView()

  return (
    <section id="packages" className="relative py-32 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
      <div className="absolute -left-40 top-1/3 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-400/50" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold-400">Charter Options</span>
            <div className="h-px w-12 bg-gold-400/50" />
          </div>
          <h2 className="section-title text-white mb-4">
            Our <span className="italic text-gold-400">Packages</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-light">
            Tailor-made journeys for every occasion — intimate couples, families, corporate groups, and celebrations at sea.
          </p>
        </div>

        {/* Tab selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {packages.map((p, i) => (
            <button
              key={p.tier}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border ${
                active === i
                  ? 'bg-gold-400 text-navy-950 border-gold-400'
                  : 'border-white/20 text-white/50 hover:border-gold-400/50 hover:text-white'
              }`}
            >
              {p.tier}
            </button>
          ))}
        </div>

        {/* Package cards */}
        <div ref={ref} className={`grid md:grid-cols-3 gap-px bg-white/5 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.tier}
              className={`relative group cursor-pointer package-card transition-all duration-500 ${
                active === i ? 'ring-1 ring-gold-400 z-10' : ''
              }`}
              onClick={() => setActive(i)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.tier}
                  className={`package-img w-full h-full object-cover transition-transform duration-700`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} to-navy-950/80`} />
                {pkg.badge && (
                  <div className="absolute top-3 right-3 bg-gold-400 text-navy-950 text-[9px] tracking-[0.25em] uppercase px-2 py-1 font-medium">
                    {pkg.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-400/80 mb-1">{pkg.duration}</div>
                  <div className="font-serif text-2xl text-white">{pkg.tier}</div>
                </div>
              </div>

              {/* Content */}
              <div className={`bg-navy-950 p-6 ${active === i ? 'bg-navy-800/60' : ''} transition-colors duration-300`}>
                {/* Price */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="font-serif text-2xl text-gold-400">{pkg.price}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">{pkg.priceNote}</div>
                </div>

                {/* Desc */}
                <p className="text-white/50 text-xs font-light leading-relaxed mb-5">{pkg.desc}</p>

                {/* Includes */}
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/60">
                      <svg className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#booking" className={`block text-center text-xs tracking-[0.2em] uppercase py-3 px-4 transition-all duration-300 border ${
                  active === i
                    ? 'bg-gold-400 text-navy-950 border-gold-400'
                    : 'border-gold-400/40 text-gold-400 hover:bg-gold-400 hover:text-navy-950'
                }`}>
                  Book This Package
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm font-light">
            Need something bespoke? We create <span className="text-gold-400">custom packages</span> for special occasions, corporate events & exclusive getaways.
          </p>
          <a href="#booking" className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-white/40 hover:text-gold-400 transition-colors animated-underline">
            Enquire about custom charters →
          </a>
        </div>
      </div>
    </section>
  )
}