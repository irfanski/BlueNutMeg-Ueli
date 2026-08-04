import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Island Hopping',
    desc: 'Navigate through pristine archipelagos and hidden coves only accessible by sea.'
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    title: 'Sunset Cruises',
    desc: 'Toast golden hour with champagne as the sun melts into the horizon around you.'
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
      </svg>
    ),
    title: 'Snorkeling & Diving',
    desc: 'Discover vibrant coral gardens and sea life in crystal-clear tropical waters.'
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Overnight Stays',
    desc: 'Sleep under a blanket of stars in your private cabin while anchored in a secluded bay.'
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Gourmet Dining',
    desc: 'Freshly prepared meals and curated beverages served at anchor in paradise.'
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Private Transfers',
    desc: 'Seamless dock-to-dock transport arranged exclusively for your group.'
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030b19 0%, #071428 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-64 h-64 bg-gold-500/4 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-400/50" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold-400">On Board</span>
            <div className="h-px w-12 bg-gold-400/50" />
          </div>
          <h2 className="section-title text-white mb-4">
            The <span className="italic text-gold-400">Experience</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-light">
            Every charter is crafted around you — your rhythm, your desires, your memories to be made.
          </p>
        </div>

        {/* Features grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-navy-950 p-8 group hover:bg-navy-800/50 transition-all duration-500 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="text-gold-400/70 group-hover:text-gold-400 mb-5 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Interior showcase strip */}
        <div className="mt-20 grid grid-cols-3 gap-3">
          {['/images/DSC01986.jpg', '/images/DSC02020.jpg', '/images/DSC02038.jpg'].map((img, i) => (
            <div key={i} className="relative overflow-hidden group cursor-pointer">
              <img src={img} alt="Blue Nutmeg interior" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
        <p className="text-center text-white/30 text-xs tracking-[0.3em] uppercase mt-4">Saloon · Master Cabin · Navigation Helm</p>
      </div>
    </section>
  )
}