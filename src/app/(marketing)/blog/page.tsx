import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Tag, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Jurídico - Derecho Constitucional Colombia',
  description:
    'Artículos y guías sobre derechos constitucionales en Colombia: tutelas, derechos de petición, habeas corpus y más. Información jurídica actualizada.',
}

const blogPosts = [
  {
    slug: 'cuando-interponer-tutela-guia-2024',
    title: '¿Cuándo interponer una tutela? Guía completa 2024',
    excerpt:
      'Descubre en qué situaciones puedes interponer una Acción de Tutela, cuáles son los requisitos, los derechos que protege y cómo maximizar las posibilidades de éxito.',
    category: 'Tutela',
    readTime: 8,
    date: '15 de marzo de 2024',
    tags: ['Tutela', 'Derechos fundamentales', 'Guía práctica'],
    featured: true,
  },
  {
    slug: 'derechos-usuarios-salud-colombia',
    title: 'Derechos de los usuarios de salud en Colombia',
    excerpt:
      'Todo lo que debes saber sobre tus derechos como paciente: atención de urgencias, tratamientos, medicamentos y cómo hacer valer tus derechos ante las EPS e IPS.',
    category: 'Salud',
    readTime: 6,
    date: '28 de febrero de 2024',
    tags: ['Salud', 'EPS', 'Derechos del paciente'],
    featured: false,
  },
  {
    slug: 'habeas-corpus-proteccion-libertad',
    title: 'Habeas Corpus: protección de la libertad personal',
    excerpt:
      'El Habeas Corpus es una de las garantías más antiguas del derecho. Aprende cómo funciona en Colombia, cuándo usarlo y qué efectos tiene una decisión favorable.',
    category: 'Habeas Corpus',
    readTime: 5,
    date: '10 de febrero de 2024',
    tags: ['Habeas Corpus', 'Libertad', 'Detención ilegal'],
    featured: false,
  },
  {
    slug: 'como-escribir-derecho-peticion-efectivo',
    title: 'Cómo escribir un derecho de petición efectivo',
    excerpt:
      'Aprende a redactar un derecho de petición que genere resultados. Te explicamos la estructura, los requisitos legales y los errores más comunes a evitar.',
    category: 'Derecho de Petición',
    readTime: 7,
    date: '22 de enero de 2024',
    tags: ['Derecho de petición', 'Redacción jurídica', 'Trámites'],
    featured: false,
  },
  {
    slug: 'jurisprudencia-tutelas-salud',
    title: 'Jurisprudencia reciente: tutelas en salud',
    excerpt:
      'Análisis de las sentencias más importantes de la Corte Constitucional sobre tutelas de salud en 2023-2024. Precedentes que fortalecen los derechos de los pacientes.',
    category: 'Jurisprudencia',
    readTime: 10,
    date: '5 de enero de 2024',
    tags: ['Jurisprudencia', 'Corte Constitucional', 'Salud'],
    featured: false,
  },
]

const categories = ['Todos', 'Tutela', 'Salud', 'Habeas Corpus', 'Derecho de Petición', 'Jurisprudencia']

const categoryColors: Record<string, string> = {
  Tutela: 'bg-amber-100 text-amber-800',
  Salud: 'bg-green-100 text-green-800',
  'Habeas Corpus': 'bg-red-100 text-red-800',
  'Derecho de Petición': 'bg-blue-100 text-blue-800',
  Jurisprudencia: 'bg-purple-100 text-purple-800',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4">
            Blog Jurídico
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Artículos, guías y análisis de jurisprudencia sobre derechos constitucionales en Colombia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Filters row */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${
                    cat === 'Todos'
                      ? 'bg-blue-800 text-white border-blue-800'
                      : 'border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-10 flex items-center justify-center min-h-48">
                    <div className="text-center">
                      <span className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                        Artículo destacado
                      </span>
                      <p className="text-4xl font-bold text-white font-serif">{featured.readTime}</p>
                      <p className="text-blue-200 text-sm">min de lectura</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] ?? 'bg-gray-100 text-gray-700'}`}>
                        {featured.category}
                      </span>
                      <span className="text-xs text-gray-400">{featured.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 font-serif mb-3 group-hover:text-blue-800 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-gray-500">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      <span>Leer artículo</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white font-serif">{post.readTime}</p>
                      <p className="text-blue-200 text-xs">min de lectura</p>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 font-serif group-hover:text-blue-800 transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-blue-700 text-sm font-medium mt-auto">
                      <span>Leer más</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                Anterior
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-800 text-white text-sm font-semibold">1</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
