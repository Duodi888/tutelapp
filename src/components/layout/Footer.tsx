import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const serviceLinks = [
  { href: '/servicios/tutela', label: 'Acción de Tutela' },
  { href: '/servicios/derecho-peticion', label: 'Derecho de Petición' },
  { href: '/servicios/habeas-corpus', label: 'Habeas Corpus' },
  { href: '/servicios/accion-cumplimiento', label: 'Acción de Cumplimiento' },
  { href: '/servicios/accion-popular', label: 'Acción Popular' },
  { href: '/servicios/accion-grupo', label: 'Acción de Grupo' },
]

const infoLinks = [
  { href: '/blog', label: 'Blog Jurídico' },
  { href: '/privacidad', label: 'Política de Privacidad' },
  { href: '/terminos', label: 'Términos y Condiciones' },
  { href: '/evaluacion', label: 'Evaluación Gratuita' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-amber-500 rounded-lg">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-serif">Tutelapp</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Defendemos tus derechos constitucionales con argumentación jurídica sólida y experiencia comprobada en el sistema judicial colombiano.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-sky-500 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">+57 (601) 234-5678</p>
                  <p className="text-sm text-gray-400">+57 310 123 4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">contacto@tutelapp.co</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  Calle 85 # 11-44, Oficina 302<br />
                  Bogotá D.C., Colombia
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mb-6">
          <p className="text-xs text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-gray-400">Aviso Legal:</strong> La información contenida en este sitio web tiene carácter informativo y no constituye asesoría legal formal. La relación abogado-cliente se establece únicamente mediante un contrato formal de prestación de servicios. Tutelapp cumple con la Ley 1581 de 2012 (Habeas Data) y el Decreto 1377 de 2013 en el tratamiento de datos personales.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} Tutelapp. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">Ley 1581 de 2012</span>
            <span className="text-gray-700">•</span>
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Habeas Data
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terminos" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
