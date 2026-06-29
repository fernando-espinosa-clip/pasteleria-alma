// components/menu/CategoryFilter.tsx
'use client'
import { useState, useMemo } from 'react'
import { products, CATEGORIES, type Category } from '@/lib/products'
import ProductCard from './ProductCard'

export default function CategoryFilter() {
  const [active, setActive] = useState<Category | 'todos'>('todos')

  const filtered = useMemo(
    () => active === 'todos' ? products : products.filter((p) => p.category === active),
    [active]
  )

  return (
    <div>
      {/* Pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            aria-pressed={active === value}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === value
                ? 'bg-turquesa text-white'
                : 'border border-turquesa text-turquesa hover:bg-turquesa hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-texto/40">
        * Precios sujetos a cambio. Consulta disponibilidad al (311) 210-8077.
      </p>
    </div>
  )
}
