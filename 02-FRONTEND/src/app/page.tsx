'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <div className="py-8">
        <SectionDivider />
      </div>

      <About />

      <div className="py-8">
        <SectionDivider />
      </div>

      <Services />

      <div className="py-8">
        <SectionDivider />
      </div>

      <Testimonials />

      <div className="py-8">
        <SectionDivider />
      </div>

      <Contact />

      <Footer />
    </main>
  )
}
/* Vercel Fresh Build Trigger - Wed Nov 26 08:55:00 PM -03 2025 */
/* Force rebuild with updated client data - guadalupejuarez@estudiomgj.com.ar */
