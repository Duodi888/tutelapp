import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Clock, DollarSign, ArrowRight, ChevronDown } from 'lucide-react'

type ServiceData = {
  title: string
  slug: string
  description: string
  heroColor: string
  when: string[]
  process: { step: string; desc: string }[]
  timing: { label: string; value: string }[]
  costs: string
  faqs: { q: string; a: string }[]
}

const servicesData: Record<string, ServiceData> = {
  tutela: {
    title: 'Acción de Tutela',
    slug: 'tutela',
    description:
      'El mecanismo constitucional más poderoso para proteger de manera inmediata tus derechos fundamentales cuando son vulnerados o amenazados por entidades públicas o privadas.',
    heroColor: 'from-amber-700 to-amber-900',
    when: [
      'Una EPS o IPS niega, dilata o interrumpe tu tratamiento médico',
      'Una entidad pública viola tu derecho al debido proceso',
      'Una institución educativa vulnera tu derecho a la educación',
      'Tu empleador o el Estado afecta tu derecho al trabajo',
      'Una autoridad viola tu derecho a la vida digna o a la igualdad',
      'Tu derecho de petición no fue respondido en los plazos legales',
      'Se vulnera tu derecho a la información o a la habeas data',
      'Cualquier derecho fundamental está siendo amenazado o violado',
    ],
    process: [
      {
        step: 'Análisis del caso',
        desc: 'Estudiamos los hechos, identificamos el derecho vulnerado y determinamos la procedibilidad de la tutela.',
      },
      {
        step: 'Redacción del escrito',
        desc: 'Elaboramos el escrito de tutela con argumentación jurídica sólida, jurisprudencia relevante y pruebas contundentes.',
      },
      {
        step: 'Presentación',
        desc: 'Presentamos la tutela ante el juez competente. El juez tiene 10 días para decidir.',
      },
      {
        step: 'Seguimiento e impugnación',
        desc: 'Hacemos seguimiento al fallo. Si es desfavorable, impugnamos o presentamos selección para revisión ante la Corte Constitucional.',
      },
    ],
    timing: [
      { label: 'Tiempo máximo para el fallo', value: '10 días hábiles' },
      { label: 'Tiempo para impugnar', value: '3 días hábiles' },
      { label: 'Cumplimiento del fallo', value: '48 horas' },
    ],
    costs: 'La Acción de Tutela no requiere el pago de costas judiciales. Los honorarios de abogado varían según la complejidad del caso. Consulta gratuita incluida.',
    faqs: [
      {
        q: '¿Necesito un abogado para interponer una tutela?',
        a: 'No es obligatorio, pero contar con asesoría profesional aumenta significativamente las posibilidades de éxito, especialmente en casos complejos como los de salud o trabajo.',
      },
      {
        q: '¿Cuánto tiempo tengo para interponer una tutela?',
        a: 'No existe un término de caducidad fijo, pero debe interponerse de manera oportuna. En casos de urgencia como salud, puede interponerse en cualquier momento mientras persista la vulneración.',
      },
      {
        q: '¿Qué pasa si el juez niega la tutela?',
        a: 'Puedes impugnar el fallo dentro de los 3 días siguientes. Si el fallo de segunda instancia también es negativo, el expediente puede ser seleccionado para revisión por la Corte Constitucional.',
      },
      {
        q: '¿Qué derechos protege la tutela?',
        a: 'Protege todos los derechos fundamentales consagrados en la Constitución Política de Colombia, incluidos salud, educación, trabajo, vida digna, igualdad, debido proceso, habeas data, entre otros.',
      },
    ],
  },
  'derecho-peticion': {
    title: 'Derecho de Petición',
    slug: 'derecho-peticion',
    description:
      'Garantía constitucional que permite a toda persona presentar solicitudes respetuosas ante autoridades y entidades privadas que prestan servicios públicos, y recibir respuesta oportuna y de fondo.',
    heroColor: 'from-blue-700 to-blue-900',
    when: [
      'Una entidad pública no ha respondido tu solicitud',
      'La respuesta recibida es evasiva, no es de fondo o está incompleta',
      'Necesitas obtener copias de documentos o información oficial',
      'Una EPS, banco u empresa de servicios públicos no atiende tu solicitud',
      'Un fondo de pensiones o cesantías no procesa tu trámite',
      'Una institución niega injustificadamente información a la que tienes derecho',
    ],
    process: [
      {
        step: 'Diagnóstico',
        desc: 'Analizamos tu situación, identificamos qué información o acción necesitas y determinamos ante qué entidad debes dirigirte.',
      },
      {
        step: 'Redacción del derecho de petición',
        desc: 'Elaboramos un derecho de petición claro, fundamentado jurídicamente y con todos los requisitos legales para maximizar su efectividad.',
      },
      {
        step: 'Radicación',
        desc: 'Radicamos el derecho de petición con número de radicado y control de términos para garantizar la respuesta oportuna.',
      },
      {
        step: 'Seguimiento y tutela si incumple',
        desc: 'Hacemos seguimiento. Si la entidad no responde en el plazo legal, interponemos tutela para obligarla a responder.',
      },
    ],
    timing: [
      { label: 'Tiempo de respuesta (interés general)', value: '15 días hábiles' },
      { label: 'Tiempo de respuesta (interés particular)', value: '15 días hábiles' },
      { label: 'Tiempo de respuesta (documentos)', value: '10 días hábiles' },
    ],
    costs:
      'El Derecho de Petición es gratuito para quien lo presenta. Los honorarios de abogado son por la asesoría y redacción profesional. Cotiza tu caso sin compromiso.',
    faqs: [
      {
        q: '¿Qué pasa si la entidad no responde en el plazo legal?',
        a: 'Si la entidad no responde dentro del término legal, puedes interponer una Acción de Tutela para obligarla a responder. Esto genera silencio administrativo positivo en algunos casos.',
      },
      {
        q: '¿Puedo pedir cualquier tipo de información?',
        a: 'Sí, siempre que no sea información reservada o clasificada por ley. Tienes derecho a información sobre tus propios trámites, copias de actos administrativos y datos que te incumban directamente.',
      },
      {
        q: '¿Las entidades privadas también están obligadas a responder?',
        a: 'Sí, cuando prestan servicios públicos (EPS, bancos, empresas de telecomunicaciones, etc.) están obligadas a responder dentro de los mismos plazos que las entidades públicas.',
      },
    ],
  },
  'habeas-corpus': {
    title: 'Habeas Corpus',
    slug: 'habeas-corpus',
    description:
      'Acción judicial de carácter urgente para la protección inmediata de la libertad personal ante detenciones ilegales o arbitrarias. El juez debe resolver en máximo 36 horas.',
    heroColor: 'from-red-700 to-red-900',
    when: [
      'Una persona ha sido detenida sin orden judicial o en flagrancia irregular',
      'La detención se ha prolongado más allá de los términos legales',
      'La persona detenida no ha sido presentada ante un juez',
      'Existe una amenaza inminente a la libertad personal',
      'La persona está incomunicada ilegalmente',
      'Hay una desaparición forzada o paradero desconocido',
    ],
    process: [
      {
        step: 'Contacto urgente',
        desc: 'Atendemos tu caso con carácter de urgencia. Recopilamos los datos del detenido, lugar de detención y circunstancias.',
      },
      {
        step: 'Presentación inmediata',
        desc: 'Redactamos y presentamos el Habeas Corpus ante el juez competente de forma inmediata, incluso fuera del horario judicial.',
      },
      {
        step: 'Audiencia',
        desc: 'El juez verifica la legalidad de la detención. Si es ilegal, ordena la libertad inmediata del detenido.',
      },
      {
        step: 'Seguimiento',
        desc: 'En caso de negativa, impugnamos y continuamos con las acciones legales disponibles para proteger la libertad.',
      },
    ],
    timing: [
      { label: 'Resolución por el juez', value: 'Máximo 36 horas' },
      { label: 'Disponibilidad del servicio', value: '24/7 - Urgencias' },
      { label: 'Cumplimiento de la orden', value: 'Inmediato' },
    ],
    costs:
      'Dada la urgencia y complejidad de estos casos, los honorarios se cotizan individualmente. Línea de urgencias disponible 24/7.',
    faqs: [
      {
        q: '¿Quién puede presentar el Habeas Corpus?',
        a: 'Cualquier persona puede presentarlo: el propio afectado, un familiar, un amigo, un abogado o cualquier persona que tenga conocimiento de la situación. No requiere poder especial.',
      },
      {
        q: '¿El Habeas Corpus aplica solo para detenciones de la policía?',
        a: 'No. Aplica para cualquier privación de libertad: policial, militar, administrativa o incluso privada (como internaciones en clínicas psiquiátricas sin consentimiento).',
      },
      {
        q: '¿Qué pasa si el detenido está en otra ciudad?',
        a: 'Puedes presentar el Habeas Corpus ante cualquier juez del país. La competencia territorial es amplia para facilitar el acceso a esta garantía fundamental.',
      },
    ],
  },
  'accion-cumplimiento': {
    title: 'Acción de Cumplimiento',
    slug: 'accion-cumplimiento',
    description:
      'Mecanismo judicial para obligar a las autoridades públicas a cumplir las normas con fuerza material de ley o los actos administrativos. Hace efectivo el Estado de Derecho.',
    heroColor: 'from-purple-700 to-purple-900',
    when: [
      'Una autoridad pública incumple una ley o decreto vigente',
      'No se aplica una ordenanza departamental o acuerdo municipal',
      'Un acto administrativo no es ejecutado por la entidad que lo emitió',
      'Se incumple una sentencia judicial de tipo administrativo',
      'Una norma que te favorece no está siendo aplicada por la autoridad competente',
    ],
    process: [
      {
        step: 'Verificación de procedibilidad',
        desc: 'Comprobamos que la norma tenga fuerza material de ley, que haya renuencia de la autoridad y que se hayan agotado los requisitos previos.',
      },
      {
        step: 'Requerimiento previo',
        desc: 'Enviamos requerimiento formal a la autoridad incumplida. Si en 10 días no cumple, procedemos con la acción.',
      },
      {
        step: 'Presentación de la acción',
        desc: 'Presentamos la Acción de Cumplimiento ante el juez administrativo competente con todos los soportes probatorios.',
      },
      {
        step: 'Fallo y ejecución',
        desc: 'El juez decide en 20 días. Si es favorable, ordena a la autoridad cumplir la norma en un plazo perentorio.',
      },
    ],
    timing: [
      { label: 'Requerimiento previo', value: '10 días para respuesta' },
      { label: 'Tiempo para el fallo', value: '20 días' },
      { label: 'Plazo para cumplir', value: 'Según el juez' },
    ],
    costs:
      'La Acción de Cumplimiento no genera costas judiciales para el accionante. Consulta honorarios profesionales en tu caso específico.',
    faqs: [
      {
        q: '¿Cuál es la diferencia entre la Acción de Cumplimiento y la Tutela?',
        a: 'La Acción de Cumplimiento busca que se aplique una norma legal, mientras que la Tutela protege derechos fundamentales específicos. En algunos casos pueden coexistir o complementarse.',
      },
      {
        q: '¿Qué tipos de normas pueden exigirse mediante esta acción?',
        a: 'Leyes, decretos con fuerza de ley, ordenanzas, acuerdos municipales y actos administrativos de carácter general. No aplica para normas presupuestales que requieran gasto público no previsto.',
      },
      {
        q: '¿Debo agotar recursos administrativos primero?',
        a: 'Sí, debes enviar un requerimiento previo a la autoridad incumplida. Si en 10 días no actúa, puedes presentar la acción directamente.',
      },
    ],
  },
  'accion-popular': {
    title: 'Acción Popular',
    slug: 'accion-popular',
    description:
      'Mecanismo constitucional para proteger los derechos e intereses colectivos frente a daños o amenazas que afecten a la comunidad. Cualquier persona puede interponerla.',
    heroColor: 'from-green-700 to-green-900',
    when: [
      'Hay contaminación ambiental que afecta a una comunidad',
      'Se vulnera el derecho al espacio público',
      'La salubridad pública está en riesgo',
      'Se amenaza el patrimonio cultural o histórico',
      'La seguridad pública de un sector está comprometida',
      'Una empresa causa daños ambientales colectivos',
    ],
    process: [
      {
        step: 'Documentación del daño',
        desc: 'Recopilamos evidencias del daño colectivo: fotografías, testimonios, informes técnicos y documentos que acrediten la afectación.',
      },
      {
        step: 'Elaboración de la demanda',
        desc: 'Redactamos la demanda de Acción Popular identificando el derecho colectivo afectado, los responsables y las medidas solicitadas.',
      },
      {
        step: 'Pacto de cumplimiento',
        desc: 'El juez puede convocar a una audiencia de pacto de cumplimiento donde las partes acuerdan las medidas de protección.',
      },
      {
        step: 'Sentencia e incentivo',
        desc: 'Si el juez falla a favor, ordena las medidas de protección. El actor popular puede recibir un incentivo económico.',
      },
    ],
    timing: [
      { label: 'Duración aproximada', value: '3 a 6 meses' },
      { label: 'Audiencia de pacto', value: 'Primeros 30 días' },
      { label: 'Sentencia', value: '3 meses desde pruebas' },
    ],
    costs:
      'El actor popular puede recibir un incentivo económico si gana el caso. No hay costas para el demandante. Los honorarios se acuerdan según el caso.',
    faqs: [
      {
        q: '¿Qué derechos colectivos protege la Acción Popular?',
        a: 'Protege el goce de un ambiente sano, la moralidad administrativa, el espacio público, la seguridad pública, la libre competencia, el patrimonio cultural, la salubridad pública y los derechos de los consumidores, entre otros.',
      },
      {
        q: '¿Cualquier persona puede interponerla?',
        a: 'Sí. Cualquier persona natural o jurídica, sin importar que no sea directamente afectada, puede interponer la Acción Popular. Incluso el Ministerio Público puede hacerlo.',
      },
      {
        q: '¿Qué es el incentivo económico?',
        a: 'La ley prevé un incentivo económico para el actor popular cuando gana el caso, como reconocimiento a su labor en defensa de los derechos colectivos. El monto lo determina el juez.',
      },
    ],
  },
  'accion-grupo': {
    title: 'Acción de Grupo',
    slug: 'accion-grupo',
    description:
      'Mecanismo para que 20 o más personas afectadas por el mismo hecho dañoso reclamen colectivamente la reparación de los perjuicios sufridos, con mayor eficiencia procesal.',
    heroColor: 'from-orange-700 to-orange-900',
    when: [
      '20 o más personas sufrieron daños por el mismo hecho',
      'Falla en la prestación de un servicio médico que afectó a varios pacientes',
      'Un desastre por negligencia de una empresa afectó a una comunidad',
      'Un medicamento defectuoso causó daños a múltiples personas',
      'Una entidad financiera causó perjuicios similares a varios clientes',
      'Una autoridad tomó una decisión que afectó económicamente a un grupo',
    ],
    process: [
      {
        step: 'Identificación del grupo',
        desc: 'Identificamos a los afectados por el mismo hecho dañoso (mínimo 20 personas) y recopilamos sus testimonios y pruebas de los daños.',
      },
      {
        step: 'Demanda colectiva',
        desc: 'Presentamos la demanda de Acción de Grupo en nombre de todos los afectados, describiendo el hecho dañoso y cuantificando los perjuicios.',
      },
      {
        step: 'Proceso judicial',
        desc: 'El proceso se tramita ante el juez administrativo o civil. Incluye etapa probatoria y alegatos. Otras personas pueden integrarse al grupo durante el proceso.',
      },
      {
        step: 'Sentencia y liquidación',
        desc: 'Si el fallo es favorable, el juez ordena el pago de la indemnización y establece el mecanismo para distribuirla entre todos los afectados.',
      },
    ],
    timing: [
      { label: 'Duración aproximada', value: '6 a 18 meses' },
      { label: 'Término de caducidad', value: '2 años desde el daño' },
      { label: 'Integración al grupo', value: 'Hasta antes del fallo' },
    ],
    costs:
      'Los honorarios suelen pactarse como un porcentaje de la indemnización obtenida, lo que facilita el acceso a la justicia. Consulta sin compromiso.',
    faqs: [
      {
        q: '¿Cuántas personas mínimo necesito para la Acción de Grupo?',
        a: 'La ley exige un mínimo de 20 personas afectadas por el mismo hecho dañoso. Sin embargo, durante el proceso pueden integrarse más afectados que no participaron desde el inicio.',
      },
      {
        q: '¿Cuánto tiempo tengo para interponer la acción?',
        a: 'La acción caduca a los 2 años de ocurrido el hecho dañoso o de cuando el afectado tuvo conocimiento del mismo. Es importante actuar con prontitud.',
      },
      {
        q: '¿Qué diferencia a la Acción de Grupo de una demanda ordinaria?',
        a: 'La Acción de Grupo es más eficiente porque consolida todos los reclamos en un solo proceso, evita decisiones contradictorias y reduce los costos procesales para cada afectado.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = servicesData[params.slug]
  if (!service) return {}
  return {
    title: `${service.title} - Servicios Jurídicos`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  if (!service) notFound()

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${service.heroColor} pt-28 pb-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
          <div className="mt-8">
            <Link
              href="/evaluacion"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg"
            >
              Evaluación gratuita de mi caso
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* When it applies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">¿Cuándo aplica?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.when.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Nuestro proceso</h2>
          <div className="space-y-4">
            {service.process.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-100 my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-bold text-gray-900 mb-1">{p.step}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timing & Costs */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 font-serif mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-700" />
              Tiempos
            </h2>
            <ul className="space-y-3">
              {service.timing.map((t, i) => (
                <li key={i} className="flex items-start justify-between gap-4">
                  <span className="text-sm text-gray-600">{t.label}</span>
                  <span className="text-sm font-semibold text-blue-800 text-right">{t.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 font-serif mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-amber-700" />
              Costos
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{service.costs}</p>
            <Link
              href="/evaluacion"
              className="inline-flex items-center gap-2 mt-4 text-sm text-amber-700 font-semibold hover:text-amber-800 transition-colors"
            >
              Solicitar cotización gratuita
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white font-serif mb-3">
            ¿Tu caso requiere una {service.title}?
          </h2>
          <p className="text-blue-200 mb-6">
            Solicita tu evaluación gratuita hoy. Un abogado especializado analizará tu caso en menos de 24 horas.
          </p>
          <Link
            href="/evaluacion"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
          >
            Evaluación gratuita
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
