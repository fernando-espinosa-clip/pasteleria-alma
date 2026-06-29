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
            className="flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
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
