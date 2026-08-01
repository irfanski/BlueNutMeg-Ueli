import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import Specifications from './components/Specifications'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Specifications />
      <Experience />
      <Packages />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  )
}
