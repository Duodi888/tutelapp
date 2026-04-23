import Link from 'next/link'
import { Shield, FileText, Lock, Scale, TreePine, Users, ArrowRight, Star, Clock, DollarSign } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Acción de Tutela',
    slug: 'tutela',
    description:
      'El mecanismo más efectivo para proteger tus derechos fundamentales. Amparo constitucional directo ante cualquier vulneración de tus derechos.',
    when: 'Vulneración de derechos como salud, educación, trabajo, vida digna o debido proceso.',
    time: '10 días hábiles',
    price: 'Desde $500.000',
    popular: true,
    color: 'amber',
  },
  {
    icon: FileText,
    title: 'Derecho de Petición',
    slug: 'derecho-peticion',
    description:
      'Exige respuesta de entidades públicas o privadas que prestan servicios públicos. Derecho constitucional a recibir información y respuesta oportuna.',
    when: 'Entidad no responde, da información incompleta o niega solicitudes sin justificación.',
    time: '15-30 días hábiles',
    price: 'Desde $200.000',
    popular: false,
    color: 'blue',
  },
  {
    icon: Lock,
    title: 'Habeas Corpus',
    slug: 'habeas-corpus',
    description:
      'Protección inmediata de la libertad personal ante detención ilegal o arbitraria. Resolución en máximo 36 horas.',
    when: 'Detención ilegal, prolongación indebida de la privación de libertad o amenaza a la libertad.',
    time: '36 horas',
    price: 'Cotizar',
    popular: false,
    color: 'red',
  },
  {
    icon: Scale,
    title: 'Acción de Cumplimiento',
    slug: 'accion-cumplimiento',
    description:
      'Obliga a las autoridades a cumplir normas con fuerza material de ley o actos administrativos. Herramienta para hacer valer el Estado de Derecho.',
    when: 'Autoridad incumple ley, decreto, ordenanza, acuerdo municipal o acto administrativo.',
    time: '30 días',
    price: 'Desde $400.000',
    popular: false,
    color: 'purple',
  },
  {
    icon: TreePine,
    title: 'Acción Popular',
    slug: 'accion-popular',
    description:
      'Protege los derechos e intereses colectivos como el medio ambiente, la salubridad pública, el espacio público y el patrimonio cultural.',
    when: 'Daño o amenaza a derechos colectivos, medio ambiente o bienes de uso público.',
    time: '3-6 meses',
    price: 'Cotizar',
    popular: false,
    color: 'green',
  },
  {
    icon: Users,
    title: 'Acción de Grupo',
    slug: 'accion-grupo',
    description:
      'Reparación colectiva cuando un mismo hecho dañoso afecta a 20 o más personas. Eficiencia jurídica y solidaridad procesal.',
    when: 'Daño masivo por el mismo hecho a 20+ personas: fallas médicas, desastres, negligencias.',
    time: '6-18 meses',
    price: 'Cotizar',
    popular: false,
    color: 'orange',
  },
]

const iconColors: Record<string, string> = {
  amber: 'bg-amber-100 text-amber-700',
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-100 text-red-700',
  purple: 'bg-purple-100 text-purple-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
}

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nuestros servicios jurídicos
          </span>
          <h2 className="section-title mb-4">Acciones Constitucionales</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Especializados en los mecanismos de protección constitucional más efectivos para defender tus derechos fundamentales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            const iconColor = iconColors[service.color]
            return (
              <div
                key={service.slug}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <Star className="h-3 w-3 fill-current" />
                    Más solicitada
                  </div>
                )}

                <div className="p-7 flex-1">
                  {/* Icon */}
                  <div className={`inline-flex p-3.5 rounded-xl ${iconColor} mb-5`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* When it applies */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      ¿Cuándo aplica?
                    </p>
                    <p className="text-sm text-gray-700">{service.when}</p>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-blue-800">
                      <DollarSign className="h-4 w-4" />
                      <span>{service.price}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-7 pb-7">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                  >
                    Saber más
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/evaluacion" className="btn-gold text-base">
            Evaluación gratuita de tu caso
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
