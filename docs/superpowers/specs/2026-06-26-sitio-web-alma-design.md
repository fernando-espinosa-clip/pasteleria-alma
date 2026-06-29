# Diseño: Sitio Web Pastelería Alma

**Fecha:** 2026-06-26  
**Stack:** Next.js 15 · Tailwind CSS v4 · framer-motion · embla-carousel · lucide-react  
**Deploy:** Vercel (static export)  
**Idioma:** Español únicamente  

---

## Objetivo

Sitio web informativo/vitrina para Repostería Alma (Tepic, Nayarit). Sin e-commerce. El objetivo es mostrar el catálogo con precios, galería de productos y facilitar el contacto por WhatsApp/teléfono.

---

## Identidad Visual

| Token | Valor |
|---|---|
| Color primario (turquesa) | `#29ABE2` |
| Color secundario (rosa) | `#F06EB5` |
| Fondo base (crema) | `#FAF7F2` |
| Fondo oscuro (showcase) | `#1C1009` |
| Texto principal | `#1A1A1A` |
| Texto sobre oscuro | `#FAF7F2` |

**Tipografías:**
- Títulos: `Playfair Display` (serif elegante — Google Fonts)
- Nombres de productos: `Great Vibes` o `Dancing Script` (script)
- Cuerpo / precios: `Inter` (sans-serif limpia)

**Estilo:** Artesanal moderno — fondos crema con secciones de showcase oscuras, acentos turquesa y rosa del logo.

---

## Arquitectura

```
pasteleria-alma/
├── app/
│   ├── layout.tsx            # Root layout: Navbar + Footer + WhatsAppFAB
│   ├── globals.css           # Tailwind base + variables CSS de marca
│   ├── page.tsx              # Home
│   ├── menu/
│   │   └── page.tsx          # Catálogo completo
│   ├── galeria/
│   │   └── page.tsx          # Galería de fotos
│   └── contacto/
│       └── page.tsx          # Mapa + info de contacto
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Logo + links + botón WhatsApp
│   │   └── Footer.tsx        # Dirección, horario, redes sociales
│   ├── home/
│   │   ├── Hero.tsx          # Full-screen hero con foto y CTA
│   │   ├── TrustBar.tsx      # "Desde 1980" + 3 íconos de valor
│   │   ├── FeaturedCakes.tsx # 6 pasteles destacados
│   │   └── HomeCTA.tsx       # Sección final con botón WhatsApp
│   ├── menu/
│   │   ├── CategoryFilter.tsx # Filtros: Pasteles · Pays · Postres · Temporada
│   │   └── ProductCard.tsx    # Card: foto + nombre + precio ch/gde + CTA
│   ├── galeria/
│   │   ├── GalleryGrid.tsx   # Grid masonry con framer-motion
│   │   └── Lightbox.tsx      # Modal al hacer click en foto
│   ├── contacto/
│   │   └── ContactInfo.tsx   # Mapa + horario + teléfono + WhatsApp
│   └── shared/
│       └── WhatsAppFAB.tsx   # Botón flotante WhatsApp (todas las páginas)
├── lib/
│   └── products.ts           # Catálogo como array de objetos TypeScript
└── public/
    └── images/               # Fotos copiadas desde /images del repo
        ├── logo/
        ├── pasteles/
        ├── promos/
        ├── decorados/
        └── otros/
```

---

## Datos del Catálogo (`lib/products.ts`)

Estructura de cada producto:

```ts
type Product = {
  id: string
  name: string         // "Pastel Tres Leches"
  category: 'pasteles' | 'pays' | 'postres' | 'temporada'
  priceSmall?: number  // precio chico (10 rebanadas)
  priceLarge?: number  // precio grande (18-20 rebanadas)
  priceSingle?: number // precio único (cuando aplica)
  servingsSmall?: number
  servingsLarge?: number
  image: string        // ruta a /public/images/...
  featured?: boolean   // mostrar en Home
}
```

**Catálogo inicial (de SITIO_WEB_INFO.md):**

Pasteles: Tres Leches, Zanahoria, Caramelo, Chocolate, Alemán, Snickers, Napolitano, Ambrosio, Cheesecake, Piña Colada, Moka, Lane, Bavaria, Cajetoso, Carlota, Ciruela.

Pays: Fresa, Manzana, Guayaba.

Postres: Coyotitas (cajeta/guayaba), Choux, Letras y Números.

Temporada: Rosca de Reyes, Rosca Navideña Fruit Cake, Pasteles de Corazón (San Valentín).

---

## Páginas

### `/` Home

