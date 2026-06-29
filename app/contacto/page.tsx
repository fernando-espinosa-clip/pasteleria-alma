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
