import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getHomePromos } from '@/lib/promotions'
import PromoCard from '@/components/promociones/PromoCard'

export default function PromoSection() {
  const promos = getHomePromos()
  if (promos.length === 0) return null

  return (
    <section className="bg-crema py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className="font-playfair text-4xl text-texto"
            >
              Promociones
            </h2>
            <p className="mt-2 text-texto/60">
              Ofertas especiales y productos favoritos de temporada
            </p>
          </div>
          <Link
            href="/promociones"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-turquesa hover:underline"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((promo, i) => (
            <PromoCard key={promo.slug} promo={promo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
