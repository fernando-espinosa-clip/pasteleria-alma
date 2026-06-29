# Sitio Web Pastelería Alma — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sitio web estático de 4 páginas para Repostería Alma (Tepic, Nayarit) — informativo, sin e-commerce, deploy en Vercel.

**Architecture:** Next.js 15 App Router con `output: 'export'`. Datos del catálogo en `lib/products.ts` (estáticos). Todos los CTAs abren WhatsApp o `tel:`. Google Maps via `<iframe>`.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), framer-motion 11, embla-carousel-react 8, lucide-react, next/font/google.

## Global Constraints

- Idioma: Solo español, sin i18n
- Sin e-commerce, sin API routes, sin base de datos
- WhatsApp: `wa.me/5213111358437` (número: +52 311 135-8437)
- Teléfono: `tel:+523112108077`
- Colores: turquesa `#29ABE2`, rosa `#F06EB5`, crema `#FAF7F2`, oscuro `#1C1009`, texto `#1A1A1A`
- Fuentes Google: Playfair Display (títulos), Dancing Script (nombres productos), Inter (cuerpo)
- `images: { unoptimized: true }` en next.config.ts (requerido para static export)
- Commits en español, sin "Co-authored-by"
- Framer-motion requiere `'use client'` en cada componente animado

---

### Task 1: Inicialización del Proyecto y Configuración

**Files:**
- Create: `package.json` (via create-next-app)
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `app/globals.css`
- Create: `tsconfig.json` (via create-next-app)
- Create: `.gitignore` (via create-next-app)

**Interfaces:**
- Produces: proyecto Next.js funcional con Tailwind v4 y variables CSS de marca disponibles globalmente

- [ ] **Step 1: Inicializar proyecto Next.js**

```bash
npx create-next-app@latest . --typescript --no-tailwind --eslint --app --no-src-dir --import-alias "@/*" --no-git --skip-install
```

Si pregunta "The directory contains files..." → responder `y` para continuar.

- [ ] **Step 2: Instalar dependencias**

```bash
npm install
npm install framer-motion embla-carousel-react lucide-react
npm install tailwindcss @tailwindcss/postcss
```

- [ ] **Step 3: Reemplazar `postcss.config.mjs`**

```js
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
export default config
```

- [ ] **Step 4: Reemplazar `next.config.ts`**

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

- [ ] **Step 5: Reemplazar `app/globals.css`**

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-turquesa: #29ABE2;
  --color-rosa: #F06EB5;
  --color-crema: #FAF7F2;
  --color-oscuro: #1C1009;
  --color-texto: #1A1A1A;
  --color-whatsapp: #25D366;
}

body {
  background-color: #FAF7F2;
  color: #1A1A1A;
}
```

- [ ] **Step 6: Verificar que el proyecto compila**

```bash
npm run build
```

Esperado: `Build: succeeded` con 0 errores TypeScript.

- [ ] **Step 7: Copiar imágenes a `/public`**

```bash
cp -r images/logo public/images/logo
cp -r images/pasteles public/images/pasteles
cp -r images/promos public/images/promos
cp -r images/decorados public/images/decorados
cp -r images/otros public/images/otros
```

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json next.config.ts postcss.config.mjs tsconfig.json .gitignore .eslintrc.json app/globals.css public/
git commit -m "feat: inicializar proyecto Next.js 15 con Tailwind v4"
```

---

### Task 2: Data Layer — Catálogo de Productos

**Files:**
- Create: `lib/products.ts`

**Interfaces:**
- Produces:
  - `type Category = 'pasteles' | 'pays' | 'postres' | 'temporada'`
  - `type Product = { id, name, category, priceSmall?, priceLarge?, priceSingle?, servingsSmall?, servingsLarge?, image, featured? }`
  - `export const products: Product[]`
  - `export const CATEGORIES: { value: Category | 'todos'; label: string }[]`
  - `export function waLink(productName: string): string`
  - `export const WA_GENERIC: string`
  - `export const TEL: string`

- [ ] **Step 1: Crear `lib/products.ts`**

```ts
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
```

