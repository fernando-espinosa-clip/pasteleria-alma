// app/menu/page.tsx
import type { Metadata } from 'next'
import CategoryFilter from '@/components/menu/CategoryFilter'

export const metadata: Metadata = {
  title: 'Menú · Repostería Alma — Tepic, Nayarit',
  description:
    'Catálogo completo de pasteles, pays y postres de Repostería Alma. Pasteles artesanales con precios en Tepic, Nayarit.',
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
