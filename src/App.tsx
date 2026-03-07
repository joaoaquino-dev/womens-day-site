import { Petals } from './components/Petals'
import { HeroSection } from './components/HeroSection'
import { MessageSection } from './components/MessageSection'
import { GallerySection } from './components/GallerySection'
import { CounterSection } from './components/CounterSection'

export default function App() {
  return (
    <>
      <Petals />
      <main>
        <HeroSection />
        <MessageSection />
        <GallerySection />
        <CounterSection />
      </main>
    </>
  )
}
