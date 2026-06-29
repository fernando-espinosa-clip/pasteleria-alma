import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/shared/WhatsAppFAB'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://pasteleria-alma.vercel.app'
const OG_IMAGE = '/images/logo/299313316_481075924022133_5916712976143065516_n.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Repostería Alma · Tepic, Nayarit',
    template: '%s · Repostería Alma',
  },
  description:
    'Repostería fina artesanal desde 1980 en Tepic, Nayarit. Pasteles, pays y postres hechos con amor. Pedidos al (311) 210-8077.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.jpg',
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon.jpg' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: BASE_URL,
    siteName: 'Repostería Alma',
    title: 'Repostería Alma · Tepic, Nayarit',
    description: 'Pasteles y postres artesanales desde 1980 en Tepic, Nayarit.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Repostería Alma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repostería Alma · Tepic, Nayarit',
    description: 'Pasteles y postres artesanales desde 1980 en Tepic, Nayarit.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Repostería Alma',
  description: 'Repostería fina artesanal desde 1980 en Tepic, Nayarit. Pasteles, pays y postres hechos con amor.',
  url: 'https://pasteleria-alma.vercel.app',
  telephone: '+523112108077',
  image: 'https://pasteleria-alma.vercel.app/images/logo/299313316_481075924022133_5916712976143065516_n.jpg',
  priceRange: '$$',
  servesCuisine: 'Repostería artesanal',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Roble #298, entre Pino y Capomo, Col. San Juan',
    addressLocality: 'Tepic',
    addressRegion: 'Nayarit',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.5045,
    longitude: -104.8956,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:30',
    },
  ],
  sameAs: ['https://www.facebook.com/pasteleriaalmatepic'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}
    >
      <body className="font-[var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  )
}
