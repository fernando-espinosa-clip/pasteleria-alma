// app/galeria/page.tsx
import type { Metadata } from 'next'
import GalleryGrid from '@/components/galeria/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galería · Repostería Alma — Tepic, Nayarit',
  description:
    'Galería de pasteles y postres artesanales de Repostería Alma. Pasteles decorados, pays y más.',
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
