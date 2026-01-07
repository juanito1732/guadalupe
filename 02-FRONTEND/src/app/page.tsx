'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import MyStory from '@/components/MyStory'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <Services />
        <MyStory />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
/* Vercel Fresh Build Trigger - Mon Dec 30 03:10:00 AM -03 2025 */
/* Force rebuild with updated contact info - estudiomariagjuarez@gmail.com */
