// app/galeria/page.tsx
import type { Metadata } from 'next'
import GalleryGrid from '@/components/galeria/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galería',
  description:
    'Galería de pasteles y postres artesanales de Repostería Alma en Tepic, Nayarit. Pasteles decorados, pays, coyotitas y más hechos con amor.',
  openGraph: {
    title: 'Galería · Repostería Alma',
    description: 'Pasteles y postres artesanales hechos con amor en Tepic, Nayarit.',
    url: 'https://pasteleria-alma.vercel.app/galeria',
    images: [{ url: '/images/pasteles/492802878_1219592816837103_3831510740559207728_n.jpg', alt: 'Galería Repostería Alma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galería · Repostería Alma',
    description: 'Pasteles y postres artesanales hechos con amor en Tepic, Nayarit.',
    images: ['/images/pasteles/492802878_1219592816837103_3831510740559207728_n.jpg'],
  },
}

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-oscuro py-16 text-center text-crema">
        <h1
          className="mb-3 text-5xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Galería
        </h1>
        <p className="text-crema/60">
          Una probadita visual de lo que hacemos con amor
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <GalleryGrid />
      </div>
    </div>
  )
}
