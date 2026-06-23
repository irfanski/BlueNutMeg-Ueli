import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const INITIAL_FORM = {
  name: '', email: '', phone: '', date: '', package: '', guests: '', message: ''
}

export default function BookingForm() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong.')

      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message || 'Unable to send your enquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="relative py-32 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 top-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left Info */}
          <div
            ref={ref}
            className={`lg:col-span-2 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold-400" />
              <span className="text-xs tracking-[0.35em] uppercase text-gold-400">Reserve Your Charter</span>
            </div>

            <h2 className="section-title text-white mb-6">
              Begin Your <br />
              <span className="italic text-gold-400">Journey</span>
            </h2>

            <p className="text-white/50 font-light leading-relaxed mb-10">
              Fill out the enquiry form and our team will get back to you within 24 hours to confirm availability and finalise your exclusive Blue Nutmeg charter.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.2 19.79 19.79 0 0 1 1.61 3.6 2 2 0 0 1 3.6 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.07a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>,
                  label: 'WhatsApp',
                  value: '+62 812-3456-7890'
                },
                {
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'Email',
                  value: 'charter@bluenutmeg.com'
                },
                {
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Port',
                  value: 'Benoa Harbour, Bali, Indonesia'
                },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-0.5">{item.label}</div>
                    <div className="text-white/70 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
                <a key={s} href="#" className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-gold-400 transition-colors border border-white/10 hover:border-gold-400/40 px-3 py-1.5">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* Success state */}
            {status === 'success' ? (
              <div className="text-center py-24 border border-gold-400/20 bg-navy-950/50">
                <div className="w-16 h-16 border border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-white mb-3">Enquiry Received</h3>
                <p className="text-white/50 font-light max-w-sm mx-auto leading-relaxed">
                  Our team will contact you within 24 hours. Check your inbox — we've sent you our full charter catalog.
                </p>
                <p className="text-gold-400 text-sm mt-4">Thank you, {form.name.split(' ')[0]}!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/10 bg-navy-950/50 p-8 space-y-5">
                <h3 className="font-serif text-2xl text-white mb-2">Charter Enquiry</h3>
                <div className="h-px gold-line mb-6" />

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">Full Name *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      placeholder="Your full name"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">Email *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">WhatsApp / Phone</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      placeholder="+62 ..."
                    />
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">Preferred Date *</label>
                    <input
                      type="date" name="date" required value={form.date} onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  {/* Package */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">Package *</label>
                    <select
                      name="package" required value={form.package} onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors"
                    >
                      <option value="" disabled>Select package</option>
                      <option value="half-day">Half Day (4 Hours) — IDR 4,500,000</option>
                      <option value="full-day">Full Day (8 Hours) — IDR 8,500,000</option>
                      <option value="sunset">Sunset Cruise (3 Hours) — IDR 3,200,000</option>
                      <option value="overnight">Overnight (24 Hours) — IDR 15,000,000</option>
                      <option value="custom">Custom / Special Request</option>
                    </select>
                  </div>
                  {/* Guests */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">Number of Guests *</label>
                    <select
                      name="guests" required value={form.guests} onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors"
                    >
                      <option value="" disabled>Select guests</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">Special Requests</label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full bg-navy-900 border border-white/10 focus:border-gold-400/60 text-white text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-white/20"
                    placeholder="Tell us about your occasion, dietary needs, or any special arrangements..."
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400 text-xs font-light">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Enquiry'}
                </button>

                <p className="text-white/25 text-[10px] text-center tracking-wide">
                  We respond within 24 hours · No payment required to enquire
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
