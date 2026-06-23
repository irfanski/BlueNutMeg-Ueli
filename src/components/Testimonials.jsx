import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    name: 'Alexandra & Marco',
    origin: 'Singapore',
    rating: 5,
    text: 'Our anniversary on Blue Nutmeg was nothing short of magical. The crew was attentive, the sunset over the islands was breathtaking, and the champagne was perfectly chilled. We\'ve already booked our return trip.',
    occasion: 'Anniversary Cruise'
  },
  {
    name: 'The Rodriguez Family',
    origin: 'Manila, Philippines',
    rating: 5,
    text: 'What an incredible family adventure! The kids loved the snorkeling and the crew kept them safe and entertained the whole day. The food was fresh and absolutely delicious. A day we\'ll talk about for years.',
    occasion: 'Family Day Charter'
  },
  {
    name: 'David & Priya',
    origin: 'Jakarta, Indonesia',
    rating: 5,
    text: 'We chose the overnight package for our honeymoon and it exceeded every expectation. Waking up on deck to complete stillness, surrounded by nothing but turquoise water — pure bliss. Thank you, Blue Nutmeg.',
    occasion: 'Honeymoon Overnight'
  },
  {
    name: 'James Hartwell',
    origin: 'Sydney, Australia',
    rating: 5,
    text: 'We hired Blue Nutmeg for a corporate team outing with 10 colleagues. The skipper was professional and engaging, and the whole experience was seamlessly organised. Highly recommend for corporate charters.',
    occasion: 'Corporate Charter'
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[active]

  return (
    <section className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071428 0%, #0c1f3e 50%, #071428 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #e8c14a 0, #e8c14a 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}
      />

      <div ref={ref} className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-gold-400/50" />
          <span className="text-xs tracking-[0.35em] uppercase text-gold-400">Guest Stories</span>
          <div className="h-px w-12 bg-gold-400/50" />
        </div>

        {/* Large quote mark */}
        <div className="font-serif text-[120px] text-gold-400/10 leading-none -mb-10 select-none">"</div>

        {/* Testimonial content */}
        <div className="min-h-[160px] flex items-center justify-center">
          <blockquote
            key={active}
            className="animate-fade-in font-serif text-xl md:text-2xl text-white/80 italic font-light leading-relaxed"
          >
            {t.text}
          </blockquote>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mt-8 mb-4">
          {[...Array(t.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-gold-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>

        {/* Author */}
        <div className="text-white font-medium mb-1">{t.name}</div>
        <div className="flex items-center justify-center gap-3 text-white/40 text-xs tracking-wider">
          <span>{t.origin}</span>
          <span>·</span>
          <span className="text-gold-400/70">{t.occasion}</span>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-6 h-1.5 bg-gold-400' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
