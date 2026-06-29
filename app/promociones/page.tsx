import type { Metadata } from 'next'
import { getActivePromos } from '@/lib/promotions'
import PromoCard from '@/components/promociones/PromoCard'

export const metadata: Metadata = {
  title: 'Promociones',
  description:
    'Promociones especiales de Repostería Alma en Tepic, Nayarit. Coyotitas artesanales, Choux, pasteles personalizados y más. Pide por WhatsApp.',
  openGraph: {
    title: 'Promociones · Repostería Alma',
    description: 'Ofertas especiales y productos favoritos de Repostería Alma, Tepic.',
    url: 'https://pasteleria-alma.vercel.app/promociones',
    images: [{ url: '/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg', alt: 'Promociones Repostería Alma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promociones · Repostería Alma',
    description: 'Ofertas especiales y productos favoritos de Repostería Alma, Tepic.',
    images: ['/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg'],
  },
}

export default function PromocionesPage() {
  const promos = getActivePromos()

  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-oscuro py-16 text-center text-crema">
        <h1 className="font-playfair mb-3 text-5xl">Promociones</h1>
        <p className="text-crema/60">Ofertas especiales y productos favoritos de temporada</p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((promo, i) => (
            <PromoCard key={promo.slug} promo={promo} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
