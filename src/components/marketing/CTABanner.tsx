'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react'

export default function CTABanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full px-4 py-2 text-sm font-medium mb-8">
          <Shield className="h-4 w-4" />
          <span>Evaluación 100% gratuita y sin compromiso</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 leading-tight">
          ¿Tus derechos están siendo{' '}
          <span className="text-amber-400">vulnerados?</span>
        </h2>

        <p className="text-xl text-blue-200 mb-4">
          Obtén tu análisis jurídico <strong className="text-white">GRATUITO</strong> hoy
        </p>

        <p className="text-blue-300 mb-10 max-w-2xl mx-auto">
          Nuestros abogados especializados en derecho constitucional analizarán tu caso y te darán una hoja de ruta clara para recuperar tus derechos.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-5 py-4 rounded-xl text-gray-900 bg-white border-2 border-transparent focus:border-amber-400 outline-none text-base placeholder-gray-400 transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Evaluar mi caso
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-green-500/20 border border-green-400/30 text-green-300 rounded-xl px-8 py-5 max-w-xl mx-auto mb-8">
            <CheckCircle className="h-6 w-6 flex-shrink-0" />
            <p className="font-medium">
              ¡Listo! Revisa tu correo. Te contactaremos en máximo 24 horas.
            </p>
          </div>
        )}

        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>Respuesta en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>100% Confidencial</span>
          </div>
        </div>

        {/* Privacy note */}
        <p className="text-blue-400 text-xs mt-6">
          Al enviar tu correo aceptas nuestra{' '}
          <a href="/privacidad" className="text-blue-300 hover:text-white underline transition-colors">
            Política de Privacidad
          </a>{' '}
          y el tratamiento de datos personales conforme a la Ley 1581 de 2012.
        </p>
      </div>
    </section>
  )
}
