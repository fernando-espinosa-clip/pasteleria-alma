// components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Globe } from 'lucide-react'

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
                <Globe size={16} className="shrink-0 text-rosa" />
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
