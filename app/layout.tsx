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

export const metadata: Metadata = {
  metadataBase: new URL('https://pasteleria-alma.vercel.app'),
  title: 'Repostería Alma · Tepic, Nayarit',
  description:
    'Repostería fina artesanal desde 1980 en Tepic, Nayarit. Pasteles, pays y postres hechos con amor. Pedidos al (311) 210-8077.',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/apple-touch-icon.jpg',
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon.jpg' },
    ],
  },
  openGraph: {
    title: 'Repostería Alma · Tepic, Nayarit',
    description: 'Pasteles y postres artesanales desde 1980.',
    images: ['/images/logo/299313316_481075924022133_5916712976143065516_n.jpg'],
  },
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
      </body>
    </html>
  )
}
