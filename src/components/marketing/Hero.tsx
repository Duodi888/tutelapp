'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Clock, Award, CheckCircle, Scale } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  { value: 532, suffix: '+', label: 'Derechos Restablecidos', icon: Award },
  { value: 98, suffix: '%', label: 'Tasa de Éxito', icon: CheckCircle },
  { value: 48, suffix: 'h', label: 'Respuesta Garantizada', icon: Clock },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {current}
      {suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/30" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Abogados especializados en derechos constitucionales</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Tu Voz Merece{' '}
              <span className="text-amber-400">Ser Escuchada</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Defendemos tus derechos constitucionales con argumentación jurídica sólida y experiencia comprobada en el sistema judicial colombiano.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/evaluacion"
                className="btn-gold text-base px-8 py-4 justify-center sm:justify-start"
              >
                Evaluación Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 justify-center sm:justify-start text-base"
              >
                Conocer Servicios
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4">
              {[
                'Sin compromiso',
                'Respuesta en 24h',
                '100% Confidencial',
              ].map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-blue-200 text-sm">
                  <CheckCircle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:flex flex-col gap-6 hidden">
            {/* Main stat card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-500 rounded-xl">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Tutelapp</h3>
                  <p className="text-blue-200 text-sm">Defensa Constitucional</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-amber-500/20 rounded-lg">
                          <Icon className="h-5 w-5 text-amber-400" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-blue-200 leading-tight">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recent success card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <p className="text-blue-200 text-sm font-medium mb-3">Caso reciente</p>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  M.R.
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Tutela de Salud - EPS</p>
                  <p className="text-blue-200 text-xs mt-1">
                    &ldquo;Gracias a Tutelapp recuperé mi tratamiento médico en menos de 10 días.&rdquo;
                  </p>
                  <div className="flex gap-0.5 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-3 w-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 lg:hidden">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-blue-200 leading-tight">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
