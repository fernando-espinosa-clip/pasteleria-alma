// Fuente de datos: data/promotions.json
// Para agregar, quitar o pausar una promo edita ese archivo.
// active: false → la promo no aparece en ninguna parte del sitio.

import { WA_NUMBER } from './products'
import rawPromos from '@/data/promotions.json'

export type Promo = {
  slug: string
  active: boolean
  showInHome: boolean
  title: string
  tagline: string
  description: string
  image: string
  badge?: string
  cta: string
  waMessage: string
  highlights: string[]
}

export const promotions: Promo[] = rawPromos as Promo[]

export function getActivePromos(): Promo[] {
  return promotions.filter((p) => p.active)
}

export function getHomePromos(): Promo[] {
  return promotions.filter((p) => p.active && p.showInHome)
}

export function getPromoBySlug(slug: string): Promo | undefined {
  return promotions.find((p) => p.slug === slug && p.active)
}

export function promoWaLink(promo: Promo, intent: 'order' | 'info' = 'order'): string {
  const message =
    intent === 'order'
      ? promo.waMessage
      : `Hola, me gustaría saber más información sobre *${promo.title}*. ¿Me pueden ayudar?`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
