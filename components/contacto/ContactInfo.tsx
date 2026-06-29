// components/contacto/ContactInfo.tsx
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react'
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
    icon: ExternalLink,
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
