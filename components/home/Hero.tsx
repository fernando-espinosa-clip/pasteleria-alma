// components/home/Hero.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WA_GENERIC } from '@/lib/products'

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/promos/688839625_1552290140234034_3182341581577032379_n.jpg"
        alt="Pastelería Alma"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-oscuro/70" />

      {/* Contenido */}
      <div className="relative z-10 px-4 text-center text-crema">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/logo/299313316_481075924022133_5916712976143065516_n.jpg"
            alt="Logo Repostería Alma"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full border-4 border-crema/30"
          />
        </motion.div>

        <motion.h1
          className="mb-3 text-5xl font-bold text-crema md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Repostería Alma
        </motion.h1>

        <motion.p
          className="mb-2 text-lg text-turquesa"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Repostería Fina · Desde 1980
        </motion.p>

        <motion.p
          className="mb-8 text-base text-crema/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Los mejores recuerdos siempre saben a pastel
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Link
            href="/menu"
            className="rounded-full bg-turquesa px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ver Menú
          </Link>
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-rosa px-8 py-3 font-semibold text-crema transition-colors hover:bg-rosa"
          >
            <MessageCircle size={18} />
            Ordenar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
