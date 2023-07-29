import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Features_1 from '@/components/features-1/Features_1'
import Features_2 from '@/components/features-2/Features_2'
import ContactMe from '@/components/contactme/ContactMe'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features_1 />
      <Features_2 />
      <ContactMe />
      <Footer />
    </main>
  )
}
