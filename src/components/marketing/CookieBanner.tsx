'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Settings, Check } from 'lucide-react'

type CookieConsent = 'all' | 'necessary' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null)
  const [showConfig, setShowConfig] = useState(false)
  const [analyticsCookies, setAnalyticsCookies] = useState(true)
  const [marketingCookies, setMarketingCookies] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    } else {
      setConsent(stored as CookieConsent)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    setConsent('all')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    setConsent('necessary')
    setIsVisible(false)
  }

  const handleSaveConfig = () => {
    const value = analyticsCookies || marketingCookies ? 'all' : 'necessary'
    localStorage.setItem('cookie-consent', value)
    setConsent(value)
    setIsVisible(false)
  }

  if (!isVisible || consent !== null) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-label="Aviso de cookies"
      aria-modal="true"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {!showConfig ? (
          /* Main Banner */
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-amber-100 rounded-xl flex-shrink-0">
                <Cookie className="h-5 w-5 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-2">Usamos cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes aceptar todas, rechazar las no esenciales o configurar tus preferencias. Para más información, consulta nuestra{' '}
                  <Link href="/privacidad" className="text-blue-700 underline hover:text-blue-900">
                    Política de Privacidad
                  </Link>{' '}
                  (Ley 1581 de 2012).
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    <Check className="h-4 w-4" />
                    Aceptar todas
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    <X className="h-4 w-4" />
                    Rechazar opcionales
                  </button>
                  <button
                    onClick={() => setShowConfig(true)}
                    className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    <Settings className="h-4 w-4" />
                    Configurar
                  </button>
                </div>
              </div>
              <button
                onClick={handleReject}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          /* Configuration Panel */
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-700" />
                Configurar cookies
              </h3>
              <button
                onClick={() => setShowConfig(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Volver"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary - always on */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Cookies esenciales</p>
                  <p className="text-xs text-gray-500 mt-0.5">Necesarias para el funcionamiento del sitio</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-600 font-medium">Siempre activas</span>
                  <div className="w-10 h-6 bg-green-500 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" />
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Cookies analíticas</p>
                  <p className="text-xs text-gray-500 mt-0.5">Nos ayudan a mejorar el sitio web</p>
                </div>
                <button
                  onClick={() => setAnalyticsCookies(!analyticsCookies)}
                  className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
                    analyticsCookies ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
                      analyticsCookies ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Cookies de marketing</p>
                  <p className="text-xs text-gray-500 mt-0.5">Para mostrarte contenido relevante</p>
                </div>
                <button
                  onClick={() => setMarketingCookies(!marketingCookies)}
                  className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
                    marketingCookies ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
                      marketingCookies ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSaveConfig}
                className="flex-1 bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                Guardar preferencias
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
