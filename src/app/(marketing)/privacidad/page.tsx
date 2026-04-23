import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales conforme a la Ley 1581 de 2012.',
}

export default function PrivacidadPage() {
  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 font-serif mb-2">Política de Privacidad</h1>
        <p className="text-sm text-gray-500 mb-2">Conforme a la Ley 1581 de 2012 — Habeas Data Colombia</p>
        <p className="text-sm text-gray-500 mb-10">Última actualización: enero de 2025</p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable del tratamiento</h2>
            <p className="text-sm bg-blue-50 rounded-lg p-4">
              <strong>Tutelapp</strong><br />
              NIT: [Por definir]<br />
              Dirección: Bogotá D.C., Colombia<br />
              Email: privacidad@tutelapp.co<br />
              Teléfono: +57 (1) 000-0000
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Datos personales recopilados</h2>
            <p className="mb-3">Recopilamos los siguientes datos personales:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Descripción del caso jurídico</li>
              <li>Tipo de persona (natural o jurídica)</li>
              <li>Información sobre la situación legal consultada</li>
              <li>Datos de navegación (cookies técnicas)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalidad del tratamiento</h2>
            <p className="mb-3">Sus datos son tratados exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Prestar los servicios jurídicos solicitados</li>
              <li>Contactar al usuario para la evaluación inicial gratuita</li>
              <li>Enviar información relevante sobre su caso</li>
              <li>Mejorar nuestros servicios (análisis estadístico anonimizado)</li>
              <li>Enviar comunicaciones informativas de su interés (con su autorización)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Base legal del tratamiento</h2>
            <p>El tratamiento de sus datos se fundamenta en:</p>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Su consentimiento expreso otorgado al enviar el formulario</li>
              <li>La ejecución del contrato de prestación de servicios jurídicos</li>
              <li>El cumplimiento de obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Sus derechos (Ley 1581 de 2012)</h2>
            <p className="mb-3">Como titular de datos personales, usted tiene derecho a:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Acceso', desc: 'Conocer sus datos que tratamos' },
                { title: 'Corrección', desc: 'Rectificar datos inexactos' },
                { title: 'Supresión', desc: 'Solicitar eliminación de sus datos' },
                { title: 'Revocación', desc: 'Revocar el consentimiento dado' },
                { title: 'Portabilidad', desc: 'Recibir sus datos en formato digital' },
                { title: 'Queja', desc: 'Presentar queja ante la SIC' },
              ].map((right) => (
                <div key={right.title} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-sm text-gray-900">{right.title}</p>
                  <p className="text-xs text-gray-600">{right.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm">Para ejercer sus derechos, envíe su solicitud a: <strong>privacidad@tutelapp.co</strong>. Responderemos en un plazo máximo de 15 días hábiles.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Transferencia de datos</h2>
            <p>Sus datos no serán vendidos, cedidos ni transferidos a terceros sin su consentimiento expreso, salvo obligación legal o requerimiento de autoridad competente.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Tiempo de conservación</h2>
            <p>Conservamos sus datos durante el tiempo necesario para la prestación del servicio y por el período legalmente exigido (mínimo 5 años para documentos jurídicos, conforme al Código General del Proceso).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio y, con su consentimiento, cookies analíticas para mejorar la experiencia. Puede gestionar sus preferencias en el panel de cookies o en la configuración de su navegador.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Autoridad de control</h2>
            <p>Si considera que sus derechos han sido vulnerados, puede presentar reclamación ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong> — entidad encargada de la protección de datos personales en Colombia.</p>
          </section>
        </div>
      </div>
    </section>
  )
}
