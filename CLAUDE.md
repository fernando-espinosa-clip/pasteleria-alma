# Instrucciones para Claude Code — Repostería Alma

## Commits

- **Siempre en español**
- **Sin** `Co-authored-by: Claude` ni ninguna atribución de IA
- Formato: `tipo: descripción breve en español`
- Tipos: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`

## Ramas

```
main      → producción (no pushear directo)
develop   → rama de integración
fix/*     → correcciones puntuales
feature/* → nuevas funcionalidades
```

Flujo obligatorio: crear rama desde `develop`, PR a `develop`, luego PR `develop → main`.

## Stack y convenciones

- **Next.js 16** App Router con `output: 'export'` (sitio estático)
- **TypeScript** estricto — sin `any`
- **Tailwind v4** — usar tokens de color (`bg-turquesa`, `text-rosa`, etc.), nunca hex hardcoded
- **framer-motion** — solo en componentes con `'use client'`
- Componentes con estado o hooks del browser → `'use client'`
- Componentes sin estado → Server Components (sin la directiva)

## Archivos clave

| Archivo | Propósito |
|---|---|
| `lib/products.ts` | Fuente de verdad del catálogo. 24 productos, tipos, `waLink()`, `formatPrice()` |
| `lib/gallery.ts` | 31 imágenes para la galería |
| `lib/nav.ts` | Links de navegación — usar en Navbar Y Footer |
| `app/layout.tsx` | Root layout: fuentes, metadata global, JSON-LD Bakery, Navbar/Footer/FAB |
| `app/globals.css` | Tokens de color Tailwind v4, clases `.font-playfair`, `.font-dancing`, keyframe `fab-enter` |
| `public/manifest.json` | Web App Manifest para Android |
| `public/sitemap.xml` | Actualizar si se agregan páginas |

## Design tokens

```
bg-turquesa / text-turquesa   #29ABE2   primario
bg-rosa / text-rosa            #F06EB5   secundario
bg-crema / text-crema          #FAF7F2   fondo claro
bg-oscuro / text-oscuro        #1C1009   fondo oscuro
text-texto                     #1A1A1A   texto general
bg-whatsapp                    #25D366   botones WA (NO usar bg-[#25D366])
```

Fuentes:
```
.font-playfair   títulos y headings
.font-dancing    nombres de pasteles (h3 en ProductCard)
```

## Negocio

```
Nombre:     Repostería Alma
Dirección:  Calle Roble #298, Col. San Juan (entre Pino y Capomo), Tepic, Nayarit
Teléfono:   +52 311 210-8077  (TEL en lib/products.ts)
WhatsApp:   +52 311 135-8437  (WA_NUMBER en lib/products.ts)
Facebook:   https://www.facebook.com/pasteleriaalmatepic
Horario:    Lun–Sáb 8:00am–7:30pm · Dom horario diferido
Coords:     21.5045, -104.8956
URL prod:   https://pasteleria-alma.vercel.app
```

## Restricciones conocidas

- `images: { unoptimized: true }` en `next.config.ts` — necesario para `output: 'export'` en local. **Quitar esta línea al hacer deploy en Vercel** para activar optimización de imágenes WebP.
- Las imágenes del negocio están en `/public/images/` pero **NO se versionan en git** (están en `.gitignore`). Al clonar el repo hay que copiarlas manualmente o conectar el storage.
- `new Date().getFullYear()` en `Footer.tsx` usa `CurrentYear` (Client Component) para evitar congelado en build estático.

## Páginas existentes

| Ruta | Componente principal | Descripción |
|---|---|---|
| `/` | `app/page.tsx` | Hero, TrustBar, FeaturedCakes (6 destacados), HomeCTA |
| `/menu` | `app/menu/page.tsx` | Catálogo completo con filtro por categoría |
| `/galeria` | `app/galeria/page.tsx` | Galería masonry 31 fotos + lightbox, carga progresiva 12+N |
| `/contacto` | `app/contacto/page.tsx` | Mapa Google Maps + datos de contacto |

## Catálogo de productos

24 productos en `lib/products.ts`. Categorías: `pasteles` (15), `pays` (3), `postres` (4), `temporada` (3).

Los 6 productos `featured: true` aparecen en la sección Favoritos del Home:
`tres-leches`, `zanahoria`, `caramelo`, `chocolate`, `aleman`, `snickers`

Cada producto tiene:
- `priceSmall?` (10 reb) / `priceLarge?` (18 reb) / `priceSingle?`
- `description` — texto antojable en español, se muestra truncado con toggle "Ver más"

## SEO implementado

- JSON-LD `Bakery` schema en `app/layout.tsx` (nombre, dirección, horario, tel, geo, Facebook)
- `metadataBase`, `title template`, OG, Twitter cards en root layout
- Metadata específica por página en cada `page.tsx`
- `public/sitemap.xml` — actualizar si se agregan páginas
- `public/robots.txt`

## Lo que falta (pendiente)

- [ ] Quitar `unoptimized: true` de `next.config.ts` al hacer deploy en Vercel
- [ ] Registrar en Google Search Console y enviar sitemap
- [ ] Crear cuenta en Google Business Profile para aparecer en Maps
- [ ] Verificar que el embed del mapa apunta a la ubicación correcta (URL generada con dirección, no coordenadas hardcoded)
