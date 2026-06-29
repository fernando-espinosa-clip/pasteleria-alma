// components/menu/ProductCard.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { type Product, waLink, formatPrice } from '@/lib/products'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  const { name, description, priceSmall, priceLarge, priceSingle, servingsSmall, servingsLarge, image } = product
  const [expanded, setExpanded] = useState(false)

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
        <h3 className="font-dancing mb-2 text-3xl text-rosa">
          {name}
        </h3>

        {/* Descripción */}
        {description && (
          <div className="mb-3">
            <p className={`text-sm text-crema/70 leading-relaxed ${expanded ? '' : 'line-clamp-2'}`}>
              {description}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-xs text-turquesa hover:underline focus:outline-none"
            >
              {expanded ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        )}

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

        {/* CTAs */}
        <div className="flex flex-col gap-2">
          <a
            href={waLink(name, 'order')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} />
            Hacer pedido
          </a>
          <a
            href={waLink(name, 'info')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-rosa py-2 text-sm font-semibold text-rosa transition-colors hover:bg-rosa hover:text-white"
          >
            <MessageCircle size={16} />
            Más información
          </a>
        </div>
      </div>
    </motion.div>
  )
}
