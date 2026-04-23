import { FileText, Lock, Shield, Scale, TreePine, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const problems = [
  {
    icon: FileText,
    problem: 'Entidad pública no responde tu petición',
    description: 'Llevas semanas o meses esperando una respuesta oficial y nunca llega.',
    solution: 'Derecho de Petición',
    solutionDesc: 'Obligamos legalmente a la entidad a responder en los plazos establecidos.',
    color: 'blue',
    href: '/servicios/derecho-peticion',
  },
  {
    icon: Lock,
    problem: 'Tu libertad o la de un familiar está en riesgo',
    description: 'Una detención ilegal o arbitraria amenaza la libertad personal.',
    solution: 'Habeas Corpus',
    solutionDesc: 'Protección inmediata de la libertad personal ante detención ilegal.',
    color: 'red',
    href: '/servicios/habeas-corpus',
  },
  {
    icon: Shield,
    problem: 'Tus derechos fundamentales fueron violados',
    description: 'Una entidad pública o privada vulneró tus derechos constitucionales.',
    solution: 'Acción de Tutela',
    solutionDesc: 'Mecanismo judicial ágil para proteger derechos fundamentales.',
    color: 'amber',
    href: '/servicios/tutela',
  },
  {
    icon: Scale,
    problem: 'Una autoridad incumple la ley o una sentencia',
    description: 'El Estado o sus entidades no cumplen sus obligaciones legales.',
    solution: 'Acción de Cumplimiento',
    solutionDesc: 'Forzamos el cumplimiento de normas y sentencias judiciales.',
    color: 'purple',
    href: '/servicios/accion-cumplimiento',
  },
  {
    icon: TreePine,
    problem: 'Daño colectivo al medio ambiente o patrimonio',
    description: 'Una acción afecta los bienes colectivos o el medio ambiente.',
    solution: 'Acción Popular',
    solutionDesc: 'Protección de derechos e intereses colectivos y del ambiente.',
    color: 'green',
    href: '/servicios/accion-popular',
  },
  {
    icon: Users,
    problem: 'Un daño masivo afecta a muchas personas',
    description: 'Un hecho dañoso afectó a un número plural de personas.',
    solution: 'Acción de Grupo',
    solutionDesc: 'Reparación colectiva para grupos afectados por el mismo daño.',
    color: 'orange',
    href: '/servicios/accion-grupo',
  },
]

const colorClasses: Record<string, { bg: string; icon: string; badge: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-700',
    badge: 'bg-blue-700 text-white',
    border: 'border-blue-100 group-hover:border-blue-200',
  },
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-100 text-red-700',
    badge: 'bg-red-700 text-white',
    border: 'border-red-100 group-hover:border-red-200',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-100 text-amber-700',
    badge: 'bg-amber-600 text-white',
    border: 'border-amber-100 group-hover:border-amber-200',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-700',
    badge: 'bg-purple-700 text-white',
    border: 'border-purple-100 group-hover:border-purple-200',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-700',
    badge: 'bg-green-700 text-white',
    border: 'border-green-100 group-hover:border-green-200',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-700',
    badge: 'bg-orange-600 text-white',
    border: 'border-orange-100 group-hover:border-orange-200',
  },
}

export default function Problems() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Identificamos tu situación
          </span>
          <h2 className="section-title mb-4">¿Tu derecho fue vulnerado?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Cada situación jurídica tiene una solución específica. Identifica tu caso y descubre la acción legal más adecuada para ti.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon
            const colors = colorClasses[item.color]
            return (
              <Link href={item.href} key={item.solution} className="group block">
                <div
                  className={`bg-white rounded-xl border ${colors.border} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full`}
                >
                  <div className={`${colors.bg} p-6 border-b border-inherit`}>
                    <div className={`inline-flex p-3 rounded-xl ${colors.icon} mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-base leading-snug">
                      {item.problem}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${colors.badge}`}>
                        Solución
                      </span>
                      <span className="font-bold text-gray-900 text-sm">{item.solution}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{item.solutionDesc}</p>
                    <div className="flex items-center gap-1 text-blue-700 text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      <span>Saber más</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿No estás seguro cuál aplica a tu caso?</p>
          <Link
            href="/evaluacion"
            className="btn-primary text-base"
          >
            Recibe una evaluación gratuita
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
