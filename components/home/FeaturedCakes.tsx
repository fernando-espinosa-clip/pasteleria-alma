// components/home/FeaturedCakes.tsx
import { products } from '@/lib/products'
import ProductCard from '@/components/menu/ProductCard'

export default function FeaturedCakes() {
  const featured = products.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="bg-oscuro py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="mb-3 text-center text-4xl text-crema"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Nuestros Favoritos
        </h2>
        <p className="mb-12 text-center text-crema/60">
          Los pasteles que más nos piden, ahora con precio incluido
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
