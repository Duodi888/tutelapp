import type { Metadata } from 'next'
import EvaluationForm from '@/components/forms/EvaluationForm'
import { Shield, Clock, CheckCircle, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Evaluación Gratuita de tu Caso',
  description:
    'Solicita una evaluación jurídica gratuita de tu caso constitucional. Sin compromiso. Respuesta en 24 horas. Abogados especializados en Colombia.',
}

const trustItems = [
  { icon: Shield, text: '100% Confidencial', desc: 'Secreto profesional garantizado' },
  { icon: Clock, text: 'Respuesta en 24h', desc: 'Un abogado te contactará' },
  { icon: CheckCircle, text: 'Sin compromiso', desc: 'Evaluación completamente gratuita' },
  { icon: Lock, text: 'Datos protegidos', desc: 'Ley 1581 de 2012' },
]

export default function EvaluacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Evaluación 100% gratuita y sin compromiso
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 leading-tight">
            Cuéntanos tu caso
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Completa el formulario en menos de 3 minutos y un abogado especializado analizará tu situación jurídica.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="flex flex-col items-center text-center">
                  <div className="p-2 bg-blue-50 rounded-lg mb-2">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{item.text}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <EvaluationForm />

          {/* Bottom note */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Al enviar este formulario, aceptas nuestra{' '}
            <a href="/privacidad" className="underline hover:text-gray-600">
              Política de Privacidad
            </a>{' '}
            y autorizas el tratamiento de tus datos personales conforme a la Ley 1581 de 2012. Tus datos son confidenciales y no serán compartidos con terceros.
          </p>
        </div>
      </section>
    </>
  )
}
