import { useInView } from '../hooks/useInView'

const specs = [
  { label: 'Length', value: '45 ft' },
  { label: 'Beam', value: '24 ft' },
  { label: 'Max Guests', value: '12 pax' },
  { label: 'Cabins', value: '4 Cabins' },
  { label: 'Crew', value: 'Professional' },
  { label: 'Built', value: '2008' },
]

export default function About() {
  const [ref, inView] = useInView()
  const [imgRef, imgInView] = useInView()

  return (
    <section id="about" className="relative py-32 bg-navy-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />
      <div className="absolute -right-40 top-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-1000 ${imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/yacht-hero.jpg"
                  alt="Blue Nutmeg catamaran"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-navy-800 border border-gold-400/30 p-6 text-center min-w-[140px]">
                <div className="font-serif text-4xl font-light text-gold-400">45'</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">Catamaran</div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-400/50" />
            </div>

            {/* Secondary image */}
            <div className="mt-8 ml-12 overflow-hidden">
              <img
                src="/images/yacht-salon.jpg"
                alt="Blue Nutmeg interior salon"
                className="w-2/3 h-40 object-cover ml-auto"
              />
            </div>
          </div>

          {/* Text side */}
          <div
            ref={ref}
            className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold-400" />
              <span className="text-xs tracking-[0.35em] uppercase text-gold-400">About The Vessel</span>
            </div>

            <h2 className="section-title text-white mb-6">
              Meet <span className="italic text-gold-400">Blue Nutmeg</span>
            </h2>

            <p className="text-white/60 font-light leading-relaxed mb-6 text-base">
              Blue Nutmeg is a meticulously maintained 45-foot catamaran offering an unparalleled blend of performance sailing and luxury comfort. Her twin hulls glide effortlessly through tropical waters, delivering a stable and exhilarating experience for up to 12 guests.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-10 text-base">
              From her spacious teak-accented saloon to four private cabins dressed in hand-woven Indonesian batik, every detail has been curated for elegance and comfort. Whether you seek a thrilling day sail, a romantic sunset cruise, or a multi-day island-hopping adventure — Blue Nutmeg is ready to carry you there in style.
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-3 gap-px bg-gold-500/10 border border-gold-500/10 mb-10">
              {specs.map((s) => (
                <div key={s.label} className="bg-navy-950 p-4 text-center">
                  <div className="font-serif text-xl text-gold-400 mb-1">{s.value}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/40">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#packages" className="btn-gold">Explore Packages</a>
          </div>
        </div>
      </div>
    </section>
  )
}
