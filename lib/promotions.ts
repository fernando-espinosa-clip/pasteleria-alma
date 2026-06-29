// lib/promotions.ts
// Para editar promociones: modifica el array `promotions` abajo.
// Cada promo tiene slug único que define su URL: /promociones/[slug]

import { WA_NUMBER } from './products'

export type Promo = {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  badge?: string        // etiqueta destacada, ej. "¡Nuevo!" o "Edición limitada"
  cta: string           // texto del botón de WhatsApp
  waMessage: string     // mensaje pre-escrito para WhatsApp
  highlights: string[]  // puntos clave (3 máx)
  active: boolean       // false = no aparece en home ni en listado
}

export const promotions: Promo[] = [
  {
    slug: 'coyotitas',
    title: 'Coyotitas Artesanales',
    tagline: 'El antojo perfecto para compartir',
    description:
      'Delicadas hojaldres hechos a mano, rellenos de cajeta cremosa o pasta de guayaba casera. Crujientes por fuera, suaves por dentro y completamente adictivos. Caja de 16 piezas — ideales para llevar a la oficina, regalar o darte un gusto bien merecido.',
    image: '/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg',
    badge: 'Favorito del público',
    cta: 'Pedir mis Coyotitas',
    waMessage: 'Hola, me gustaría pedir una caja de Coyotitas. ¿Tienen de cajeta y guayaba disponibles?',
    highlights: [
      'Caja de 16 piezas · $240',
      'Disponibles en cajeta o guayaba',
      'Hojaldre artesanal recién horneado',
    ],
    active: true,
  },
  {
    slug: 'choux',
    title: 'Caja de Choux',
    tagline: 'Dulce elegancia en 30 piezas',
    description:
      'Pasta choux esponjosa y ligera, rellena de crema pastelera y espolvoreada con azúcar glass. 30 piezas presentadas en caja para regalar o para endulzar cualquier reunión. La repostería fina de siempre, en el tamaño perfecto para compartir.',
    image: '/images/promos/727903973_1592807332848981_5802314491853056188_n.jpg',
    badge: 'Ideal para eventos',
    cta: 'Pedir mi Caja de Choux',
    waMessage: 'Hola, me interesa pedir una caja de Choux (30 piezas). ¿Cuál es la disponibilidad?',
    highlights: [
      '30 piezas por caja · $450',
      'Crema pastelera + azúcar glass',
      'Perfecta para reuniones y regalos',
    ],
    active: true,
  },
  {
    slug: 'pastel-personalizado',
    title: 'Pastel Personalizado',
    tagline: 'Tu celebración, a tu manera',
    description:
      'Diseña el pastel de tus sueños con letras o números en el sabor que más te guste. Ideal para cumpleaños, graduaciones, aniversarios o cualquier ocasión que merece ser recordada. Pedido anticipado recomendado para asegurar tu fecha.',
    image: '/images/promos/727159796_1590111313118583_9194247995364022822_n.jpg',
    badge: '¡Pide el tuyo!',
    cta: 'Cotizar mi pastel',
    waMessage: 'Hola, me gustaría cotizar un pastel personalizado (letras/números). ¿Cuáles son los sabores disponibles y el tiempo de pedido?',
    highlights: [
      'Letras o números a elegir',
      'Chico $450 · Grande $750',
      'Pedido con anticipación de 2–3 días',
    ],
    active: true,
  },
]

export function getActivePromos(): Promo[] {
  return promotions.filter((p) => p.active)
}

export function getPromoBySlug(slug: string): Promo | undefined {
  return promotions.find((p) => p.slug === slug && p.active)
}

export function promoWaLink(promo: Promo): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(promo.waMessage)}`
}
