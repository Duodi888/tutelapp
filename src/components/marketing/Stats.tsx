'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Clock, ThumbsUp, Users } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: 532,
    suffix: '+',
    label: 'Casos Exitosos',
    description: 'Derechos restablecidos efectivamente',
  },
  {
    icon: Users,
    value: 15,
    suffix: '+',
    label: 'Años de Experiencia',
    description: 'En litigio constitucional colombiano',
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: '%',
    label: 'Clientes Satisfechos',
    description: 'Tasa de satisfacción comprobada',
  },
  {
    icon: Clock,
    value: 48,
    suffix: 'h',
    label: 'Tiempo de Respuesta',
    description: 'Garantizado para tu primera consulta',
  },
]

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isVisible, target])

  return (
    <span className="text-4xl md:text-5xl font-bold text-white font-serif">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Números reales que reflejan nuestro compromiso con la defensa de los derechos constitucionales.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-amber-400" />
                  </div>
                </div>
                <div className="mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{stat.label}</h3>
                <p className="text-blue-300 text-sm">{stat.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-blue-300 text-sm">
            * Cifras basadas en casos gestionados desde 2009 hasta la fecha
          </p>
        </div>
      </div>
    </section>
  )
}
