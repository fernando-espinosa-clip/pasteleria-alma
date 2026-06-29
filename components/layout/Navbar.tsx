// components/layout/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { WA_GENERIC } from '@/lib/products'
import { NAV_LINKS } from '@/lib/nav'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
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
          <span className="font-playfair hidden text-lg font-semibold text-turquesa sm:block">
            Repostería Alma
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
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
          aria-label="Menú de navegación"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 bg-crema px-4 pb-4 md:hidden"
          >
            {NAV_LINKS.map((l) => (
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
