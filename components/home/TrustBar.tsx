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
