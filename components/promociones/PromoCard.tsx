'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { type Promo, promoWaLink } from '@/lib/promotions'

type Props = { promo: Promo; index?: number }

export default function PromoCard({ promo, index = 0 }: Props) {
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl bg-crema shadow-md"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Imagen */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {promo.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-rosa px-3 py-1 text-xs font-semibold text-white shadow">
            {promo.badge}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-turquesa">
          {promo.tagline}
        </p>
        <h3 className="font-dancing mb-2 text-3xl text-oscuro">{promo.title}</h3>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-texto/70">
          {promo.description}
        </p>

        {/* Highlights */}
        <ul className="mb-5 space-y-1">
          {promo.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-texto/80">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rosa" />
              {h}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-auto flex flex-col gap-2">
          <a
            href={promoWaLink(promo)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} />
            {promo.cta}
          </a>
          <Link
            href={`/promociones/${promo.slug}`}
            className="flex items-center justify-center gap-1 rounded-full border border-turquesa py-2.5 text-sm font-semibold text-turquesa transition-colors hover:bg-turquesa hover:text-white"
          >
            Ver detalle
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
