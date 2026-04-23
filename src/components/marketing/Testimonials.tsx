import { Quote } from 'lucide-react'

const testimonials = [
  {
    initials: 'M.R.',
    name: 'M. R.',
    caseType: 'Acción de Tutela - Salud',
    rating: 5,
    quote:
      'Mi EPS llevaba 8 meses negándome el tratamiento médico. Gracias al equipo de Tutelapp, en menos de 10 días el juez ordenó la atención inmediata. No puedo creer cuánto tiempo perdí antes de contactarlos.',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    initials: 'C.M.',
    name: 'C. M.',
    caseType: 'Derecho de Petición - Pensión',
    rating: 5,
    quote:
      'El Fondo de Pensiones ignoró mis peticiones durante 14 meses. Con el Derecho de Petición que elaboraron, respondieron en 5 días y finalmente procesaron mi solicitud de pensión. Trabajo impecable y muy humano.',
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    initials: 'J.P.',
    name: 'J. P.',
    caseType: 'Habeas Corpus - Libertad',
    rating: 5,
    quote:
      'Mi hermano fue detenido arbitrariamente. A las 2am los llamé y respondieron. En menos de 36 horas ya estaba libre gracias al Habeas Corpus. La rapidez y el profesionalismo en una situación tan angustiante fue invaluable.',
    gradient: 'from-green-400 to-green-600',
  },
  {
    initials: 'L.G.',
    name: 'L. G.',
    caseType: 'Acción de Tutela - Educación',
    rating: 5,
    quote:
      'La universidad le negó el cupo a mi hija por un error administrativo. Tutelapp tramitó la tutela y en una semana el juez ordenó su matrícula. Profesionales honestos que de verdad defienden tus derechos.',
    gradient: 'from-purple-400 to-purple-600',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonios reales
          </span>
          <h2 className="section-title mb-4">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Historias reales de personas que recuperaron sus derechos con nuestra ayuda. Identidades protegidas por privacidad.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-blue-800" />
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <p className="text-gray-700 mt-4 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-700 font-medium">{testimonial.caseType}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">
                    Verificado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          * Las identidades de nuestros clientes están protegidas en cumplimiento de la Ley 1581 de 2012 y el secreto profesional del abogado.
        </p>
      </div>
    </section>
  )
}
