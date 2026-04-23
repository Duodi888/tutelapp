import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Tutelapp - Defensa de Derechos Constitucionales en Colombia',
    template: '%s | Tutelapp',
  },
  description:
    'Servicios jurídicos especializados en acciones constitucionales: tutelas, derechos de petición, habeas corpus y más. Evaluación gratuita. Abogados expertos en Colombia.',
  keywords: [
    'tutela colombia',
    'derecho de petición',
    'habeas corpus',
    'derechos constitucionales',
    'abogados constitucionalistas',
    'acción de tutela',
    'derechos fundamentales',
    'acción popular',
    'acción de grupo',
    'bogotá colombia',
  ],
  authors: [{ name: 'Tutelapp' }],
  creator: 'Tutelapp',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://tutelapp.co',
    title: 'Tutelapp - Defensa de Derechos Constitucionales',
    description:
      'Defendemos tus derechos constitucionales con argumentación jurídica sólida. Evaluación gratuita.',
    siteName: 'Tutelapp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tutelapp - Derechos Constitucionales Colombia',
    description: 'Defendemos tus derechos constitucionales. Evaluación gratuita.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
