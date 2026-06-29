// components/galeria/GalleryGrid.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryImages } from '@/lib/gallery'
import Lightbox from './Lightbox'

const INITIAL_COUNT = 12

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? galleryImages : galleryImages.slice(0, INITIAL_COUNT)
  const remaining = galleryImages.length - INITIAL_COUNT

  const prev = () =>
    setSelected((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null))

  const next = () =>
    setSelected((i) => (i !== null ? (i + 1) % galleryImages.length : null))

  return (
    <>
      <div
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        style={{ columnFill: 'balance' }}
      >
        {visible.map((img, i) => (
          <motion.button
            key={img.src}
            className="mb-4 block w-full overflow-hidden rounded-xl"
            onClick={() => setSelected(i)}
            aria-label={`Ver imagen: ${img.alt}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={450}
              className="w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.button>
        ))}
      </div>

      {!showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border-2 border-turquesa px-8 py-3 text-sm font-semibold text-turquesa transition-colors hover:bg-turquesa hover:text-white"
          >
            Ver {remaining} fotos más
          </button>
        </div>
      )}

      <Lightbox
        images={galleryImages}
        index={selected}
        onClose={() => setSelected(null)}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
