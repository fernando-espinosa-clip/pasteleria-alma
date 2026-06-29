// app/menu/page.tsx
import type { Metadata } from 'next'
import CategoryFilter from '@/components/menu/CategoryFilter'

export const metadata: Metadata = {
  title: 'Menú',
  description:
    'Catálogo completo de pasteles, pays y postres artesanales de Repostería Alma con precios. Tres Leches, Snickers, Alemán, Cheesecake y más en Tepic, Nayarit.',
  openGraph: {
    title: 'Menú · Repostería Alma',
    description: 'Catálogo de pasteles, pays y postres artesanales con precios en Tepic, Nayarit.',
    url: 'https://pasteleria-alma.vercel.app/menu',
    images: [{ url: '/images/pasteles/597242972_1421474129982303_2133308616620734930_n.jpg', alt: 'Pasteles Repostería Alma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menú · Repostería Alma',
    description: 'Catálogo de pasteles, pays y postres artesanales con precios en Tepic, Nayarit.',
    images: ['/images/pasteles/597242972_1421474129982303_2133308616620734930_n.jpg'],
  },
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-oscuro">
      {/* Header */}
      <div className="bg-oscuro py-16 text-center text-crema">
        <h1
          className="mb-3 text-5xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Nuestro Menú
        </h1>
        <p className="text-crema/60">
          Pasteles, pays y postres artesanales hechos con amor
        </p>
      </div>

      {/* Catálogo */}
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <CategoryFilter />
      </div>
    </div>
  )
}
