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
