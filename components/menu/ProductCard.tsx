// components/menu/ProductCard.tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { type Product, waLink, formatPrice } from '@/lib/products'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  const { name, priceSmall, priceLarge, priceSingle, servingsSmall, servingsLarge, image } = product

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-oscuro text-crema shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Foto */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3
          className="mb-2 text-3xl text-rosa"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          {name}
        </h3>

        {/* Precios */}
        <div className="mb-4 space-y-1 text-sm">
          {priceSingle ? (
            <p>
              <span className="text-crema/60">Precio: </span>
              <span className="font-semibold text-turquesa">{formatPrice(priceSingle)}</span>
              {servingsLarge && <span className="text-crema/50"> · {servingsLarge} reb.</span>}
            </p>
          ) : (
            <>
              {priceSmall && (
                <p>
                  <span className="text-crema/60">Chico: </span>
                  <span className="font-semibold text-turquesa">{formatPrice(priceSmall)}</span>
                  {servingsSmall && <span className="text-crema/50"> · {servingsSmall} reb.</span>}
                </p>
              )}
              {priceLarge && (
                <p>
                  <span className="text-crema/60">Grande: </span>
                  <span className="font-semibold text-turquesa">{formatPrice(priceLarge)}</span>
                  {servingsLarge && <span className="text-crema/50"> · {servingsLarge} reb.</span>}
                </p>
              )}
            </>
          )}
        </div>

        {/* CTA */}
        <a
          href={waLink(name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-rosa py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle size={16} />
          Pedir por WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
