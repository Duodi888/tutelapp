import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones del servicio de Tutelapp.',
}

export default function TerminosPage() {
  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 font-serif mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-gray-500 mb-10">Última actualización: enero de 2025</p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 font-medium">
              ⚠️ Aviso legal: La información contenida en esta plataforma no constituye asesoría legal formal ni establece relación abogado-cliente. Cada caso es único y requiere análisis jurídico individualizado.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Objeto</h2>
            <p>Los presentes términos regulan el acceso y uso de la plataforma Tutelapp, prestadora de servicios de orientación jurídica especializada en acciones constitucionales en Colombia. Al acceder y utilizar esta plataforma, el usuario acepta íntegramente las presentes condiciones.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Servicios prestados</h2>
            <p className="mb-3">Tutelapp ofrece:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Orientación jurídica inicial gratuita mediante formulario de evaluación</li>
              <li>Representación legal en acciones de tutela, derechos de petición y otras acciones constitucionales</li>
              <li>Redacción y radicación de documentos jurídicos</li>
              <li>Seguimiento de casos ante entidades públicas y privadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Limitación de responsabilidad</h2>
            <p>Tutelapp no garantiza resultados específicos en ningún caso. Los resultados dependen de las circunstancias particulares de cada situación, las pruebas disponibles y las decisiones de las autoridades competentes. La plataforma y sus profesionales actuarán con la diligencia debida conforme a los estándares éticos de la profesión jurídica en Colombia.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Honorarios y pagos</h2>
            <p>La evaluación inicial es completamente gratuita y sin compromiso. Los honorarios por servicios profesionales serán acordados expresamente mediante contrato de prestación de servicios antes del inicio de cualquier actuación jurídica.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Propiedad intelectual</h2>
            <p>Todos los contenidos, plantillas, artículos y materiales publicados en esta plataforma son propiedad exclusiva de Tutelapp y están protegidos por las leyes de propiedad intelectual colombianas. Queda prohibida su reproducción sin autorización expresa.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Ley aplicable y jurisdicción</h2>
            <p>Los presentes términos se rigen por las leyes de la República de Colombia. Para cualquier controversia derivada del uso de esta plataforma, las partes se someten a la jurisdicción de los jueces y tribunales competentes de la ciudad de Bogotá D.C.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contacto</h2>
            <p>Para consultas sobre estos términos: <strong>legal@tutelapp.co</strong></p>
          </section>
        </div>
      </div>
    </section>
  )
}
