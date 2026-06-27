// lib/products.ts

export type Category = 'pasteles' | 'pays' | 'postres' | 'temporada'

export type Product = {
  id: string
  name: string
  category: Category
  priceSmall?: number
  priceLarge?: number
  priceSingle?: number
  servingsSmall?: number
  servingsLarge?: number
  image: string
  featured?: boolean
}

export const products: Product[] = [
  // ── PASTELES ─────────────────────────────────────────────────────
  {
    id: 'tres-leches',
    name: 'Tres Leches',
    category: 'pasteles',
    priceSmall: 380,
    priceLarge: 700,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/597242972_1421474129982303_2133308616620734930_n.jpg',
    featured: true,
  },
  {
    id: 'zanahoria',
    name: 'Zanahoria',
    category: 'pasteles',
    priceSmall: 480,
    priceLarge: 750,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/597564372_1421474399982276_7733080462358370885_n.jpg',
    featured: true,
  },
  {
    id: 'caramelo',
    name: 'Caramelo',
    category: 'pasteles',
    priceSmall: 480,
    priceLarge: 750,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/598039097_1421474076648975_4228461170551919998_n.jpg',
    featured: true,
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    category: 'pasteles',
    priceSmall: 480,
    priceLarge: 750,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/492802878_1219592816837103_3831510740559207728_n.jpg',
    featured: true,
  },
  {
    id: 'aleman',
    name: 'Alemán',
    category: 'pasteles',
    priceSmall: 480,
    priceLarge: 750,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/597207869_1421474176648965_7651194231580024369_n.jpg',
    featured: true,
  },
  {
    id: 'snickers',
    name: 'Snickers',
    category: 'pasteles',
    priceSmall: 500,
    priceLarge: 800,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/605551223_1437952545001128_7319051782652227913_n.jpg',
    featured: true,
  },
  {
    id: 'napolitano',
    name: 'Napolitano',
    category: 'pasteles',
    priceSmall: 500,
    priceLarge: 800,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/596414401_1421474223315627_2321950190764703717_n.jpg',
  },
  {
    id: 'ambrosio',
    name: 'Ambrosio',
    category: 'pasteles',
    priceSmall: 500,
    priceLarge: 800,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/605722458_1437952521667797_3265221220197124942_n.jpg',
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    category: 'pasteles',
    priceSingle: 800,
    servingsLarge: 18,
    image: '/images/pasteles/605864346_1437952691667780_6584188923336331017_n.jpg',
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    category: 'pasteles',
    priceSmall: 450,
    priceLarge: 750,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/605604877_1437952698334446_1038422477920564034_n.jpg',
  },
  {
    id: 'moka',
    name: 'Moka',
    category: 'pasteles',
    priceSmall: 390,
    servingsSmall: 10,
    image: '/images/pasteles/606875229_1437952671667782_4304705994570956892_n.jpg',
  },
  {
    id: 'bavaria',
    name: 'Bavaria',
    category: 'pasteles',
    priceSmall: 450,
    priceLarge: 750,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/608421708_1437952541667795_6296662245879781618_n.jpg',
  },
  {
    id: 'cajetoso',
    name: 'Cajetoso',
    category: 'pasteles',
    priceSmall: 430,
    priceLarge: 700,
    servingsSmall: 10,
    servingsLarge: 18,
    image: '/images/pasteles/492494894_1219592886837096_2788502500663742586_n.jpg',
  },
  {
    id: 'carlota',
    name: 'Carlota',
    category: 'pasteles',
    priceSingle: 580,
    servingsLarge: 20,
    image: '/images/pasteles/598678718_1421474453315604_7765476950206635319_n.jpg',
  },
  {
    id: 'ciruela',
    name: 'Ciruela',
    category: 'pasteles',
    priceSingle: 750,
    servingsLarge: 20,
    image: '/images/pasteles/599001990_1421474073315642_5161416564832637875_n.jpg',
  },
  // ── PAYS ──────────────────────────────────────────────────────────
  {
    id: 'pay-fresa',
    name: 'Pay de Fresa',
    category: 'pays',
    priceSmall: 300,
    priceLarge: 420,
    image: '/images/pasteles/492362338_1217813803681671_7516248724947940818_n.jpg',
  },
  {
    id: 'pay-manzana',
    name: 'Pay de Manzana',
    category: 'pays',
    priceSmall: 300,
    priceLarge: 420,
    image: '/images/pasteles/605683384_1437952661667783_5625751010052767569_n.jpg',
  },
  {
    id: 'pay-guayaba',
    name: 'Pay de Guayaba',
    category: 'pays',
    priceSmall: 300,
    priceLarge: 450,
    image: '/images/pasteles/492015302_1217812753681776_6012510888607196195_n.jpg',
  },
  // ── POSTRES ───────────────────────────────────────────────────────
  {
    id: 'coyotitas-cajeta',
    name: 'Coyotitas de Cajeta',
    category: 'postres',
    priceSingle: 240,
    image: '/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg',
  },
  {
    id: 'coyotitas-guayaba',
    name: 'Coyotitas de Guayaba',
    category: 'postres',
    priceSingle: 240,
    image: '/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg',
  },
  {
    id: 'choux',
    name: 'Choux',
    category: 'postres',
    priceSingle: 450,
    image: '/images/otros/492694639_1217812717015113_4493845530138638881_n.jpg',
  },
  {
    id: 'letras-numeros',
    name: 'Letras y Números',
    category: 'postres',
    priceSmall: 450,
    priceLarge: 750,
    image: '/images/pasteles/493289371_1219592633503788_1924566334862078720_n.jpg',
  },
  // ── TEMPORADA ─────────────────────────────────────────────────────
  {
    id: 'rosca-reyes',
    name: 'Rosca de Reyes',
    category: 'temporada',
    priceSingle: 550,
    image: '/images/pasteles/104096885_4038706029537040_6003997708447867714_n.jpg',
  },
  {
    id: 'fruit-cake',
    name: 'Rosca Navideña Fruit Cake',
    category: 'temporada',
    priceSingle: 600,
    image: '/images/pasteles/596720815_1421474449982271_4300480181510148874_n.jpg',
  },
  {
    id: 'pastel-corazon',
    name: 'Pastel de Corazón',
    category: 'temporada',
    priceSmall: 430,
    priceLarge: 700,
    image: '/images/promos/492199361_1218554053607646_6522811989118148089_n.jpg',
  },
]

export const CATEGORIES: { value: Category | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'pasteles', label: 'Pasteles' },
  { value: 'pays', label: 'Pays' },
  { value: 'postres', label: 'Postres' },
  { value: 'temporada', label: 'Temporada' },
]

export const WA_NUMBER = '5213111358437'
export const WA_GENERIC = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, me gustaría hacer un pedido en Repostería Alma.')}`
export const TEL = 'tel:+523112108077'

export function waLink(productName: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola, me interesa pedir el ${productName}.`)}`
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-MX')}`
}
