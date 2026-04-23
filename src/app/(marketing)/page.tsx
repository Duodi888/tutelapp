import type { Metadata } from 'next'
import Hero from '@/components/marketing/Hero'
import Problems from '@/components/marketing/Problems'
import Services from '@/components/marketing/Services'
import Stats from '@/components/marketing/Stats'
import Process from '@/components/marketing/Process'
import Testimonials from '@/components/marketing/Testimonials'
import CTABanner from '@/components/marketing/CTABanner'

export const metadata: Metadata = {
  title: 'Tutelapp - Defensa de Derechos Constitucionales en Colombia',
  description:
    'Servicios jurídicos especializados en acciones constitucionales. Evaluación gratuita. Abogados expertos en tutelas, derechos de petición, habeas corpus y más.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  )
}
