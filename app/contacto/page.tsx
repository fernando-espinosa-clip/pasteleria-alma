// app/contacto/page.tsx
import type { Metadata } from 'next'
import ContactInfo from '@/components/contacto/ContactInfo'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Visítanos en Calle Roble #298, Col. San Juan, Tepic, Nayarit. Pedidos al (311) 210-8077 o WhatsApp (311) 135-8437. Lunes a Sábado 8:00 am – 7:30 pm.',
  openGraph: {
    title: 'Contacto · Repostería Alma',
    description: 'Calle Roble #298, Col. San Juan, Tepic. Lunes a Sábado 8:00 am – 7:30 pm.',
    url: 'https://pasteleria-alma.vercel.app/contacto',
    images: [{ url: '/images/logo/299313316_481075924022133_5916712976143065516_n.jpg', alt: 'Repostería Alma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto · Repostería Alma',
    description: 'Calle Roble #298, Col. San Juan, Tepic. Lunes a Sábado 8:00 am – 7:30 pm.',
    images: ['/images/logo/299313316_481075924022133_5916712976143065516_n.jpg'],
  },
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
