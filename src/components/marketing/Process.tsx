import { MessageSquare, Search, Sword, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Evaluación Gratuita',
    description:
      'Cuéntanos tu caso a través de nuestro formulario en línea o por teléfono. En 24 horas un abogado especializado analizará tu situación sin ningún costo.',
    color: 'blue',
    detail: 'Sin costo · Sin compromiso · 24h respuesta',
  },
  {
    number: '02',
    icon: Search,
    title: 'Análisis Jurídico',
    description:
      'Nuestro equipo estudia en profundidad tu situación legal, identificamos las normas aplicables, la jurisprudencia relevante y la estrategia más efectiva.',
    color: 'amber',
    detail: 'Análisis completo · Jurisprudencia actualizada',
  },
  {
    number: '03',
    icon: Sword,
    title: 'Estrategia Legal',
    description:
      'Diseñamos y ejecutamos la acción constitucional más adecuada para tu caso: redactamos los escritos, los presentamos ante los jueces y hacemos el seguimiento.',
    color: 'blue',
    detail: 'Redacción profesional · Presentación oportuna',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Seguimiento',
    description:
      'Te acompañamos durante todo el proceso. Recibes actualizaciones constantes del estado de tu caso y gestionamos cualquier incidencia que surja.',
    color: 'amber',
    detail: 'Actualizaciones constantes · Soporte continuo',
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Proceso claro y transparente
          </span>
          <h2 className="section-title mb-4">¿Cómo trabajamos?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Un proceso simple, transparente y efectivo para defender tus derechos constitucionales.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800 via-amber-500 to-blue-800 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isBlue = step.color === 'blue'
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center group">
                  {/* Step number bubble */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1 ${
                        isBlue
                          ? 'bg-blue-800 text-white'
                          : 'bg-amber-500 text-white'
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span
                      className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        isBlue
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      isBlue
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {step.detail}
                  </span>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex md:hidden justify-center mt-6">
                      <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <p className="text-blue-800 font-semibold text-lg mb-2">
            Todo el proceso puede realizarse 100% en línea
          </p>
          <p className="text-blue-600 text-sm">
            No necesitas desplazarte. Gestionamos tu caso de forma remota con la misma efectividad que en persona.
          </p>
        </div>
      </div>
    </section>
  )
}
