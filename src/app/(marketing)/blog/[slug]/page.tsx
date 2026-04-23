import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, ArrowRight, Scale } from 'lucide-react'

type BlogPostContent = {
  title: string
  excerpt: string
  category: string
  readTime: number
  date: string
  tags: string[]
  content: string
}

const blogContent: Record<string, BlogPostContent> = {
  'cuando-interponer-tutela-guia-2024': {
    title: '¿Cuándo interponer una tutela? Guía completa 2024',
    excerpt: 'Descubre en qué situaciones puedes interponer una Acción de Tutela, cuáles son los requisitos, los derechos que protege y cómo maximizar las posibilidades de éxito.',
    category: 'Tutela',
    readTime: 8,
    date: '15 de marzo de 2024',
    tags: ['Tutela', 'Derechos fundamentales', 'Guía práctica'],
    content: `
## ¿Qué es la Acción de Tutela?

La Acción de Tutela, consagrada en el artículo 86 de la Constitución Política de Colombia de 1991, es el mecanismo judicial más importante para la protección inmediata de los derechos fundamentales. Cualquier ciudadano puede interponerla, con o sin abogado, de forma verbal o escrita.

## ¿Cuándo puedes interponer una tutela?

La tutela procede cuando se cumplen estos requisitos:

**1. Vulneración o amenaza de un derecho fundamental**
El derecho afectado debe estar reconocido en la Constitución como fundamental: derecho a la salud, a la educación, al trabajo, a la vida digna, al debido proceso, a la igualdad, entre otros.

**2. Acto de autoridad pública o particular**
La tutela procede principalmente contra entidades públicas. Contra particulares, solo en casos específicos (cuando prestan servicios públicos, cuando el afectado está en estado de subordinación o indefensión).

**3. Ausencia de otro mecanismo de defensa**
La tutela es subsidiaria: solo procede cuando no existe otro mecanismo judicial para proteger el derecho, o cuando existiendo, la tutela es necesaria como mecanismo transitorio para evitar un perjuicio irremediable.

## Casos más comunes donde procede la tutela

### Salud
- EPS que niega medicamentos, cirugías o tratamientos ordenados por médicos
- Demora injustificada en citas con especialistas
- Negativa a practicar exámenes de diagnóstico
- Interrupción de tratamientos crónicos

### Pensiones y seguridad social
- Demora injustificada en el reconocimiento de pensiones de vejez, invalidez o sobrevivencia
- Negativa a hacer efectivos los pagos de incapacidades

### Educación
- Negativa injustificada de matrícula
- Cancelación irregular de matrícula
- Restricción del acceso a establecimientos educativos

### Trabajo y mínimo vital
- Cuando el empleador no paga salarios o prestaciones afectando el mínimo vital
- Despido que vulnera el mínimo vital de trabajadores con dependientes

## ¿Cuánto tiempo tienes para interponerla?

La tutela no tiene término de caducidad fijo, pero debe interponerse de manera oportuna mientras persista la vulneración del derecho. La Corte Constitucional ha establecido que interponerla después de transcurrido mucho tiempo puede afectar su procedibilidad (principio de inmediatez).

## Pasos para interponer una tutela

1. **Identifica el derecho vulnerado** y el responsable de la vulneración
2. **Reúne las pruebas**: documentos, comunicaciones, negativas escritas, órdenes médicas, etc.
3. **Redacta el escrito de tutela** con los hechos, el derecho vulnerado y lo que solicitas
4. **Preséntalo ante cualquier juez** de la República (preferiblemente en el lugar donde ocurrió el hecho)
5. **El juez tiene 10 días** para decidir
6. **Si el fallo es desfavorable**, puedes impugnarlo dentro de los 3 días siguientes

## Consejos para una tutela exitosa

- **Documenta todo**: conserva todas las comunicaciones, negativas y respuestas de la entidad
- **Sé específico**: describe con precisión qué derecho fue vulnerado y cómo
- **Cita jurisprudencia**: las sentencias de la Corte Constitucional refuerzan tus argumentos
- **Actúa rápido**: entre más rápido actúes, mejor
- **Busca asesoría**: aunque no es obligatorio, un abogado aumenta tus posibilidades de éxito

## Conclusión

La Acción de Tutela es una herramienta poderosa que está al alcance de todos los colombianos. Si tus derechos fundamentales están siendo vulnerados, no esperes más. En Tutelapp estamos listos para ayudarte a hacer valer tus derechos con la mayor efectividad posible.
    `,
  },
  'derechos-usuarios-salud-colombia': {
    title: 'Derechos de los usuarios de salud en Colombia',
    excerpt: 'Todo lo que debes saber sobre tus derechos como paciente: atención de urgencias, tratamientos, medicamentos y cómo hacer valer tus derechos ante las EPS e IPS.',
    category: 'Salud',
    readTime: 6,
    date: '28 de febrero de 2024',
    tags: ['Salud', 'EPS', 'Derechos del paciente'],
    content: `
## El derecho a la salud en Colombia

La Corte Constitucional colombiana ha elevado el derecho a la salud al estatus de derecho fundamental autónomo, lo que significa que puedes protegerlo directamente mediante una Acción de Tutela cuando sea vulnerado.

## Tus derechos fundamentales como paciente

**Derecho a la atención de urgencias**
Las EPS e IPS no pueden negar la atención de urgencias bajo ninguna circunstancia, incluso si no eres afiliado o si tienes deudas con la entidad. La negativa de urgencias es una de las causales más graves de tutela.

**Derecho a servicios en el Plan de Beneficios en Salud (PBS)**
Todos los servicios incluidos en el PBS (antes POS) deben ser prestados de manera oportuna. La demora injustificada puede vulnerar tu derecho a la salud.

**Derecho a medicamentos**
Las EPS deben suministrar los medicamentos prescritos por tus médicos tratantes, incluidos los No PBS cuando sean necesarios para preservar la vida o la dignidad del paciente.

**Derecho a la continuidad del tratamiento**
Una vez iniciado un tratamiento, la EPS no puede interrumpirlo por razones administrativas o económicas. La continuidad es un principio fundamental del derecho a la salud.

## ¿Cuándo procede la tutela en salud?

- Negativa de medicamentos ordenados por tu médico
- Demora superior a los plazos legales para citas con especialistas
- Negativa de procedimientos quirúrgicos necesarios
- Interrupción de tratamientos crónicos
- Negativa de medicamentos No PBS cuando son necesarios
- Incumplimiento de órdenes médicas

## Plazos que las EPS deben cumplir

- Urgencias: atención inmediata
- Consulta médica general: dentro de los 3 días hábiles
- Consulta con especialista: dentro de los 15 días hábiles
- Cirugías no urgentes: dentro de los 30 días hábiles
- Medicamentos: entrega inmediata o máximo 48 horas

## Qué hacer si tu EPS vulnera tu derecho

1. Conserva toda la documentación (órdenes médicas, negativas escritas, comunicaciones)
2. Presenta un Derecho de Petición formal a la EPS
3. Si no responden o niegan tu solicitud, interpón una Acción de Tutela
4. Puedes también radicar queja ante la Superintendencia de Salud

En Tutelapp hemos ayudado a cientos de pacientes a obtener sus tratamientos, medicamentos y cirugías a través de la Acción de Tutela.
    `,
  },
  'habeas-corpus-proteccion-libertad': {
    title: 'Habeas Corpus: protección de la libertad personal',
    excerpt: 'El Habeas Corpus es una de las garantías más antiguas del derecho. Aprende cómo funciona en Colombia, cuándo usarlo y qué efectos tiene una decisión favorable.',
    category: 'Habeas Corpus',
    readTime: 5,
    date: '10 de febrero de 2024',
    tags: ['Habeas Corpus', 'Libertad', 'Detención ilegal'],
    content: `
## ¿Qué es el Habeas Corpus?

El Habeas Corpus (del latín "que tengas tu cuerpo") es una de las garantías judiciales más antiguas y fundamentales del derecho occidental. En Colombia está consagrado en el artículo 30 de la Constitución Política y regulado por la Ley 1095 de 2006.

## ¿Cuándo procede el Habeas Corpus?

El Habeas Corpus procede cuando:

- Una persona es detenida sin orden judicial previa (sin flagrancia)
- La detención se prolonga más allá de los plazos constitucionales
- La persona no ha sido presentada ante un juez
- Existe prolongación ilegal de la privación de libertad
- Hay amenaza inminente e ilegal a la libertad personal
- Se dan casos de desaparición forzada

## Características especiales del Habeas Corpus

**Urgencia:** El juez debe resolver dentro de las 36 horas siguientes a la presentación.

**Sin formalidades:** Puede presentarse verbalmente, por escrito, por correo electrónico o incluso por teléfono en casos urgentes.

**Cualquier juez:** Se presenta ante cualquier juez o tribunal del país, sin importar el lugar de detención.

**No requiere abogado:** Cualquier persona puede presentarlo en nombre del detenido.

**Disponibilidad 24/7:** Dado su carácter urgente, los jueces deben atenderlo incluso fuera del horario judicial.

## ¿Quién puede presentar el Habeas Corpus?

- El propio detenido
- Un familiar
- Cualquier persona
- Un abogado
- El Ministerio Público (Fiscalía, Procuraduría, Defensoría)

## Efectos de un Habeas Corpus favorable

Si el juez encuentra que la detención es ilegal o arbitraria, ordenará:
- La libertad inmediata del detenido
- La presentación del detenido ante el juez competente
- La corrección de las irregularidades encontradas

## En Tutelapp

Contamos con una línea de urgencias disponible las 24 horas para casos de Habeas Corpus. La libertad personal no admite demoras.
    `,
  },
  'como-escribir-derecho-peticion-efectivo': {
    title: 'Cómo escribir un derecho de petición efectivo',
    excerpt: 'Aprende a redactar un derecho de petición que genere resultados. Te explicamos la estructura, los requisitos legales y los errores más comunes a evitar.',
    category: 'Derecho de Petición',
    readTime: 7,
    date: '22 de enero de 2024',
    tags: ['Derecho de petición', 'Redacción jurídica', 'Trámites'],
    content: `
## El Derecho de Petición en Colombia

El artículo 23 de la Constitución Política consagra el Derecho de Petición como un derecho fundamental. Toda persona puede presentar peticiones respetuosas a las autoridades y a las organizaciones privadas que prestan servicios públicos, quienes tienen la obligación de resolver de manera oportuna.

## Estructura de un derecho de petición efectivo

### 1. Encabezado
- Nombre y cargo del funcionario o razón social de la entidad
- Ciudad y fecha
- Referencia: "Derecho de Petición"

### 2. Identificación del peticionario
- Nombre completo
- Número de identificación (CC, NIT, CE)
- Dirección y datos de contacto
- Calidad en que actúa

### 3. Hechos (claros y precisos)
Describe cronológicamente los hechos relevantes. Sé específico: fechas, nombres, números de radicado, referencias de contratos, etc.

### 4. Fundamentos jurídicos
- Artículo 23 de la Constitución
- Ley 1437 de 2011 (Código de Procedimiento Administrativo)
- Normas específicas aplicables a tu caso

### 5. Petición concreta
Indica claramente qué solicitas: información, documentos, reversión de una decisión, actuación específica.

### 6. Plazos
Recuerda a la entidad los plazos legales:
- Petición de interés general o particular: 15 días hábiles
- Petición de documentos: 10 días hábiles
- Petición de información: 10 días hábiles

### 7. Firma y datos finales

## Errores comunes a evitar

❌ **Ser demasiado vago:** La petición debe ser específica. "Quiero información sobre mi caso" no es suficiente.

❌ **No conservar el radicado:** Siempre exige un número de radicado con fecha y hora.

❌ **No indicar qué se solicita:** La entidad debe saber exactamente qué debe hacer.

❌ **Presentarlo verbalmente sin testigos:** Si es verbal, exige constancia escrita.

❌ **No guardar copia:** Siempre conserva una copia con el sello de recibido.

## Qué hacer si no te responden

Si la entidad no responde dentro del plazo legal, puedes:

1. Presentar una **Acción de Tutela** por vulneración del Derecho de Petición (fallo en máximo 10 días)
2. Radicar queja ante la Procuraduría General de la Nación
3. Radicar queja ante el ente de control sectorial (Supersalud, Superfinanciera, etc.)

En Tutelapp elaboramos derechos de petición con argumentación jurídica sólida que maximiza las posibilidades de obtener una respuesta favorable.
    `,
  },
  'jurisprudencia-tutelas-salud': {
    title: 'Jurisprudencia reciente: tutelas en salud',
    excerpt: 'Análisis de las sentencias más importantes de la Corte Constitucional sobre tutelas de salud en 2023-2024. Precedentes que fortalecen los derechos de los pacientes.',
    category: 'Jurisprudencia',
    readTime: 10,
    date: '5 de enero de 2024',
    tags: ['Jurisprudencia', 'Corte Constitucional', 'Salud'],
    content: `
## La Corte Constitucional y el derecho a la salud

La Corte Constitucional colombiana ha sido pionera en el mundo en el reconocimiento y protección del derecho a la salud como derecho fundamental autónomo. A través de décadas de jurisprudencia, ha establecido principios que hoy son referencia internacional.

## Sentencias hito recientes

### T-121 de 2023: Derecho a medicamentos no PBS
La Corte reiteró que las EPS están obligadas a suministrar medicamentos que no están en el Plan de Beneficios en Salud (PBS) cuando:
- El medicamento fue prescrito por el médico tratante
- El paciente no tiene capacidad económica para costearlo
- El medicamento no puede sustituirse por otro incluido en el PBS
- Sin el medicamento se afecta la vida o la dignidad del paciente

### T-089 de 2023: Continuidad del tratamiento
Esta sentencia fortaleció el principio de continuidad al establecer que las EPS no pueden interrumpir tratamientos psiquiátricos o psicológicos por motivos administrativos, especialmente cuando el paciente está en condición de vulnerabilidad.

### T-298 de 2023: Urgencias y afiliación
La Corte recordó que el deber de atención de urgencias es absoluto y no puede condicionarse a la afiliación al sistema de salud ni al pago de deudas anteriores. Toda persona en estado de urgencia debe ser atendida.

### SU-124 de 2023: Sentencia de unificación en salud mental
Esta importante sentencia de unificación estableció reglas claras para la protección del derecho a la salud mental, ordenando que las EPS garanticen el acceso oportuno a servicios de psicología y psiquiatría.

## Principios jurisprudenciales consolidados

**1. Integralidad**
El derecho a la salud debe protegerse de manera integral, no solo con atención de urgencias sino con todos los servicios necesarios para preservar y recuperar la salud.

**2. Continuidad**
Los tratamientos iniciados no pueden interrumpirse por razones administrativas o económicas ajenas al paciente.

**3. Oportunidad**
Los servicios de salud deben prestarse dentro de los plazos razonables que exige la condición médica del paciente.

**4. Eficiencia**
El sistema debe utilizar sus recursos de manera que se garantice la prestación efectiva de los servicios.

**5. Universalidad**
El sistema cubre a todas las personas, independientemente de su capacidad económica.

## Cómo usar la jurisprudencia en tu tutela

Citar sentencias relevantes de la Corte Constitucional fortalece significativamente una Acción de Tutela. En Tutelapp identificamos la jurisprudencia aplicable a cada caso específico, lo que aumenta sustancialmente las posibilidades de éxito.

Si tu EPS está vulnerando tu derecho a la salud, no esperes más. Contáctanos hoy para una evaluación gratuita de tu caso.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogContent[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      elements.push(<div key={key++} className="h-2" />)
    } else if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-gray-900 font-serif mt-8 mb-3">
          {trimmed.slice(3)}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-gray-900 mt-6 mb-2">
          {trimmed.slice(4)}
        </h3>
      )
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-900 mt-4 mb-1">
          {trimmed.slice(2, -2)}
        </p>
      )
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-gray-700 ml-4 list-disc">
          {trimmed.slice(2)}
        </li>
      )
    } else if (trimmed.startsWith('❌ ') || trimmed.startsWith('✓ ')) {
      elements.push(
        <p key={key++} className="text-gray-700 mt-2">
          {trimmed}
        </p>
      )
    } else {
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed">
          {trimmed}
        </p>
      )
    }
  }
  return elements
}

const categoryColors: Record<string, string> = {
  Tutela: 'bg-amber-100 text-amber-800',
  Salud: 'bg-green-100 text-green-800',
  'Habeas Corpus': 'bg-red-100 text-red-800',
  'Derecho de Petición': 'bg-blue-100 text-blue-800',
  Jurisprudencia: 'bg-purple-100 text-purple-800',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug]
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-1.5 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
              {post.category}
            </span>
            <span className="text-blue-300 text-sm flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min de lectura
            </span>
            <span className="text-blue-300 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif leading-tight">
            {post.title}
          </h1>
          <p className="text-blue-200 mt-4 text-lg max-w-2xl leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article content */}
          <article className="lg:col-span-2">
            <div className="prose-custom space-y-1">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  <Tag className="h-3.5 w-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="h-5 w-5 text-amber-400" />
                <span className="font-bold text-sm">Tutelapp</span>
              </div>
              <h3 className="font-bold text-lg font-serif mb-2">
                ¿Necesitas ayuda con tu caso?
              </h3>
              <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                Evaluación jurídica gratuita. Un abogado especializado analizará tu situación.
              </p>
              <Link
                href="/evaluacion"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                Evaluación gratuita
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Related */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Artículos relacionados</h3>
              <div className="space-y-4">
                {Object.entries(blogContent)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 3)
                  .map(([slug, relPost]) => (
                    <Link key={slug} href={`/blog/${slug}`} className="block group">
                      <p className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors leading-snug font-medium">
                        {relPost.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relPost.readTime} min
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