- [ ] **Step 2: Verificar tipos**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add lib/products.ts
git commit -m "feat: agregar catálogo de productos y helpers de WhatsApp"
```

---

### Task 3: Componentes Compartidos

**Files:**
- Create: `components/shared/WhatsAppFAB.tsx`
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `WA_GENERIC`, `TEL` de `lib/products.ts`; `next/link`, `next/image`, `lucide-react`, `framer-motion`
- Produces: `<WhatsAppFAB />`, `<Navbar />`, `<Footer />` — componentes de cliente listos para el layout

- [ ] **Step 1: Crear `components/shared/WhatsAppFAB.tsx`**

```tsx
// components/shared/WhatsAppFAB.tsx
'use client'
import { motion } from 'framer-motion'
import { WA_GENERIC } from '@/lib/products'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={WA_GENERIC}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ordenar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">¡Ordena aquí!</span>
    </motion.a>
  )
}
```

- [ ] **Step 2: Crear `components/layout/Navbar.tsx`**

```tsx
// components/layout/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { WA_GENERIC } from '@/lib/products'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/menu', label: 'Menú' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow duration-300 bg-crema ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/299313316_481075924022133_5916712976143065516_n.jpg"
            alt="Repostería Alma"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <span className="hidden text-lg font-semibold text-turquesa sm:block" style={{ fontFamily: 'serif' }}>
            Repostería Alma
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-turquesa ${
                pathname === l.href ? 'text-turquesa' : 'text-texto'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rosa px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Pedir por WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 bg-crema px-4 pb-4 md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-texto hover:text-turquesa"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WA_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-full bg-rosa px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Pedir por WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
```

- [ ] **Step 3: Crear `components/layout/Footer.tsx`**

```tsx
// components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-oscuro text-crema">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Marca */}
          <div>
            <Image
              src="/images/logo/299313316_481075924022133_5916712976143065516_n.jpg"
              alt="Repostería Alma"
              width={64}
              height={64}
              className="mb-3 rounded-full"
            />
            <p className="text-sm leading-relaxed text-crema/70">
              Repostería fina artesanal desde 1980 en Tepic, Nayarit.
              Hecha con amor y los mejores ingredientes.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-turquesa">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-crema/70">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/menu', label: 'Menú' },
                { href: '/galeria', label: 'Galería' },
                { href: '/contacto', label: 'Contacto' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-turquesa transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-turquesa">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-crema/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-rosa" />
                <span>Calle Roble #298, Col. San Juan<br />(entre Pino y Capomo), Tepic, Nayarit</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-rosa" />
                <a href="tel:+523112108077" className="hover:text-turquesa">(311) 210-8077</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-rosa" />
                <span>Lun–Sáb 8:00am – 7:30pm<br />Dom horario diferido</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} className="shrink-0 text-rosa" />
                <a
                  href="https://www.facebook.com/pasteleriaalmatepic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-turquesa"
                >
                  /pasteleriaalmatepic
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-crema/40">
          © {new Date().getFullYear()} Repostería Alma · Tepic, Nayarit
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Verificar tipos**

```bash
npx tsc --noEmit
```

Esperado: sin errores.

- [ ] **Step 5: Commit**

```bash
git add components/
git commit -m "feat: agregar Navbar, Footer y WhatsAppFAB"
```

---

### Task 4: Root Layout

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `Navbar`, `Footer`, `WhatsAppFAB`; fuentes Google via `next/font/google`
- Produces: layout compartido aplicado a todas las páginas

- [ ] **Step 1: Reemplazar `app/layout.tsx`**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/shared/WhatsAppFAB'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Repostería Alma · Tepic, Nayarit',
  description:
    'Repostería fina artesanal desde 1980 en Tepic, Nayarit. Pasteles, pays y postres hechos con amor. Pedidos al (311) 210-8077.',
  openGraph: {
    title: 'Repostería Alma · Tepic, Nayarit',
    description: 'Pasteles y postres artesanales desde 1980.',
    images: ['/images/logo/299313316_481075924022133_5916712976143065516_n.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}
    >
      <body className="font-[var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Agregar variables de fuente en `globals.css`**

Añadir al final de `app/globals.css`:

```css
h1, h2, h3 {
  font-family: var(--font-playfair), serif;
}
```

- [ ] **Step 3: Verificar build**

```bash
npm run dev
```

Abrir `http://localhost:3000` — debe mostrar Navbar, contenido vacío y Footer sin errores de consola.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: configurar root layout con fuentes y componentes globales"
```

---

### Task 5: Home Page

**Files:**
- Create: `components/home/Hero.tsx`
- Create: `components/home/TrustBar.tsx`
- Create: `components/home/FeaturedCakes.tsx`
- Create: `components/home/HomeCTA.tsx`
- Create: `components/menu/ProductCard.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `products`, `waLink`, `formatPrice` de `lib/products.ts`; `next/image`, `next/link`, `framer-motion`, `lucide-react`
- Produces: `<ProductCard product={Product} />` (reutilizado también en Task 6); página `/` completa

- [ ] **Step 1: Crear `components/menu/ProductCard.tsx`**

```tsx
// components/menu/ProductCard.tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { type Product, waLink, formatPrice } from '@/lib/products'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  const { name, priceSmall, priceLarge, priceSingle, servingsSmall, servingsLarge, image } = product

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-oscuro text-crema shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Foto */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3
          className="mb-2 text-xl text-rosa"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          {name}
        </h3>

        {/* Precios */}
        <div className="mb-4 space-y-1 text-sm">
          {priceSingle ? (
            <p>
              <span className="text-crema/60">Precio: </span>
              <span className="font-semibold text-turquesa">{formatPrice(priceSingle)}</span>
              {servingsLarge && <span className="text-crema/50"> · {servingsLarge} reb.</span>}
            </p>
          ) : (
            <>
              {priceSmall && (
                <p>
                  <span className="text-crema/60">Chico: </span>
                  <span className="font-semibold text-turquesa">{formatPrice(priceSmall)}</span>
                  {servingsSmall && <span className="text-crema/50"> · {servingsSmall} reb.</span>}
                </p>
              )}
              {priceLarge && (
                <p>
                  <span className="text-crema/60">Grande: </span>
                  <span className="font-semibold text-turquesa">{formatPrice(priceLarge)}</span>
                  {servingsLarge && <span className="text-crema/50"> · {servingsLarge} reb.</span>}
                </p>
              )}
            </>
          )}
        </div>

        {/* CTA */}
        <a
          href={waLink(name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-rosa py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle size={16} />
          Pedir por WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 2: Crear `components/home/Hero.tsx`**

```tsx
// components/home/Hero.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WA_GENERIC } from '@/lib/products'

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/promos/688839625_1552290140234034_3182341581577032379_n.jpg"
        alt="Pastelería Alma"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-oscuro/70" />

      {/* Contenido */}
      <div className="relative z-10 px-4 text-center text-crema">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/logo/299313316_481075924022133_5916712976143065516_n.jpg"
            alt="Logo Repostería Alma"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full border-4 border-crema/30"
          />
        </motion.div>

        <motion.h1
          className="mb-3 text-5xl font-bold text-crema md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Repostería Alma
        </motion.h1>

        <motion.p
          className="mb-2 text-lg text-turquesa"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Repostería Fina · Desde 1980
        </motion.p>

        <motion.p
          className="mb-8 text-base text-crema/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Los mejores recuerdos siempre saben a pastel
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Link
            href="/menu"
            className="rounded-full bg-turquesa px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ver Menú
          </Link>
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-rosa px-8 py-3 font-semibold text-crema transition-colors hover:bg-rosa"
          >
            <MessageCircle size={18} />
            Ordenar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Crear `components/home/TrustBar.tsx`**

```tsx
// components/home/TrustBar.tsx
import { Award, MessageCircle, Clock } from 'lucide-react'

const items = [
  {
    icon: Award,
    title: 'Desde 1980',
    desc: '44 años de tradición en Tepic',
  },
  {
    icon: MessageCircle,
    title: 'Pedidos por WhatsApp',
    desc: 'Anticipados al (311) 135-8437',
  },
  {
    icon: Clock,
    title: 'Abiertos Lun–Sáb',
    desc: '8:00 am – 7:30 pm',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-turquesa py-10 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon size={32} className="mt-1 shrink-0" />
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-white/80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Crear `components/home/FeaturedCakes.tsx`**

```tsx
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
```

- [ ] **Step 5: Crear `components/home/HomeCTA.tsx`**

```tsx
// components/home/HomeCTA.tsx
import { MessageCircle, Phone } from 'lucide-react'
import { WA_GENERIC, TEL } from '@/lib/products'

export default function HomeCTA() {
  return (
    <section className="bg-crema py-20 text-center">
      <div className="mx-auto max-w-2xl px-4">
        <h2
          className="mb-4 text-4xl text-texto"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          ¿Listo para endulzar tu día?
        </h2>
        <p className="mb-8 text-texto/60">
          Haz tu pedido con anticipación y asegura tu pastel favorito.
          Pregunte por existencias disponibles.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={18} />
            Ordenar por WhatsApp
          </a>
          <a
            href={TEL}
            className="flex items-center gap-2 rounded-full border-2 border-turquesa px-8 py-3 font-semibold text-turquesa transition-colors hover:bg-turquesa hover:text-white"
          >
            <Phone size={18} />
            Llamar: (311) 210-8077
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Reemplazar `app/page.tsx`**

```tsx
// app/page.tsx
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import FeaturedCakes from '@/components/home/FeaturedCakes'
import HomeCTA from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedCakes />
      <HomeCTA />
    </>
  )
}
```

- [ ] **Step 7: Verificar build**

```bash
npm run build && npm run start
```

Abrir `http://localhost:3000`. Verificar: Hero con imagen y botones, franja turquesa, 6 pasteles destacados, CTA final.

- [ ] **Step 8: Commit**

```bash
git add components/home/ components/menu/ProductCard.tsx app/page.tsx
git commit -m "feat: implementar Home page con Hero, TrustBar, FeaturedCakes y HomeCTA"
```

---

### Task 6: Página Menú (`/menu`)

**Files:**
- Create: `components/menu/CategoryFilter.tsx`
- Create: `app/menu/page.tsx`

**Interfaces:**
- Consumes: `products`, `CATEGORIES`, `type Category` de `lib/products.ts`; `ProductCard` de Task 5
- Produces: página `/menu` con filtro funcional por categoría

- [ ] **Step 1: Crear `components/menu/CategoryFilter.tsx`**

```tsx
// components/menu/CategoryFilter.tsx
'use client'
import { useState } from 'react'
import { products, CATEGORIES, type Category } from '@/lib/products'
import ProductCard from './ProductCard'

export default function CategoryFilter() {
  const [active, setActive] = useState<Category | 'todos'>('todos')

  const filtered = active === 'todos'
    ? products
    : products.filter((p) => p.category === active)

  return (
    <div>
      {/* Pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
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
```

- [ ] **Step 2: Crear `app/menu/page.tsx`**

```tsx
// app/menu/page.tsx
import type { Metadata } from 'next'
import CategoryFilter from '@/components/menu/CategoryFilter'

export const metadata: Metadata = {
  title: 'Menú · Repostería Alma — Tepic, Nayarit',
  description:
    'Catálogo completo de pasteles, pays y postres de Repostería Alma. Pasteles artesanales con precios en Tepic, Nayarit.',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-oscuro">
      {/* Header */}
      <div className="bg-oscuro py-16 text-center text-crema">
        <h1
          className="mb-3 text-5xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Nuestro Menú
        </h1>
        <p className="text-crema/60">
          Pasteles, pays y postres artesanales hechos con amor
        </p>
      </div>

      {/* Catálogo */}
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <CategoryFilter />
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Verificar**

```bash
npm run dev
```

Abrir `http://localhost:3000/menu`. Verificar: filtros cambian la lista, cada card muestra precio y botón de WhatsApp con el nombre del producto en el mensaje.

- [ ] **Step 4: Commit**

```bash
git add components/menu/CategoryFilter.tsx app/menu/
git commit -m "feat: implementar página Menú con filtros por categoría"
```

---

### Task 7: Página Galería (`/galeria`)

**Files:**
- Create: `components/galeria/GalleryGrid.tsx`
- Create: `components/galeria/Lightbox.tsx`
- Create: `app/galeria/page.tsx`

**Interfaces:**
- Consumes: `next/image`, `framer-motion`, `lucide-react`
- Produces: página `/galeria` con grid masonry y lightbox funcional

- [ ] **Step 1: Crear lista de imágenes en `lib/gallery.ts`**

```ts
// lib/gallery.ts
export type GalleryImage = {
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  // Pasteles
  { src: '/images/pasteles/492015302_1217812753681776_6012510888607196195_n.jpg', alt: 'Pay de Guayaba' },
  { src: '/images/pasteles/492362338_1217813803681671_7516248724947940818_n.jpg', alt: 'Pay de Fresa' },
  { src: '/images/pasteles/492494894_1219592886837096_2788502500663742586_n.jpg', alt: 'Pastel Cajetoso' },
  { src: '/images/pasteles/492802878_1219592816837103_3831510740559207728_n.jpg', alt: 'Pastel de Chocolate' },
  { src: '/images/pasteles/493289371_1219592633503788_1924566334862078720_n.jpg', alt: 'Rebanada de pastel' },
  { src: '/images/pasteles/596414401_1421474223315627_2321950190764703717_n.jpg', alt: 'Pastel Napolitano' },
  { src: '/images/pasteles/596720815_1421474449982271_4300480181510148874_n.jpg', alt: 'Pastel de temporada' },
  { src: '/images/pasteles/596812690_1421474219982294_4555604724940355085_n.jpg', alt: 'Pastel artesanal' },
  { src: '/images/pasteles/597207869_1421474176648965_7651194231580024369_n.jpg', alt: 'Pastel Alemán' },
  { src: '/images/pasteles/597242972_1421474129982303_2133308616620734930_n.jpg', alt: 'Pastel Tres Leches' },
  { src: '/images/pasteles/597564372_1421474399982276_7733080462358370885_n.jpg', alt: 'Pastel Zanahoria' },
  { src: '/images/pasteles/597650813_1421474229982293_2654290704358748486_n.jpg', alt: 'Pastel artesanal' },
  { src: '/images/pasteles/598039097_1421474076648975_4228461170551919998_n.jpg', alt: 'Pastel Caramelo' },
  { src: '/images/pasteles/598678718_1421474453315604_7765476950206635319_n.jpg', alt: 'Pastel Carlota' },
  { src: '/images/pasteles/605551223_1437952545001128_7319051782652227913_n.jpg', alt: 'Pastel Snickers' },
  { src: '/images/pasteles/605604877_1437952698334446_1038422477920564034_n.jpg', alt: 'Pastel Piña Colada' },
  { src: '/images/pasteles/605683384_1437952661667783_5625751010052767569_n.jpg', alt: 'Pay de Manzana' },
  { src: '/images/pasteles/605722458_1437952521667797_3265221220197124942_n.jpg', alt: 'Pastel Ambrosio' },
  { src: '/images/pasteles/605864346_1437952691667780_6584188923336331017_n.jpg', alt: 'Pastel Cheesecake' },
  { src: '/images/pasteles/606875229_1437952671667782_4304705994570956892_n.jpg', alt: 'Pastel Moka' },
  { src: '/images/pasteles/608421708_1437952541667795_6296662245879781618_n.jpg', alt: 'Pastel Bavaria' },
  // Decorados
  { src: '/images/decorados/52920505_2528079213933070_7489235556090511360_n.jpg', alt: 'Pastel decorado de mariposas' },
  { src: '/images/decorados/555961221_31705089652471972_846651439334313085_n.jpg', alt: 'Pastel decorado' },
  { src: '/images/decorados/556711481_31706248235689447_7957448649762189582_n.jpg', alt: 'Pastel decorado' },
  { src: '/images/decorados/557641815_31706201095694161_6171007235438520443_n.jpg', alt: 'Pastel decorado' },
  { src: '/images/decorados/557719960_31836522702661999_5958462166821252571_n.jpg', alt: 'Pastel decorado' },
  { src: '/images/decorados/597899772_32941825398798385_674937036298324321_n.jpg', alt: 'Pastel decorado' },
  { src: '/images/decorados/598689154_32945002621813996_3695285883949834201_n.jpg', alt: 'Pastel decorado' },
  { src: '/images/decorados/599898614_32945002651813993_2405539024806708400_n.jpg', alt: 'Pastel decorado' },
  // Otros
  { src: '/images/otros/492694639_1217812717015113_4493845530138638881_n.jpg', alt: 'Choux' },
  { src: '/images/otros/493217620_1219592836837101_2102714275171124824_n.jpg', alt: 'Postre artesanal' },
  { src: '/images/otros/607443764_1437952515001131_1899683024089782297_n.jpg', alt: 'Postre especial' },
]
```

- [ ] **Step 2: Crear `components/galeria/Lightbox.tsx`**

```tsx
// components/galeria/Lightbox.tsx
'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/lib/gallery'

type Props = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Imagen */}
          <div
            className="relative max-h-[85vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={900}
              height={700}
              className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <p className="mt-2 text-center text-sm text-white/60">{images[index].alt}</p>
          </div>

          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {/* Anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Siguiente */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 3: Crear `components/galeria/GalleryGrid.tsx`**

```tsx
// components/galeria/GalleryGrid.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryImages } from '@/lib/gallery'
import Lightbox from './Lightbox'

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)

  const prev = () =>
    setSelected((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null))

  const next = () =>
    setSelected((i) => (i !== null ? (i + 1) % galleryImages.length : null))

  return (
    <>
      <div
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        style={{ columnFill: 'balance' }}
      >
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.src}
            className="mb-4 block w-full overflow-hidden rounded-xl"
            onClick={() => setSelected(i)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={450}
              className="w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        index={selected}
        onClose={() => setSelected(null)}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
```

- [ ] **Step 4: Crear `app/galeria/page.tsx`**

```tsx
// app/galeria/page.tsx
import type { Metadata } from 'next'
import GalleryGrid from '@/components/galeria/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galería · Repostería Alma — Tepic, Nayarit',
  description:
    'Galería de pasteles y postres artesanales de Repostería Alma. Pasteles decorados, pays y más.',
}

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-oscuro py-16 text-center text-crema">
        <h1
          className="mb-3 text-5xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Galería
        </h1>
        <p className="text-crema/60">
          Una probadita visual de lo que hacemos con amor
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <GalleryGrid />
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Verificar**

```bash
npm run dev
```

Abrir `http://localhost:3000/galeria`. Verificar: grid masonry visible, click en imagen abre lightbox, teclas ← → y Escape funcionan.

- [ ] **Step 6: Commit**

```bash
git add lib/gallery.ts components/galeria/ app/galeria/
git commit -m "feat: implementar página Galería con grid masonry y lightbox"
```

---

### Task 8: Página Contacto (`/contacto`)

**Files:**
- Create: `components/contacto/ContactInfo.tsx`
- Create: `app/contacto/page.tsx`

**Interfaces:**
- Consumes: `WA_GENERIC`, `TEL` de `lib/products.ts`; `lucide-react`
- Produces: página `/contacto` con mapa, datos y botón WhatsApp

- [ ] **Step 1: Crear `components/contacto/ContactInfo.tsx`**

```tsx
// components/contacto/ContactInfo.tsx
import { MapPin, Phone, Clock, Facebook, MessageCircle } from 'lucide-react'
import { WA_GENERIC, TEL } from '@/lib/products'

const details = [
  {
    icon: MapPin,
    label: 'Dirección',
    content: 'Calle Roble #298, Col. San Juan\n(entre Pino y Capomo)\nTepic, Nayarit',
    href: 'https://maps.google.com/maps?q=Roble+%23+298%2C+Tepic%2C+Mexico',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    content: '(311) 210-8077',
    href: TEL,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    content: '(311) 135-8437',
    href: WA_GENERIC,
  },
  {
    icon: Clock,
    label: 'Horario',
    content: 'Lunes a Sábado: 8:00 am – 7:30 pm\nDomingos: horario diferido\n(llamar antes de ir)',
    href: null,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    content: '/pasteleriaalmatepic',
    href: 'https://www.facebook.com/pasteleriaalmatepic',
  },
]

export default function ContactInfo() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Mapa */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.123456789!2d-104.8956!3d21.5045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMwJzE2LjIiTiAxMDTCsDUzJzQ0LjIiVw!5e0!3m2!1ses!2smx!4v1234567890!5m2!1ses!2smx&q=Roble+298,+Colonia+San+Juan,+Tepic,+Nayarit"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Repostería Alma"
          />
        </div>

        {/* Datos */}
        <div className="space-y-6">
          <h2
            className="text-3xl text-texto"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Encuéntranos
          </h2>

          {details.map(({ icon: Icon, label, content, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-turquesa/10">
                <Icon size={20} className="text-turquesa" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-texto/40">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="whitespace-pre-line text-sm text-texto hover:text-turquesa"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="whitespace-pre-line text-sm text-texto">{content}</p>
                )}
              </div>
            </div>
          ))}

          {/* CTA */}
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={20} />
            Ordenar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Crear `app/contacto/page.tsx`**

```tsx
// app/contacto/page.tsx
import type { Metadata } from 'next'
import ContactInfo from '@/components/contacto/ContactInfo'

export const metadata: Metadata = {
  title: 'Contacto · Repostería Alma — Tepic, Nayarit',
  description:
    'Visítanos en Calle Roble 298, Col. San Juan, Tepic. Pedidos al (311) 210-8077 o WhatsApp (311) 135-8437.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-crema">
      <div className="bg-oscuro py-16 text-center text-crema">
        <h1
          className="mb-3 text-5xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Contacto
        </h1>
        <p className="text-crema/60">
          Estamos en Tepic, Nayarit · Pedidos anticipados bienvenidos
        </p>
      </div>
      <ContactInfo />
    </div>
  )
}
```

- [ ] **Step 3: Verificar**

```bash
npm run dev
```

Abrir `http://localhost:3000/contacto`. Verificar: mapa visible, todos los datos de contacto correctos, botón WhatsApp abre el chat.

- [ ] **Step 4: Commit**

```bash
git add components/contacto/ app/contacto/
git commit -m "feat: implementar página Contacto con mapa y datos de contacto"
```

---

### Task 9: Build Final y Configuración Vercel

**Files:**
- Create: `public/images/` (verificar que existen desde Task 1)
- Create: `public/favicon.ico` (copiar logo como favicon)
- Verify: `next.config.ts` tiene `output: 'export'`

**Interfaces:**
- Produces: build estático listo en `/out`, deploy funcional en Vercel

- [ ] **Step 1: Verificar build estático completo**

```bash
npm run build
```

Esperado: carpeta `out/` generada sin errores. Revisar que existan `out/index.html`, `out/menu/index.html`, `out/galeria/index.html`, `out/contacto/index.html`.

- [ ] **Step 2: Probar el build estático localmente**

```bash
npx serve out
```

Abrir `http://localhost:3000`. Navegar por todas las páginas y verificar que las imágenes cargan, los links funcionan y los botones de WhatsApp abren la URL correcta.

- [ ] **Step 3: Agregar favicon**

```bash
cp public/images/logo/299313316_481075924022133_5916712976143065516_n.jpg public/favicon.jpg
```

Luego en `app/layout.tsx`, agregar dentro del objeto `metadata`:

```ts
icons: {
  icon: '/favicon.jpg',
},
```

- [ ] **Step 4: Agregar `out/` al `.gitignore`**

Abrir `.gitignore` y verificar que incluye la línea:

```
/out
```

Si no existe, agregarla.

- [ ] **Step 5: Commit final**

```bash
git add .
git commit -m "feat: sitio web completo Repostería Alma listo para deploy"
```

- [ ] **Step 6: Deploy en Vercel**

```bash
npx vercel --prod
```

O conectar el repositorio en vercel.com → Import Project → seleccionar el repo → Framework: Next.js → Deploy.

Vercel detecta automáticamente Next.js con `output: 'export'` y despliega correctamente.

- [ ] **Step 7: Verificar deploy**

Abrir la URL de Vercel. Verificar en todas las páginas:
- Imágenes cargan correctamente
- Links de WhatsApp abren `wa.me/5213111358437`
- Teléfono abre marcador en móvil
- Mapa de Google Maps visible
- Sitio responsive en mobile (375px), tablet (768px) y desktop (1280px)
