# Repostería Alma — Sitio Web

Sitio web estático para **Repostería Alma**, pastelería artesanal en Tepic, Nayarit, desde 1980.

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16 | Framework (App Router, `output: 'export'`) |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | v4 | Estilos y design tokens |
| framer-motion | latest | Animaciones (galería, menú móvil) |
| lucide-react | latest | Iconos |

Deploy: **Vercel** (static export vía `output: 'export'`)

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera /out estático
npm run lint
```

## Estructura del proyecto

```
app/
  layout.tsx          # Root layout — fuentes, metadata, JSON-LD, Navbar/Footer/FAB
  page.tsx            # Home: Hero, TrustBar, FeaturedCakes, HomeCTA
  menu/page.tsx       # Catálogo completo con filtro por categoría
  galeria/page.tsx    # Galería masonry con lightbox
  contacto/page.tsx   # Mapa + info de contacto

components/
  layout/             # Navbar, Footer
  home/               # Hero, TrustBar, FeaturedCakes, HomeCTA
  menu/               # CategoryFilter, ProductCard
  galeria/            # GalleryGrid, Lightbox
  contacto/           # ContactInfo
  shared/             # WhatsAppFAB, CurrentYear

lib/
  products.ts         # Catálogo (24 productos), tipos, helpers de precios y WA
  gallery.ts          # 31 imágenes de galería
  nav.ts              # Links de navegación compartidos

public/
  favicon.ico         # Multi-size (16/32/48px)
  apple-touch-icon.jpg
  manifest.json       # Web App Manifest (PWA Android)
  sitemap.xml
  robots.txt
  images/             # Imágenes del negocio (NO versionadas en git)
```

## Design system

Colores definidos en `app/globals.css` como tokens de Tailwind v4:

| Token | Hex | Uso |
|---|---|---|
| `turquesa` | `#29ABE2` | Primario, botones, links activos |
| `rosa` | `#F06EB5` | Secundario, nombres de productos |
| `crema` | `#FAF7F2` | Fondo claro, texto sobre oscuro |
| `oscuro` | `#1C1009` | Fondo oscuro, secciones principales |
| `texto` | `#1A1A1A` | Texto general |
| `whatsapp` | `#25D366` | Botones de WhatsApp |

Fuentes (Google Fonts):
- **Playfair Display** → `var(--font-playfair)` / `.font-playfair` → títulos
- **Dancing Script** → `var(--font-dancing)` / `.font-dancing` → nombres de pasteles
- **Inter** → `var(--font-inter)` → texto general

## Ramas

```
main        → producción (Vercel auto-deploy)
develop     → integración antes de release
feature/*   → nuevas funcionalidades
fix/*       → correcciones
```

Flujo: `fix/* | feature/*` → PR → `develop` → PR → `main`

## SEO

- JSON-LD `Bakery` schema en `app/layout.tsx`
- Metadata + Open Graph + Twitter Cards por página
- `sitemap.xml` y `robots.txt` en `/public`
- `metadataBase`: `https://pasteleria-alma.vercel.app`

## Negocio

**Repostería Alma** · Tepic, Nayarit
Calle Roble #298, Col. San Juan (entre Pino y Capomo)
Tel: (311) 210-8077 · WhatsApp: (311) 135-8437
Lunes–Sábado 8:00am–7:30pm · [facebook.com/pasteleriaalmatepic](https://www.facebook.com/pasteleriaalmatepic)
