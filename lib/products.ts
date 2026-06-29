// lib/products.ts

export type Category = 'pasteles' | 'pays' | 'postres' | 'temporada'

export type Product = {
  id: string
  name: string
  description?: string
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
    description: 'Esponjoso bizcocho empapado en tres tipos de leche — entera, condensada y evaporada — cubierto con crema batida ligera. Un clásico irresistible que se deshace en cada bocado.',
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
    description: 'Húmedo pastel de zanahoria con trozos de nuez, cubierto de un suave betún de crema blanca. El equilibrio perfecto entre lo dulce y lo especiado, con esa textura esponjosa que te conquista desde la primera rebanada.',
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
    description: 'Intenso sabor a caramelo en cada capa, decorado con gajos de naranja o mandarina cristalizada que le dan un toque cítrico único. Dulce, dorado y completamente adictivo.',
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
    description: 'Rico bizcocho de chocolate negro cubierto con betún de chocolate, coronado con cerezas y nuez. Para los amantes del chocolate que no se conforman con poco.',
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
    description: 'El icónico pastel de chocolate con relleno de coco y nuez, cubierto generosamente de coco rallado. Un clásico de la repostería fina que nunca pasa de moda y que todos en la mesa van a pedir dos veces.',
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
    description: 'Inspirado en el chocolate favorito: capas de cajeta cremosa, cacahuate tostado y chocolate que explotan de sabor en cada bocado. Dulce, salado y completamente irresistible.',
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
    description: 'Pastel rectangular con las tres capas clásicas — chocolate, vainilla y fresa — cubierto de betún de chocolate con crema y nuez. Tres sabores en un solo pastel, ideal para quienes no pueden decidirse.',
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
    description: 'Esponjoso pastel rectangular cubierto con fresas frescas y crema batida. Ligero, fresco y tan bonito que da lástima comerlo — aunque solo dura unos minutos en la mesa.',
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
    description: 'Cremoso pastel de queso crema con base de galleta, suave y denso en su punto exacto. El favorito de quienes buscan algo menos dulce y más elegante, con ese sabor que no se olvida.',
    category: 'pasteles',
    priceSingle: 800,
    servingsLarge: 18,
    image: '/images/pasteles/605864346_1437952691667780_6584188923336331017_n.jpg',
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    description: 'Sabor tropical en cada capa: piña jugosa y coco cremoso que se combinan en un bizcocho esponjoso. Un pastel que te transporta a la playa con el primer bocado.',
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
    description: 'Suave combinación de café intenso y chocolate en un bizcocho esponjoso. La opción perfecta para los amantes del café que buscan un dulce a la altura de su buen gusto.',
    category: 'pasteles',
    priceSmall: 390,
    servingsSmall: 10,
    image: '/images/pasteles/606875229_1437952671667782_4304705994570956892_n.jpg',
  },
  {
    id: 'bavaria',
    name: 'Bavaria',
    description: 'Pastel con crema bávara sedosa que combina la ligereza de una mousse con la riqueza de una crema pastelera. Elegante, delicado y el tipo de pastel que impresiona en cualquier ocasión.',
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
    description: 'Rebosante de cajeta artesanal en cada capa y en el betún exterior. Dulce de leche en su máxima expresión, hecho para los amantes del caramelo mexicano que saben lo que quieren.',
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
    description: 'El clásico postre mexicano elevado a pastel: capas de galletas marías con crema de guayaba y vainilla, fresco y ligero. Perfecto para quienes buscan un sabor nostálgico y reconfortante.',
    category: 'pasteles',
    priceSingle: 580,
    servingsLarge: 20,
    image: '/images/pasteles/598678718_1421474453315604_7765476950206635319_n.jpg',
  },
  {
    id: 'ciruela',
    name: 'Ciruela',
    description: 'Bizcocho aromático con trozos de ciruela que aportan un toque agridulce único y sofisticado. Para paladares que buscan algo diferente y encuentran en la fruta el mejor complemento del dulce.',
    category: 'pasteles',
    priceSingle: 750,
    servingsLarge: 20,
    image: '/images/pasteles/599001990_1421474073315642_5161416564832637875_n.jpg',
  },
  // ── PAYS ──────────────────────────────────────────────────────────
  {
    id: 'pay-fresa',
    name: 'Pay de Fresa',
    description: 'Jugosas fresas frescas sobre crema suave en pasta quebrada dorada y crujiente. La combinación clásica que nunca pasa de moda y que siempre genera sonrisas en la mesa.',
    category: 'pays',
    priceSmall: 300,
    priceLarge: 420,
    image: '/images/pasteles/492362338_1217813803681671_7516248724947940818_n.jpg',
  },
  {
    id: 'pay-manzana',
    name: 'Pay de Manzana',
    description: 'Manzanas caramelizadas con canela envueltas en masa dorada artesanal, con el aroma de recién horneado que lo dice todo. Tradicional, reconfortante y simplemente perfecto.',
    category: 'pays',
    priceSmall: 300,
    priceLarge: 420,
    image: '/images/pasteles/605683384_1437952661667783_5625751010052767569_n.jpg',
  },
  {
    id: 'pay-guayaba',
    name: 'Pay de Guayaba',
    description: 'El sabor inconfundible de la guayaba en su punto de madurez, sobre crema y pasta quebrada artesanal. Fruta mexicana en toda su gloria, un pay que te recuerda a casa.',
    category: 'pays',
    priceSmall: 300,
    priceLarge: 450,
    image: '/images/pasteles/492015302_1217812753681776_6012510888607196195_n.jpg',
  },
  // ── POSTRES ───────────────────────────────────────────────────────
  {
    id: 'coyotitas-cajeta',
    name: 'Coyotitas de Cajeta',
    description: 'Delicadas hojaldres artesanales rellenas de cajeta cremosa, crujientes por fuera y suaves por dentro. Caja de 16 piezas perfectas para compartir — aunque es difícil no comérselas todas.',
    category: 'postres',
    priceSingle: 240,
    image: '/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg',
  },
  {
    id: 'coyotitas-guayaba',
    name: 'Coyotitas de Guayaba',
    description: 'Hojaldres artesanales rellenos de pasta de guayaba casera, con esa combinación agridulce que te tiene de regreso por más. 16 piezas por caja, ideales para el café de la tarde.',
    category: 'postres',
    priceSingle: 240,
    image: '/images/promos/654567413_1505791144883934_6310988627265494322_n.jpg',
  },
  {
    id: 'choux',
    name: 'Choux',
    description: '30 piezas de pasta choux esponjosa rellenas de crema pastelera y espolvoreadas con azúcar glass. Ligeros como una nube, elegantes como la repostería fina que llevan 44 años haciendo.',
    category: 'postres',
    priceSingle: 450,
    image: '/images/otros/492694639_1217812717015113_4493845530138638881_n.jpg',
  },
  {
    id: 'letras-numeros',
    name: 'Letras y Números',
    description: 'Pastel de diseño personalizado formado por letras o números, decorado con crema y fruta fresca. El detalle perfecto para cumpleaños, graduaciones y cualquier celebración que merece ser recordada.',
    category: 'postres',
    priceSmall: 450,
    priceLarge: 750,
    image: '/images/pasteles/493289371_1219592633503788_1924566334862078720_n.jpg',
  },
  // ── TEMPORADA ─────────────────────────────────────────────────────
  {
    id: 'rosca-reyes',
    name: 'Rosca de Reyes',
    description: 'La tradicional rosca de naranja con muñequito escondido, para hasta 16 personas. Perfecta para celebrar el Día de Reyes en familia — ¡a ver quién paga los tamales!',
    category: 'temporada',
    priceSingle: 550,
    image: '/images/pasteles/104096885_4038706029537040_6003997708447867714_n.jpg',
  },
  {
    id: 'fruit-cake',
    name: 'Rosca Navideña Fruit Cake',
    description: 'Edición limitada de temporada decembrina: bizcocho oscuro con frutos secos macerados en cognac y ralladura de naranja. Sofisticado, festivo y el tipo de regalo que se recuerda.',
    category: 'temporada',
    priceSingle: 600,
    image: '/images/pasteles/596720815_1421474449982271_4300480181510148874_n.jpg',
  },
  {
    id: 'pastel-corazon',
    name: 'Pastel de Corazón',
    description: 'Un pastel en forma de corazón para San Valentín o cualquier día que quieras decirle a alguien cuánto lo quieres. Dulce por fuera, más dulce por dentro — igual que tú.',
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