1. **Hero** — Imagen lifestyle full-screen con overlay oscuro. Logo centrado + frase + dos botones: "Ver Menú" (primario) y "Ordenar por WhatsApp" (secundario). Animación de entrada con framer-motion.
2. **TrustBar** — Franja turquesa. 3 columnas con íconos lucide-react: "Desde 1980 · 44 años de tradición" / "Pedidos anticipados por WhatsApp" / "Abierto Lunes a Sábado 8am–7:30pm".
3. **FeaturedCakes** — Fondo oscuro `#1C1009`. Título "Nuestros Favoritos". Grid 2×3 de ProductCards. Scroll reveal con framer-motion.
4. **HomeCTA** — Fondo crema. Texto emotivo + botón WhatsApp grande.

### `/menu` Menú

1. **Header** de página con título y subtítulo.
2. **CategoryFilter** — 4 tabs/pills: Todos · Pasteles · Pays · Postres · Temporada. Estado local con `useState`, filtra sin navegación.
3. **Grid de ProductCards** — 3 columnas en desktop, 2 en tablet, 1 en mobile. Cada card: foto (next/image), nombre en script, precio chico/grande, botón "Pedir por WhatsApp" que abre `https://wa.me/5213111358437?text=Hola,%20quiero%20pedir%20[nombre]`.
4. Nota al pie: "Precios sujetos a cambio. Consulta disponibilidad."

### `/galeria` Galería

1. **Header** con título.
2. **GalleryGrid** — CSS columns (masonry nativo). Imágenes con `next/image`, `hover:scale-105` con framer-motion.
3. **Lightbox** — Modal con fondo oscuro, navegación anterior/siguiente, cerrar con Escape. Estado manejado con `useState` + `useEffect` para keydown.

### `/contacto` Contacto

1. **Hero pequeño** con título.
2. Layout 2 columnas en desktop (1 en mobile):
   - **Izquierda:** Mapa Google Maps embebido (`<iframe>` de Google Maps, dirección Roble 298).
   - **Derecha:** Cards con íconos lucide-react para: Dirección, Teléfono, WhatsApp, Horario, Facebook.
3. Botón CTA grande "Ordenar por WhatsApp".

---

## Componentes Compartidos

### `Navbar`
- Logo (svg/png) a la izquierda.
- Links: Inicio · Menú · Galería · Contacto.
- Botón "Pedir por WhatsApp" (rosa) a la derecha — visible en desktop.
- Menú hamburguesa en mobile con animación framer-motion.
- `sticky top-0 z-50` con fondo crema con sombra suave al hacer scroll.

### `Footer`
- Logo pequeño.
- Columnas: Navegación / Contacto / Horario.
- Redes sociales: ícono Facebook.
- Copyright "© 2025 Repostería Alma · Tepic, Nayarit".

### `WhatsAppFAB`
- Botón circular flotante esquina inferior derecha.
- Ícono WhatsApp (lucide-react o SVG propio) en verde `#25D366`.
- `position: fixed`, z-index alto.
- Tooltip "¡Ordena aquí!" en hover.
- Animación de pulso suave para llamar atención.

---

## Interacciones y Animaciones (framer-motion)

| Elemento | Animación |
|---|---|
| Hero texto/logo | Fade + slide-up al cargar |
| ProductCards | Fade-in en stagger al entrar en viewport |
| Navbar mobile | Slide-down al abrir menú |
| Galería imágenes | Scale + opacity al hover |
| Lightbox | Fade in/out |
| WhatsAppFAB | Pulse periódico |

---

## WhatsApp Links

Formato: `https://wa.me/5213111358437?text=Hola%2C%20me%20interesa%20pedir%20[producto]`

- Número WhatsApp: `+52 311 135-8437`
- Mensaje genérico desde FAB: "Hola, me gustaría hacer un pedido en Repostería Alma."
- Mensaje desde ProductCard: "Hola, me interesa pedir el [nombre del producto]."

---

## SEO y Metadata

Cada página tendrá `metadata` de Next.js con:
- `title`: "Repostería Alma · [Página] — Tepic, Nayarit"
- `description`: descripción específica por página
- `openGraph`: imagen del logo para compartir en redes
- `robots`: index, follow

---

## Restricciones y Decisiones

- **Sin base de datos:** El catálogo vive en `lib/products.ts` como datos estáticos. Para actualizar precios se edita ese archivo.
- **Sin e-commerce:** Todos los CTAs abren WhatsApp o tel:.
- **Imágenes:** Se copian de `/images/` a `/public/images/` y se sirven con `next/image` para optimización automática.
- **Google Maps:** Mapa embebido via `<iframe>` — no requiere API key.
- **Sin i18n:** Solo español.
