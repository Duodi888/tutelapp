import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, Lock, Scale, TreePine, Users, ArrowRight, Clock, DollarSign, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios Jurídicos - Acciones Constitucionales',
  description:
    'Servicios legales especializados en acciones constitucionales colombianas: tutelas, derechos de petición, habeas corpus, acción de cumplimiento, popular y de grupo.',
}

const services = [
  {
    icon: Shield,
    title: 'Acción de Tutela',
    slug: 'tutela',
    shortDesc: 'Protege tus derechos fundamentales de forma inmediata.',
    fullDesc:
      'La Acción de Tutela es el mecanismo constitucional por excelencia para la protección inmediata de los derechos fundamentales de toda persona. Es un recurso ágil, informal y efectivo que cualquier ciudadano puede interponer sin necesidad de abogado, aunque contar con asesoría profesional aumenta significativamente las posibilidades de éxito.',
    tags: ['Salud', 'Educación', 'Trabajo', 'Vida digna', 'Debido proceso'],
    time: '10 días hábiles',
    price: 'Desde $500.000',
    popular: true,
    color: 'amber',
  },
  {
    icon: FileText,
    title: 'Derecho de Petición',
    slug: 'derecho-peticion',
    shortDesc: 'Exige respuesta de entidades públicas y privadas.',
    fullDesc:
      'El Derecho de Petición es una garantía constitucional que permite a toda persona presentar solicitudes respetuosas ante autoridades y organizaciones privadas, y recibir respuesta oportuna. Es una herramienta poderosa para acceder a información, solicitar servicios y exigir el cumplimiento de obligaciones.',
    tags: ['Pensiones', 'Servicios públicos', 'Información', 'Certificaciones', 'Trámites'],
    time: '15-30 días',
    price: 'Desde $200.000',
    popular: false,
    color: 'blue',
  },
  {
    icon: Lock,
    title: 'Habeas Corpus',
    slug: 'habeas-corpus',
    shortDesc: 'Protección inmediata de la libertad personal.',
    fullDesc:
      'El Habeas Corpus es la acción judicial que protege la libertad personal ante detenciones ilegales o arbitrarias. Tiene carácter urgente y el juez debe resolver dentro de las 36 horas siguientes a su presentación. Es uno de los instrumentos jurídicos más antiguos y fundamentales del constitucionalismo.',
    tags: ['Detención ilegal', 'Libertad', 'Prisión preventiva', 'Urgente'],
    time: '36 horas',
    price: 'Cotizar',
    popular: false,
    color: 'red',
  },
  {
    icon: Scale,
    title: 'Acción de Cumplimiento',
    slug: 'accion-cumplimiento',
    shortDesc: 'Obliga a las autoridades a cumplir la ley.',
    fullDesc:
      'La Acción de Cumplimiento permite a cualquier persona exigir judicialmente que las autoridades públicas cumplan las leyes, decretos, ordenanzas, acuerdos y actos administrativos que están obligados a aplicar. Es un poderoso mecanismo para hacer valer el Estado de Derecho.',
    tags: ['Normas', 'Sentencias', 'Actos administrativos', 'Autoridades públicas'],
    time: '30 días',
    price: 'Desde $400.000',
    popular: false,
    color: 'purple',
  },
  {
    icon: TreePine,
    title: 'Acción Popular',
    slug: 'accion-popular',
    shortDesc: 'Protege los derechos e intereses colectivos.',
    fullDesc:
      'La Acción Popular protege los derechos e intereses colectivos, como el medio ambiente sano, la salubridad pública, el espacio público, el patrimonio cultural y la seguridad pública. Cualquier persona puede interponerla en nombre de la comunidad afectada.',
    tags: ['Medio ambiente', 'Espacio público', 'Salubridad', 'Patrimonio', 'Colectivo'],
    time: '3-6 meses',
    price: 'Cotizar',
    popular: false,
    color: 'green',
  },
  {
    icon: Users,
    title: 'Acción de Grupo',
    slug: 'accion-grupo',
    shortDesc: 'Reparación colectiva por daños masivos.',
    fullDesc:
      'La Acción de Grupo permite que 20 o más personas afectadas por el mismo hecho dañoso reclamen colectivamente la reparación de los perjuicios causados. Es eficiente porque evita múltiples litigios individuales y permite que todos los afectados obtengan reparación.',
    tags: ['Daño masivo', 'Reparación', 'Negligencia', 'Responsabilidad estatal'],
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

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            Nuestros Servicios Jurídicos
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Especializados en mecanismos de protección constitucional para defender tus derechos fundamentales en Colombia.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              const iconColor = iconColors[service.color]
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${iconColor}`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 font-serif">{service.title}</h2>
                          <p className="text-sm text-gray-500 mt-0.5">{service.shortDesc}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                          <Star className="h-3 w-3 fill-current" />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.fullDesc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-6 text-sm border-t border-gray-100 pt-5">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{service.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-800 font-semibold">
                        <DollarSign className="h-4 w-4" />
                        <span>{service.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-8">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200"
                    >
                      Ver detalles completos
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿No sabes cuál aplica a tu caso?</p>
            <Link href="/evaluacion" className="btn-gold text-base">
              Evaluación gratuita - Te orientamos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
