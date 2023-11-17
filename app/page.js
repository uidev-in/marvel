import Features from '@/components/Features/Features'
import Hero from '@/components/Hero'
import Showcase from '@/components/Showcase'
import { features } from '@/constant/feature.constatnt'

export default function Home() {
  return (
  <>
    <Hero/>
    <Features data={features}/>
    <Showcase/>
  </>
  )
}
