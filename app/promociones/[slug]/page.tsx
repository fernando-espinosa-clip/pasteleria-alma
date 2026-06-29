import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowLeft, CheckCircle } from 'lucide-react'
import { promotions, getPromoBySlug, promoWaLink } from '@/lib/promotions'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return promotions
    .filter((p) => p.active)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const promo = getPromoBySlug(slug)
  if (!promo) return {}

  return {
    title: promo.title,
    description: promo.description.slice(0, 160),
    openGraph: {
      title: `${promo.title} · Repostería Alma`,
      description: promo.tagline,
      url: `https://pasteleria-alma.vercel.app/promociones/${promo.slug}`,
      images: [{ url: promo.image, alt: promo.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${promo.title} · Repostería Alma`,
      description: promo.tagline,
      images: [promo.image],
    },
  }
}

export default async function PromoPage({ params }: Props) {
  const { slug } = await params
  const promo = getPromoBySlug(slug)
  if (!promo) notFound()

  return (
    <div className="min-h-screen bg-crema">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Breadcrumb */}
        <Link
          href="/promociones"
          className="mb-8 flex items-center gap-1 text-sm text-texto/50 hover:text-turquesa"
        >
          <ArrowLeft size={14} />
          Todas las promociones
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          {/* Imagen */}
          <div className="relative h-72 w-full sm:h-96">
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            {promo.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-rosa px-4 py-1.5 text-sm font-semibold text-white shadow">
                {promo.badge}
              </span>
            )}
          </div>

          {/* Contenido */}
          <div className="p-8">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-turquesa">
              {promo.tagline}
            </p>
            <h1 className="font-dancing mb-4 text-5xl text-oscuro">{promo.title}</h1>

            <p className="mb-8 leading-relaxed text-texto/70">{promo.description}</p>

            {/* Highlights */}
            <div className="mb-8 rounded-2xl bg-crema p-6">
              <h2 className="font-playfair mb-4 text-xl text-oscuro">¿Qué incluye?</h2>
              <ul className="space-y-3">
                {promo.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-texto/80">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-turquesa" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={promoWaLink(promo)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-12"
            >
              <MessageCircle size={20} />
              {promo.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
