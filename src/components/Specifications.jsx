import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const specGroups = [
  {
    title: 'General',
    items: [
      { label: 'Boat Name', value: 'Blue Nutmeg' },
      { label: 'Build Year', value: '2016' },
      { label: 'Boat Type', value: 'Sailing Catamaran' },
      { label: 'Materials', value: 'Marine Plywood Laminated with Fiberglass' },
      { label: 'LOA', value: '12 m' },
      { label: 'Beam', value: '6 m' },
      { label: 'Displacement', value: '8 GT' },
      { label: 'Height (Deck to Keel)', value: '3.55 m' },
      { label: 'Passenger Capacity', value: '8 Persons' },
      { label: 'Cabins', value: '2 Guest Cabins (2 Adults + Kid each) + 1 Crew Cabin' },
      { label: 'Toilets & Bathroom', value: '2 in cabins + 1 for crew' },
    ],
  },
  {
    title: 'Mast, Sails & Speed',
    items: [
      { label: 'Mast By', value: 'Allyacht Spars' },
      { label: 'Sails By', value: 'Evolution' },
      { label: 'Top Speed', value: '9 knots' },
      { label: 'Cruising Speed', value: '7 knots' },
    ],
  },
  {
    title: 'Engines & Power',
    items: [
      { label: 'Propulsion', value: '2 x 100 HP Yamaha Outboard Engine' },
      { label: 'Solar Panel', value: '450 WP x 2 pcs' },
      { label: 'Water Maker', value: '35 litres/hour' },
    ],
  },
  {
    title: 'Tanks & Cruising Range',
    items: [
      { label: 'Fuel Tanks', value: '2 x 75 litres' },
      { label: 'Fresh Water Tanks', value: '3 x 110 litres' },
      { label: 'Range Under Power', value: '12 hours' },
      { label: 'Range Under Sail', value: 'No Limit' },
    ],
  },
  {
    title: 'Crew & Others',
    items: [
      { label: 'Crew', value: '3 Crew Members' },
      { label: 'Entertainment', value: 'Audio Sound System On Board' },
    ],
  },
  {
    title: 'Navigation & Communication',
    items: [
      { label: 'Radar', value: 'Simrad' },
      { label: 'GPS & Plotter', value: 'Simrad' },
      { label: 'Depth Sounder', value: 'Simrad' },
      { label: 'Compass', value: 'Fluxgate Compass' },
      { label: 'Rudder', value: '2 Manual Hydraulic Rudders, Single Steering Wheel & Indicator' },
      { label: 'Wind Indicator', value: 'Windex' },
      { label: 'Portable GPS', value: 'Garmin' },
      { label: 'Charts', value: 'Simrad Electronic Chart, Indonesia Paper Charts, British Admiralty Charts (backup)' },
      { label: 'Radio', value: 'ICOM Marine VHF with DSC Capability' },
      { label: 'Portable Radio', value: 'ICOM IC-34' },
      { label: 'Satellite Phone', value: 'Thuraya XTE-Lite' },
    ],
  },
  {
    title: 'Signaling Devices',
    items: [
      { label: 'Red Hand Flare', value: '6 pieces' },
      { label: 'Parachute Signal', value: '4 pieces' },
      { label: 'Smoke Signal', value: '2 pieces' },
      { label: 'SART', value: 'Built-in with Simrad Navigation System' },
      { label: 'EPIRB', value: 'Samyung with Hydrostatic Release' },
    ],
  },
  {
    title: 'Life-Saving Equipment',
    items: [
      { label: 'Life Raft', value: '2 units, 8-person capacity each, hydrostatic release' },
      { label: 'Life Buoy', value: '2 units with 30m line and lights' },
      { label: 'Life Boat', value: '1 dinghy with engine' },
      { label: 'Fire Extinguishers', value: '3 x 3kg dry chemical (one per cabin), 1 x 4.5kg & 1 x 5kg (lounge & cockpit)' },
    ],
  },
]

export default function Specifications() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section id="specifications" className="relative py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-400/50" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold-400">Technical Details</span>
            <div className="h-px w-12 bg-gold-400/50" />
          </div>
          <h2 className="section-title text-white mb-4">
            Full <span className="italic text-gold-400">Specifications</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-light">
            Every detail of Blue Nutmeg, from mast to safety equipment — built and equipped for safe, comfortable ocean cruising.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {specGroups.map((g, i) => (
              <button
                key={g.title}
                onClick={() => setActive(i)}
                className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 border ${
                  active === i
                    ? 'bg-gold-400 text-navy-950 border-gold-400'
                    : 'border-white/15 text-white/50 hover:border-gold-400/50 hover:text-white'
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>

          {/* Active group */}
          <div className="border border-white/10 bg-navy-900/50">
            <div className="grid sm:grid-cols-2 gap-px bg-white/5">
              {specGroups[active].items.map(item => (
                <div key={item.label} className="bg-navy-950 px-6 py-5">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-gold-400/70 mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-white/80 text-sm font-light leading-relaxed">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}